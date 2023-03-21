//Function to Validate if the user checked at least one checkbox
function validateCheckedCriteria() {
    if ($('div#chksCriteria input:checked').length > 0) {
        return true;
    }
    else {
        alert('Please select at least one password criteria');
        return false;
    }
}

/*Function to validate that the user stay at the range of min and max lenght*/
function validatePasswordLenght(){
    var passLenght= $('#ipPassLenght').val();
    if(passLenght < 8){
        alert('Password Lenght must be 8 or higher, changing value to 8');
        $('#ipPassLenght').val(8);
        return false;

    }else if(passLenght > 128){
        alert('Password Lenght must be 128 or lower, changing value to 128');
        $('#ipPassLenght').val(128);
        return false;

    }else{
        return true;
    }

}


//validate that user can insert only positive integers
//source: StackOverFlow - https://stackoverflow.com/questions/7295843/allow-only-numbers-to-be-typed-in-a-textbox
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

//function to add values to array of criterias, based on if checkbox are selected

//listener to checkbox for lowerCases
  $('#chkLower').click(function(){
    if($(this).is(':checked')){
       criterias.push(1);
       
    } else {
        removeCriteria(1);

    }
});

//listener to checkbox for upperCases
$('#chkUpper').click(function(){
    if($(this).is(':checked')){
       criterias.push(2);
    } else {
        removeCriteria(2);

    }
});

//listener to checkbox for Numeric
$('#chkNumeric').click(function(){
    if($(this).is(':checked')){
       criterias.push(3);
    } else {
        removeCriteria(3);

    }
});

//listener to checkbox for special Characters
$('#chkSpecialChar').click(function(){
    if($(this).is(':checked')){
       criterias.push(4);
    } else {
        removeCriteria(4);

    }
});

//function to remove the criteria from the array when the checkbox is unchecked
function removeCriteria(criteria){
    criterias.splice(criterias.indexOf(criteria), 1);
}