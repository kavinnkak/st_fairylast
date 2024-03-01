
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBahe-Ft7duPoOnMS_6cz2pxcw9Acphym8",
    authDomain: "chat-253d0.firebaseapp.com",
    databaseURL: "https://chat-253d0-default-rtdb.firebaseio.com",
    projectId: "chat-253d0",
    storageBucket: "chat-253d0.appspot.com",
    messagingSenderId: "349327624506",
    appId: "1:349327624506:web:c31d73d6f49b4a1352a803",
    measurementId: "G-BVDL3YNN1V"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;


    //End code
    });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name+"!";


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location ="kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";



}

function logout()
{
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}