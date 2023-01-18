<?php

include "config.php";

if($_SERVER['REQUEST_METHOD'] == 'PUT'){

    $postJSON = json_decode(file_get_contents('php://input', true));
    $message = array();
    $id = $_GET['id']; 
    $verify = $postJSON->verify;

    $q = mysqli_query($con, "UPDATE `users` SET `verified` = '$verify' WHERE `id` = '{$id}' LIMIT 1"); 
    
    if ($q) {
        http_response_code(201);
        $message['status'] = "Succees";
    }else {
        http_response_code(422);
        $message['status'] = "Error";
    }
    
    echo json_encode($message);
    echo mysqli_error($con);


}


