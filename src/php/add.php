<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require 'functions.php';

function add()
{
  $contents = file_get_contents('php://input');
  $payload = json_decode($contents, true);

  if (!validateRequest($payload)) {
    return;
  }

  $folder = createFolders($payload['category'], $payload['newProductName']);
  writeNewImages($payload, $folder);
  createCoverImage($payload, $folder);
  insert_product($folder, $payload);
}

add();
echo 'Success';
