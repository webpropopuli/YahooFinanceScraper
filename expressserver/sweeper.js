/**
 * Sweeper will find all the Yahoo snapshots that have not yet been integrated into the main app. It should
 * -gather them
 * -insert them into the main historical db
 * -remove them from the snapshots db
 *
 * The idea is that scraping might be a standalone process as well as something initiated by the main scraper.
 **/

function sweeper() {
  //# get dbconnect string from env
  const res = require("dotenv").config({ path: "../.env" });
  if (res.error) throw res.error;

  //# Connect to DB
  let dbUrl = process.env.DB_CONNECT;

  if (dbUrl === undefined) console.warn("Problem reading db connect string from ENV. Please check the README");

  //# Open DB and read all snapshots
  const assert = require("assert");
  let fCount = 0;
  let dataReturned = null;

  const MongoClient = require("mongodb").MongoClient;

  MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err);
    const db = client.db("scraper1");

    // declare db promise func
    const dbPromise = () => {
      return new Promise((resolve, reject) => {
        db
          .collection("snapshots")
          .find()
          .toArray(function(err, data) {
            if (err) {
              reject(err);
            } else {
              //console.log(data[0]);
              dataReturned = data;
              resolve(dataReturned);
            }
          }),
          reject;
      });
    };

    // call it
    dbPromise()
      .then(result => {
        //console.log(`\nscrape result ${result}`);
        console.error("SWEEPER Success");
        client.close();
        return "david is here";
      })
      .catch(e => {
        console.error("SWEEPER ERROR", e, e.stack);
      });
    return "what the hell?";
  }); //ends mongo client

  return "OMFG";
}

module.exports = { sweeper: sweeper };
