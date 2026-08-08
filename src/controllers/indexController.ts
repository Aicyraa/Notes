import type { Request, Response } from 'express'
import data from '@model/notes.ts'

function renderNotes(req: Request, res: Response) {
   const notes = data.retrive()
   res.render('index', { title: 'Notes', notes })
}

function viewNote(req: Request, res: Response) {
   const id = req.params.id

   if (data.retrive().length + 1 < Number(id)) {
      throw new Error(`Note with an id ${id} doesn't exist`)
   }

   const notes = data.retrive()
   const targetNote = notes.filter(note => note.id === Number(id))[0]
   res.render('view', { targetNote })
}

export { renderNotes, viewNote }
