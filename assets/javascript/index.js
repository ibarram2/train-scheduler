$(document).ready(function() {

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCjZLDe6L75Lk-stAmJrWYhp354V5-d7j0",
    authDomain: "train-scheduler-bbb2d.firebaseapp.com",
    databaseURL: "https://train-scheduler-bbb2d.firebaseio.com",
    projectId: "train-scheduler-bbb2d",
    storageBucket: "train-scheduler-bbb2d.appspot.com",
    messagingSenderId: "795286826454"
  };
  firebase.initializeApp(config);


	var database = firebase.database();
	
	$("#add-train-btn").click(function() {
		
		// disable the defaul behavior of element "form"
		event.preventDefault();

		// what to do after clicking the button
		var tName = $("#train-name-input").val().trim();
		var tDest = $("#destination-input").val().trim();
		var tFirstTime = $("#start-input").val().trim();
		var tFreq = $("#freq-input").val().trim();
	
		var newTrain = {
    		name: tName,
			destination: tDest,
			time: tFirstTime,
    		frequency: tFreq
		 };
		 
		 console.log(newTrain.name);
  		 console.log(newTrain.destination);
  		 console.log(newTrain.time);
         console.log(newTrain.frequency);
		

		//get new key
		 database.ref().push(newTrain);

		 alert("Train successfully added");
	});
	
	//???
	database.ref().on("child_added", function(snapshot, prevChildKey) {
		var newPost = snapshot.val();
		console.log("Name: " + newPost.name);
		console.log("Destination: " + newPost.destination);
		console.log("Time: " + newPost.time);
		console.log("Frequency: " + newPost.frequency);
		var newName = newPost.name;
		var newDest = newPost.destination;
		var newTime = newPost.time;
		var newFreq = newPost.frequency;

		//var empMonths = moment().diff(moment.unix(newStart, "X"), "months");
		//console.log(empMonths);
  
  		//var empBilled = empMonths * newRate;
  		//console.log(empBilled);
		
	
		$("#train-table > tbody").append(
			"<tr><td>"
			+ newName + "</td><td>"
			+ newDest + "</td><td>"
			+ newTime + "</td><td>"
			// note return of moments is something like "35 years"
			+ newFreq + "</td></tr>")

	});
	

		
  		
		
	});
