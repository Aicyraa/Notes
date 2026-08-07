import type { NOTES } from '../types.ts'
import type { MethodModel } from '../types.ts'

let lastId = 0

class Note {
   id: number
   category: string
   message: string
   date: Date
   constructor(category: string, message: string) {
      this.id = ++lastId
      this.category = category
      this.message = message
      this.date = new Date()
   }
}

const NOTES: NOTES[] = [
   new Note('school', 'Cisco user accounts Task'),
   new Note('home', 'Laundry and Bedroom cleaning'),
   new Note('programming', 'Learn RAG and Vectors'),
]

const data: MethodModel = {
   retrive: () => {
      return NOTES
   },
   add: (category: string, message: string) => {
      const newNote = new Note(category, message)
      NOTES.push(newNote)
      return NOTES
   }
}

export default data
