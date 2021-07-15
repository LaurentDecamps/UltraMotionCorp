import { Client } from "../models/client";
import { Projet } from "../models/projet";
import { clientController } from "./clientController";

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

  // findByClientId = async (req, res, next) => {
  //   res.status(200)
  //     .send(await clientController.findProjet(req.params.id))
  //     .end();
  //   next();
  // }

  create = async (req, res, next) => {
    res.status(201)
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
      .send(await Projet.findByIdAndDelete(req.params.id))
      .end();
    next();
  }
}
export const projetController = Object.freeze(new ProjetController());
