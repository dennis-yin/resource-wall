const loadPins = () => {
  $.ajax({
    method: "GET",
    url: "/data/pins"
  })
  .done((data) => {
    renderPins(data)
  })
  .fail(() => {
    console.log('Server down')
  });
};

const renderPins = function(data) {
  // loops through data
    let pins = data;
    console.log(pins)
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
  loadPins()
});
