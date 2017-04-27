$(document).ready(function() {
  $(".formOne").submit(function(event) {
  var nameInput = $("input#name").val();
  var planet = parseInt($("select#planet").val());
  var gender = parseInt($("select#gender").val());
  var color =  parseInt($("select#color").val());
  var result = planet + gender + color;

  if (result<= 4) {
    $(".option").hide();
    $("#servo").show();
    }
   else if (result<=6) {
     $(".option").hide();
      $("#gypsy").show();
    }
    else if (result <=8) {
      $(".option").hide();
      $("#crow").show();
    }
    else {
      $(".option").hide();
      $("#no-robots").show();
    }

  $(".name").text(nameInput);
    event.preventDefault();
  });

  // $("div.answers").children(p).first().submit(function() {
  //   $(this).remove();
  // });

});
