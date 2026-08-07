import { Router } from "express";
import { renderNotes, viewNote } from "@controllers/indexController.js";

const indexRouter = Router()

indexRouter.get('', renderNotes)
indexRouter.get('/note/:id', viewNote)

export default indexRouter