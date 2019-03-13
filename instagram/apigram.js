const INSTAGRAM_API = 'https://www.instagram.com/explore/tags/';
const INSTAGRAM_API_QUERY = '/?__a=1';
const INSTAGRAM_POST_URL = 'https://www.instagram.com/p/';

setPostsInfo('winter');

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

function searchLink(){
 let input = document.getElementById("inputHashtag");
 let btnSearch = document.getElementById("btnSearchHashtag");
 btnSearch.addEventListener("click",function(){
   setPostsInfo(input.value);
 });
}

function setPostsInfo(hashtag){
  let arrItems = Array.from(document.getElementsByClassName("postItem"));
  let arrPosts;
  getData(INSTAGRAM_API+hashtag+INSTAGRAM_API_QUERY,function(data){
    arrPosts = data.graphql.hashtag.edge_hashtag_to_top_posts.edges;
    console.log(arrPosts);
    for(let i=0;i<arrItems.length;i++){
      arrItems[i].childNodes[1].firstChild.src = arrPosts[i].node.display_url;
      arrItems[i].childNodes[1].href = INSTAGRAM_POST_URL+arrPosts[i].node.shortcode;
      
    }
    // console.log(data.graphql.hashtag.edge_hashtag_to_top_posts.edges[0].node.edge_liked_by.count);
    // postsArr = data.graphql.hashtag;
  })

}

searchLink();
