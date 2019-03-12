const GITHUB_API = 'https://api.github.com/users/';
const GITHUB_TOKEN = '';


function getData(url, cb) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return cb(data);
    })
    .catch(function(error) {
      return error;
    })
}

function getUserData(username) {
  let userID = document.getElementById(username).getElementsByClassName("avatarName")[0].getElementsByTagName("p")[0];
  let userAvatar = document.getElementById(username).getElementsByClassName("avatar")[0];
  let userDesc = document.getElementById(username).getElementsByClassName("avatarInfo")[0].childNodes[1];
  console.log(userDesc);
  getData(GITHUB_API + username + GITHUB_TOKEN, function(userData) {
     console.log(userData);
     userID.innerHTML = userData.name;
     userAvatar.src = userData.avatar_url;
     userDesc.innerHTML = userData.bio;
 })
}

getUserData("tamernasser");
getUserData("majdya");
