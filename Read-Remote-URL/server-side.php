<?php header('Access-Control-Allow-Origin: *'); 
$registration=(object) $_GET['user_detail'];
print $_GET['jsoncallback'].'('.json_encode($error).')';
 ?>