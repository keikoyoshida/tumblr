// $(document).on('turbolinks:load', function () {

//   // $('#new-comment').on('submit', function(e){
//   //   e.preventDefault();
//   //   var formData = new FormData(this);
//   //   console.log(this);
//   // });


//   // console.log("test")

// });

$(document).on("ajax:success", "#new-comment", function(e) {
  console.log(e.detail[0]);

});
$(document).on("ajax:error", "#new-comment", function(e) {
  console.log(e.detail[2]);
});
