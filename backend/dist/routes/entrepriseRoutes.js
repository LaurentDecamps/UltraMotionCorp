"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEntrepriseRouting = void 0;
const entrepriseController_1 = require("../controllers/entrepriseController");
const endpoint = "entreprises";
const setEntrepriseRouting = (app) => {
    app.get(`/${endpoint}`, entrepriseController_1.entrepriseController.findAll);
    app.get(`/${endpoint}/:id`, entrepriseController_1.entrepriseController.findById);
    app.post(`/${endpoint}`, entrepriseController_1.entrepriseController.create);
    app.patch(`/${endpoint}/:id`, entrepriseController_1.entrepriseController.update);
    app.delete(`/${endpoint}/:id`, entrepriseController_1.entrepriseController.delete);
};
exports.setEntrepriseRouting = setEntrepriseRouting;
//# sourceMappingURL=entrepriseRoutes.js.map