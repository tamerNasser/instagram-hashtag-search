const GITHUB_API = config.githubApi;
const GITHUB_TOKEN = config.accessToken;


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
  let userEmail = document.getElementById(username).getElementsByClassName("avatarInfo")[0].childNodes[5];
  // console.log(userDesc);
  getData(GITHUB_API + username + GITHUB_TOKEN, function(userData) {
     // console.log(userData);
     userID.innerHTML = userData.name;
     userAvatar.src = userData.avatar_url;
     userDesc.innerHTML = userData.bio;
     userEmail.textContent= userData.email;
 });
}

function getUserReposData(username){
  let userLangs = document.getElementById(username).getElementsByClassName("avatarInfo")[0].childNodes[3];
    try {
      let reposArr = [];
      getData(GITHUB_API + username + '/repos'+ GITHUB_TOKEN, function(d) {
        // console.log(d.length);
        for (let i = 0; i < d.length; i++) {
          if (!isthere(d[i].language, reposArr)) {
            reposArr.push(d[i].language);
            console.log(d[i].language);
            userLangs.innerHTML+=d[i].language+" / ";
          }
        }

      });

    } catch (ex) {
      console.log(ex);
    }
}

function isthere(lang, arr) {
  if (arr.length <= 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === lang) return true;
  }
  return false;
}
getUserReposData("tamernasser");
getUserReposData("majdya");
getUserData("tamernasser");
getUserData("majdya");
