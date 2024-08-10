

function saveTimes() {
    // const wakeTime = document.getElementById('wake-time').value;
    // const sleepTime = document.getElementById('sleep-time').value;
    // console.log(wakeTime);
    // console.log(sleepTime);

    // localStorage.setItem('wakeTime', wakeTime);
    // localStorage.setItem('sleepTime', sleepTime);
    window.location.href = "schedule.html";
}

// // Retrieve the saved times from localStorage
// function loadTimes() {
//     const wakeTime = localStorage.getItem('wakeTime');
//     const sleepTime = localStorage.getItem('sleepTime');
//     if (wakeTime !== null) {
//         document.getElementById('wake-time').value = wakeTime;
//     }
//     if (sleepTime !== null) {
//         document.getElementById('sleep-time').value = sleepTime;
//     }
// }

// // Load the saved times when the page loads
// window.onload = loadTimes;