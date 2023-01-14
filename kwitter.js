function NextScreen(){
    user_name=document.getElementById("userName").value;
    localStorage.setItem("username",user_name);
    window.location="kwitter_room.html";
}