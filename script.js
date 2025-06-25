function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$("#submitbutton").click(function () {
  var errormessage = "";

  if (!isEmail($("#Email").val())) {
    errormessage += "Not a valid Email\n";
  }

  if (!$.isNumeric($("#phoneno").val())) {
    errormessage += "Not valid Number\n";
  } else if ($("#phoneno").val().length !== 10) {
    errormessage += "Phone number must be exactly 10 digits\n";
  }

  if ($("#password").val() !== $("#confirmpassword").val()) {
    errormessage += "Password not same\n";
  }

  if (errormessage !== "") {
    alert(errormessage);
  } else {
    alert("Registered Successfully");
  }
});

$(".toggle-btn").click(function () {
  var inputSelector = $(this).data("target");
  var input = $(inputSelector);
  var type = input.attr("type");

  input.attr("type", type === "password" ? "text" : "password");
  $(this).text(type === "password" ? "Hide" : "Show");
});
