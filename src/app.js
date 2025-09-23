import express from "express";
import logger from "./config/logger.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js'

const app = express();

const PORT = process.env.PORT || 8000

app.use(helmet());
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(morgan('combined',{stream: {write: (message) => logger.info(message.trim())}}))
app.use('/api/auth', authRoutes)
app.get('/api',(req, res) => res.status(200).send("new api"))
app.get('/', (req, res) => {
    logger.info('Hello from Acquisitions')
    res.status(200).send("Hello from Acquisitions")
}
)

export default app
