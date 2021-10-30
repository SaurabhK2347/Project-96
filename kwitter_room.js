var firebaseConfig = {
      apiKey: "AIzaSyB5QT4jJm2Cjo2meZXBFTQuPieepkJ2JSU",
      authDomain: "let-s-chat-6d164.firebaseapp.com",
      databaseURL: "https://let-s-chat-6d164-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-6d164",
      storageBucket: "let-s-chat-6d164.appspot.com",
      messagingSenderId: "329504861801",
      appId: "1:329504861801:web:57803e65bcb6033731bcf8",
      measurementId: "G-5MLG6S6V4J"
    };
    
    firebase.initializeApp(firebaseConfig);

    function addRoom() 
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
