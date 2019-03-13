let day = document.getElementById("day");
let time = document.getElementById("time");

//A function to get the current date and set it in DOM.
function updateDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = dd + '/' + mm + '/' + yyyy;
  day.innerText = today;
}

//A function to get the current time and set it in DOM.
function updateTime() {
  let d = new Date();
  time.innerText = d.getHours() + ":" + d.getMinutes();
}

// Call the functions.
updateDate();
updateTime();

// Calling the time function each minute.
setInterval(function() {
  updateTime();
}, 60000);
