let categories;

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
  // loops through data
  for(let i in categories){
    const markup = `<option>${categories[i].name}</option>`
    $("#dropCategories").append(markup);
  }
  $("#dropCategories").append(`<option class="temp">Add a new Category</option>`);
};

$(() => {
  loadCategories()
  $( "#dropCategories" ).change(function() {
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
