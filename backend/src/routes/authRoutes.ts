import { authController } from "../controllers/authController"

export const setAuthRoutes = (app) => {
    app.post("/auth/client/signup", authController.signupClient);
    app.post("/auth/client/signin", authController.signinClient);
    app.post("/auth/entreprise/signup", authController.signupEntreprise);
    app.post("/auth/entreprise/signin", authController.signinEntreprise);
}