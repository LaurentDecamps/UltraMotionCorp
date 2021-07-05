"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ClientSchema = new mongoose_1.default.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
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
        required: false
    },
    adresse: {
        type: String,
        required: false
    },
    projets: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Projet"
        }]
});
exports.Client = mongoose_1.default.model('Client', ClientSchema);
//# sourceMappingURL=client.js.map