// Defining a function to display error message

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  
function validateForm()
{
    var form=document.getElementById("Application")
    var firstname = form.firstname.value;
    var lastname = form.lastname.value;
    var year =form.year.value;
    

    var firstnameErr = true;
    var lastnameErr = true;
    var yearErr = true;
  
    if (firstname == "") {
      printError("firstnameErr", "Please enter your name");
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
      printError("lastnameErr", "Please enter your lastname address");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastname) === false) {
        printError("lastnameErr", "Please enter a valid last name");
        }
        else {
        printError("lastnameErr", "");
        lastnameErr = false;
      }
    }
  
    if (year == "") {
      printError("yearErr", "Please enter your birth number");
     } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(year) === false) {
        printError("yearErr", "Please enter a valid birth year");
      } else {
        printError("yearErr", "");
        yearErr = false;
      }
    }
  
    if ((firstnameErr || lastnameErr || yearErr) == true) {
      return false;
    }
    else {
      var dataPreview =
        "Hi, my name is " + firstname + " " + lastname + ", I'm " + parseInt(2022) - parseInt(year) +" years old and I'm learning JavaScript\n";
    }
    alert(dataPreview);
}

  