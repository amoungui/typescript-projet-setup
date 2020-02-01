import { Router, Request, Response } from "express";

const router = Router();

router.get('/', function(req:Request, res:Response){
    res.status(200).json('Hello the world!')
});

export default router;