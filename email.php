<?php
  $error = "";

  if(isset($_POST)) {
    // Check if name has been entered and sanitize it if true
    if (!$_POST['name']) {
      $error .= "Please enter your name.<br>";
    }
    else {
      $_POST['name'] = strip_tags($_POST['name']);
    }

    // Check if email has been entered and sanitize and validate it if true
    if(!$_POST['email']) {
      $error .= "Please enter an email address.<br>";
    } 
    else {
      $_POST['email'] = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

      if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $error .= "Your email address is invalid.<br>";
      }
    }

    //Check if message has been entered and sanitize it if true
    if (!$_POST['message']) {
      $error .= "Please enter a message.";
    }
    else {
      $_POST['message'] = strip_tags($_POST['message']);
    }

    // If there are no errors, send the email
    if (empty($error)) {
      $name = $_POST['name'];
      $from = $_POST['email'];
      $message = $_POST['message'];

      $to = 'sidd.v17@gmail.com'; 
      $subject = 'New message from '.$name;

      $email = mail($to, $subject, $message, $from);
      if ($email) {
        http_response_code(200);
        echo "Email sent successfully!";
      } else {
        http_response_code(500);
        echo "Sorry there was an error sending your message. Please try again later.";
      }
    }
    else {
      http_response_code(400);
      echo $error;
    }
  }

?>