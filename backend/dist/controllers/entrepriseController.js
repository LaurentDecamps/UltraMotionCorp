"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entrepriseController = void 0;
const entreprise_1 = require("../models/entreprise");
class EntrepriseController {
    constructor() {
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("Appel à get sur entreprises");
            res.status(200)
                .send(yield entreprise_1.Entreprise.find().populate("Prestations"))
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield entreprise_1.Entreprise.findById(req.params.id).populate("Prestations"))
                .end();
            next();
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield entreprise_1.Entreprise.create(req.body))
                .end();
            next();
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            res.status(200)
                .send(yield entreprise_1.Entreprise.findByIdAndUpdate(req.params.id, req.body))
                .end();
            next();
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield entreprise_1.Entreprise.findByIdAndDelete(req.params.id))
                .end();
            next();
        });
    }
}
exports.entrepriseController = Object.freeze(new EntrepriseController());
//# sourceMappingURL=entrepriseController.js.map