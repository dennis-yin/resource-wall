let categories;
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
    console.log(boards)
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
  console.log('yo')
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

$(() => {
  const url = window.location.pathname;
  const urlArr = url.split('/');
  pinId = urlArr[urlArr.length-1]
  viewPin()
  loadCategories()
  loadBoards()
  loadComments()
  $('#addComment').submit((event) => {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: `/data/pins/${pinId}/addComment`,
      data: { pin_id: pinId, comment: $('.comment').val() }
    })
    .done(loadComments(pinId))
  })
  $('#addPin').click((event) => {
    event.preventDefault();
    const catSelected = $('#dropCategories').val();
    const boardSelected = $('#dropBoards').val();
    const catId = getCategoryId(catSelected)
    const boardId = getBoardId(boardSelected)
    console.log(boardSelected)
    $.ajax({
      method: "POST",
      url: `/data/boards/addPin`,
      data: {pin_id: pinId,category_id: catId,board_id: boardId}
    })
  })
});
