//Home Team

let homeScoreBtnOne = document.getElementById("onepoint-btn");
let homeScoreBtnTwo = document.getElementById("twopoints-btn");
let homeScoreBtnThree = document.getElementById("threepoints-btn");
let homePointsEl = document.getElementById("homepoints");
let homePoints = 0;

function increaseHomeScoreOne(){
    homePoints = homePoints + 1
    homePointsEl.textContent = homePoints
}

function increaseHomeScoreTwo(){
    homePoints = homePoints + 2
    homePointsEl.textContent = homePoints
}

function increaseHomeScoreThree(){
    homePoints = homePoints + 3
    homePointsEl.textContent = homePoints
}

//Away Team

let awayScoreBtnOne = document.getElementById("awayonepoint-btn");
let awayScoreBtnTwo = document.getElementById("awaytwopoints-btn");
let awayScoreBtnThree = document.getElementById("awaythreepoints-btn");
let awayPointsEl = document.getElementById("awaypoints");
let awayResetEl = document.getElementById("awayreset")
let awayPoints = 0;
let awayReset = 0;


function increaseAwayScoreOne(){
    awayPoints = awayPoints + 1
    awayPointsEl.textContent = awayPoints
}

function increaseAwayScoreTwo(){
    awayPoints = awayPoints + 2
    awayPointsEl.textContent = awayPoints
}

function increaseAwayScoreThree(){
    awayPoints = awayPoints + 3
    awayPointsEl.textContent = awayPoints
}

