"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setClientRouting = void 0;
const clientController_1 = require("../controllers/clientController");
const endpoint = "clients";
const setClientRouting = (app) => {
    app.get(`/${endpoint}`, clientController_1.clientController.findAll);
    app.get(`/${endpoint}/:id`, clientController_1.clientController.findById);
    app.post(`/${endpoint}`, clientController_1.clientController.create);
    app.put(`/${endpoint}/:id`, clientController_1.clientController.update);
    app.delete(`/${endpoint}/:id`, clientController_1.clientController.delete);
};
exports.setClientRouting = setClientRouting;
//# sourceMappingURL=clientRoutes.js.map