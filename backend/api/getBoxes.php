<?php
 
include "config.php";

if($_SERVER['REQUEST_METHOD'] == 'GET'){
        $data = array();
        $q = mysqli_query($con, "SELECT * FROM `products3`");
        
        while ($row = mysqli_fetch_object($q)){
            $data[] = $row;
        }
        echo json_encode($data);
        echo mysqli_error($con);
} else if ($_SERVER['REQUEST_METHOD'] == 'DELETE'){
    $input = file_get_contents('php://input');
    $message = array();

    $id = $_GET['id'];
    $q = mysqli_query($con, "DELETE FROM `products3` WHERE `id` = '{$id}' LIMIT 1");

    if ($q) {
        http_response_code(201);
        $message['status'] = "Succees";
    }else {
        http_response_code(422);
        $message['status'] = "Error";
    }

    echo json_encode($message);
    echo mysqli_error($con);
}else if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $postJSON = json_decode(file_get_contents('php://input'));
    $today  = date('Y-m-d H:i:s');
    $message = array();    
    $title = $postJSON->title;
    $price = $postJSON->price;
    $image = $postJSON->image;
    $description = $postJSON->description;
    $ingredients = $postJSON->ingredients;
    $diet = $postJSON->diet;
    $brand = $postJSON->brand;
    
       $insert = mysqli_query($con,"INSERT INTO `products3`(`title`, `price`, `image`, `description`, `ingredients`, `diet`, `brand`, `date_at`) VALUES ('$title','$price','$image','$description','$ingredients','$diet','$brand','$today')");
        if($insert){
           // $result =  array('success' => true, 'msg'=>'Registered');
            http_response_code(201);
            echo json_encode(array('message' => 'Success'));
          //  $message['status'] = "Success"; 
        }else{
           http_response_code(201);
           echo json_encode(array('message' => 'Failed'));
        } 
}else if($_SERVER['REQUEST_METHOD'] == 'PUT'){

    $postJSON = json_decode(file_get_contents('php://input'));
    $today  = date('Y-m-d H:i:s');
    $message = array();    
    $title = $postJSON->title;
    $price = $postJSON->price;
    $image = $postJSON->image;
    $description = $postJSON->description;
    $ingredients = $postJSON->ingredients;
    $diet = $postJSON->diet;
    $brand = $postJSON->brand;
    $id = $_GET['id'];
    
       $insert = mysqli_query($con,"UPDATE `products3` SET `title`='$title',`price`='$price',`image`='$image',`description`='$description',`ingredients`='$ingredients',`diet`='$diet',`brand`='$brand' WHERE `id` = '{$id}' LIMIT 1");
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

