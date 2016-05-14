<?php

$email=$_POST['email'];
$message=json_encode($_POST);
$receiver="info@jobapproach.ch";
$mailer="contact-form@jobapproach.ch";

mail($receiver,"Contact",$message,  "From:" . $mailer);

?>
