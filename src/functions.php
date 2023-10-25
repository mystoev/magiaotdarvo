<?php

function validateRequest($payload)
{
  $env = parse_ini_file('.env');
  return $payload["key"] === $env['TOKEN'];
}

function writeNewImages($payload, $folder)
{
  $images = $payload['images'];
  if ($images === null) {
    return;
  }

  $folder = 'images/' . $payload['category'] . "/" . $folder;
  foreach ($images as $image) {
    $img = $image["data"];
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $img_data = base64_decode($img);

    if ($folder === null) {
      file_put_contents($image["name"], $img_data);
    } else {
      file_put_contents($folder . '/' . $image["name"], $img_data);
    }
  }
}

function createCoverImage($payload, $folder)
{
  $folder = 'images/' . $payload['category'] . '/' . $folder;
  $image = $payload['images'][0];
  $img = $image["data"];
  $img = str_replace('data:image/png;base64,', '', $img);
  $img = str_replace(' ', '+', $img);
  $img_data = base64_decode($img);

  file_put_contents($folder . '/cover.jpg', $img_data);
}

function createFolders($category, $productName)
{
  if (!file_exists('images')) {
    mkdir('images', 0755);
  }

  $category = 'images/' . $category;
  if (!file_exists($category)) {
    mkdir($category, 0755);
  }

  $product_folder = $category . '/' . $productName;
  if (!file_exists($product_folder)) {
    mkdir($product_folder, 0755);
    return $productName;
  }

  $i = 0;
  $result = '';
  $endFolder = $product_folder;
  while (file_exists($endFolder)) {
    $result = $productName + strval($i);
    $endFolder = $product_folder . strval($i++);
  }

  mkdir($endFolder, 0755);

  return $result;
}

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
  $stmt = $conn->prepare("UPDATE " . $category . " SET name=?, description=?, images=? WHERE name=?");
  $stmt->bind_param("ssss", $newProductName, $description, $images, $productName);

  $stmt->execute();

  $conn->close();
}
