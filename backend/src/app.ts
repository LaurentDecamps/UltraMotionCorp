import express from 'express';
import { setMongoConnection } from './config/mongo.config';
import { setPrestationsRouting } from './routes/prestationRoutes';

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
    setMongoConnection();
    console.log(`Serveur listening on port : ${port}`);
});

setPrestationsRouting(app);
