// $(document).on('turbolinks:load', function () {

//   // $('#new-comment').on('submit', function(e){
//   //   e.preventDefault();
//   //   var formData = new FormData(this);
//   //   console.log(this);
//   // });


//   // console.log("test")

// });

$(document).on("ajax:success", "#new-comment", function(e) {
// create new comment html
  var html = buildHTML(e.detail[0].comment);
  $('.comments').append(html);
  $('.commentform_name').val('');
  $('.commentform_body').val('');
// scroll to the page bottom
  $('html, body').animate({
      scrollTop: $(document).height()
    },1500);
  // $('.comments').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  // flash();
});
$(document).on("ajax:error", "#new-comment", function(e) {
  console.log(e.detail[2]);
});


function buildHTML(comment){
  var html = '<h3 class ="font-weight-bold mt-4">\n'
           + comment.name
           + '</h3>\n'
           + '<div class ="mt-2">'
           + comment.body
           + '</div>\n';
  return html;
}
