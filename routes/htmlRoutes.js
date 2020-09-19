const path = require("path");

module.exports = function(app) {
    //route to change web page to exercise.html
  app.get("/exercise", (req, res) => {
    res.sendfile(path.join(__dirname, "../public/exercise.html"));
  });
  //route to change web page to stats.html
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  //route to set index.html as the default page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};