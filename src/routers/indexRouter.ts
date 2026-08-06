import { Router } from "express";
import { renderNotes } from "../controllers/indexController.js";

const index = Router()

index.get('', renderNotes)

export default index