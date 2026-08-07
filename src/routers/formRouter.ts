import { Router } from 'express'
import { renderAddForm, addNote } from '@controllers/formController.ts'

const formRouter = Router()

formRouter.get('/add', renderAddForm)
formRouter.put('/add', addNote)

export default formRouter
