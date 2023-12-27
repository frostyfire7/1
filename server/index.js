const express = require("express");
const path = require("path");
const dir = path.resolve();
const staticFilePath = path.join(dir, "public");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(staticFilePath));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(staticFilePath, "index.html"));
});

app.get("/cars", (req, res) => {
  res.status(200).sendFile(path.join(staticFilePath, "search.html"));
});

app.get("/*", (req, res) => {
  res.status(404).sendFile(path.join(staticFilePath, "not_found.html"));
});

app.listen(PORT, () => {
  console.log(`Server Listen on port http://localhost:${PORT}`);
});
