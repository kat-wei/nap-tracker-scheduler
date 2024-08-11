

function saveTimes() {
    const wakeTime = document.getElementById('wake-time').value;
    const sleepTime = document.getElementById('sleep-time').value;
    // console.log(wakeTime);
    // console.log(sleepTime);

    localStorage.setItem('wakeTime', wakeTime);
    localStorage.setItem('sleepTime', sleepTime);
    
}

function loadTimes(){
    const wakeTime = localStorage.getItem('wakeTime');
    const sleepTime = localStorage.getItem('sleepTime');

    console.log(wakeTime);
    console.log(sleepTime);
}

saveTimes();
loadTimes();

// // Retrieve the saved times from localStorage
// function loadTimes() {
//     const wakeTime = localStorage.getItem('wakeTime');
//     const sleepTime = localStorage.getItem('sleepTime');

// }
