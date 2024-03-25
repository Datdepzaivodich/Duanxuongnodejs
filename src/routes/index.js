import gamesRouter from "./games.js";
import categoriesRouter from "./categories.js";

export default function routes(app) {
    app.get('/', (req, res) => {
        res.send("Game")
    });

    app.use("/games", gamesRouter);
    app.use("/categories", categoriesRouter);
}