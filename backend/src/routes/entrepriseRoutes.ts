import {entrepriseController} from "../controllers/entrepriseController"

const endpoint = "entreprises"

export const setEntrepriseRouting = (app) => {
  app.get(`/${endpoint}`, entrepriseController.findAll)
  app.get(`/${endpoint}/:id`, entrepriseController.findById)
  app.post(`/${endpoint}`, entrepriseController.create)
  app.patch(`/${endpoint}/:id`, entrepriseController.update)
  app.delete(`/${endpoint}/:id`, entrepriseController.delete)
}
