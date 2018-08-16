$(document).ready(function() {
  console.log('Hello from teams-ajax.js!');
  // TO DO: Define calls to PUT and DELETE routes here
  $("#edit-form").submit(function(e){
  	e.preventDefault();
  	var teamUrl = $(this).attr("action");
  	var teamData = $(this).serialize();
  	console.log('url is', teamUrl)
  	console.log('data', teamData)

  	$.ajax({
  		method: "PUT",
  		url: teamUrl,
  		data: teamData,
  	}).done(function(data){
  		console.log("success!", data);
  		window.location = teamUrl;
  	}).fail(function(err){
  		console.log("error", err)
  	}); //end of ajax
  }) //end of edit-form submit

  $("#delete-btn").click(function(e){
  	e.preventDefault();
  	var teamUrl = $(this).attr("href");
  	console.log("stuff is working", teamUrl)
  	$.ajax({
  		method: "DELETE",
  		url: teamUrl,
  	}).done(function(data){
  		console.log('success', data);
  		window.location = "/teams";
  	}).fail(function(err){
  		console.log("err", err);
  	})
  })
}); //end of document ready
