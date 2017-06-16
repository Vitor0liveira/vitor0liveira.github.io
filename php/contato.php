<?php
if($_POST){
    $email = $_POST['email'];
    $msg = $_POST['msg'];

//send email
    mail("vitoroliveira.ads@gmail.com", "This is an email from:" .$email, $msg);
}
?>		