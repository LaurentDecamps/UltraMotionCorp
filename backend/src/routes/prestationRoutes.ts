import { verifyToken } from "../config/auth.config";
import { prestationController } from "../controllers/prestationController";

const endpoint = 'prestations';

export const setPrestationsRouting = (app) => {

  app.get(`/${endpoint}`,  verifyToken, prestationController.findAll);
  app.get(`/${endpoint}/:id`,  verifyToken, prestationController.findById);
  app.post(`/${endpoint}`,  verifyToken, prestationController.create);
  app.put(`/${endpoint}/:id`,  verifyToken, prestationController.update);
  app.delete(`/${endpoint}/:id`,  verifyToken, prestationController.delete);
};
