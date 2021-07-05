// import { Devis } from "../models/devis";
//
// class DevisController {
//
//   findAll = async (req, res, next) => {
//     res.status(200)
//       .send(await Devis.find())
//       .end();
//     next();
//   }
//
//   findById = async (req, res, next) => {
//     res.status(200)
//       .send(await Devis.findById(req.params.id))
//       .end();
//     next();
//   }
//
//   create = async (req, res, next) => {
//     res.status(201)
//       .send(await Devis.create(req.body))
//       .end();
//     next();
//   }
//
//   update = async (req, res, next) => {
//     console.log(req.body);
//     res.status(200)
//       .send(await Devis.findByIdAndUpdate(req.params.id, req.body))
//       .end();
//     next();
//   }
//
//   delete = async (req, res, next) => {
//     res.status(200)
//       .send(await Devis.findByIdAndDelete(req.params.id))
//       .end();
//     next();
//   }
// }
// export const devisController = Object.freeze(new DevisController());
//# sourceMappingURL=devisController.js.map