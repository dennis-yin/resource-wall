let categories;
let boards;
const viewPin = (id) => {
  $.ajax({
    method: "GET",
    url: `/data/pins/${id}`
  })
  .done((data) => {
    $(".title").text(data[id].title)
    $(".image").attr("src",data[id].image)
    $(".url").attr("href",data[id].url)
    $(".description").text(data[id].description)
  })
  .fail(() => {
    console.log('Server down')
  });
};

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
  // loops through data
  for(let i in categories){
    const markup = `<option>${categories[i].name}</option>`
    $("#dropCategories").append(markup);
  }
};

const getCategoryId = (name) => {
  for(let i in categories){
    if(categories[i].name === name){
      return i
    }
  }
}

const loadBoards = () => {
  $.ajax({
    method: "GET",
    url: '/data/user/boards'
  })
  .done((data) => {
    boards = data
    console.log(boards)
    renderBoards()
  })
  .fail(() => {
    console.log('Server down')
  });
};

const renderBoards = function() {
  // loops through data
  for(let i in boards){
    const markup = `<option>${boards[i].title}</option>`
    $("#dropBoards").append(markup);
  }
};

const getBoardId = (selected) => {
  console.log('yo')
  for(let i in boards){
    if(boards[i]['title'] === selected){
      return i
    }
  }
}

$(() => {
  const url = window.location.pathname;
  const urlArr = url.split('/');
  const pinId =urlArr[urlArr.length-1]
  viewPin(pinId)
  loadCategories()
  loadBoards()
  $('#addPin').click((event) => {
    event.preventDefault();
    const catSelected = $('#dropCategories').val();
    const boardSelected = $('#dropBoards').val();
    const catId = getCategoryId(catSelected)
    const boardId = getBoardId(boardSelected)
    console.log(boardSelected)
    $.ajax({
      method: "POST",
      url: `/data/boards/addPin`,
      data: {pin_id: pinId,category_id: catId,board_id: boardId}
    })
  })
})
