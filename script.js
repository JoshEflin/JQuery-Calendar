var saveBtn = $(".saveBtn");
var timeBlockArr = $(".time-block");
var resetBtn = $(".clear-button");

for (i=0; i< timeBlockArr.length; i++){
  var timeBlock= timeBlockArr[i];
  var scheduledActivity =(JSON.parse(localStorage.getItem(timeBlock.id)));
  console.log(scheduledActivity);
  $(".description")[i].value = scheduledActivity;
}

//  .val(put get item inside )
function displayTime() {
  
  var currentDay = $("#currentDay");
  var today = dayjs();
  currentDay.text(today.format('MMM DD, YYYY  hh:mm '));
  
  //  for  each item in class "time-block"
  for (i=0; i< timeBlockArr.length; i++){
    var timeBlock= timeBlockArr[i];
    var scheduledTime = timeBlock.id.slice(5);
    console.log(timeBlock)
    if (scheduledTime < today.$H){
    timeBlock.className = "row time-block past";
    }else if (scheduledTime == today.$H){
      timeBlock.className = "row time-block present";
    }else if (scheduledTime> today.$H){
      timeBlock.className = "row time-block future";
    }
  }
}

// sets local storage to the value of the text area at that time block when use presses save button
function saveUserInput() {
  var textExtraction = $(this).siblings('.description')[0];
  var textParent= $(this).parents()[0].id;
  localStorage.setItem(textParent,JSON.stringify(textExtraction.value));
}
displayTime();
$(document).ready (setInterval(displayTime,60000));

resetBtn.on('click', function clearStorage() {
  localStorage.clear();
  window.location.reload();
});

saveBtn.on('click', saveUserInput);