const viewPin = () => {
  $.ajax({
    method: "GET",
    url: "/data/pins/1"
  })
  .done((data) => {
    $(".title").text(data[1].title)
    $(".image").attr("src",data[1].image)
    $(".url").attr("href",data[1].url)
    $(".description").text(data[1].description)
  })
  .fail(() => {
    console.log('Server down')
  });
};

$(() => {
  viewPin()
});
