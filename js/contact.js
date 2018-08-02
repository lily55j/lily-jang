

function sendemail(event) {
  event.preventDefault()

  var email = $("#email").val()
  console.log(email)

  var name = $("#name").val()
  console.log(name)

  var subject = $("#subject").val()
  console.log(subject)

  var message = $("#message").val()
    
  var purpose = $("#purpose option:selected").text();


  $.ajax({
    method: "POST",
    url: "https://lily-jang-mailer.herokuapp.com/mailer",
    data: {
      name: name,
      email: email,
      subject: subject,
      message: message,
      purpose: purpose,
    }
  }).done(function() {
    $("#submit").text("Thank You")
  }).fail(function() {
    $("#submit").text("Thank You")
  })
}