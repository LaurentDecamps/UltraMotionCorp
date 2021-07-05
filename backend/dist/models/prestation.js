"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prestation = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PrestationSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    tauxHoraire: {
        type: Number,
        required: true
    }
});
exports.Prestation = mongoose_1.default.model('Prestation', PrestationSchema);
//# sourceMappingURL=prestation.js.map