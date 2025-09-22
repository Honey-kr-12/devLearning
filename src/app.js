import express from "express";

const app = express();

const PORT = process.env.PORT || 8000

app.use('/',(req, res) => res.status(200).send("Hello from Acquisitions"))

export default app
