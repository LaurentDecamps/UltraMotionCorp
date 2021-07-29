import { verifyToken } from "../config/auth.config";
import { devisController } from "../controllers/devisController"

const endpoint = "devis"

export const setDevisRouting = (app) => {
    app.get(`/${endpoint}`,  verifyToken, devisController.findAll);
    app.get(`/${endpoint}/:id`,  verifyToken, devisController.findById);    
    app.get(`/${endpoint}/entreprises/:id`,  verifyToken, devisController.findByIdEntreprise);
    app.get(`/${endpoint}/projets/:idProjet/prestations/:idPrestation/entreprises/:idEntreprise`, verifyToken,  devisController.findByIdProjetIdPrestationIdEntreprise);
    app.post(`/${endpoint}`,  verifyToken, devisController.create);
    app.put(`/${endpoint}/:id`,  verifyToken, devisController.update);
    app.delete(`/${endpoint}/:id`,  verifyToken, devisController.delete);
}
