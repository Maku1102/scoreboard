let homeScoreEl = document.getElementById("hm-scr")
console.log(homeScoreEl)
let guestScoreEl = document.getElementById("gst-scr")
console.log(guestScoreEl)
let resetSaveEl = document.getElementById("reset-save")
let homeScore = 0
let guestScore = 0

function homeadd1() {
 homeScore += 1
 homeScoreEl.textContent = homeScore
}

function homeadd2() {
  homeScore += 2
  homeScoreEl.textContent = homeScore
 }

 function homeadd3() {
  homeScore += 3
  homeScoreEl.textContent = homeScore
 }

 function guestadd1() {
  guestScore += 1
  guestScoreEl.textContent = guestScore
 }

 function guestadd2() {
  guestScore += 2
  guestScoreEl.textContent = guestScore
 }

 function guestadd3() {
  guestScore += 3
  guestScoreEl.textContent = guestScore
 }

function reset() {
  let saveEl = " ( " + homeScore + " - "+ guestScore + " ) " + " - "
  resetSaveEl.textContent += saveEl
  guestScoreEl.textcontent = 0
  homeScoreEl.textContent = 0
  guestScore = 0
  homeScore = 0
}