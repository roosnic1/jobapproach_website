<?php

$email=$_POST['email'];
$message=json_encode($_POST);
$receiver="nicolas.k.roos@gmail.com";
$mailer="test@jobapproach.ch";

mail($receiver,"Contact",$message,  "From:" . $mailer);

//echo $message;

?>
