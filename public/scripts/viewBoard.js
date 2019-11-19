const viewBoard = (id) => {
  $.ajax({
    method: "GET",
    url: `/data/boards/${id}`
  })
  .done((data) => {
    $(".title").text(data[id].title)
    $(".image").attr("src",data[id].image)
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
    console.log(data)
    renderPins(data)
  })
  .fail(() => {
    console.log('Server down')
  });
};

const renderPins = function(data) {
  // loops through data
  let pins = data;
  for(let i in pins){
    const $pin = createPin(pins[i])
    $('.feed').append($pin);

  }
};

const createPin = (data) => {
  const $pin = $("<div>").addClass("pin");
  const markup = `
    <img class ="img" src=${data.image}>
    <p class = "title">${data.title}</p>
    <p class = "description">${data.description}</p>

  `;
  $($pin).append(markup);
  return $pin;
};

$(() => {
  const url = window.location.href;
  const urlArr = url.split('/');
  id = urlArr[urlArr.length-1]
  viewBoard(id)
  loadPins(id)
});
