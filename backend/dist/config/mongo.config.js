"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMongoConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const chaineConnexionProd = 'mongodb+srv://UMCBddAdmin:5R7B2njwlFXVgDFb@cluster0.fufsa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const chaineConnexionTestLocal = 'mongodb://localhost:27017';
const setMongoConnection = () => {
    mongoose_1.default.connect(chaineConnexionTestLocal, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log("Connecté à la base de données");
        }
    });
};
exports.setMongoConnection = setMongoConnection;
//# sourceMappingURL=mongo.config.js.map