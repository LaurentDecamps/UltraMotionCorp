import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Client } from '../models/client';
import { Entreprise } from '../models/entreprise';

class AuthController {

    /**
     * Méthode d'inscription.
     * Attend un client complet dans le body
     * @param req La requête reçue
     * @param res L'objet réponse pour construire la réponse à la requête 
     * @param next Le prochain middleware
     * @returns 
     */
    signupClient = async (req, res, next) => {
        // Récupère l'utilisateur dans le body
        let client = req.body;
        console.log("log1", client);
        try {

            // Chercher un client qui possède déjà cet email
            let clientExist = await Client.findOne({
                email: client.email
            });
            // Si on récupère un client, on affiche une erreur
            if (clientExist) {
                return res.status(400).json({
                    msg: "Ce client existe déjà !"
                });
            }

            // "salt" est une chaine de caractère random
            const salt = await bcrypt.genSalt(10);
            client.motDePasse = await bcrypt.hash(client.motDePasse, salt);

            //Enregistrer l'utilisateur en base
            client = await Client.create(client);

            const payload = {
                client: {
                    id: client.id
                }
            };

            // Génération du token, expire dans 10 000 ms
            jwt.sign(
                payload,
                // "RandomString" est la clé de chiffrage, générer une clé random dans les variables d'environnement
                "randomString", {
                expiresIn: 10000
            },
                // Si erreur , attraper l'erreur
                (err, token) => {
                    if (err) throw err;
                    // Sinon afficher le token
                    res.status(200).json({
                        token,
                        client: payload.client
                    });
                }
            );
            // Si une erreur est rencontrée pendant l'éxécution, l'afficher
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Erreur interne lors de l'inscription d'un nouveau Client");
        }
    }

    /**
     * Méthode de connexion pour les clients.
     * Attend un email et un password dans le body
     * @param req La requête reçue
     * @param res L'objet réponse pour construire la réponse à la requête 
     * @param next Le prochain middleware
     * @returns 
     */
    signinClient = async (req, res, next) => {

        // Créer une variable email et une variable password qui prennent la valeur du body
        const { email, motDePasse } = req.body;
        // console.log("Email", email);

        try {
            // Chercher si l'utilisateur avec cet email existe
            let client: any = await Client.findOne({
                email: email
            });
            // Si on ne trouve pas d'utilisateur, afficher erreur
            if (!client)
                return res.status(400).json({
                    message: "Ce client n'existe pas !"
                });

            // console.log("Mot de passe récupéré de la bdd",client.motDePasse);
            // console.log("Mot de passe reçu",motDePasse);

            // Vérifier que le mot de passe entré correspond au mot de passe en base de données
            const isMatch = await bcrypt.compare(motDePasse, client.motDePasse);

            console.log("isMatch", isMatch);

            // Si les mots de passes ne correspondent pas, afficher erreur
            if (!isMatch)
                return res.status(400).json({
                    message: "Mot de passe incorrect"
                });

            const payload = {
                client: {
                    id: client.id
                }
            };

            // Génération du token, expire dans 3 600 ms
            jwt.sign(
                payload,
                "randomString",
                {
                    expiresIn: 3600
                },
                // Si erreur, attraper l'erreur
                (err, token) => {
                    if (err) throw err;
                    // Sinon afficher le token
                    res.status(200).json({
                        token,
                        client: payload.client
                    });
                }
            );
            // Si une erreur s'est produite pendant l'éxécution, l'afficher
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    }

    /**
     * Méthode d'inscription pour les entreprises.
     * Attend une entreprise complete dans le body
     * @param req La requête reçue
     * @param res L'objet réponse pour construire la réponse à la requête 
     * @param next Le prochain middleware
     * @returns 
     */
    signupEntreprise = async (req, res, next) => {
        // Récupère l'entreprise dans le body
        let entreprise = req.body;

        try {
            // Chercher un client qui possède déjà cet email
            let entrepriseExist = await Entreprise.findOne({
                email: entreprise.email
            });
            // Si on récupère un client, on affiche une erreur
            if (entrepriseExist) {
                return res.status(400).json({
                    msg: "Cet entreprise existe déjà !"
                });
            }

            // "salt" est une chaine de caractère random
            const salt = await bcrypt.genSalt(10);
            entreprise.motDePasse = await bcrypt.hash(entreprise.motDePasse, salt);

            //Enregistrer l'utilisateur en base
            entreprise = await Entreprise.create(entreprise);

            const payload = {
                entreprise: {
                    id: entreprise.id
                }
            };

            // Génération du token, expire dans 10 000 ms
            jwt.sign(
                payload,
                // "RandomString" est la clé de chiffrage, générer une clé random dans les variables d'environnement
                "randomString", {
                expiresIn: 10000
            },
                // Si erreur , attraper l'erreur
                (err, token) => {
                    if (err) throw err;
                    // Sinon afficher le token
                    res.status(200).json({
                        token,
                        entreprise: payload.entreprise
                    });
                }
            );
            // Si une erreur est rencontrée pendant l'éxécution, l'afficher
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Erreur interne lors de l'inscription d'un nouveau Client");
        }
    }

    /**
     * Méthode de connexion pour les entreprises.
     * Attend un email et un password dans le body
     * @param req La requête reçue
     * @param res L'objet réponse pour construire la réponse à la requête 
     * @param next Le prochain middleware
     * @returns 
     */
    signinEntreprise = async (req, res, next) => {

        // Créer une variable email et une variable password qui prennent la valeur du body
        const { email, motDePasse } = req.body;

        try {
            // Chercher si l'entreprise avec cet email existe
            let entreprise: any = await Entreprise.findOne({
                email
            });
            // Si on ne trouve pas d'utilisateur, afficher erreur
            if (!entreprise)
                return res.status(400).json({
                    message: "Cet entreprise n'existe pas !"
                });

            // Vérifier que le mot de passe entré correspond au mot de passe en base de données
            const isMatch = await bcrypt.compare(motDePasse, entreprise.motDePasse);

            // Si les mots de passes ne correspondent pas, afficher erreur
            if (!isMatch)
                return res.status(400).json({
                    message: "Incorrect Password !"
                });

            const payload = {
                entreprise: {
                    id: entreprise.id
                }
            };

            // Génération du token, expire dans 3 600 ms
            jwt.sign(
                payload,
                "randomString",
                {
                    expiresIn: 3600
                },
                // Si erreur, attraper l'erreur
                (err, token) => {
                    if (err) throw err;
                    // Sinon afficher le token
                    res.status(200).json({
                        token,
                        entreprise: payload.entreprise
                    });
                }
            );
            // Si une erreur s'est produite pendant l'éxécution, l'afficher
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    }

}

export const authController = Object.freeze(new AuthController());


