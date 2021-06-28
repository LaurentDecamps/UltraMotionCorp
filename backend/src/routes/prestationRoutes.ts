import { prestationController } from "../controllers/prestationController";

const endpoint = 'prestations';

export const setPrestationsRouting = (app) => {

  app.get(`/${endpoint}`, prestationController.findAll);

  app.get(`/${endpoint}/:id`, prestationController.findById);

  app.post(`/${endpoint}`, prestationController.create);

  app.put(`/${endpoint}/:id`, prestationController.update);

  app.delete(`/${endpoint}/:id`, prestationController.delete);
};
