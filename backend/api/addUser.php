<?php 

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");   
include 'config.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){

$postJSON = json_decode(file_get_contents('php://input'));
$today  = date('Y-m-d H:i:s');
$message = array();
$fname = $postJSON->firstname;     
$lname = $postJSON->lastname;
$gender = $postJSON->gender;
// $contactNum = $postJSON->contactNum;
// $address = $postJSON->adrs;
$email = $postJSON->email;
$password = $postJSON->pwd;
$action = 'registration_progress';
$role = 'Registered';
$verify = 'No';

$pass = md5($password);

if($action == 'registration_progress'){
   // $checkEmail = mysqli_query($con,"SELECT `email` FROM `users` WHERE `email` = '$email'")
   //      if(mysqli_num_rows($checkEmail)){
   //       http_response_code(400);
   //       echo json_encode(array('message' => 'Email Exist'));
   //      }else{
         $insert = mysqli_query($con,"INSERT INTO `users`(`firstname`, `lastname`, `gender`, `email`, `pwd`, `role`,`verified`, `createDate`)
         VALUES ('$fname','$lname','$gender','$email','$pass','$role','$verify','$today')");
         if($insert){
            // $result =  array('success' => true, 'msg'=>'Registered');
            http_response_code(201);
            echo json_encode(array('message' => 'Success'));
            //  $message['status'] = "Success"; 
         }else{
            http_response_code(201);
            echo json_encode(array('message' => 'Failed'));
         }
        } 
// }
}