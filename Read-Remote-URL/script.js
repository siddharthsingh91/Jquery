var url="http://msdks.com/function/booking.php?jsoncallback=";
$.getJSON({
url:url,
data:{user_detail:user_detail}, 
success: function(data){			
//result = $parseJSON(data);
alert(data);
}
});