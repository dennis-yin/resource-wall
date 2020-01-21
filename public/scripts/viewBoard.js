let pinOwner;
let userId;

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
        userId = data.user.id
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
        userId = 0
      }
    })
    .fail(() => {
      console.log('Server down')
    });
}

const viewBoard = (id) => {
  $.ajax({
      method: "GET",
      url: `/data/boards/${id}`
    })
    .done((data) => {
      pinOwner = data[id].owner_id;
      if (userId == pinOwner) {
        $('#delete').attr("style", "visibility: visible")
      }
      $(".title").text(data[id].title)
      $(".image").attr("src", data[id].image)
      $(".description").text(data[id].description)
    })
    .fail(() => {
      console.log('Server down')
    });
};

const loadPins = (id) => {
  $.ajax({
      method: "GET",
      url: `/data/boards/pins/${id}`
    })
    .done((data) => {
      renderPins(data)
    })
    .fail(() => {
      console.log('Server down')
    });
};

const renderPins = function (data) {
  // loops through data
  let pins = data;
  for (let i in pins) {
    const $pin = createPin(pins[i])
    $('.feed').append($pin);

  }
};

const createPin = (data) => {
  const $pin = $("<div>").addClass("pin");
  const markup = `
  <a style="text-decoration:none;" href="/pins/${data.id}">
    <img class ="img" src=${data.image}>
    <p class = "title">${data.title}</p>
  </a>
  `;
  $($pin).append(markup);
  return $pin;
};

$(() => {
  const url = window.location.pathname;
  const urlArr = url.split('/');
  id = urlArr[urlArr.length - 1]
  $('#delete').attr('action', `/data/boards/delete/${id}`)
  loadNav()
  viewBoard(id)
  loadPins(id)
});
