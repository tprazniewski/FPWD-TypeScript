// const express = require('express')
import express, {Express,Request, Response, NextFunction} from 'express'
import questionRoutes from './routes/questions'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT

app.get('/', (_, res) => {
    res.status(200).json({ message: 'Welcome to FPWD!' })
})

app.use('/questions', questionRoutes)

app.use((err: Error, req:Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})


app.listen(PORT)