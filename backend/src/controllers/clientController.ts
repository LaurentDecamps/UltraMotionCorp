import { Client } from "../models/client";

class ClientController {

  findAll = async (req, res, next) => {
    res.status(200)
      .send(await Client.find())
      .end();
    next();
  }

  findById = async (req, res, next) => {
    res.status(200)
      .send(await Client.findById(req.params.id).populate(`projet`)

        // .populate({
        //   path: 'projets',
        //   populate: {
        //     path: 'prestations'
        //     }            
        // })
        // .populate("notifications")
        //   path: 'notifications'
        // })
        // .populate({
        //   path: 'projets',
        //   populate: {
        //     path: 'devis'
        //     }            
        // })
        )
      .end();
    next();
  }



  create = async (req, res, next) => {
    res.status(201)
      .send(await Client.create(req.body))
      .end();
    next();
  }

  update = async (req, res, next) => {
    console.log(req.body);
    res.status(200)
      .send(await Client.findByIdAndUpdate(req.params.id, req.body))
      .end();
    next();
  }

  delete = async (req, res, next) => {
    res.status(200)
      .send(await Client.findByIdAndDelete(req.params.id))
      .end();
    next();
  }
}
export const clientController = Object.freeze(new ClientController());
