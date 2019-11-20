let boards;
let pinId;

const viewPin = () => {
  $.ajax({
    method: "GET",
    url: `/data/pins/${pinId}`
  })
  .done((data) => {
    $(".title").text(data[pinId].title)
    $(".image").attr("src",data[pinId].image)
    $(".url").attr("href",data[pinId].url)
    $(".description").text(data[pinId].description)
  })
  .fail(() => {
    console.log('Server down')
  });
};

const loadBoards = () => {
  $.ajax({
    method: "GET",
    url: '/data/user/boards'
  })
  .done((data) => {
    boards = data
    console.log(boards)
    renderBoards()
  })
  .fail(() => {
    console.log('Server down')
  });
};

const renderBoards = function() {
  $('#dropBoards').empty();
  $('#create-board').attr("style","visibility: hidden")
  let keys = Object.keys(boards)
  if(keys.length === 0){
    $("#dropBoards").append(`<option>--</option>`);
  }else{
    for(let i = keys.length-1;i>=0;i--){
      $("#dropBoards").append(`<option>${boards[keys[i]].title}</option>`);
    }
  }
  $("#dropBoards").append(`<option>Create a Board</option>`);
};

const getBoardId = (selected) => {
  for(let i in boards){
    if(boards[i]['title'] === selected){
      return i
    }
  }
};

const loadComments = function() {
  $.ajax({
    method: "GET",
    url: `/data/pins/${pinId}/comments`,
  })
  .done((data) => {
    renderComments(data);
  })
  .fail(() => {
    console.log("Failed to retrieve comments in AJAX request");
  })
};

const renderComments = function(data) {
  $('.comment-section').empty()
  for (const comment in data) {
    const $comment = createComment(data[comment])
    $('.comment-section').append($comment)
  }
};

const createComment = function(data) {
  const $comment = $("<div>").addClass("comment");
  const markup = `
    <p class="commenter">${data.user_id}</p>
    <p class="comment">${data.text}</p>
  `;
  $($comment).append(markup);
  return $comment;
};

const loadRating = function() {
  $.ajax({
    method: "GET",
    url: `/data/pins/${pinId}/rating`
  })
  .done((data) => {
    let rating = data.rating['avg_rating'];
    if (rating % 1 === 0) {
      rating = Math.floor(rating);
    } else {
      rating = rating.toFixed(2);
    }
    $('#rating').append(`<p>${rating} / 5</p>`)
  })
};

const ratePin = function() {
  $('.fa-star').click(function() {
    let rating;

    if ($(this).hasClass('starOne')) {
      rating = 1;
    }

    if ($(this).hasClass('starTwo')) {
      rating = 2;
    }

    if ($(this).hasClass('starThree')) {
      rating = 3;
    }

    if ($(this).hasClass('starFour')) {
      rating = 4;
    }

    if ($(this).hasClass('starFive')) {
      rating = 5;
    }

    $.ajax({
      method: "POST",
      url: `/data/pins/${pinId}/rating`,
      data: { rating: rating }
    })
  })
};

$(() => {
  const url = window.location.pathname;
  const urlArr = url.split('/');
  pinId = urlArr[urlArr.length-1]
  viewPin()
  loadBoards()
  loadComments()
  loadRating()
  ratePin()
  $( "#dropBoards" ).change(() => {
    const value = $('#dropBoards').val();
    if(value == 'Create a Board'){
      $('#create-board').attr("style","visibility: visible")
    }
  });
  $('#btn-board').click((event) => {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: `/data/boards/new`,
      data: {title: $('#title-board').val(), description: $('#description-board').val(), image: $('#image-board').val()}
    })
    .done(
      loadBoards()
    )
  })
  $('.post-comment').click((event) => {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: `/data/pins/${pinId}/addComment`,
      data: { pin_id: pinId, comment: $('.comment').val() }
    })
    .done(loadComments())
  })
  $('#addPin').click((event) => {
    event.preventDefault();
    const boardSelected = $('#dropBoards').val();
    const boardId = getBoardId(boardSelected)
    $.ajax({
      method: "POST",
      url: `/data/boards/addPin`,
      data: { pin_id: pinId, board_id: boardId }
    })
  })
});
