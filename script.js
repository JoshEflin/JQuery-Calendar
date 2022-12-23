
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// use an if statement to check the current hour, and update the class of the time block so that it displays 
// as the currect color


// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
$(document).ready (function () {
  console.log("ready")
  var currentDay = $("#currentDay");
  var today = dayjs();
  currentDay.text(today.format('MMM D, YYYY, hh:mm:ss'))
  console.log(today);
  var timeBlockArr = $(".time-block");
  console.log(timeBlockArr);
  
  for (i=0; i< timeBlockArr.length; i++){
    var timeBlock= timeBlockArr[i];
    var scheduledTime = timeBlock.id.slice(5);
    console.log(scheduledTime)
    console.log(today.$H)
  
    if (scheduledTime < today.$H){
    timeBlock.className = "row time-block past";
    }else if (scheduledTime == today.$H){
      timeBlock.className = "row time-block present";
    }else if (scheduledTime> today.$H){
      timeBlock.className = "row time-block future";
    }
  }
    
  
  //  for  each item in class "time-block" if  the hour id is less than current hour
  // set the class attribute of that  div to past
  // else
  // if its the same, set the class attribute of the div to present
  // else set the class attribute of the div to future


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
  // TODO: Add code to display the current date in the header of the page.
});
