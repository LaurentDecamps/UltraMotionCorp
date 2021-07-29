import { verifyToken } from "../config/auth.config"
import { notificationController } from "../controllers/notificationController"

const endpoint = "notifications"

export const setNotificationRouting = (app) => {
    app.get(`/${endpoint}`,  verifyToken, notificationController.findAll)
    app.get(`/${endpoint}/:id`,  verifyToken, notificationController.findById)
    app.post(`/${endpoint}`,  verifyToken, notificationController.create)
    app.put(`/${endpoint}/:id`,  verifyToken, notificationController.update)
    app.delete(`/${endpoint}/:id`,  verifyToken, notificationController.delete)
}
