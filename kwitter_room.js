

var firebaseConfig = {
      apiKey: "AIzaSyAeR7NyQ9O-ri2if1375pc9-ix-veC7fpY",
      authDomain: "kwitter-fc6f0.firebaseapp.com",
      databaseURL: "https://kwitter-fc6f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-fc6f0",
      storageBucket: "kwitter-fc6f0.appspot.com",
      messagingSenderId: "344004659534",
      appId: "1:344004659534:web:eec65f230c1cf315adb61f",
      measurementId: "G-DE0RQNMNT2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!"
    
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitterpage.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>"
      document.getElementById("output").innerHTML += row;
            //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitterpage.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}