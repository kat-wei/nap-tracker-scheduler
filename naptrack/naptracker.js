
let napList = JSON.parse(localStorage.getItem("napList")) || [{
    name: 'after work nap',
        date: '2024-08-05',
        time: '3:00 PM',
        duration: '20 minutes',
        qualityOfSleep: `
        <div class="card">
            <span class="star three">★</span>
            <span class="star three">★</span>
            <span class="star three">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            </span>
        </div>
        `
    }];
//end of new

let currentQualityRating = 3;

renderNapList();

function renderNapList(){
    let napListHTML = '';

    napList.forEach(function(napObject, index){
        const{name, date, time, duration, qualityOfSleep} = napObject;
        //generating the HTML
        const html = `
        <div> ${name} </div>
        <div> ${date} </div>
        <div> ${time} </div>
        <div> ${duration} </div>
        <div> ${qualityOfSleep} </div>
        <button onclick="
            deleteNap(${index})
            "class="delete-button"> 
                Delete 
        </button>    
        `;
        napListHTML += html;
        saveToStorage();
    })

    document.querySelector('.js-nap-list').innerHTML = napListHTML;
}

function addNap() {
    const inputName = document.querySelector('.js-nap-input');
    const name = inputName.value;

    const inputDate = document.querySelector('.js-nap-date-input');
    const date = inputDate.value;

    const inputTime = document.querySelector('.js-nap-time-input');
    const time = inputTime.value;

    const inputDuration = document.querySelector('.js-nap-duration-input');
    const duration = inputDuration.value;

    // const inputQuality = document.querySelector('.js-nap-quality-input');
    const quality = `
    <div class ="card">
        ${getStarHTML(currentQualityRating)}
    </div>
    `
    
    input = napList.push({
        name: name,
        date: date,
        time: time,
        duration: duration,
        qualityOfSleep: quality
    });

    inputName.value = '';
    inputDate.value = '';
    inputTime.value = '';
    inputDuration.value = '';

    renderNapList();
}

function deleteNap(index){
    napList.splice(index, 1);
    renderNapList();
}

function loadFromStorage(){
    let storedNaps = JSON.parse(localStorage.getItem('napList'));
    if (storedNaps) {
        napList = storedNaps;
    }
    renderNapList();
}

function saveToStorage() {
    localStorage.setItem('napList', JSON.stringify(napList));
}

loadFromStorage();



//STARS CODE


// To access the stars
let stars = 
	document.getElementsByClassName("star");
let output = 
	document.getElementById("output");

// Funtion to update rating
function gfg(n) {
	remove();
    currentQualityRating=n;
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one";
		else if (n == 2) cls = "two";
		else if (n == 3) cls = "three";
		else if (n == 4) cls = "four";
		else if (n == 5) cls = "five";
		stars[i].className = "star " + cls;
	}
    // error here?
	output.innerText = "Rating is: " + n + "/5";
}

function getStarHTML(rating) {
    let starHTML = '';
    let s = '';
    //change star colors
    if (rating===1){
        s = "star one"
    } else if(rating===2){
        s = "star two"

    } else if(rating===3){
        s = "star three"
        
    } else if(rating===4){
        s = "star four"
        
    } else if(rating===5){
        s = "star five"
    }

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            //fix this
            starHTML += `<span class="${s}">★</span>`;
        } else {
            starHTML += `<span class="star">★</span>`;
        }
    }
    return starHTML;
}

// To remove the pre-applied styling
function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
		i++;
	}
}

//buggy
function updateStars() {
    for (let i = 0; i < stars.length; i++) {
        if (i < currentQualityRating) {
            stars[i].classList.add('five');
        } else {
            stars[i].classList.remove('five');
        }
    }
}

updateStars();

