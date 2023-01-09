function getUserInput() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;

  var specifiedDate = new Date(year, month - 1, day);
  var currentDate = new Date();
  var timeDifference = specifiedDate.getTime() - currentDate.getTime();
  var daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

  document.getElementById("demo").innerHTML = "<p>" + firstName + "</p><p>" + lastName + "</p><p>" + year + " " + month  + " " + day + "</p><p>" + "</p>" + firstName + " " + lastName + " has to wait for " + daysLeft + " days";
}
