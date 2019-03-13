const INSTAGRAM_API = 'https://www.instagram.com/explore/tags/';
const INSTAGRAM_API_QUERY = '/?__a=1';

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



function setPostsInfo(hashtag){
  let arrItems = Array.from(document.getElementsByClassName("postItem"));
  getData(INSTAGRAM_API+hashtag+INSTAGRAM_API_QUERY,function(data){
    let arrPosts = data.graphql.hashtag.edge_hashtag_to_top_posts.edges;
    console.log(arrPosts);
    for(let i=0;i<arrItems.length;i++){
      arrItems[i].childNodes[1].src = arrPosts[i].node.display_url;
    }

    // console.log(data.graphql.hashtag.edge_hashtag_to_top_posts.edges[0].node.edge_liked_by.count);
    // postsArr = data.graphql.hashtag;

  })
}
setPostsInfo('winter');
