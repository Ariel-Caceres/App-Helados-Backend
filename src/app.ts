import cors from "cors";
import express from "express";
import { router } from "./routes/ventas.routes"
import type { Request } from "express";
import type { Response } from "express";
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router)
app.use((req: Request, res: Response) => {
    res.header("Access-Control-Allow-Origin", "https:/http://localhost:5173"),
        res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST"),
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"),
        res.header("Access-Control-Allow-Credentials", "true")
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});