// var audio = new Audio("./ymusic/Mo bamba - Shack Wes (audio).mp3");

// function plays() {
//     audio.play();
// }

// function pauses() {
//     audio.pause();
// }

function updateDate() {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString();
    document.getElementById("date").innerHTML = dateString;
}

// Call the function once to initialize the date
updateDate();

// Update the date every second
setInterval(updateDate, 1000);
