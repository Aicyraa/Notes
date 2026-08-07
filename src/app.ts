import type { Request, Response, NextFunction } from 'express'
import type { Errback } from 'express'
import { fileURLToPath } from 'node:url'
import express from 'express'
import path from 'node:path'
import formRouter from '@routers/formRouter.ts'
import indexRouter from '@routers/indexRouter.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)
app.use('/new', formRouter)

app.use((req: Request, res: Response, next: NextFunction) => {
   console.error('Invalid Route')
   res.status(401).render('error', { status: 401, message: 'Invalid Route!' })
})

app.listen(3030, () => {
   console.log('server running on port 3030')
})
