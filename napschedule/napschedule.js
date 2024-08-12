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

// .wake-box, .bed-box{
//     color: #fff;
//     background-color: #565678;
//     width: 195px;
//     height: 50px;
// }

document.querySelector('.js-wake-time').innerHTML = `
    <div class="wake-box">
        ${convertTime(wakeTime)}
    </div>`;
document.querySelector('.js-bed-time').innerHTML = `
    <div class="bed-box">
        ${convertTime(bedTime)}
    </div>
`;
console.log(convertTime(wakeTime));
console.log(Number(bedTime));

//calculating ideal nap segment

function calculate(wakeTimeMT, bedTimeMT){
    let results;
    wakeTimeMT = Number(localStorage.getItem('wake-time'));
    bedTimeMT = Number(localStorage.getItem('bed-time'));
    const beginTime = wakeTimeMT+6;
    const endTime = bedTimeMT-7;
    console.log(beginTime);
    console.log(endTime);

    if(endTime<=beginTime){
        return "Looks like taking a nap isn't optimal today! Try again tomorrow :("
    }

    //1. power nap, 2. power nap and full cycle sleep
    const difference = endTime-beginTime;

    //custom text for each
    if(difference===1){
        return 'Take a power nap! ' + 
            convertTime(beginTime) + ' - ' + convertTime(endTime) +
            'A power nap is around between 15 to 20 minutes. Avoid napping over 30 minutes. ' +
            'The benefits are: ';
    }else{
        //add more info about full cycle nap! fix formatting in css
        return 'Take a power nap or a full cycle nap between the times: ' + 
        convertTime(beginTime) + ' - ' + convertTime(endTime) +
        'A power nap is around between 15 to 20 minutes. Avoid napping over 30 minutes. ' +
        'The benefits are: ';
    }
}

document.querySelector('.js-calculated').innerHTML = calculate();







