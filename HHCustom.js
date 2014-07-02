$(document).ready(function() {
    //global variables
    var form = $("#subForm");
 
    var email = $("#mail"); //textbox u are going to validate
    var emailInfo = $("#emailInfo"); //to display error message
 
    //first validation on form submit
    form.submit(function() {
 
        // validation begin before submit
        if (validateEmail() && validatePhone()) {
 
            return true;
        } else {
 
            return false;
        }
 
    });

    function validateEmail() {
        //validation for empty emails
        if (email.val() == "") {
            email.addClass("error");
            emailInfo.text("This field is required.");
            emailInfo.addClass("error");
            return false;
        } 
        else {
            email.removeClass("error");
            emailInfo.text("*");
            emailInfo.removeClass("error");
 
        }
 
        //validation for proper email formats
        //testing regular expression
        var a = $("#email").val();
 
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        //if it's valid email
        if (filter.test(a)) {
            email.removeClass("error");
            emailInfo.text("*");
            emailInfo.removeClass("error");
            return true;
        }
        //if it's NOT valid
        else {
            email.addClass("error");
            emailInfo.text("Valid E-mail please.");
            emailInfo.addClass("error");
            return false;
        }
    }
/*
    //phone
    var phone = $("#phone");
    var phoneInfo = $("#phoneInfo");

    var phoneVal = $("#phone").val();

    function validatePhone(){
    	if(phone.val() == ""){
    		phone.addClass("error");
    		phoneInfo.text("This field is required.");
    		phone.addClass("error");
    		return false;
    	}
    	else{
    		phone.removeClass("error");
    		phoneInfo.text("*");
    		phoneInfo.removeClass("error");
    	}

    	//validation for proper phone numbers
    	var stripped = phoneVal.replace(/[\(\)\.\-\ ]/g, '');

    	if(isNaN(parseInt(stripped)))
    		phone.addClass("error");
    		phoneInfo.text("Valid phone number please.");
    		phone.addClass("error");
    		return false;
    	else if (!(stripped.length == 10)){
    		phone.addClass("error");
    		phoneInfo.text("Valid phone number please.");
    		phone.addClass("error");
    		return false;
    	}
    	else{
    		phone.removeClass("error");
            phoneInfo.text("*");
            phoneInfo.removeClass("error");
            return true;
    	}
    }
 */
});




