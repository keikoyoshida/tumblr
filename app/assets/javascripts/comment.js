$(document).on("ajax:success", "#new-comment", function(e) {
// create new comment html
  var html = buildHTML(e.detail[0]);
  $('.comments').append(html);
  $('.commentform_name').val('');
  $('.commentform_body').val('');
// scroll to the page bottom
  $('html, body').animate({
      scrollTop: $(document).height()
    },1500);
  alert("send your comment")
  console.log(e.detail[0]);
});
$(document).on("ajax:error", "#new-comment", function(e) {
  console.log(e.detail[2]);
});


function buildHTML(data){
  var html = '<h3 class ="font-weight-bold mt-4">'
           + data.comment.name
           + '<a class ="text-secondary small ml-2" data-method="delete" href="/posts/' + data.post_id + '/comments/' + data.comment.id + '">Delete</a>'
           + '</h3>\n'
           + '<div class ="mt-2">'
           + data.comment.body
           + '</div>\n';
  return html;
}
