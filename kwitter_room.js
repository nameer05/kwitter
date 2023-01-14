
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCS8eVSJk8XrnDv4laEyhgbjqZP_a-Sk00",
      authDomain: "kwitter-dc726.firebaseapp.com",
      databaseURL: "https://kwitter-dc726-default-rtdb.firebaseio.com",
      projectId: "kwitter-dc726",
      storageBucket: "kwitter-dc726.appspot.com",
      messagingSenderId: "895140584678",
      appId: "1:895140584678:web:0a595b6923eb49bce22f27"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname:"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem('username');
      localStorage.removeItem('room_name');
      window.location="index.html";
}