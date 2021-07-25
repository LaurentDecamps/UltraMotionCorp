import { verifyToken } from "../config/auth.config";
import {projetController} from "../controllers/projetController";

const endpoint = "projets";

export const setProjetRouting = (app) => {
  app.get(`/${endpoint}`,  verifyToken, projetController.findAll);
  app.get(`/${endpoint}/:id`,  verifyToken, projetController.findById);
  app.post(`/${endpoint}`,  verifyToken, projetController.create);
  app.put(`/${endpoint}/:id`,  verifyToken, projetController.update);
  app.delete(`/${endpoint}/:id`,  verifyToken, projetController.delete);
}
