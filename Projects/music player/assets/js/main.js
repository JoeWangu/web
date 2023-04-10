function updateDate() {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString();
    document.getElementById("date").innerHTML = dateString;
}

// Call the function once to initialize the date
updateDate();

// Update the date every second
setInterval(updateDate, 1000);

// music player starts here
//assign all elements in the html to variables
let now_playing = document.querySelector(".now-playing");
let track_img = document.querySelector(".track-img");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".play-pause");
let next_btn = document.querySelector(".next");
let prev_btn = document.querySelector(".prev");

let seek_slider = document.querySelector("#progress");
let volume_slider = document.querySelector(".volume-slider");
let curr_time = document.querySelector(".start-time");
let total_duration = document.querySelector(".end-time");

// specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;


//create the audio element for the player
let curr_track = document.createElement("audio");

//define the list of tracks that have to be played
// let track_list = [
//     {
//         name: "Running Up That Hill",
//         artist: "Kim Petras",
//         image: "https://i.ytimg.com/vi/rfiQIHUmG7I/maxresdefault.jpg",
//         path: "./assets/ymusic/Kim Petras - Running Up That Hill.mp3",
//     },
//     {
//         name: "Never Really Loved Me",
//         artist: "Kygo and Dean Lewis.mp3",
//         image: "https://i.ytimg.com/vi/RfZvyyAgGCA/maxresdefault.jpg",
//         path: "./assets/ymusic/Kygo, Dean Lewis - Never Really Loved Me.mp3",
//     },
//     {
//         name: "YOU MAKE ME FEEL LIKE IT'S HALLOWEEN",
//         artist: "MUSE",
//         image: "https://i.ytimg.com/vi/oyu1WO0hRB0/maxresdefault.jpg",
//         path: "./assets/ymusic/MUSE - YOU MAKE ME FEEL LIKE IT'S HALLOWEEN.mp3",
//     },
//     {
//         name: "Look At Me",
//         artist: "XXXTENTACION",
//         image: "https://i.ytimg.com/vi/mIl8ar3ErgU/maxresdefault.jpg",
//         path: "./assets/ymusic/XXXTENTACION - Look At Me.mp3",
//     }
// ];

// < !--Add this input element to your HTML file-- >
// <input type="file" id="file-input" multiple>

/* Modify your JavaScript code to dynamically add tracks to the track_list array */
let track_list = []; // initialize an empty array

// Listen for changes to the file input element
let fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", (event) => {
    let files = event.target.files; // get the selected files

    // Iterate over each file and add a new track to the track_list array
    for (let file of files) {
        let track = {
            name: file.name,
            path: URL.createObjectURL(file), // use createObjectURL to generate a URL for the selected file
            image: "",
        };
        track_list.push(track);
    }

    console.log(track_list); // log the updated track list to the console
    loadTrack(track_index);
});


function loadTrack(track_index) {
    //clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();

    //load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    //update details of the track
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    // track_img.style.backgroundImage = "url("+ track_list[track_index].image +")";
    // track_img.src = track_list[track_index].image;
    if (track_list[track_index].image == "") track_img.src = "./assets/media/profile.png"
    else track_img.src = track_list[track_index].image

    //set an interval of 1000 milliseconds for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);

    //move to the next track if the current finishes playing using the ended event
    curr_track.addEventListener("ended", nextTrack);

    //apply a random background color
    random_bg_color();
    setVolume();
}

function random_bg_color() {
    // get a random number between 64 and 256 for getting lighter colors
    let red = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;

    //construct a color with the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")"

    //set the background to the new color
    document.body.style.backgroundColor = bgColor;
}

//function to reset all values to their default
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    volume_slider.value = 10;
}

function playpauseTrack() {
    //switch btw playing and pausing according to current state
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    //play the loaded track
    curr_track.play();
    isPlaying = true;

    //replace icon with the pause icon
    playpause_btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseTrack() {
    //pause the loaded track
    curr_track.pause();
    isPlaying = false;

    //replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function nextTrack() {
    //go back to the first track if the current one is the last in the track list
    if (track_index < track_list.length - 1) track_index += 1;
    else track_index = 0;

    //load and play the newly loaded track
    loadTrack(track_index);
    playTrack();
}

function prevTrack() {
    //go back to the last track if the current one is the first in the track list
    if (track_index > 0) track_index -= 1;
    else track_index = track_list.length - 1;

    //load and play the newly loaded track
    loadTrack(track_index);
    playTrack();
}

function seekTo() {
    //calculate the seek position by the percentage of the seek slider and get the relative duration of the track
    let seekto = curr_track.duration * (seek_slider.value / 100);

    //set the current track position to the calculated seek position
    curr_track.currentTime = seekto;
}

function setVolume() {
    //set the volume according to the percentage of the volume slider
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    //check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        //calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        //add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        //display the updated duration
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

//load the first track in the tracklist
// loadTrack(track_index);