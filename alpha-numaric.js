//Enters only alphanumaric in text field. only numbers and alphabes. not special character

var specialKeys = new Array();
 specialKeys.push(8);  //Backspace
 specialKeys.push(9);  //Tab
 specialKeys.push(46); //Delete
 specialKeys.push(36); //Home
 specialKeys.push(35); //End
 specialKeys.push(37); //Left
 specialKeys.push(39); //Right
 //specialKeys.push(32); //space

 function IsAlphaNumeric(e) {
     var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
     var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));

     return ret;
 }

