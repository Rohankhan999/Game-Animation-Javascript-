var forward = 0;
var bacward = 0;
var isJumping = false;
var characterWidth = 50; 
var screenWidth = window.innerWidth;

function abc(event) {
    console.log(event.keyCode);

    
    var character = document.getElementById("ryu");
    if (event.keyCode === 68) { 
        if (forward + characterWidth < screenWidth) {
            forward += 10;
            character.style.left = forward + "px";
            character.src = "images/ryu-cfe-walkf.gif";
        }
    }
    if (event.keyCode === 65) {
        if (forward > 0) {
            forward -= 10;
            character.style.left = forward + "px";
            character.src = "images/ryu-sf2-walkb.gif";
        }
    }
    if (event.keyCode === 83) { 
        character.src = "images/ryu-redhado.gif";
    }
    if (event.keyCode === 32 && !isJumping) { 
        isJumping = true;
        character.classList.add("jump");
        character.src = "images/ryu-sf2-shoryuken.gif";
    }

    
    var character2 = document.getElementById("ken");
    if (event.keyCode === 37) { 
        if (bacward + characterWidth < screenWidth) {
            bacward += 10;
            character2.style.right = bacward + "px";
            character2.src = "images/ken-cvs-walkforward.gif";
        }
    }
    if (event.keyCode === 39) {
        if (bacward > 0) {
            bacward -= 10;
            character2.style.right = bacward + "px";
            character2.src = "images/ken-walkb.gif";
        }
    }
    if (event.keyCode === 40) { 
        character2.src = "images/ken-cvs-roll.gif";
    }
    if (event.keyCode === 38 && !isJumping) { 
        isJumping = true;
        character2.classList.add("jump");
        character2.src = "images/ken-jumpf.gif";
    }

    
    setTimeout(function () {
        character.style.bottom = "10px";
        character2.style.bottom = "10px";
        isJumping = false;
    }, 1500);
}


function resetCharacter() {
    var character = document.getElementById("ryu");
    var character2 = document.getElementById("ken");

   
    character.src = "images/ryu.gif";
    character.style.bottom = "10px";

  
    character2.src = "images/ken.gif";
    character2.style.bottom = "10px";
}

window.onkeydown = abc;
window.onkeyup = resetCharacter;
