// declar global variables, JQuery objects etc. 
var saveBtn = $(".saveBtn");
var timeBlockArr = $(".time-block");
var resetBtn = $(".clear-button");

// load page with local storage items inside of text areas if applicable
for (i = 0; i < timeBlockArr.length; i++) {
  var timeBlock = timeBlockArr[i];
  var scheduledActivity = (JSON.parse(localStorage.getItem(timeBlock.id)));
  $(".description")[i].value = scheduledActivity;
}
// display time  and assign colors to divs based on the time of day it is
function displayTime() {
  var currentDay = $("#currentDay");
  var today = dayjs();
  currentDay.text(today.format('MMM DD, YYYY  hh:mm '));
  //  for  each item in class "time-block"
  for (i = 0; i < timeBlockArr.length; i++) {
    var timeBlock = timeBlockArr[i];
    var scheduledTime = timeBlock.id.slice(5);
    if (scheduledTime < today.$H) {
      timeBlock.className = "row time-block past";
    } else if (scheduledTime == today.$H) {
      timeBlock.className = "row time-block present";
    } else if (scheduledTime > today.$H) {
      timeBlock.className = "row time-block future";
    }
  }
}
// sets local storage to the value of the text area at that time block when use presses save button
function saveUserInput() {
  var textExtraction = $(this).siblings('.description')[0];
  var textParent = $(this).parents()[0].id;
  localStorage.setItem(textParent, JSON.stringify(textExtraction.value));
}
// call display time function  and set its interval to every minute
displayTime();
$(document).ready(setInterval(displayTime, 60000));
// clear local storage and refresh page
resetBtn.on('click', function clearStorage() {
  localStorage.clear();
  window.location.reload();
});
// event listener 
saveBtn.on('click', saveUserInput);