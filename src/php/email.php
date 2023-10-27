<?php

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$env = parse_ini_file('.env');
if ($data["key"] !== $env['TOKEN']) {
  return;
}

$to = "magiaotdarvo@gmail.com";
$subject = $data["subject"];
$message = $data["message"];
$headers = "From: webmaster@magiaotdarvo.com";

mail($to, $subject, $message, $headers);

echo 'Email sent';
