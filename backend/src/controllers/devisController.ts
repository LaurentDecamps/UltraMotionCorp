import { Devis } from "../models/devis";

class DevisController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Devis.find())
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Devis.findById(req.params.id))
            .end();
        next();
    }

    findByIdEntreprise = async (req, res, next) => {
        res.status(200)
            .send(await Devis.find({ "entreprise" : req.params.id}).populate("prestation").populate("projet"))
            .end();
        next();
    }

    findByIdProjetAndIdPrestation = async (req, res, next) => {
        res.status(200)
            .send(await Devis.find( {"projet" : req.params.idProjet, "prestation" : req.params.idPrestation})
                .populate('entreprise')
                .populate("prestation"))
            .end();
        next();
    }

    create = async (req, res, next) => {
        console.log(`Create devis :`,req.body);
        res.status(201)
            .send(await Devis.create(req.body))
            .end();
        next();
    }

    update = async (req, res, next) => {        
        res.status(200)
            .send(await Devis.findByIdAndUpdate(req.params.id, req.body))
            .end();
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
            .send(await Devis.findByIdAndDelete(req.params.id))
            .end();
        next();
    }
}
export const devisController = Object.freeze(new DevisController());
