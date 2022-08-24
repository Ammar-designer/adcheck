const d = new Date();
let time = d.getTime();

function myscript()
{
    window.location.href = "Second Page/index2.html"
}

document.getElementById("next").onclick = myscript;

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);