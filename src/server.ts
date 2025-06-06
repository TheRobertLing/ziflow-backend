import express from "express";
import cors from "cors";
import "dotenv/config";
import { getCharactersV1 } from "./controllers/PinyinTyperController.js";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const app = express();

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Middleware //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

app.use(express.json());

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
