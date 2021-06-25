import mongoose from "mongoose";

const chaineConnexionProd = 'mongodb+srv://UMCBddAdmin:5R7B2njwlFXVgDFb@cluster0.fufsa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const chaineConnexionTestLocal = 'mongodb://localhost:27017';

export const setMongoConnection = () => {
    mongoose.connect(chaineConnexionTestLocal, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Connecté à la base de données");
        }
    })
}
