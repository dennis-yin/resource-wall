const loadPins = (key) => {
  $.ajax({
    method: "POST",
    url: "/data/search",
    data: {keyword: key}

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
  for(let i in pins){
    const $pin = createPin(pins[i])
    $('.feed').append($pin);

  }
};

const createPin = (data) => {
  const $pin = $("<div>").addClass("pin");
  const markup = `
  <a href="/pins/${data.id}">
    <img class ="img" src=${data.image}>
    <p class = "title">${data.title}</p>
    <p class = "description">${data.description}</p>
  </a>
  `;
  $($pin).append(markup);
  return $pin;
};

$(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const keyword = searchParams.get("keyword");
  loadPins(keyword);
});
