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
let contFl = document.querySelector('.container-fluid');  
let description = document.querySelectorAll('.description'); 

contFl.addEventListener('click', saveAllData)

function saveAllData(e){
  e.preventDefault();
  

  const dataArr = [];
  let descriptions = document.querySelectorAll('.description')

descriptions.forEach((element, index) =>{
  dataArr.push(element.value);
})
  console.log(dataArr);
  localStorage.setItem('content', JSON.stringify(dataArr));
}

const saveDescriptions = JSON.parse(localStorage.getItem('content'));

saveDescriptions.forEach((element, index)=>{
description[index].value = element 
})







//The current above is storing hour-6 to local storage and returning it to hour-6 when you come back to the page.  What I would like to do is try to replace document.querySelector('hour-') with a value within the strArr by using JSON.stringify, maybe.

//description.value change to JSON.stringify(strArr)??
