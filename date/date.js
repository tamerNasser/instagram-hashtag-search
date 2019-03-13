function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = dd + '/' + mm + '/' + yyyy;
  console.log(today);
  return today;
}

function getTime() {
  var d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
  return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
var day = document.getElementById("day");
day.innerText = getDate();

var time = document.getElementById("time");
time.innerText = getTime();
