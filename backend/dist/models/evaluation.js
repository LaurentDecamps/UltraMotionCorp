"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluation = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EvaluationSchema = new mongoose_1.default.Schema({
    client: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Client"
    },
    prestation: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Prestation"
    },
    note: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
exports.Evaluation = mongoose_1.default.model('Evaluation', EvaluationSchema);
//# sourceMappingURL=evaluation.js.map