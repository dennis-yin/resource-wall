const loadBoards = () => {
  $.ajax({
    method: "GET",
    url: "/data/users/boards/1"   //add cookie checker to give user id
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
    console.log(boards)
    for(let i in boards){
      const $board = createBoard(boards[i])
      $('.feed').append($board);

    }
  };


const createBoard = (data) => {
  const $board = $("<div>").addClass("board");
  const markup = `
    <img class ="img" src=${data.image}>
    <p class = "title">${data.title}</p>
    <p class = "description">${data.description}</p>
  `;
  $($board).append(markup);
  return $board;
};

const loadProfile = () => {
  $.ajax({
    method: "GET",
    url: "/data/users/1"   //add cookie checker to give user id
  })
  .done((data) => {
    console.log('got here')
    console.log(data)
    $(".profileImage").attr("src",data[1].profile_picture)
    $(".profileName").text(data[1].name)
  })
  .fail(() => {
    console.log('Server down')
  });
}


$(() => {
  loadProfile()
  loadBoards()
});
