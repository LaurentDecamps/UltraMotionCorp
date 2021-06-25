import {projetController} from "../controllers/projetController"

const endpoint = "projets"

export const setProjetRouting = (app) => {
  app.get(`/${endpoint}`, projetController.findAll)
  app.get(`/${endpoint}/:id`, projetController.findById)
  app.post(`/${endpoint}`, projetController.create)
  app.put(`/${endpoint}/:id`, projetController.update)
  app.delete(`/${endpoint}/:id`, projetController.delete)
}
