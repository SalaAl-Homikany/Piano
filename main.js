
 function playSound(note) {
    var audio = new Audio('tunes/' + note + '.wav');
    audio.play();
  }

  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var note = this.id;
      playSound(note);
    });
  }


function showing(sou){

    document.getElementById("show").innerHTML =sou;

    }
   
