import express from 'express';
import { setMongoConnection } from './config/mongo.config';
import { setClientRouting } from './routes/clientRoutes';
// import { setDevisRouting } from './routes/devisRoutes';
import { setEntrepriseRouting } from './routes/entrepriseRoutes';
import { setEvaluationRouting } from './routes/evaluationRoutes';
// import { setNotificationRouting } from './routes/notificationRoutes';
import { setPrestationRouting } from './routes/prestationRoutes';
import { setProjetRouting } from './routes/projetRoutes';

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
    setMongoConnection();
    console.log(`Serveur listening on port : ${port}`);
});

setClientRouting(app);
// setDevisRouting(app);
setEntrepriseRouting(app);
setEvaluationRouting(app);
// setNotificationRouting(app);
setPrestationRouting(app);
setProjetRouting(app);
