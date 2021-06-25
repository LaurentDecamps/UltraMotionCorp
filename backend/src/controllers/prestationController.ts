import { Prestation } from "../models/prestation";

class PrestationController {

  findAll = async (req, res, next) => {
    res.status(200)
      .send(await Prestation.find())
      .end();
    next();
  }

  findById = async (req, res, next) => {
    res.status(200)
      .send(await Prestation.findById(req.params.id))
      .end();
    next();
  }

  create = async (req, res, next) => {
    res.status(201)
      .send(await Prestation.create(req.body))
      .end();
    next();
  }

  update = async (req, res, next) => {
    console.log(req.body);
    res.status(200)
      .send(await Prestation.findByIdAndUpdate(req.params.id, req.body))
      .end();
    next();
  }

  delete = async (req, res, next) => {
    res.status(200)
      .send(await Prestation.findByIdAndDelete(req.params.id))
      .end();
    next();
  }
}
export const prestationController = Object.freeze(new PrestationController());
