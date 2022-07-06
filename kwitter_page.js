const firebaseConfig = {
    apiKey: "AIzaSyB9VyjyK6SK4AvhJYLv8K5v8Dnl85WeGZ0",
    authDomain: "p-kwitter-app.firebaseapp.com",
    databaseURL: "https://p-kwitter-app-default-rtdb.firebaseio.com",
    projectId: "p-kwitter-app",
    storageBucket: "p-kwitter-app.appspot.com",
    messagingSenderId: "656719846186",
    appId: "1:656719846186:web:37901ea50ac9ab37631c53"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      
});
document.getElementById("msg").value="";

}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";

}