<?php

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");

$contents = file_get_contents('php://input');
$payload = json_decode($contents, true);

$env = parse_ini_file('.env');
if ($payload['user'] === $env['ADMIN_USERNAME'] && $payload['password'] === $env['ADMIN_PASSWORD']) {

  echo $env['TOKEN'];;
}


echo null;
