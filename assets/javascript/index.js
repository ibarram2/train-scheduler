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

		//var a = moment([2007, 0, 29]);
		
		 // 1

		var newTrain = {
    		name: tName,
			destination: tDest,
			time: tFirstTime,
    		frequency: tFreq,
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
		var newTime = newPost.time
		var newFreq = newPost.frequency;
		//var newTime = moment(newPost.time).format("mm"); //not a valid date
		//var newFreq = moment(newPost.frequency).format("mm");
		var tNow = moment().format();
		var Frequency = moment(newTime._i);

		//moment("not a real date").isValid();
		//var duration = moment.duration(tNow).diff(newTime);//not a function?
		//tNow.diff(newTime, "minutes", true);//not a function?
		//var tRemaining = tNow.diff(newTime, "minutes", true);
		//var tRemaining = moment.duration(tNow.diff(newTime));
		//var time = tRemaining.asHours();

		//moment(newTime).diff(moment.unix(tNow),'minutes');
		//console.log(newFreq);
		//console.log(tRemaining);
		//console.log(time);
		console.log(tNow);
		console.log(newTime);

		//console.log(newTime._i);
		console.log(Frequency);

		//console.log(newTime);

		//var empMonths = moment().diff(moment.unix(newStart, "X"), "months");
		//console.log(empMonths);
  
  		//var empBilled = empMonths * newRate;
  		//console.log(empBilled);		
	
		$("#train-table > tbody").append(
			"<tr><td>"
			+ newName + "</td><td>"
			+ newDest + "</td><td>"
			+ newFreq + "</td><td>"
			// note return of moments is something like "35 years"
			+ newTime + "</td></tr>"
			//+ tRemaining + "</td></tr>"
			)

	});
	

		
  		
		
	});
