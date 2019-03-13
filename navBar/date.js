let day = document.getElementById("day");
let time = document.getElementById("time");

//set up the function
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

function updateTime() {
  let d = new Date();
  time.innerText = d.getHours() + ":" + d.getMinutes();
}

//trigger the functions
updateDate();
updateTime();
setInterval(function() {
  updateTime();
}, 60000);
