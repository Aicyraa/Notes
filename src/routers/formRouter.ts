import type { Request, Response, NextFunction } from "express";
import { Router } from "express";
import { renderAddForm, addNote } from "../controllers/formController.ts";

const formRouter = Router()

formRouter.get('/form', renderAddForm)
formRouter.post('/add', addNote)

export default formRouter