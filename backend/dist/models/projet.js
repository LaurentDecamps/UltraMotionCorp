"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projet = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProjetSchema = new mongoose_1.default.Schema({
    typeBien: {
        type: String,
        required: true
    },
    niveauBien: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    surfaceM2: {
        type: Number,
        required: true
    },
    dateDebut: {
        type: Number,
        required: true
    },
    prestations: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Prestation"
        }]
});
exports.Projet = mongoose_1.default.model('Projet', ProjetSchema);
//# sourceMappingURL=projet.js.map