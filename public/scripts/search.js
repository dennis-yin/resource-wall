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
const loadPins = (key) => {
  $.ajax({
      method: "POST",
      url: "/data/search",
      data: {
        keyword: key
      }
    })
    .done((data) => {
      console.log(data)
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
    console.log($pin)
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
  const searchParams = new URLSearchParams(window.location.search);
  const keyword = searchParams.get("keyword");
  console.log(keyword)
  loadNav()
  loadPins(keyword);
});
