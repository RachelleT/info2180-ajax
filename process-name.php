<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (!isset($_POST['name']) or !isset($_POST['idnumber']) or
  empty($_POST['name']) or empty($_POST['idnumber'])) {
    echo "What?!?!? You don't have a name or ID Number?";
  } else {
    echo "Your name is: <strong>" . $_POST['name'] . "</strong> and your ID Number is: <strong>" . $_POST['idnumber'] . "</strong>.";
  }
}
