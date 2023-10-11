import express from "express"
import { createServer } from "http"
import cors from "cors";
import { config } from "dotenv";
import bodyParser from "body-parser";
import User from './routes/users.js'
config();
const port = process.env.PORT || 8080;
const app = express()

const server = createServer(app);

app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/getUser',User)

try {
    server.listen(port, "0.0.0.0", () => console.log("Listening on port 8080"));
  } catch (e) {
    console.log("error in server", e.message);
  }