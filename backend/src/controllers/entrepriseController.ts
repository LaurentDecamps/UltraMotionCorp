import { Entreprise } from "../models/entreprise";

class EntrepriseController {

  findAll = async (req, res, next) => {
    console.log("Appel à get sur entreprises");
    res.status(200)
      .send(await Entreprise.find().populate("prestations"))
      .end();
    next();
  }

  findById = async (req, res, next) => {
    // console.log("Appel à findById sur entreprises");
    // console.log(req.params.id);
    res.status(200)
      .send(await Entreprise.findById(req.params.id)
        .populate("prestations")
        .populate("notifications")
        )
      .end();
    next();
  }

  // findByPrestationId = async (req, res, next) => {
  //   res.status(200)
  //     .send(await Entreprise.find({ client : req.params.id}))
  //     .end();
  //   next();
  // }

  create = async (req, res, next) => {
    res.status(201)
      .send(await Entreprise.create(req.body))
      .end();
    next();
  }

  update = async (req, res, next) => {
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
