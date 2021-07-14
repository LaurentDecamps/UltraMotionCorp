import { devisController } from "../controllers/devisController"

const endpoint = "devis"

export const setDevisRouting = (app) => {
    app.get(`/${endpoint}`, devisController.findAll)
    app.get(`/${endpoint}/:id`, devisController.findById)
    app.get(`/${endpoint}/projets/:idProjet/prestations/:idPrestation`, devisController.findByIdProjetAndIdPrestation)
    app.post(`/${endpoint}`, devisController.create)
    app.put(`/${endpoint}/:id`, devisController.update)
    app.delete(`/${endpoint}/:id`, devisController.delete)
}
