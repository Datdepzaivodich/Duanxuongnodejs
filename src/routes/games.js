import express from "express";
import GamesController from "../controllers/games.js";

const gamesRouter = express.Router();


const gamesController = new GamesController();

gamesRouter.get("/", gamesController.getAllGames);
gamesRouter.post("/", gamesController.createGame);
gamesRouter.get("/:id", gamesController.getGameDetail);
gamesRouter.put("/:id", gamesController.updateGame);
gamesRouter.delete("/:id", gamesController.deleteGame);

gamesRouter.get('/',(req, res) => {
    res.send("games");
});  

gamesRouter.get('/:id',(req, res) => {
    res.send("games");
}); 

gamesRouter.post('/',(req, res) => {
    res.send("games");
}); 

gamesRouter.put('/:id',(req, res) => {
    res.send("games");
}); 

gamesRouter.delete('/:id',(req, res) => {
    res.send("games");
}); 

export default gamesRouter;