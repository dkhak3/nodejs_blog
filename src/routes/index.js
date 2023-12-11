const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRoute = require("./courses");

function route(app) {
  app.use("/courses", coursesRoute);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
