let wakeTime;
let bedTime;

function saveTimes(){
    wakeTime = document.getElementById('wake-time').value;
    bedTime = document.getElementById('bed-time').value;
    
    //store value in localStorage
    localStorage.setItem('wake-time', wakeTime);
    localStorage.setItem('bed-time', bedTime);

    //redirect to results page
    window.location.href = '/results.html'
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
    };

    //1. power nap, 2. power nap and full cycle sleep
    const difference = endTime-beginTime;

    //custom text for each
    if(difference===1){
        return 'Take a power nap! ' + 
            `<div class="ideal-box">
                ${convertTime(beginTime) + ' - ' + convertTime(endTime)}
            </div>
            ` +
            `<hr color="#fff">`+
            generatePNText();
    }else{
        //add more info about full cycle nap! fix formatting in css
        return 'Take a power nap or a full cycle nap between the times: ' + 
        `<div class="ideal-box">
            ${convertTime(beginTime) + ' - ' + convertTime(endTime)}
        </div>
        ` +
        `<hr color="#fff">`+
        generatePNText() +
        `<hr color="#fff">`+
         generateFCText();
    }
}

function generatePNText(){
    let text = '';
    text = "A power nap is around between 15 to 20 minutes. Avoid napping over 30 minutes. " +
    "The benefits are: " +
    `<ul class="bullet-points">
        <li> <strong> Boosts Alertness and Focus:</strong> A short nap can improve your alertness and concentration without entering deeper sleep stages, making it easier to wake up and get back to work quickly. </li>
        <li> <strong> Enhances Mood:</strong> Power naps can help reduce stress and improve your mood by giving your brain a quick break. </li>
        <li> <strong>Increases Energy Levels:</strong> Even a brief rest can replenish your energy, helping you to overcome afternoon fatigue. </li>
    </ul>`;

    return text;

}

function generateFCText(){
    let text = '';
    text = "A full cycle nap is around 90 to 110 minutes long. A full cyle nap allows you to go" +
    " through all the stages of sleep, and you'll wake up feeling refreshed and alert. The benefits are: " +
    `<ul class="bullet-points">
        <li><strong>Memory Consolidation:</strong> A full cycle nap allows for both deep and REM sleep, which are crucial for memory retention and learning.</li>
        <li><strong>Physical Restoration:</strong> This nap length supports muscle recovery, immune function, and overall physical rejuvenation by going through all sleep stages.</li>
        <li><strong>Improves Creativity and Problem-Solving:</strong> The REM stage in a full cycle nap boosts creativity and enhances your ability to solve complex problems.</li>
    </ul>`;

    return text;
}

document.querySelector('.js-calculated').innerHTML = calculate();







