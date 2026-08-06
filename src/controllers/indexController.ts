import type { Request, Response } from "express";
import data from "../model/notes.ts";

function renderNotes(req: Request, res: Response) {
   res.send(data)
   // res.render('index', ({message: 'test'}))
}

export { renderNotes }