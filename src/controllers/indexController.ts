import type { Request, Response } from 'express'
import data from '@model/notes.ts'

function renderNotes(req: Request, res: Response) {
   const notes = data.retrive()
   res.render('index', { title: 'Notes', notes })
}

function viewNote(req: Request, res: Response) {
   // Throw an error if id is invalid!
   const id = req.params.id
   const notes = data.retrive()
   const targetNote = notes.filter(note => note.id === Number(id))
   res.render('index', { title: 'Notes', notes, targetNote, message: 'Yo' })
}

export { renderNotes, viewNote }
