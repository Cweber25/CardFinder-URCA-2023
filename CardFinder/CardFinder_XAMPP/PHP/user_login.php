<?php
   echo "PHP execution successful ";

   $email = $_POST["user_email"];
   $user_password = $_POST["user_password"];
   

   echo $email." ".$user_password;

   $host = "localhost";
   $user= "root";
   $password = "";
   $db_name = "cardfinder_database";

   // Create connection.
   $conn = new mysqli($host, $user, $password, $db_name);
   // Check connection.
   if ($conn -> connect_error) {
      die("Connection Failed: ".$conn -> connect_error);
   }
   else
   {
      echo "<br> Connected to Database!";
   }

   $sql_query = "SELECT user_email, user_password FROM user_accounts WHERE user_email = '$email' AND user_password = '$user_password'";
   $result = $conn->query($sql_query);
   if ($result -> num_rows > 0) {
      while($row = $result->fetch_assoc()) {
         echo "<br> email: ". $row['user_email']. "<br>pass: ". $row['user_password'];
      }
   }
   else
   {
      echo "0 results..."; 
   }

   $conn->close();

   header("Location: http://localhost/cardfinder_XAMPP/HTML/loginSuccess.html", true, 301); // Comment this out to php file output (Shows that data was accessed)
   exit();
?>