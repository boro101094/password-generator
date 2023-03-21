//global array to store the criterias selected by the user
var criterias = [];

$(document).ready(function () {

  //Function executed after click on 'Generate Password'
  $('#btnGenerate').click(function () {


    //Conditional that validates the that the information is valid
    if (validateCheckedCriteria() && validatePasswordLenght()) {
      var pass = ''; //variable were the generated password will be stored

      //group of arrays containing all the cahracters that can be part of the password
      var lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var upperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var specialCharacter = ['!', '#', '$', '%', '&', '(', ')', '*', '=', '+', '-', ';', ':', '<', '>', '@'];

      
      for (let i = 0; i < $('#ipPassLenght').val(); i++) {

        switch (criterias[Math.floor(Math.random() * criterias.length)]) {

          case 1: //case for lowerCase

            pass = pass + lowerCases[Math.floor(Math.random() * lowerCases.length)];
            break;
          case 2: //case for upperCase
            pass = pass + upperCases[Math.floor(Math.random() * upperCases.length)];
            break;
          case 3://case for numeric
            pass = pass + numeric[Math.floor(Math.random() * numeric.length)];
            break;
          case 4: //case for specialCharacters
            pass = pass + specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
            break;
        }
        

      }

      $("#password").val(pass);

      //Hide Modal after clicking Generate Button
      $('#modalCriteria').modal('hide');

    }
  });

});