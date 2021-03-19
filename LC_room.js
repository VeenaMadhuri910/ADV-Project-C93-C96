
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyACjv-jfWolv0PUWOp9ItHVyHgyad8HeGU",
  authDomain: "kwitter-10c4e.firebaseapp.com",
  databaseURL: "https://kwitter-10c4e-default-rtdb.firebaseio.com",
  projectId: "kwitter-10c4e",
  storageBucket: "kwitter-10c4e.appspot.com",
  messagingSenderId: "1034006759939",
  appId: "1:1034006759939:web:e5c2646671a10c54195c36"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_n = localStorage.getItem("user_name");
  document.getElementById("user_names").innerHTML = "Welcome "+user_n+"!";

  function add_room() {
    Room_n = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_n).update({purpose : "adding room name"});
    localStorage.setItem("room_name" , Room_n);
    window.location = "LC_pg.html";
  }

function getData() {
  firebase.database().ref("/").on('value', function(snapshot)
   {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //sconsole.log("Room name - " +Room_n);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "LC_pg.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }