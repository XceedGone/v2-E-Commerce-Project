<?php
    include "config.php";

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    header("Content-Type: application/json; charset=UTF-8");

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    //fetch admins
    $data = array();
        $q = mysqli_query($con, "SELECT * FROM `users` WHERE `verified` = 'Pending'");
        while ($row = mysqli_fetch_object($q)){
            $data[] = $row;
        }
         
    echo json_encode($data);
    echo mysqli_error($con);
    
} 
// else if ($_SERVER['REQUEST_METHOD'] == 'DELETE'){
//     $input = file_get_contents('php://input');
//     $message = array();

//     $id = $_GET['id'];
//     $q = mysqli_query($con, "DELETE FROM `users` WHERE `id` = '{$id}' LIMIT 1");

//     if ($q) {
//         http_response_code(201);
//         $message['status'] = "Succees";
//     }else {
//         http_response_code(422);
//         $message['status'] = "Error";
//     }

//     echo json_encode($message);
//     echo mysqli_error($con);

// }