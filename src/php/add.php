<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require 'functions.php';

function insert_product($newProductFolder, $payload)
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
  $name = $payload['newProductName'];
  $description = $payload['description'];
  $images = join(",", array_map(function ($image) {
    return $image['name'];
  }, $payload['images']));
  $images = "cover.jpg," . $images;
  $stmt = $conn->prepare("INSERT INTO " . $category . " (name, description, images_folder, images) VALUES (?, ?, ?, ?)");
  $stmt->bind_param("ssss", $name, $description, $newProductFolder, $images);

  $stmt->execute();

  $conn->close();
}

function add()
{
  $contents = file_get_contents('php://input');
  $payload = json_decode($contents, true);

  if (!validateRequest($payload)) {
    return;
  }

  $folder = $payload['folder'];
  writeNewImages($payload, $folder);
  createCoverImage($payload, $folder);
  insert_product($folder, $payload);
}

add();
echo 'Success';
