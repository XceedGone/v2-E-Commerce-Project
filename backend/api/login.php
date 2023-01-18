<?php
include "config.php";
include_once '../vendor/autoload.php'; 

use \Firebase\JWT\JWT;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $postJSON = json_decode(file_get_contents('php://input'));
    $email = $postJSON->email;
    $password = $postJSON->pwd;
    $action = 'login_progress';

    if($action == 'login_progress'){
        $pass = md5($password);
        $q =  $con->query("SELECT * FROM users WHERE email = '$email' LIMIT 1");
        if($q->num_rows >0 ){
            $user = $q->fetch_assoc();

        if($pass == $user['pwd']){
            $key =  "YOUR_SECRET_KEY"; //jwt key
     
            $logData = array(
                'id'          => $user['id'], 
                'firstname'   => $user['firstname'],
                'lastname'    => $user['lastname'],
                'gender'      => $user['gender'],
                'contactNum'  => $user['contactNum'],
                'adrs'        => $user['adrs'],
                'email'       => $user['email'], 
                'role'        => $user['role'],
                'verified'    => $user['verified'],
                'money'       => $user['money']    
            ); 
            $token = JWT::encode($logData, $key, 'HS256');
            http_response_code(200);
            echo json_encode(array('message'=>true, 'token'=>$token, 'data'=>$logData));
            // echo json_encode(array('token'=>$token));
            }     
          else{
            http_response_code(400);
            echo json_encode(array('message'=>false, 'result'=>false));           
           }
        }
        else{
            http_response_code(400);
            echo json_encode(array('message'=>false, 'result'=>'User Not Registered'));
        }
  
    }
}