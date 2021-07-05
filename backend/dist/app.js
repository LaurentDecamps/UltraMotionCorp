"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_config_1 = require("./config/mongo.config");
const clientRoutes_1 = require("./routes/clientRoutes");
// import { setDevisRouting } from './routes/devisRoutes';
const entrepriseRoutes_1 = require("./routes/entrepriseRoutes");
const evaluationRoutes_1 = require("./routes/evaluationRoutes");
const prestationRoutes_1 = require("./routes/prestationRoutes");
// // import { setNotificationRouting } from './routes/notificationRoutes';
const projetRoutes_1 = require("./routes/projetRoutes");
const port = 8080;
var cors = require('cors');
const app = express_1.default();
app.use(cors());
app.use(express_1.default.json());
app.listen(port, () => {
    mongo_config_1.setMongoConnection();
    console.log(`Serveur listening on port : ${port}`);
});
clientRoutes_1.setClientRouting(app);
// setDevisRouting(app);
entrepriseRoutes_1.setEntrepriseRouting(app);
evaluationRoutes_1.setEvaluationRouting(app);
// setNotificationRouting(app);
prestationRoutes_1.setPrestationsRouting(app);
projetRoutes_1.setProjetRouting(app);
//# sourceMappingURL=app.js.map