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
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
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
      <div class="dropdown">
        <button class="nav-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Login
        </button>
      <div class="dropdown-menu">
        <form class="noUser px-4 py-3" method="POST" action="/data/login">
          <div class="form-group">
            <label for="exampleDropdownFormEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleDropdownFormEmail1" name="email" placeholder="email@example.com">
          </div>
          <div class="form-group">
            <label for="exampleDropdownFormPassword1">Password</label>
            <input type="password" name="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-dark">Sign in</button>
        </form>
      </div>
      </div>
  
      <form class="noUser" method="GET" action="/register">
        <button type="register-button" class="register-button reg-btn">Register</button>
      </form>
      `
        $("#navbar").append(markup)
      }
    })
    .fail(() => {
      console.log('Server down')
    });
}

const loadPins = () => {
  $.ajax({
      method: "GET",
      url: "/data/pins"
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
  let categories = data;
  console.log(data)
  for (let catName in categories) {
    const $catLabel = $(`<p class="catLabel">${catName}</p>`)
    const $leftButton = $(`<button class="scroll scrollLeft ${catName}"><i class="fas fa-chevron-left"></i></button>`)
    const $rightButton = $(`<button class="scroll scrollRight ${catName}"><i class="fas fa-chevron-right"></i></button>`)
    const $pinContainer = $(`<div class="no-scroll categories ${catName}Scroll"></div> `)
    $('.feed').append(`<div class="catContainer ${catName}Container"></div>`)
    $(`.${catName}Container`).append($catLabel);
    $(`.${catName}Container`).append($leftButton)
    $(`.${catName}Container`).append($rightButton)
    $(`.${catName}Container`).append($pinContainer);
    for (let pinId in categories[catName]) {
      const $pin = createPin(categories[catName][pinId])
      $pinContainer.append($pin)
    }

    $(`.${catName}`).click(function () {
      let scrollPos = $(`.${catName}Scroll`).scrollLeft();
      if ($(this).hasClass('scrollLeft')) {
        $(`.${catName}Scroll`).scrollLeft(scrollPos - 600);
      } else {
        console.log(`.${catName}Scroll`)
        $(`.${catName}Scroll`).scrollLeft(scrollPos + 600);
      }
    })
  }
};

const createPin = (data) => {
  const $pin = $("<div>").addClass("pin");
  const markup = `
  <a style="text-decoration:none;" href="/pins/${data.id}">
  <img class="img" src=${data.image}>
  <p class="title title-pin">${data.title}</p>
  `;
  $($pin).append(markup);
  return $pin;
};

$(() => {
  loadNav()
  loadPins()
});
