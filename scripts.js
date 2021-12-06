
            else {
              pusheenWin.style.visibility="visible";
            }
            declareWinner = true;
            var winnerImg = document.getElementById(racerId);
            winnerImg.addEventListener("click", ChangeLightColor);
        }
    }
  }

    /*    Reset race */
    function ResetRace() {
        ResetRacer("nyan");
        ResetRacer("pusheen");
    }

    function ResetRacer(racerId) {
        var racer = document.getElementById(racerId);
        racer.style.left = 0 + "px";
        racer.removeEventListener("click",  ChangeLightColor);
    }


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
