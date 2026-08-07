import type { Request, Response } from 'express'
import type { FormData } from '../types.ts'
import data from '@model/notes.ts'

function renderAddForm(req: Request, res: Response) {
   const notes = data.retrive()
   res.render('form/newNote', { notes: notes })
}

function addNote(req: FormData, res: Response) {
   const { category, message } = req.body
   const notes = data.add(category, message)
   res.status(200).json({ message: 'success', note: message, notes })
}

export { renderAddForm, addNote }
