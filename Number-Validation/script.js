/*
*Developed and Maintaining by:Siddharth Singh, v 01.00
*Detail:Use for Om contact form
*Author URI: http://sanditsolution.com/
*Email:siddharthsingh91@gmail.com
*/
$(function(){
$("#cardnum, #cvc, #month, #year").keyup(function (e) {
	  if($.isNumeric(this.value)== false){
              this.value = this.value.replace(/[^0-9\\.]+/g, '');
              /*Below line showing error in message*/
			  $("#error_message").html("*Only number are allowed").show().delay(3000).fadeOut();
			return false;
        }     
})});