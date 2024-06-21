var firebaseConfig = {
      apiKey: "AIzaSyA0zh5BTAsOatc649w74o2CS_HVbf9lsxs",
      authDomain: "kwitter-sdatabase.firebaseapp.com",
      databaseURL: "https://kwitter-sdatabase-default-rtdb.firebaseio.com",
      projectId: "kwitter-sdatabase",
      storageBucket: "kwitter-sdatabase.appspot.com",
      messagingSenderId: "1016659085153",
      appId: "1:1016659085153:web:94bbe1d82d10eee19be720"
    };

  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =  "Welcome "+user_name+"!!"
 
function addRoom(){
      var room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
     localStorage.setItem("room_name",room_name);

     window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}