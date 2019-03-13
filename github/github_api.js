const GITHUB_API = config.githubApi;
const GITHUB_TOKEN = config.accessToken;

// Static function to get API response.
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

// Gets all the info from the API and set it in the DOM.
function getUserData(username) {
  let userID = document.getElementById(username).getElementsByClassName("avatarName")[0].getElementsByTagName("p")[0];
  let userAvatar = document.getElementById(username).getElementsByClassName("avatar")[0];
  let userDesc = document.getElementById(username).getElementsByClassName("avatarInfo")[0].childNodes[1];
  let userEmail = document.getElementById(username).getElementsByClassName("avatarInfo")[0].childNodes[5];
  getData(GITHUB_API + username + GITHUB_TOKEN, function(userData) {
    userID.innerHTML = userData.name;
    userAvatar.src = userData.avatar_url;
    userData.bio !== null ? userDesc.innerHTML = '"' + userData.bio + '"' : null;
    userEmail.textContent = userData.email;
  });
}

// Get all data about repos and set the related values in DOM.
function getUserReposData(username) {
  let userLangs = document.getElementById(username).getElementsByClassName("avatarInfo")[0].childNodes[3];
  try {
    let reposArr = [];
    getData(GITHUB_API + username + '/repos' + GITHUB_TOKEN, function(d) {
      for (let i = 0; i < d.length; i++) {
        if (!isthere(d[i].language, reposArr)) {
          reposArr.push(d[i].language);
          i != d.length ? userLangs.innerHTML += d[i].language + " | " : userLangs.innerHTML += d[i].language;;
        }
      }
    });

  } catch (ex) {
    console.log(ex);
  }
}

// Checks if the the str is included in arr.
function isthere(lang, arr) {
  if (arr.length <= 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === lang) return true;
  }
  return false;
}

// Call the functions.
getUserReposData("tamernasser");
getUserReposData("majdya");
getUserData("tamernasser");
getUserData("majdya");
