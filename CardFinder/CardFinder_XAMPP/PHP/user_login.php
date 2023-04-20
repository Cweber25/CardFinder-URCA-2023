<?php
   echo "PHP execution successful ";

   $email = $_POST["user_email"];
   $user_password = $_POST["user_password"];
   $user_password_confirm = $_POST["user_pass_confirm"];

   echo $email." ".$user_password." ".$user_password_confirm;

   $host = "localhost";
   $user= "root";
   $password = "";
   $conn = mysqli_connect($host,$user,$password,"cardfinder_database");

   

?>