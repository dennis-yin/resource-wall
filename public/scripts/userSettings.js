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
  loadNav()
});
