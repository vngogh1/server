const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.getAllJokes);
  app.get("/api/jokes/random", JokeController.getRandomJoke);
  app.get("/api/jokes/:id", JokeController.getOneJokeID);
  app.post("/api/jokes", JokeController.createJoke);
  app.patch("/api/jokes/:id", JokeController.updateJoke);
  app.delete("/api/jokes/:id", JokeController.deleteJoke);
};
