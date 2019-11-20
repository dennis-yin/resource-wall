const loadBoards = () => {
  $.ajax({
    method: "GET",
    url: "/data/user/boards"
  })
  .done((data) => {
    renderBoards(data)
  })
  .fail(() => {
    console.log('Server down')
  });
};

const renderBoards = function(data) {
  // loops through data
    let boards = data;
    for(let i in boards){
      const $board = createBoard(boards[i])
      $('.feed').append($board);

    }
  };


const createBoard = (data) => {
  const $board = $("<div>").addClass("board");
  const markup = `
  <a href="/boards/${data.id}">
    <img class ="img" src=${data.image}>
    <p class = "title">${data.title}</p>
    <p class = "description">${data.description}</p>
  </a>
  `;
  $($board).append(markup);
  return $board;
};

const loadProfile = () => {
  $.ajax({
    method: "GET",
    url: "/data/user"
  })
  .done((data) => {
    $(".profileImage").attr("src",data['id'].profile_picture)
    $(".profileName").text(data['id'].name)
  })
  .fail(() => {
    console.log('Server down')
  });
}


$(() => {
  loadProfile()
  loadBoards()
});
