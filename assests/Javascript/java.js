firebase.initializeApp(config);
var config = {
    apiKey: "AIzaSyAS7tFGOs9QivC3ZzmJHX0_coj75pwiyIQ",
    authDomain: "train-scheduler-9eb65.firebaseapp.com",
    databaseURL: "https://train-scheduler-9eb65.firebaseio.com",
    projectId: "train-scheduler-9eb65",
    storageBucket: "",
    messagingSenderId: "420332823248"
};
src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"

var train = firebase.database();

function submitTrain() {
    var trainName = document.getElementById("trainName");
    var destination = document.getElementById("destination");
    var freq = document.getElementById("freq");
    var nextArrival = document.getElementById("nextArrival");
    var minutes = document.getElementById("minutes");
    var newTrain = {
        name: trainName.value,
        dest: destination.value,
        frequency = freq.value,
        arrival = nextArrival.value,
        minAway = minutes.value,
    }
        console.log(newTrain.name);
        console.log(newTrain.dest);
        console.log(newTrain.frequency);
        console.log(newTrain.arrival);
        console.log(newTrain.minAway);
}