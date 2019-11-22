const loadNav = () => {
  $.ajax({
    method: "POST",
    url: "/data/user/id"
  })
  .done((data) => {
    if (data) {
      const markup = `
      <div class="dropdown">
        <button class="nav-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${data.user.name}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="/pins/new">Add Resource</a>
          <a class="dropdown-item" href="/user">My Boards</a>
          <a class="dropdown-item" href="/user/pins">My Pins</a>
          <a class="dropdown-item" href="/user/settings">Profile Settings</a>
          <a class="dropdown-item" href="/data/logout">Logout</a>
        </div>
      </div>
      `
      $("#navbar").append(markup)
    } else {
      const markup = `
      <form class="noUser" method="GET" action="/login">
        <button  type="home-button" class="home-button ml-auto nav-btn">Login</button>
      </form>
      <form class="noUser" method="GET" action="/register">
        <button type="register-button" class="register-button nav-btn">Register</button>
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
  <a style="text-decoration:none;" href="/boards/${data.id}">
    <img class ="img board-img" src=${data.image}>
    <p class = "title board-name">${data.title}</p>
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
