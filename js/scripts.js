$(document).ready(function() {
  $(".formOne").submit(function(event) {
  var age = parseInt($("input#age").val());
  var gender = $("select#gender").val();
  var color =  $("select#color").val();

  if (age >= 18 && age <=26 && gender === "male"  && color === "blue" && "red") {
    $("#servo").show();
    }
   else if ((age >= 18 && age <=35 && gender === "female"  && color === "blue" && "red"  && "green") {
      $("#gypsy").show();
    // alert("test");
}
  event.preventDefault();
  });

});
