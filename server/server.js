const express = require("express");
const { google } = require("googleapis");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.port || 3004;

// google
//   .youtube("v3")
//   .search.list({
//     part: "snippet",
//     key: process.env.YOUTUBE_API_KEY,
//     q: "india",
//     safeSearch: "moderate",
//   })
//   .then((res) => {
//     res.data.items.map((videoData) => {
//       console.log(videoData.snippet.description);
//     });
//   });

app.post("/youtube-videos", (req, resp) => {
  const { searchQuery } = req.body.body;

  if (searchQuery.length !== 0) {
    google
      .youtube("v3")
      .search.list({
        part: "snippet",
        key: process.env.YOUTUBE_API_KEY,
        q: searchQuery,
        safeSearch: "moderate",
        maxResults: 12,
      })
      .then((res) => {
        resp.json(res.data.items);
      })
      .catch((err) => {
        resp.json(err);
      });
  } else {
    resp.json("Search query is empty.");
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}.`);
});
