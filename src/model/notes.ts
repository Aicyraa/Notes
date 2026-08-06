import type { NOTES } from '../types.ts'
import type { MethodModel } from '../types.ts'

class Note {
   category: string
   message: string
   date: Date
   constructor(category: string, message: string) {
      this.category = category
      this.message = message
      this.date = new Date()
   }
}

interface NoteData {
   retrive: () => NOTES[]
   add: (category: string, message: string) => NOTES[]
}

const NOTES: NOTES[] = [
   {
      category: 'school',
      message: 'Cisco user accounts Task',
      date: new Date(),
   },
   {
      category: 'home',
      message: 'Laundry and Bedroom cleaning',
      date: new Date(),
   },
]

const data: MethodModel = {
   retrive: () => {
      return NOTES
   },
   add: (category: string, message: string) => {
      const newNote = new Note(category, message)
      NOTES.push(newNote)
      return NOTES
   },
}

export default data
