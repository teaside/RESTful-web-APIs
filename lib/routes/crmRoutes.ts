import {Request, Response} from "express";

export class Routes {
    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!'
            })
        })

        app.route('/contact')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request ok'
            })
        })

        .post((req: Request, res: Response) => {
            res.status(200).send({
                message: 'POST request ok'
            })
        })

        app.route('/contacts/:contactId')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Get request ok'
            })
        })
        .put((req: Request, res: Response) => {
            res.status(200).send({
                message: 'PUT request ok'
            })
        })
        .delete((req: Request, res: Response) => {
            res.status(200).send({
                message: 'DELETE request ok'
            })
        })
    }
}