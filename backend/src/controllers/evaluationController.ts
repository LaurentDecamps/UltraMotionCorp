import { Evaluation } from "../models/evaluation";

class EvaluationController {

  findAll = async (req, res, next) => {
    res.status(200)
      .send(await Evaluation.find())
      .end();
    next();
  }

  findById = async (req, res, next) => {
    res.status(200)
      .send(await Evaluation.findById(req.params.id))
      .end();
    next();
  }

  findByClientId = async (req, res, next) => {
    res.status(200)
      .send(await Evaluation.find({ client : req.params.id}).populate('prestation'))
      .end();
    next();
  }

  create = async (req, res, next) => {
    res.status(201)
      .send(await Evaluation.create(req.body))
      .end();
    next();
  }

  update = async (req, res, next) => {
    console.log(req.body);
    res.status(200)
      .send(await Evaluation.findByIdAndUpdate(req.params.id, req.body))
      .end();
    next();
  }

  delete = async (req, res, next) => {
    res.status(200)
      .send(await Evaluation.findByIdAndDelete(req.params.id))
      .end();
    next();
  }
}
export const evaluationController = Object.freeze(new EvaluationController());
