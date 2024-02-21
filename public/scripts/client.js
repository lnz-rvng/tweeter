/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Lance",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@LIM"
    },
    "content": {
      "text": "Tell 'em to bring the whole ocean"
    },
    "created_at": 1461113952088
  }
]

// Dynamically create tweets
const createTweetElement = (tweet) => {

  const $tweet = `
    <article>
    <header class="header-tweets">
      <div class="header-tweets-profile">
        <img src=${tweet.user.avatars} alt="A profile picture of a user" class="user-profile-pic">
        <h3 class="user-name">${tweet.user.name}</h3>
      </div>
      <h3 class="user-tag">${tweet.user.handle}</h3>
    </header>

    <div class="tweets">
      <p class="user-tweet">${tweet.content.text}</p>
      <div class="hr-line"></div>
    </div>

    <footer>
      <h5>${tweet.created_at}</h5>
      <ul>
        <li><i class="fa-solid fa-flag"></i></i></li>
        <li><i class="fa-sharp fa-solid fa-retweet"></i></li>
        <li><i class="fa-solid fa-heart"></i></li>
      </ul>
    </footer>
    </article>
  `

  return $tweet;
}

// Dynamic rendering
const renderTweets = (tweets) => {

  // Loop over the array of tweet objects
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);

    // Append tweet structure created to the #tweet-container
    $("#tweet-container").append($tweet);
  }
}

  renderTweets(data);
})
