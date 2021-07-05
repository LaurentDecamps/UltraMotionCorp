"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEvaluationRouting = void 0;
const evaluationController_1 = require("../controllers/evaluationController");
const endpoint = "evaluations";
const setEvaluationRouting = (app) => {
    app.get(`/${endpoint}`, evaluationController_1.evaluationController.findAll);
    app.get(`/${endpoint}/:id`, evaluationController_1.evaluationController.findById);
    app.post(`/${endpoint}`, evaluationController_1.evaluationController.create);
    app.put(`/${endpoint}/:id`, evaluationController_1.evaluationController.update);
    app.delete(`/${endpoint}/:id`, evaluationController_1.evaluationController.delete);
};
exports.setEvaluationRouting = setEvaluationRouting;
//# sourceMappingURL=evaluationRoutes.js.map