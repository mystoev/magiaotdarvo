<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require 'functions.php';

function update_product($payload)
{
  $env = parse_ini_file('.env');

  $server = $env["SERVER"];
  $username = $env["USERNAME"];
  $password = $env["PASSWORD"];
  $dbName = $env["DATABASE"];

  $conn = new mysqli($server, $username, $password, $dbName);
  if ($conn->connect_error) {
    echo "{}";
  }

  $category = $payload['category'];
  $newProductName = $payload['newProductName'];
  $description = $payload['description'];
  $productName = $payload['productName'];
  $images = $payload['imagesColumn'];
  $stmt = $conn->prepare("UPDATE " . $category . " SET name=?, description=?, images=? WHERE images_folder=?");
  $stmt->bind_param("ssss", $newProductName, $description, $images, $productName);

  $stmt->execute();

  $conn->close();
}

function update()
{
  try {
    $contents = file_get_contents('php://input');
    $payload = json_decode($contents, true);

    if (!validateRequest($payload)) {
      return false;
    }

    update_product($payload);

    return true;
  } catch (Exception $e) {
    return false;
  }
}

$result = update();
echo $result ? 'Success' : 'Failure';
