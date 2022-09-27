function addUser() {
    username1=document.getElementById("user_name").value;
    localStorage.setItem("user_name",username1);
    window.location="kwitter_room.html";
}