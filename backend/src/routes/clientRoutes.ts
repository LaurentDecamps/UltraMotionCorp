import { verifyToken } from "../config/auth.config"
import {clientController} from "../controllers/clientController"

const endpoint = "clients"

export const setClientRouting = (app) => {
  app.get(`/${endpoint}`, verifyToken, clientController.findAll)
  app.get(`/${endpoint}/:id`, verifyToken, clientController.findById)
  app.post(`/${endpoint}`,  verifyToken, clientController.create)
  app.put(`/${endpoint}/:id`,  verifyToken, clientController.update)
  app.delete(`/${endpoint}/:id`,  verifyToken, clientController.delete)
}
