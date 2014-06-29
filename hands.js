
function validateForm(theform) {
 for (var i=0; i<theform.elements.length; i++) {
  var element = theform.elements[i];
  if (element.className.indexOf("required") !=-1) {
   element.className = "required";
   if (!isFilled(element)) {
    alert("Please enter your " +element.id);
    element.className += " error";
    element.focus();
    return false;
   } 
  }
  if (element.className.indexOf("email") !=-1) {
   element.className = "required";
   if (!isEmail(element)) {
    alert("Please check you have entered a valid email address");
    element.className += " error";
    element.focus();
    return false;
   }
  }
 }
 return true;
}

function isFilled(field) {
 if (field.value.length < 1) {
  return false;
 } else {
  return true;
 }
}

function isEmail(field) {
 if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1) {
  return false;
 } else {
  return true;
 }
}


function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}