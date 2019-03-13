const INSTAGRAM_API = 'https://www.instagram.com/explore/tags/';
const INSTAGRAM_API_QUERY = '/?__a=1';
const INSTAGRAM_POST_URL = 'https://www.instagram.com/p/';

setPostsInfo('winter'); // Get the posts for winter as default.

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

// A function to link the search button with the input field.(add listener).
function searchLink() {
  let input = document.getElementById("inputHashtag");
  let btnSearch = document.getElementById("btnSearchHashtag");
  btnSearch.addEventListener("click", function() {
    setPostsInfo(input.value);
  });
}

// Gets the top posts related to the hashtag and set it in the DOM.
function setPostsInfo(hashtag) {
  let arrItems = Array.from(document.getElementsByClassName("postItem"));
  console.log(arrItems);
  console.log(arrItems[0]);
  console.log(arrItems[0].childNodes);

  getData(INSTAGRAM_API + hashtag + INSTAGRAM_API_QUERY, function(data) {
    let arrPosts = data.graphql.hashtag.edge_hashtag_to_top_posts.edges;
    for (let i = 0; i < arrItems.length; i++) {
      arrItems[i].childNodes[1].firstChild.src = arrPosts[i].node.display_url;
      arrItems[i].childNodes[1].href = INSTAGRAM_POST_URL + arrPosts[i].node.shortcode;
      arrItems[i].childNodes[3].innerHTML += " " + arrPosts[i].node.edge_liked_by.count;
      arrItems[i].childNodes[5].innerHTML = arrPosts[i].node.edge_media_to_caption.edges[0].node.text;
    }
    // console.log(data.graphql.hashtag.edge_hashtag_to_top_posts.edges[0].node.edge_liked_by.count);
    // postsArr = data.graphql.hashtag;
  })
  for (let i = 0; i < arrItems.length; i++) {
    arrItems[i].childNodes[5].innerHTML = reduceString(arrItems[i].childNodes[5].innerHTML);
  }
}

// A function to reduce the string length.
function reduceString(s) {
  if (s.length > 60) return s.subString(0, 60).toString();
  return s.toString();
};

// Call the function.
searchLink();
