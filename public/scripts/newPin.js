let categories;

const loadNav = () => {
  $.ajax({
    method: "POST",
    url: "/data/user/id"
  })
  .done((data) => {
    if (data) {
      const markup = `
      <form class="loggedIn" method="GET" action="/user/settings">
      <button  type="home-button" class="home-button ml-auto nav-btn">${data.user.name}</button>
    </form>
      <form class="loggedIn" method="GET" action="/user">
        <button  type="home-button" class="home-button ml-auto nav-btn">My Resources</button>
      </form>
      <form class="loggedIn" method="POST" action="/data/logout">
        <button type="logout-button" class="logout-button nav-btn">Logout</button>
      </form>
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

const renderCategories = function() {
  $('#dropCategories').empty();
  $('.category').val('');
  $('.category').attr("style","visibility: hidden")
  $('#addCategory').attr("style","visibility: hidden")
  let keys = Object.keys(categories)
  // loops through data
  for(let i = keys.length-1;i>=0;i--){
    $("#dropCategories").append(`<option>${categories[keys[i]].name}</option>`);
  }
  $("#dropCategories").append(`<option class="temp">Add a new Category</option>`);
};

$(() => {
  loadNav()
  loadCategories()
  $( "#dropCategories" ).change(() => {
    const catSelected = $('#dropCategories').val();
    if(catSelected === 'Add a new Category'){
      $('.category').attr("style","visibility: visible")
      $('#addCategory').attr("style","visibility: visible")
    }
  });
  $('#addCategory').click((event) => {
    event.preventDefault();
    const catSelected = $('.category').val();
    $.ajax({
      method: "POST",
      url: `/data/categories/new`,
      data: {category_name: catSelected}
    })
    .done(
      loadCategories()
    )
  })
})
