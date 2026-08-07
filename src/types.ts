import type { Request } from 'express'

interface NOTES {
   id: number
   category: string
   message: string
   date: Date
}

interface FormData extends Request {
   body: {
      category: string
      message: string
   }
}

interface MethodModel {
   retrive: () => NOTES[]
   add: (category: string, message: string) => NOTES[]
}

export type { NOTES, FormData, MethodModel }
