const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(`욱님 점심 맛있게 드세요. ^^ ${port}`);
});

// app.get("/:name", (req, res) => {
//   res.send(`Hello ${req.params.name}`);
// });

app.get("/apple-app-site-association", (req, res) => {
  // 파일 시스템에서 apple-site-association 파일을 읽습니다.
  fs.readFile(__dirname + '/apple-app-site-association', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    // 파일 내용을 그대로 응답으로 전달합니다.
    res.type('json').send(data);
  });
});

app.get("/.well-known/apple-app-site-association", (req, res) => {
  // 파일 시스템에서 apple-site-association 파일을 읽습니다.
  fs.readFile(__dirname + '/.well-known/apple-app-site-association', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    // 파일 내용을 그대로 응답으로 전달합니다.
    res.type('json').send(data);
  });
});
