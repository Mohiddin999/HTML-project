function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validate() {
    var form=document.getElementById("assign3")
    var firstname = form.firstname.value;
    var lastname = form.lastname.value;
    var year =form.year.value;

    var firstnameErr = true;
    var lastnameErr = true;
    var yearErr = true;

    if (firstname == "") {
      printError("firstnameErr", "Please enter your first name");
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(firstname) === false) {
        printError("firstnameErr", "Please enter a valid first name");
      } else {
        printError("firstnameErr", "");
        firstnameErr = false;
      }
    }
    if (lastname == "") {
        printError("lastnameErr", "Please enter your last name");
      } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastname) === false) {
          printError("lastnameErr", "Please enter a valid last name");
        } else {
          printError("lastnameErr", "");
          lastnameErr = false;
        }
    }
  
    if (year == "") {
      printError("yearErr", "Please enter your mobile number");
    } else {
      var regex = /^[1-9]\d{3}$/;
      if (regex.test(year) === false) {
        printError("yearErr", "Please enter a valid year of birth");
      } else {
        printError("yearErr", "");
        yearErr = false;
      }
    }
  
    // Prevent the form from being submitted if there are any errors
    if ((firstnameErr || lastnameErr || yearErr) == true) {
  
      return false;
    } else {
      // Creating a string from input data for preview
      var dataPreview =
        "You've entered the following details: \n" +
        "First Name: " +
        firstname +
        "\n" +
        "Last Name: " +
        lastname +
        "\n" +
        "Year of birth: " +
        year +
        "\n" +
        "Age: " +
        parseInt(2022)-parseInt(year)

      alert(dataPreview);
    }
  }
  