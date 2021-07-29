import { Notification } from "../models/notification";

class NotificationController {

    findAll = async (req, res, next) => {
        res.status(200)
            .send(await Notification.find())
            .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
            .send(await Notification.findById(req.params.id))
            .end();
        next();
    }

    create = async (req, res, next) => {
        console.log(req.body);
        
        res.status(201)
            .send(await Notification.create(req.body))
            .end();
        next();
    }

    update = async (req, res, next) => {
        console.log(req.body);
        res.status(200)
            .send(await Notification.findByIdAndUpdate(req.params.id, req.body))
            .end();
        next();
    }

    delete = async (req, res, next) => {
        res.status(200)
            .send(await Notification.findByIdAndDelete(req.params.id))
            .end();
        next();
    }
}
export const notificationController = Object.freeze(new NotificationController());