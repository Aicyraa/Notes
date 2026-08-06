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

const NOTES = [
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

const data = {
   retrive: () => {
      return NOTES
   }
}

export default data
export { Note }