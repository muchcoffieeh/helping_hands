$(document).ready(function() {

    var phone = $("#phone");
    var phoneInfo = $("#phoneInfo");

    form.submit(function() {
 
        // validation begin before submit
        if (validateEmail() && validatePhone()) {
 
            return true;
        } else {
 
            return false;
        }
 
    });

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

});