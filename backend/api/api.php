<?php 

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();
	
header("Content-Type: application/json; charset=UTF-8");   
include 'config.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){

$postJSON = json_decode(file_get_contents('php://input'));
$today  = date('Y-m-d H:i:s');
$message = array();
$fname = $postJSON->firstname;     
$lname = $postJSON->lastname;
$gender = $postJSON->gender;
$contactNum = $postJSON->contactNum;
$address = $postJSON->adrs;
$email = $postJSON->email;
$password = $postJSON->pwd;
$action = 'registration_progress';

$pass = md5($password);


if($action == 'registration_progress'){

$insert = mysqli_query($con,"INSERT INTO `users`(`firstname`, `lastname`, `gender`, `contactNum`, `adrs`, `email`, `pwd`, `createDate`)
VALUES ('$fname','$lname','$gender','$contactNum','$address','$email','$pass','$today')");
    if($insert){
       // $result =  array('success' => true, 'msg'=>'Registered');
        http_response_code(201);
        echo json_encode(array('message' => 'Success'));
      //  $message['status'] = "Success"; 
    }else{
       http_response_code(201);
       echo json_encode(array('message' => 'Failed'));
    //    $result =  array('success' => false, 'msg'=>'Error');
    //    http_response_code(422);
    //    $message['status'] = "Error"; 
    }

// echo json_encode($message);
// echo mysqli_error($con);
}
}




 