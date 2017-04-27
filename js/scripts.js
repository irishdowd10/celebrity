$(document).ready(function() {
  $(".formOne").submit(function(event) {
  var planet = parseInt($("select#planet").val());
  var gender = parseInt($("select#gender").val());
  var color =  parseInt($("select#color").val());
  var result = planet + gender + color;

  if (result < 4) {
    $("#servo").show();
    }
  //  /else if (age >=18 && gender === "female"  && color === "blue" && "red"  && "green") {
  //     $("#gypsy").show();
  //   }
  //   else if (age >=18 /*&& age <=100*/ && gender === "robot"  /*&& color === "blue" && "red"  && "green"*/) {
  //     $("#crow").show();
  //   }
  //   else if (age <18) {
  //     $("#no-robots").show();
  //   }


  event.preventDefault();
  });

});
