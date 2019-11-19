let boards;

const viewPin = (id) => {
  $.ajax({
    method: "GET",
    url: `/data/pins/${id}`
  })
  .done((data) => {
    $(".title").text(data[id].title)
    $(".image").attr("src",data[id].image)
    $(".url").attr("href",data[id].url)
    $(".description").text(data[id].description)
  })
  .fail(() => {
    console.log('Server down')
  });
};

const loadCategories = () => {
  $.ajax({
    method: "GET",
    url: `/data/categories`
  })
  .done((data) => {
    categories = data
    renderCategories()

  })
  .fail(() => {
    console.log('Server down')
  });
};

const renderCategories = function() {
  // loops through data
  for(let i in categories){
    const markup = `<option>${categories[i].name}</option>`
    $("#dropCategories").append(markup);
  }
};

const getCategoryId = (name) => {
  for(let i in categories){
    if(categories[i].name === name){
      return i
    }
  }
};

const loadBoards = () => {
  $.ajax({
    method: "GET",
    url: '/data/user/boards'
  })
  .done((data) => {
    boards = data
    renderBoards()
  })
  .fail(() => {
    console.log('Server down')
  });
};

const renderBoards = function() {
  // loops through data
  for(let i in boards){
    const markup = `<option>${boards[i].title}</option>`
    $("#dropBoards").append(markup);
  }
};

const getBoardId = (selected) => {
  for(let i in boards){
    if(boards[i]['title'] === selected){
      return i
    }
  }
};

const loadComments = function(pinId) {
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
  console.log(data)
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

const createComment = function(data) {
  const $comment = $("<div>").addClass("comment");
  const markup = `
    <p class="commenter">${data.title}</p>
    <p class="comment">${data.description}</p>
  `;
  $($comment).append(markup);
  return $comment;
};

const addComment = function() {

}

$(() => {
  const url = window.location.pathname;
  const urlArr = url.split('/');
  const pinId = urlArr[urlArr.length-1]
  viewPin(pinId)
  loadBoards()
  loadComments(pinId)
  $('#addComment').submit((event) => {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: `/data/pins/${pinId}/addComment`,
      data: { pin_id: pinId, comment: $('.comment').val() }
    })
    .done(() => {
      $('.comment-section').html(``);
      loadComments();
    })
  })
  $('#addPin').click((event) => {
    event.preventDefault();
    const boardSelected = $('#dropBoards').val();
    const boardId = getBoardId(boardSelected)
    $.ajax({
      method: "POST",
      url: `/data/boards/addPin`,
      data: {pin_id: pinId,board_id: boardId}
    })
  })
});
