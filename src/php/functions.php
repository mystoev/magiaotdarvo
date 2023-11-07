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

  if (!file_exists('images')) {
    mkdir('images', 0755);
  }

  $categoryFolder = 'images/' . $payload['category'];
  if (!file_exists($categoryFolder)) {
    mkdir($categoryFolder, 0755);
  }

  $folder = $categoryFolder . "/" . $folder;
  if (!file_exists($folder)) {
    mkdir($folder, 0755);
  }

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
