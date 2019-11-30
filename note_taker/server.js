var express = require("express");
var path = require("path");
var app = express();
var fs = require("fs");
var PORT = process.env.PORT || 3000;

var notes = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function(req, res) {
  return res.json(notes);
});

app.get("/api/notes", function(req, res) {
  res.json(fs.read(path.join(__dirname, "db/db.json")));
});

app.post("/api/notes", function(req, res) {
  var newNote = req.body;  
  console.log(newNote);
  notes.push(newNote);
  res.json(newNote);
});

app.delete("/api/notes", function (req, res) {
  var noteID = $(this).val();
  console.log("Note has been successfully deleted,");
  res.json(noteID);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });