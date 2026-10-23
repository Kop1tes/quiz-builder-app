import express, { type ErrorRequestHandler } from "express";
import cors from "cors";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
    })
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: "Internal server error",
    });
};

export default app;