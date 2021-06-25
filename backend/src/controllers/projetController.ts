import { Projet } from "../models/projet";

class ProjetController {

  findAll = async (req, res, next) => {
    res.status(200)
      .send(await Projet.find())
      .end();
    next();
  }

  findById = async (req, res, next) => {
    res.status(200)
      .send(await Projet.findById(req.params.id))
      .end();
    next();
  }

  create = async (req, res, next) => {
    res.status(200)
      .send(await Projet.create(req.body))
      .end();
    next();
  }

  update = async (req, res, next) => {
    console.log(req.body);
    res.status(200)
      .send(await Projet.findByIdAndUpdate(req.params.id, req.body))
      .end();
    next();
  }

  delete = async (req, res, next) => {
    res.status(200)
      .send(await Projet.findByIdAndRemove(req.params.id))
      .end();
    next();
  }
}
export const projetController = Object.freeze(new ProjetController());