import type { Request, Response } from 'express'
import type { FormData } from '../types.ts'
import data from '@model/notes.ts'

function renderAddForm(req: Request, res: Response) {
   const notes = data.retrive()
   res.render('form', { notes: notes })
}

function addNote(req: FormData, res: Response) {
   const { category, message } = req.body
   data.add(category, message)
   res.redirect('/')
}

export { renderAddForm, addNote }
