import { Router } from "express";
import { renderNotes } from "../controllers/indexController.js";

const indexRouter = Router()

indexRouter.get('', renderNotes)

export default indexRouter