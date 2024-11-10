var forward = 0;
var isJumping = false;  
var screenWidth = window.innerWidth;
var characterWidth = 50; 
function abc(event){
    
    console.log(event.keyCode);


var character = document.getElementById("ryu");
if(event.keyCode === 68){
    if (forward + characterWidth < screenWidth) { 
    forward = forward + 10;
    character.style.left = forward + "px"
    character.src = "images/ryu-cfe-walkf.gif"
    }
}
if(event.keyCode === 65){
    if (forward > 0) {
    forward = forward - 10;
    character.style.left = forward + "px"
    character.src = "images/ryu-sf2-walkb.gif"
    }
}
if(event.keyCode === 83){
    character.src = "images/ryu-redhado.gif"
}
if (event.keyCode === 32 && !isJumping) {  
    isJumping = true;
    character.classList.add("jump");
      
    character.src = "images/ryu-sf2-shoryuken.gif"
    
}
    setTimeout(function() {
        character.style.bottom = "0px"; 
        isJumping = false;  
    }, 1000);
    function resetCharacter() {
    var character = document.getElementById("ryu");
    character.src = "images/ryu.gif";  // Change back to the original image
}
}
function resetCharacter() {
    var character = document.getElementById("ryu");
    character.src = "images/ryu.gif"; 
    character.style.bottom = "10px" // Change back to the original image
}




window.onkeydown = abc ;
window.onkeyup = resetCharacter;