//Requires
var bodyParser = require("body-parser");
var express = require("express");
var ejsLayouts = require("express-ejs-layouts");
var teamsDB = require('./models/teamservice.js');

//Global vars
var app = express();

//Set and Use statements
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

//Routes
app.get("/", function(req, res){
  res.render("home");
});

app.get("/teams", function(req, res){
	var allTeams = teamsDB.getAllTeams();
	res.render("teams/index", {teams: allTeams});
});

app.get("/teams/new", function(req, res){
	res.render("teams/new");
})

app.get("/teams/:name", function(req, res){
	var team = teamsDB.getOneTeam(req.params.name);
	res.render("teams/show", {team: team})
});

app.post("/teams", function(req, res){
	teamsDB.addTeam(req.body);
	res.redirect("/teams/" + req.body.name);

})

app.get("/teams/edit/:name", function(req, res){
	var team = teamsDB.getOneTeam(req.params.name);
	res.render("teams/edit", {team: team})
});

app.put("/teams/:name", function(req, res){
	teamsDB.editTeam(req.params.name, req.body)
	res.send("PUUUUUT")
});

app.delete("/teams/:name", function(req, res){
	teamsDB.deleteTeam(req.params.name);
	res.send("Delete!")
});

//Listen
app.listen(3000);
