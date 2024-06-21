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
    room_name = localStorage.getItem("room_name");   

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code
console. log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message+"</h4>";
like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+"value ="+like+"onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glypicon glypicon-thumbs-up'>like : "+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
      getData();
      function send()  {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  messsage:msg,
                  like:0
            });   
      document.getElementById("msg").value= "";
      }

      function updateLike(message_id){
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            update_likes = Number(likes) + 1 ;
            console.log(update_likes);

            firebase.database().ref(room_name).child(message_id).update({
                  like : update_likes
            });
            }
     
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}