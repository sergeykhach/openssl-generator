import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    req.redirect("/index.html");
});

app.listen(3001);