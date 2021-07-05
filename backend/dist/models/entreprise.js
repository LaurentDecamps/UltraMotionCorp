"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entreprise = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EntrepriseSchema = new mongoose_1.default.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    motDePasse: {
        type: String,
        required: true
    },
    numeroTelephone: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    Prestations: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Prestation"
        }]
});
exports.Entreprise = mongoose_1.default.model('Entreprise', EntrepriseSchema);
//# sourceMappingURL=entreprise.js.map