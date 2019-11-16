const createPin = (tweetData) => {
  const $tweet = $("<article>").addClass("tweet");
  const safeHtml = escape(tweetData.content.text);
  const timeStamp = moment(tweetData.created_at).fromNow();
  const markup = `
        <header>
          <img class="avatar" src="${tweetData.user.avatars}">
          <div class="userName">${tweetData.user.name}</div>
          <div class="userId">${tweetData.user.handle}</div>
        </header>
        <div class="content">${safeHtml}</div>
        <footer>
          <div class="life">${timeStamp}</div>
          <div class="shortcuts">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
          </div></footer>
        `;
  $($tweet).append(markup);
  return $tweet;
};

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});
