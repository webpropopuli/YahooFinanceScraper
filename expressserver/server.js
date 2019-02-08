const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { sweeper } = require("./db/sweeper");

app.get("/api", (req, res) => {
  res.send({ express: "nothing here: try GET api/hello | POST api/world" });
});

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/api/sweeper", (req, res) => {
  const dbInfo = { db: "scraper1", coll: "snapshots" };
  sweeper({ db: "scraper1", coll: "snapshots" })
    .then(data => {
      //console.log(data); //# THE PAYLOAD!
      res.json(data);
    })
    .catch(e => {
      next(e);
    });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});

app.listen(port, () => console.log(`Scraper server started on ${port}`));
