const INSTAGRAM_API = 'https://www.instagram.com/explore/tags/';
const INSTAGRAM_API_QUERY = '/?__a=1';
const INSTAGRAM_POST_URL = 'https://www.instagram.com/p/';

setPostsInfo('winter'); // Get the posts for winter as default.


// A function to link the search button with the input field.(add listener).
function searchLink() {
  let optionMedia = "top";
  let input = document.getElementById("inputHashtag");
  let btnSearch = document.getElementById("btnSearchHashtag");
  let selectOption = document.getElementById("option");
  btnSearch.addEventListener("click", function() {
    console.log(selectOption.value);
      setPostsInfo(input.value,selectOption.value);
  });
}

// Gets the top posts related to the hashtag and set it in the DOM.
function setPostsInfo(hashtag,option) {
  let arrItems = Array.from(document.getElementsByClassName("postItem"));
  getData(INSTAGRAM_API + hashtag + INSTAGRAM_API_QUERY, function(data) {
    let arrPosts;
    if(option=="recent"){
      arrPosts =  data.graphql.hashtag.edge_hashtag_to_media.edges;
  }else {
    arrPosts = data.graphql.hashtag.edge_hashtag_to_top_posts.edges;

  }
    for (let i = 0; i < arrItems.length; i++) {
      arrItems[i].childNodes[1].firstChild.src = arrPosts[i].node.display_url;
      arrItems[i].childNodes[1].href = INSTAGRAM_POST_URL + arrPosts[i].node.shortcode;
      arrItems[i].childNodes[3].innerHTML ="<img src='instagram/assets/icons/heart.png' alt='heartIcon'>"+ " " + arrPosts[i].node.edge_media_preview_like.count.toString();
      arrItems[i].childNodes[5].innerHTML = arrPosts[i].node.edge_media_to_caption.edges[0].node.text;
    }
  })
  for (let i = 0; i < arrItems.length; i++) {
    arrItems[i].childNodes[5].innerHTML = reduceString(arrItems[i].childNodes[5].innerHTML);
  }
}

// A function to reduce the string length.
function reduceString(s) {
  if (s.length > 60) return s.substring(0, 60).toString();
  return s.toString();
};

// Call the function.
searchLink();
