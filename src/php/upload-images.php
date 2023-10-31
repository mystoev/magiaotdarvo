<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require 'functions.php';

function update()
{
  try {
    $contents = file_get_contents('php://input');
    $payload = json_decode($contents, true);

    if (!validateRequest($payload)) {
      return false;
    }

    writeNewImages($payload, $payload['productName']);

    return true;
  } catch (Exception $e) {
    return false;
  }
}

$result = update();
echo $result ? 'Success' : 'Failure';
