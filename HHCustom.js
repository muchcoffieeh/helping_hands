$(document).ready(function() {
    //global variables
    var form = $("#subForm");
 
    var email = $("#mail"); //textbox u are going to validate
    var emailInfo = $("#emailInfo"); //to display error message

    var name = $("#name"); //textbox u are going to validate
    var nameInfo = $("#nameInfo"); //to display error message

    var address = $("#address"); //textbox u are going to validate
    var addressInfo = $("#addressInfo"); //to display error message

    var pword = $("#pword"); //textbox u are going to validate
    var pwordInfo = $("#pwordInfo"); //to display error message

    var pword = $("#pwordVer"); //textbox u are going to validate
    var pwordInfo = $("#pwordVerInfo"); //to display error message
 
    //first validation on form submit
    form.submit(function() {
 
        // validation begin before submit
        if (validateForm()) {
 
            return true;
        } else {
 
            return false;
        }
 
    });

    function validateForm() {
   	
    	//validate for empty names
    	if(name.val() == ""){
    		name.addClass("error");
            nameInfo.text("This field is required.");
            nameInfo.addClass("error");
            return false; 
    	}

    	//validate for empty addys
    	if(address.val() == ""){
    		address.addClass("error");
            addressInfo.text("This field is required.");
            addressInfo.addClass("error");
            return false; 
    	}

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

        //validate for empty pwords
    	if(pword.val() == ""){
    		pword.addClass("error");
            pwordInfo.text("This field is required.");
            pwordInfo.addClass("error");
            return false; 
    	}

    	//validate that pword matches the verify pword
    	if(!(pwordVer.val() == pword.val())){
    		pwordVer.addClass("error");
            pwordVerInfo.text("This field is required.");
            pwordVerInfo.addClass("error");
            return false; 
    	}
    }
});




