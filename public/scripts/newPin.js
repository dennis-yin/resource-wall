let categories;

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

const renderCategories = function () {
  $('#dropCategories').empty();
  $('.category').val('');
  $('.category').attr("style", "visibility: hidden")
  $('#addCategory').attr("style", "visibility: hidden")
  let keys = Object.keys(categories)
  // loops through data
  for (let i = keys.length - 1; i >= 0; i--) {
    $("#dropCategories").append(`<option>${categories[keys[i]].name}</option>`);
  }
  $("#dropCategories").append(`<option class="temp">Add a new Category</option>`);
};

$(() => {
  loadNav()
  loadCategories()
  $("#dropCategories").change(() => {
    const catSelected = $('#dropCategories').val();
    if (catSelected === 'Add a new Category') {
      $('.category').attr("style", "visibility: visible")
      $('#addCategory').attr("style", "visibility: visible")
    }
  });
  $('#addCategory').click((event) => {
    event.preventDefault();
    const catSelected = $('.category').val();
    $.ajax({
        method: "POST",
        url: `/data/categories/new`,
        data: {
          category_name: catSelected
        }
      })
      .done(
        loadCategories()
      )
  })
})
