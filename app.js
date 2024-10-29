
const express = require("express");
const logger = require("morgan");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (request, response) => {
    response.sendFile(__dirname + "/views/blog.html");
});

const projects = require(__dirname + "/data/projects.json");
app.get("/api/projects", (request, response) => {
    response.json(projects);
});

const articles = require(__dirname + "/data/articles.json");
app.get("/api/articles", (request, response) => {
    response.json(articles);
});

app.get("*",(request, response) => {
    response.status(404).sendFile(__dirname + "/views/not-found.html");
});

const port = 5005;
app.listen(port, () => console.log("Express Server running on " + port));
