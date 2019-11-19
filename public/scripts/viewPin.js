const viewPin = (id) => {
  $.ajax({
    method: "GET",
    url: `/data/pins/${id}`
  })
  .done((data) => {
    console.log(data)
    $(".title").text(data[id].title)
    $(".image").attr("src",data[id].image)
    $(".url").attr("href",data[id].url)
    $(".description").text(data[id].description)
  })
  .fail(() => {
    console.log('Server down')
  });
};

$(() => {
  const url = window.location.href;
  const urlArr = url.split('/');
  viewPin(urlArr[urlArr.length-1])
});
