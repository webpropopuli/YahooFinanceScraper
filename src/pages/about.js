import React from "react";
import { Route, Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";

import "./about-tech.css";

// tbd load from a DB
const techs = require("./about-techs.js");

function AboutTech({ match }) {
  const { techName } = match.params; //

  const tech = techs.find(x => x.name === techName);
  if (tech !== undefined) {
    // print the data from techs[]
    return (
      <div className="techDesc">
        <Markdown options={{ forceBlock: true }}>{tech.text}</Markdown>
      </div>
    );
  }
}

function About() {
  return (
    <div>
      <h2>About this App</h2>
      <p>This started as my Financial Scraper project for Career Devs Academy.</p>

      <h4>Stacks and Techs used:</h4>
      <div className="techsContainer" style={{ display: "flex", height: "40vh" }}>
        <div className="LEFT" style={{ flexBasis: "15%" }}>
          <ul>
            {techs.map((x, ndx) => (
              <li key={`${x.id}_${ndx}`}>
                <Link to={`/about/${x.name}`}> {x.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="RIGHT" style={{ flexBasis: "85%", paddingLeft: "20px" }}>
          <Route path="/about/:techName" component={AboutTech} />
          {/* :techName is a route param; passes to the <Component>*/}
        </div>
      </div>
    </div>
  );
}

export default About;
