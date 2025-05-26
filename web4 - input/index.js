//  How to accept  user input

/// 1. Easy way = window prompt
/// 2. professional way = html textbox

let username;

// username = window.prompt("What's your user name?"); 
// console.log(username);

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myTxt").value;
    console.log(username);
    document.getElementById("myh1").textContent = `Hello ${username}`;
}