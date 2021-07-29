import { verifyToken } from "../config/auth.config"
import {evaluationController} from "../controllers/evaluationController"

const endpoint = "evaluations"

export const setEvaluationRouting = (app) => {
  app.get(`/${endpoint}`,  verifyToken, evaluationController.findAll)
  app.get(`/${endpoint}/:id`,  verifyToken, evaluationController.findById)
  app.get(`/${endpoint}/clients/:id`,  verifyToken, evaluationController.findByClientId)
  app.post(`/${endpoint}`,  verifyToken, evaluationController.create)
  app.put(`/${endpoint}/:id`,  verifyToken, evaluationController.update)
  app.delete(`/${endpoint}/:id`,  verifyToken, evaluationController.delete)
}
