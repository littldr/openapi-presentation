import * as bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { initialize } from "express-openapi";
import slugify from "slugify";
import { Dog, DogsDB } from "./database";
import { errorMiddleware, NotFoundError } from "./errors";

const app = express();
app.use(bodyParser.json())

initialize({
    app,
    apiDoc: "./spec.yaml",
    operations: {
        getDog: function(req: Request, res: Response) {
            const dog = DogsDB.get(req.params.dogId as string)
            if (dog !== undefined) {
                res.json(dog)
            } else {
                res.status(404).json(NotFoundError)
            }
        },
        createDog: function(req: Request, res: Response) {
            const dog = req.body as Dog;
            dog.id = slugify(dog.name, { lower: true });
            DogsDB.set(dog.id, dog);
            res.json(dog)
        }
    },
    errorMiddleware,
});

app.listen(3000);
