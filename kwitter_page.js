user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");   
  


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
            console.log(firebase_message_id);
            console.log(message_data);
            name = message_data['name'];
message = message_data['message'];
like = message_data['lke'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='lc.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
like_button = "";
span_with_tag = "";


row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;



//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout()
{
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}


function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes

      });
}

