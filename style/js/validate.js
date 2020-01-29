var processing = false;
function Validate() {
    if (processing) return;
    processing = true;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            processing = true;
            if (this.status != 200) {
                if (this.status == 204) window.location.replace("/free/free-minecraft-alt");
                else {
                    console.log('Redirecting to alts/..');
                    window.location.replace("/free/free-minecraft-alts");
                }
            }
        }
    };
    var secondsPassed = 0;
    var secondsRequired = 15;
    var interval = setInterval(function() {
        secondsPassed++;
        if (secondsPassed >= secondsRequired) {
            clearInterval(interval);
            document.getElementById('wait-text').innerText = "";
            document.getElementById('continue-button').removeAttribute("disabled");
            console.log('Done waiting');
        } else {
            document.getElementById('wait-text').innerText = "Please wait " + (secondsRequired - secondsPassed) + "...";
            console.log('Need to wait ' + (secondsRequired - secondsPassed))
        }
    },
    1000);
}
function Redirect() {
    window.location.replace("free-minecraft-alt.html");
}