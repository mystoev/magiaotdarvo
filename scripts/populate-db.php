<?php

function testDb()
{
  $env = parse_ini_file('.env');

  $server = $env["SERVER"];
  $username = $env["USERNAME"];
  $password = $env["PASSWORD"];

  $conn = new mysqli($server, $username, $password);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $file = file_get_contents("migrate-db.json");
  $json_data = json_decode($file, true);

  $conn->query("SET NAMES 'utf8'");
  $conn->query("USE " . $env["DATABASE"]);

  foreach ($json_data as $item) {
    echo $item['category'] . ": " . count($item['content']) . "<br />";
    foreach ($item['content'] as $product) {
      echo $product['folder'] . "<br/> ";
      echo $product['title'] . "<br/> ";
      echo $product['description'] . "<br />";
      echo $product['files'][1] . "<br />";
      echo "<br />";

      $sql = "INSERT INTO " .
        $item['category'] .
        " (name, description, images_folder, images)" .
        " VALUES ('" . mysqli_real_escape_string($conn, $product['title']) .
        "', '" . mysqli_real_escape_string($conn, $product['description']) .
        "', '" . $product['folder'] .
        "', '" . join(',', $product['files']) . "')";

      if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    }
    echo "<br />";
  }

  $conn->close();
}

header("Content-Type: text/html; charset=utf-8");
testDb();
