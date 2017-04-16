<?php
  if (isset($_POST["submit"])) {
    $error = false;

    // Check if name has been entered
    if (!$_POST['name']) {
      echo "Please enter your name<br>";
      $error = true;
    }

    // Check if email has been entered and is valid
    if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
      echo "Please enter a valid email address<br>";
      $error = true;
    }

    //Check if message has been entered
    if (!$_POST['message']) {
      echo "Please enter your message<br>";
      $error = true;
    }

    // If there are no errors, send the email
    if (!$error) {
      $name = $_POST['name'];
      $from = $_POST['email'];
      $message = $_POST['message'];

      $to = 'sidd.v17@gmail.com'; 
      $subject = 'New message from your website!';
      $body = "From: $name".$message;

      $email = mail($to, $subject, $message, $from);
      if ($email) {
        echo "Email sent successfully!";
      } else {
        echo "Sorry there was an error sending your message. Please try again later.";
      }
    }
	}
?>