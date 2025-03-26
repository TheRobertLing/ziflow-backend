import express from "express";
import cors from "cors";
import "dotenv/config";
import { getCharactersV1 } from "./controllers/PinyinTyperController.js";

const HOST: string = process.env.HOST || "127.0.0.1";
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const app = express();

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Middleware //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

app.use(express.json());
const allowedOrigins = [
  "http://localhost:3000",
  "https://flowzh.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true, // only if using cookies/sessions/auth
  })
);

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Routes ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Game Routes
 */

// V1 route, update once game ported to unity
app.get("/api/v1/games/pinyin-typer/characters", getCharactersV1);

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Connection //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
