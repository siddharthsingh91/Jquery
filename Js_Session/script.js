//Setting the session value 
var getDateCal = $('#calendar').fullCalendar('getDate');
sessionStorage.setItem('newDate', getDateCal);	


//Geeting the session value
var final_date = sessionStorage.getItem('newDate');
if(final_date!=null){
$('#calendar').fullCalendar('gotoDate', final_date);
}