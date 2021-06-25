import mongoose from "mongoose";

export const setMongoConnection = () => {
    mongoose.connect('mongodb+srv://UMCBddAdmin:5R7B2njwlFXVgDFb@cluster0.fufsa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Connecté à la base de données");
        }
    })
}
