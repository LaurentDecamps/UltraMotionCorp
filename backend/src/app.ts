import express from 'express';

import { setMongoConnection } from './config/mongo.config';
import { setClientRouting } from './routes/clientRoutes';
import { setDevisRouting } from './routes/devisRoutes';
import { setEntrepriseRouting } from './routes/entrepriseRoutes';
import { setEvaluationRouting } from './routes/evaluationRoutes';
import { setPrestationsRouting } from './routes/prestationRoutes';
import { setNotificationRouting } from './routes/notificationRoutes';
import { setProjetRouting } from './routes/projetRoutes';
import { setAuthRoutes } from './routes/authRoutes';

const port = 8080;

var cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.listen(port, () => {
    setMongoConnection();
    console.log(`Serveur listening on port : ${port}`);
});

setClientRouting(app);
setAuthRoutes(app);
setDevisRouting(app);
setEntrepriseRouting(app);
setEvaluationRouting(app);
setNotificationRouting(app);
setPrestationsRouting(app);
setProjetRouting(app);
