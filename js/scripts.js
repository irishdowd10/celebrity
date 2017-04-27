$(document).ready(function() {
  $(".formOne").submit(function(event) {
  var age = parseInt($("input#age").val());
  var gender = $("select#gender").val();
  var color =  $("select#color").val();

  if (age >=18 && gender === "male"  && color === "blue" && "red") {
    $("#servo").show();
    }
   else if (age >=18 && gender === "female"  && color === "blue" && "red"  && "green") {
      $("#gypsy").show();
    }
    else if (age >=18 /*&& age <=100*/ && gender === "robot"  /*&& color === "blue" && "red"  && "green"*/) {
      $("#crow").show();
    }
    else if (age <18) {
      $("#no-robots").show();
    }


  event.preventDefault();
  });

});

//the if branch can be front end as a function to call in back end
