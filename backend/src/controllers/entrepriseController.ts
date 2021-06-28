import { Entreprise } from "../models/entreprise";

class EntrepriseController {

  findAll = async (req, res, next) => {
    console.log("Appel à get sur entreprises");    
    res.status(200)
      .send(await Entreprise.find().populate("Prestations"))
      .end();
    next();
  }

  findById = async (req, res, next) => {
    res.status(200)
      .send(await Entreprise.findById(req.params.id).populate("Prestations"))
      .end();
    next();
  }

  create = async (req, res, next) => {
    res.status(201)
      .send(await Entreprise.create(req.body))
      .end();
    next();
  }

  update = async (req, res, next) => {
    console.log(req.body);
    res.status(200)
      .send(await Entreprise.findByIdAndUpdate(req.params.id, req.body))
      .end();
    next();
  }

  delete = async (req, res, next) => {
    res.status(200)
      .send(await Entreprise.findByIdAndDelete(req.params.id))
      .end();
    next();
  }
}
export const entrepriseController = Object.freeze(new EntrepriseController());
