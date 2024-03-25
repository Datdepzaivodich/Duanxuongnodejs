import Game from "../models/GameModel.js";

class GamesController {
    async getAllGames(req, res) {
        try {
          const games = await Game.find();
          res.status(200).json({
            message: "Get All Games Done",
            data: games,
          });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }

      async getGameDetail(req, res) {
        try {
          const game = await Game.findById(req.params.id);
          if (!game) {
            return res.status(404).json({
              message: " Game Not Found",
            });
          }
          res.status(200).json({
            message: "Get Game Detail Done",
            data: game,
          });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }

      async createGame(req, res) {
        console.log(req.body);
        try {
          const game = await Game.create(req.body);
          res.status(200).json({
            message: "Create Game Done",
            data: game,
          });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }

      async updateGame(req, res) {
        try {
          const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          if (!game) {
            return res.status(404).json({
              message: " Game Not Found",
            });
          }
          res.status(200).json({
            message: "Update Game Done",
            data: game,
          });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }

      async deleteGame(req, res) {
        try {
          const game = await Game.findByIdAndDelete(req.params.id);
          if (!game) {
            return res.status(404).json({
              message: " Game Not Found",
            });
          }
          res.status(200).json({
            message: "Delete Game Done",
          });
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
}

export default GamesController;