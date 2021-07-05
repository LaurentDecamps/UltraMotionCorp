"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPrestationsRouting = void 0;
const prestationController_1 = require("../controllers/prestationController");
const endpoint = 'prestations';
const setPrestationsRouting = (app) => {
    app.get(`/${endpoint}`, prestationController_1.prestationController.findAll);
    app.get(`/${endpoint}/:id`, prestationController_1.prestationController.findById);
    app.post(`/${endpoint}`, prestationController_1.prestationController.create);
    app.put(`/${endpoint}/:id`, prestationController_1.prestationController.update);
    app.delete(`/${endpoint}/:id`, prestationController_1.prestationController.delete);
};
exports.setPrestationsRouting = setPrestationsRouting;
//# sourceMappingURL=prestationRoutes.js.map