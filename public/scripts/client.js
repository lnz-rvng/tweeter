/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  $(".angle-dbl-down").on("click", () => {
    $(".new-tweet").slideToggle("fast");
    $("textarea").trigger("focus");
  })

  // An escape function used to prevent XSS
  const createTweetElement = (tweet) => {
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    const safeHTML = `${escape(tweet.content.text)}`;

  // Dynamically create tweets
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
      <p class="user-tweet">${safeHTML}</p>
      <div class="hr-line"></div>
    </div>

    <footer>
      <h5>${timeago.format(tweet.created_at)}</h5>
      <ul>
        <li><i class="fa-solid fa-flag"></i></i></li>
        <li><i class="fa-sharp fa-solid fa-retweet"></i></li>
        <li><i class="fa-solid fa-heart"></i></li>
      </ul>
    </footer>
    </article>
  `;

    return $tweet;
  };

  // Dynamic rendering
  const renderTweets = (tweets) => {

    // Empty out the #tweet-container whenever the renderTweets function is called
    $("#tweet-container").empty();

    // Loop over the array of tweet objects
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);

      // Append the tweet structure created on top of the #tweet-container
      $("#tweet-container").prepend($tweet);
    }
  };

  const $form = $("form");
  $form.on("submit", (event) => {

    // Prevents the default form submission
    event.preventDefault();

    const tweetContent = $("#tweet-text").val().trim();

    if (!tweetContent) {
      $(".error-msg2").slideUp("fast");
      return $(".error-msg1").slideDown("fast");
    }
    $(".error-msg1").slideUp("fast");

    if (tweetContent.length > 140) {
      $(".error-msg1").slideUp("fast");
      return $(".error-msg2").slideDown("fast");
    }
    $(".error-msg2").slideUp("fast");

    const formData = $form.serialize();
    // Makes a POST request
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: "POST",
      data: formData,
      success: () => {
        loadTweets();
      }
    });

    $("#tweet-text").val('');
    $(".counter").text('140').css('color', '#312e2ebf');
  });

  // Fetch the tweets using AJAX
  const loadTweets = () => {
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: "GET",
      success: (response) => {
        renderTweets(response);
      }
    });
  };

  loadTweets();
});
