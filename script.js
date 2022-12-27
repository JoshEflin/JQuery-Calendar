
// use an if statement to check the current hour, and update the class of the time block so that it displays 
// as the currect color

// WHEN I refresh the userActivity
// THEN the saved events persist
var saveBtn = $(".saveBtn");
var timeBlockArr = $(".time-block");
for (i=0; i< timeBlockArr.length; i++){
  var timeBlock= timeBlockArr[i];
  var scheduledActivity =(JSON.parse(localStorage.getItem(timeBlock.id)))
  console.log(scheduledActivity);
  $(".description")[i].value = scheduledActivity;
}
function displayTime() {
  
  var currentDay = $("#currentDay");
  var today = dayjs();
  currentDay.text(today.format('MMM DD, YYYY  hh:mm:ss '))
  
  
  //  for  each item in class "time-block"
  for (i=0; i< timeBlockArr.length; i++){
    var timeBlock= timeBlockArr[i];
    var scheduledActivity =(JSON.parse(localStorage.getItem(timeBlock.id)))
    var scheduledTime = timeBlock.id.slice(5);
    
    if (scheduledTime < today.$H){
    timeBlock.className = "row time-block past";
    }else if (scheduledTime == today.$H){
      timeBlock.className = "row time-block present";
    }else if (scheduledTime> today.$H){
      timeBlock.className = "row time-block future";
    }
  }
}

 function getSchedule() {
  
 }
 
// sets local storage to the value of the text area at that time block when use presses save button
function saveUserInput() {
  var textExtraction = $(this).siblings('.description')[0];
  var textParent= $(this).parents()[0].id
  localStorage.setItem(textParent,JSON.stringify(textExtraction.value))
}

$(document).ready (setInterval(displayTime,1000)) 

saveBtn.on('click', saveUserInput)
  
 
  
  


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the userActivity.

