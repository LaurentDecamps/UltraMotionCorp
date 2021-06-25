import { prestationController } from "../controllers/prestationController";

const endpoint = 'prestations';
export const setPrestationsRouting = (app) => {
  app.get(`/${endpoint}`, prestationController.findAll);
}
