<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Email configuration
    $to = "amankumarmaurya93@gmail.com";
    $subject = "New Comment from " . $name;
    $message = "Name: " . $name . "\nEmail: " . $email . "\n\nComment:\n" . $comment;
    $headers = "From: " . $email;

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your comment!";
    } else {
        echo "Error sending email.";
    }
}
?>
