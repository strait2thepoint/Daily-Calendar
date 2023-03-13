$(function () {
currentHour
 = dayjs().hour();
 for (let i = 6; i < 18; i++){
  if (i < currentHour){
    $('#hour-' +i).addClass('past');
    } else if (i > currentHour){
      $('#hour-' +i).addClass('present');
    } else {
      $('#hour-' +i).addClass('future');
    }
 }
});

function displayTime (){
  let thisMinute = dayjs().format("MMM DD, YYYY");
  const displayTime = document.querySelector('#currentDay');
  displayTime.innerText = thisMinute
  }
displayTime();

// //working on my own stuff here:  need loop for rest of hours

let saveBtn = document.querySelector('.saveBtn');  
let description = document.querySelector('.description'); 

saveBtn.addEventListener('click', addToLocalStorage);

description.value = localStorage.getItem('content');

function addToLocalStorage(){
let content = document.querySelector('.hour-6');
localStorage.setItem('content', description.value);  
}

