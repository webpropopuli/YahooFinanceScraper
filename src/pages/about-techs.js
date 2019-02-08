module.exports = [
  {
    name: "react",
    title: "React",
    text: "## React \n React makes jobs, so I use it here."
  },

  {
    name: "mongo",
    title: "Mongo",
    text:
      "## MongoDB \n Our database is Mongo. Simple, plays well with json and it's the 'M' in 'MERN' so not really a choice here. This db is hosted at mLabs (until they get fully assimilated into [Mongo Compass](https://www.mongodb.com/products/compass))"
  },
  {
    name: "express",
    title: "Express",
    text:
      "## Express \n Handling Portfolio loading and sweeping. Our API makes DB calls from the server. \n\n `api/sweeper` and `api/loadportfolio` are the  two main routes. \n\n Also added `api/test` to verify that the server is running at startup time. Called from React `<ServerCheck>`"
  },
  {
    name: "react-router",
    title: "React Router",
    text:
      '## React Router \n As Tyler says: \n\n > "React Router v4 is “just components”" \n\n so it seems like the right idea.'
  },
  {
    name: "markdown",
    title: "Markdown",
    text:
      "## Markdown \n Using [markdown-to-jsx](https://probablyup.com/markdown-to-jsx/) I can get cooler descriptions without having to write tons of HTML. \n\n Still not perfect as I can't embed newlines, and half of MD won't work like this, but adding a pair of newlines `(\\n\\n)` fixes a lot, so we're getting there."
  },
  {
    name: "this-page",
    title: "This page",
    text:
      "## About this page \n All these techs live in an object array in a separate .js file. By mapping over them this page is created based on the content of that file, so I'm not touching code (yeah, I know) to add new items."
  }
];

//tbd: sooper-cool would be to create the markdown somewhere totally alien to this (with an embedded text editor), and then bring it in here. Oh, wait, I kinda did that already with the financial data...hmmmm
