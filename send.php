<?php
if(isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$tel=$_POST['tel'];
$mess=$_POST['message'];

$name = urldecode($name);
$email = urldecode($email);
$tel = urldecode($tel);
$mess = urldecode($mess);

$name = trim($name);
$email = trim($email);
$tel = trim($tel);
$mess = trim($mess);


echo $name;
echo "<br>";
echo $email;

}

?>