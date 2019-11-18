const viewBoard = () => {
  $.ajax({
    method: "GET",
    url: "/data/boards/1"
  })
  .done((data) => {
    $(".title").text(data[1].title)
    $(".image").attr("src",data[1].image)
    $(".description").text(data[1].description)
  })
  .fail(() => {
    console.log('Server down')
  });
};

const loadPins = () => {
  $.ajax({
    method: "GET",
    url: "/data/boards/pins/1"
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
  console.log(url)
  // var arguments = url.split('#')[1].split('=');
  // arguments.shift();
  viewBoard()
  loadPins()
});
