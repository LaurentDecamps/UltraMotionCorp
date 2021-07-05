"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProjetRouting = void 0;
const projetController_1 = require("../controllers/projetController");
const endpoint = "projets";
const setProjetRouting = (app) => {
    app.get(`/${endpoint}`, projetController_1.projetController.findAll);
    app.get(`/${endpoint}/:id`, projetController_1.projetController.findById);
    app.post(`/${endpoint}`, projetController_1.projetController.create);
    app.put(`/${endpoint}/:id`, projetController_1.projetController.update);
    app.delete(`/${endpoint}/:id`, projetController_1.projetController.delete);
};
exports.setProjetRouting = setProjetRouting;
//# sourceMappingURL=projetRoutes.js.map