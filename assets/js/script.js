// Get the audio element
const backgroundMusic = document.getElementById('backgroundMusic');

// Get the countdown elements
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Set the countdown date
const countdownDate = new Date('2023-12-25T00:00').getTime();

// Update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const difference = countdownDate - now;

    const daysValue = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursValue = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesValue = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsValue = Math.floor((difference % (1000 * 60)) / 1000);

    days.innerHTML = daysValue < 10 ? '0' + daysValue : daysValue;
    hours.innerHTML = hoursValue < 10 ? '0' + hoursValue : hoursValue;
    minutes.innerHTML = minutesValue < 10 ? '0' + minutesValue : minutesValue;
    seconds.innerHTML = secondsValue < 10 ? '0' + secondsValue : secondsValue;
}

// Update the countdown every second
const updateTime = setInterval(updateCountdown, 1000);

// Play background music when the page is clicked
document.addEventListener('click', function () {
    backgroundMusic.play();
});

// Pause background music when the page is not in focus
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play();
    }
});
