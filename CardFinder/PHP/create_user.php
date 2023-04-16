// Connects to the "cardfinder_databse" & inserts values into "user_accounts" table
// The table consists of two fields, user_email, user_password
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

   if ($conn -> connect_error) {
      die("Connection Failed: ".$conn -> connect_error);
   }
   else
   {
      echo "<br> Connected to Database!";
   }

   $sql_query = "INSERT INTO user_accounts VALUES ('$email','$user_password')";

   if (mysqli_query($conn,$sql_query)) {
      echo "<br> Account Created!";
   }
   else
   {
      echo "<br> Error: " . $sql . '<br>' . $conn -> error; 
   }
?>