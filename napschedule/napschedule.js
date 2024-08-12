let wakeTime;
let bedTime;

function saveTimes(){
    wakeTime = document.getElementById('wake-time').value;
    bedTime = document.getElementById('bed-time').value;
    
    //store value in localStorage
    localStorage.setItem('wake-time', wakeTime);
    localStorage.setItem('bed-time', bedTime);

    //redirect to results page
    window.location.href = 'results.html'
}

//takes in string (wakeTime and bedTime) and MT to ST
function convertTime(time){
    let standard = Number(time);
    if(standard<=12){
        standard = standard.toString()+":00 AM";
    }
    else {
        standard = (standard-12).toString()+":00 PM"
    }
    return standard;
}

wakeTime = localStorage.getItem('wake-time');
bedTime = localStorage.getItem('bed-time');

document.querySelector('.js-wake-time').innerHTML = convertTime(wakeTime);
document.querySelector('.js-bed-time').innerHTML = convertTime(bedTime);
console.log(convertTime(wakeTime));
console.log(Number(bedTime));

function calculate(){
    
    console.log(convertTime(wakeTime));
}

document.querySelector('.js-calculated').innerHTML = calculate();







