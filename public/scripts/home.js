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

const renderPins = function(data) {
  // loops through data
  let categories = data;
  console.log(data)
  for (let catName in categories) {
    const $catLabel = $(`<p class="catLabel">${catName}</p>`)
    const $leftButton = $(`<button class="scrollLeft ${catName}"><i class="fas fa-chevron-left"></i></button>`)
    const $rightButton = $(`<button class="scrollRight ${catName}"><i class="fas fa-chevron-right"></i></button>`)
    const $pinContainer= $(`<div class="no-scroll categories ${catName}Scroll"></div> `)
    $('.feed').append(`<div class="catContainer ${catName}Container"></div>`)
    $(`.${catName}Container`).append($catLabel);
    $(`.${catName}Container`).append($leftButton)
    $(`.${catName}Container`).append($rightButton)
    $(`.${catName}Container`).append($pinContainer);
    for (let pinId in categories[catName]) {
      const $pin = createPin(categories[catName][pinId])
      $pinContainer.append($pin)
    }

    $(`.${catName}`).click(function() {
      let scrollPos = $(`.${catName}Scroll`).scrollLeft();
      if ($(this).hasClass('scrollLeft')) {
        $(`.${catName}Scroll`).scrollLeft(scrollPos - 400);
      } else {
        console.log(`.${catName}Scroll`)
        $(`.${catName}Scroll`).scrollLeft(scrollPos + 400);
      }
    })
  }
};

const createPin = (data) => {
  const $pin = $("<div>").addClass("pin");
  const markup = `
  <a style="text-decoration:none;" href="/pins/${data.id}">
  <img class="img" src=${data.image}>
  <p class="title">${data.title}</p>
  `;
  $($pin).append(markup);
  return $pin;
};

$(() => {
  loadNav()
  loadPins()
});
