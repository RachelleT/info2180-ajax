<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST['name']) && !empty($_POST['name'])) {
  // if (isset($_GET['name']) && !empty($_GET['name'])) {

    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
    // $name = filter_input(INPUT_GET, 'name', FILTER_SANITIZE_SPECIAL_CHARS);

    $validNames = [
      'John',
      'Mary',
      'Yannick',
      'Tom',
      'Jane',
      'Craig',
      'Brittany',
      'Paul',
      'Marsha'
    ];

    if (in_array($name, $validNames)) {
      echo json_encode(['data' => ['name' => $name]]);
    } else {
      echo json_encode(['data' => ['error' => "The name {$name} does not exist."]]);
    }
  } else {
      header("HTTP/1.0 400 Bad Request");
      echo json_encode(['data' => ['error' => 'Invalid Request']]);
  }
}
