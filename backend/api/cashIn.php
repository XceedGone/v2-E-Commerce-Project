<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");  
include "config.php";

if($_SERVER['REQUEST_METHOD'] == 'PUT'){
    $postJSON = json_decode(file_get_contents('php://input', true));
    $message = array();
    $id = $_GET['id'];
    $money = $postJSON->money;     
    
$q = mysqli_query($con, "UPDATE `users` SET `money`='$money' WHERE `id` = '{$id}' LIMIT 1"); 
  

if ($q) {
    http_response_code(201);
    $message['status'] = "Success";
}else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);

}else if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $data = array();
    $id = $_GET['id'];
    $q = mysqli_query($con, "SELECT `money` FROM `users` WHERE `id` = $id LIMIT 1");

    while ($row = mysqli_fetch_object($q)){
    $data[] = $row;
    }

    echo json_encode ($data);
    echo mysqli_error ($con);

}
