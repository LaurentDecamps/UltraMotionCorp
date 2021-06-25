import {evaluationController} from "../controllers/evaluationController"

const endpoint = "evaluations"

export const setEvaluationRouting = (app) => {
  app.get(`/${endpoint}`, evaluationController.findAll)
  app.get(`/${endpoint}/:id`, evaluationController.findById)
  app.post(`/${endpoint}`, evaluationController.create)
  app.put(`/${endpoint}/:id`, evaluationController.update)
  app.delete(`/${endpoint}/:id`, evaluationController.delete)
}
