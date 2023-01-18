<?php

include "config.php";

if($_SERVER['REQUEST_METHOD'] == 'PUT'){

    $postJSON = json_decode(file_get_contents('php://input', true));
    $message = array();
    $id = $_GET['id'];
    $fname = $postJSON->firstname;     
    $lname = $postJSON->lastname;
    $gender = $postJSON->gender;
    $contactNum = $postJSON->contactNum;
    $address = $postJSON->adrs;
    $email = $postJSON->email;
    $role = $postJSON->role;
    // $password = $postJSON->pwd;
    // $pass = md5($password);
    
    $q = mysqli_query($con, "UPDATE `users` SET `firstname`='$fname',`lastname`='$lname',`gender`='$gender',`contactNum`='$contactNum',`adrs`='$address',`email`='$email', `role` = '$role' WHERE `id` = '{$id}' LIMIT 1"); 
    
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


