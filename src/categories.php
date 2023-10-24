<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

header("Content-Type: application/json");

require 'functions.php';

$env = parse_ini_file('.env');

$server = $env["SERVER"];
$username = $env["USERNAME"];
$password = $env["PASSWORD"];
$dbName = $env["DATABASE"];

$conn = new mysqli($server, $username, $password, $dbName);
if ($conn->connect_error) {
  echo "[]";
}

$sql = "SELECT * FROM categories";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

  $data = "[";
  while ($row = $result->fetch_assoc()) {
    $data .= "{ \"name\": \"" . $row["name"] . "\", \"title\": \"" . $row["title"] . "\", \"description\": \"" . $row["description"] . "\" },";
  }
  $data = substr($data, 0, -1);
  $data .= "]";

  echo json_encode($data);
} else {
  echo "[]";
}
$conn->close();
