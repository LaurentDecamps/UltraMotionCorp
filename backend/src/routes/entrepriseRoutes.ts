import { verifyToken } from "../config/auth.config"
import {entrepriseController} from "../controllers/entrepriseController"

const endpoint = "entreprises"

export const setEntrepriseRouting = (app) => {
  app.get(`/${endpoint}`,  verifyToken, entrepriseController.findAll)
  app.get(`/${endpoint}/:id`,  verifyToken, entrepriseController.findById)
  app.post(`/${endpoint}`,  verifyToken, entrepriseController.create)
  app.put(`/${endpoint}/:id`,  verifyToken, entrepriseController.update)
  app.delete(`/${endpoint}/:id`,  verifyToken, entrepriseController.delete)
}
