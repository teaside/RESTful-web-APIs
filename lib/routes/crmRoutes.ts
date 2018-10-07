import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";


export class Routes {


    public contactController: ContactController = new ContactController();

    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!'
            })
        })

        app.route('/contact')
        .get(this.contactController.getContacts)
        .post(this.contactController.addNewContact)

        .post((req: Request, res: Response) => {
            res.status(200).send({
                message: 'POST request ok'
            })
        })

        app.route('/contacts/:contactId')
        .get(this.contactController.getContactWithID)
        
        .put(this.contactController.updateContact)
        .delete((req: Request, res: Response) => {
            res.status(200).send({
                message: 'DELETE request ok'
            })
        })
    }
}