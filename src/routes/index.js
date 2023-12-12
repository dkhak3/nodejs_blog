const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRoute = require("./courses");
const meRoute = require("./me");

function route(app) {
  app.use("/me", meRoute);
  app.use("/courses", coursesRoute);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
