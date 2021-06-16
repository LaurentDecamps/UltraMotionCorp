const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://UMCBddAdmin:5R7B2njwlFXVgDFb@cluster0.fufsa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('ULTRAMOTIONCORP');
        const projetsCollection = db.collection('projets');
        app.use(bodyParser.urlencoded({ extended: true }));
        app.set('view engine', 'ejs');

        app.listen(3000, function () {
            console.log('listening on 3000');
        });

        app.get('/', (req, res) => {
            projetsCollection.find().toArray()
                .then((resultats) => {
                    res.render('index.ejs', { projets: resultats });
                })
                .catch(error => console.error());
            // res.render('index.ejs', {});
            // res.sendFile(__dirname + '/index.html');
        }
        );

        app.post('/projets', (req, res) => {
            projetsCollection.insertOne(req.body)
                .then(() => {
                    res.redirect('/');
                })
                .catch(error => console.error(error))
        });
    })
    .catch(error => console.error(error));

