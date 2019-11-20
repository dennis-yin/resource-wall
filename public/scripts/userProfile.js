const loadNav = () => {
  $.ajax({
    method: "POST",
    url: "/data/user/id"
  })
  .done((data) => {
    if (data) {
      const markup = `
      <p class="loggedIn username"> ${data.user.name}</p>
      <form class="loggedIn" method="GET" action="/user">
        <button  type="home-button" class="home-button btn btn-light ml-auto">My Resources</button>
      </form>
      <form class="loggedIn" method="POST" action="/data/logout">
        <button type="logout-button" class="logout-button btn btn-light">Logout</button>
      </form>
      `
      $("#navbar").append(markup)
    } else {
      const markup = `
      <form class="noUser" method="GET" action="/login">
        <button  type="home-button" class="home-button btn btn-light ml-auto">Login</button>
      </form>
      <form class="noUser" method="GET" action="/register">
        <button type="register-button" class="register-button btn btn-light">Register</button>
      </form>
      `
      $("#navbar").append(markup)
    }
  })
  .fail(() => {
    console.log('Server down')
  });
}

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
  loadNav()
  loadProfile()
  loadBoards()
});
