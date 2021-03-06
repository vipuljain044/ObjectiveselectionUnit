import express from "express";
import bodyParser from "body-parser";

// Controllers (route handlers)
import * as apiController from "./controllers/api";

// API keys and Passport configuration

// Create Express server
const app = express();
// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", apiController.getApi);

app.post("/", apiController.findTarget);


export default app;
