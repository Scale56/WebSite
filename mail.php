<?php  
if (isset($_POST["username"]) && !empty($_POST)){
    die();
}
if (isset($_POST["submit"])) {
    $name= $_POST["name"];
    $subject= $_POST["subject"];
    $mailFrom= $_POST["mail"];
    $message= $_POST["message"];

    $mailTo = "scale.a.works@gmail.com"; 
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;    
     
     
    mail($mailTo, $subject, $txt, $headers); 
    header ("Location: prova.php?mailsend"); 
    header ("Location: mailSent.html"); 
}
     ?>