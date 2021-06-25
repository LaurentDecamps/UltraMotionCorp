import {clientController} from "../controllers/clientController"

const endpoint = "clients"

export const setClientRouting = (app) => {
  app.get(`/${endpoint}`, clientController.findAll)
  app.get(`/${endpoint}/:id`, clientController.findById)
  app.post(`/${endpoint}`, clientController.create)
  app.put(`/${endpoint}/:id`, clientController.update)
  app.delete(`/${endpoint}/:id`, clientController.delete)
}
