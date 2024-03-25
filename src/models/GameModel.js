import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GameSchema = new Schema(
    {
      title: { type: String, required: true },
      rate: { type: Number, min: 0, max: 10, default: 5 },
      description: { type: String, required: true },
      year: { type: Number, required: true},
      active: { type: Boolean, default: true },
    },
    { timestamps: true, versionKey: false }
  );

const Game = mongoose.model("Game", GameSchema);

export default Game;