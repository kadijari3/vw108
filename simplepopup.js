function showPopup() {
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

popup.style.display = "block";
overlay.style.display = "block";

setTimeout(() => {
popup.style.display = "none";
overlay.style.display = "none";
}, 3000);
}
// Show the popup every 5 seconds
setInterval(showPopup, 5000);
