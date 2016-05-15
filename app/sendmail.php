<?php

require('recaptcha/autoload.php');
$secret = file_get_contents('./recapSecret.txt');

$gRecaptchaResponse = $_POST['recaptcha'];
$remoteIp = $_SERVER['REMOTE_ADDR'];

$recaptcha = new \ReCaptcha\ReCaptcha($secret);
$resp = $recaptcha->verify($gRecaptchaResponse, $remoteIp);
if ($resp->isSuccess()) {
    $_POST['recaptcha'] = '';
    $message=json_encode($_POST);
    $receiver="info@jobapproach.ch";
    $mailer="contact-form@jobapproach.ch";

    mail($receiver,"Contact",$message,  "From:" . $mailer);
} else {
    $errors = $resp->getErrorCodes();
    // echo json_encode($errors);
}

?>
