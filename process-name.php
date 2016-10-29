<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (!isset($_POST['name']) or empty($_POST['name'])) {
    echo "What?!?!? You don't have a name?";
  } else {
    echo "Your name is: " . $_POST['name'];
  }
}
