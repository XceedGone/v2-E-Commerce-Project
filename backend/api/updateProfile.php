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
    $fname = $postJSON->firstname;     
    $lname = $postJSON->lastname;
    $gender = $postJSON->gender;
    $contactNum = $postJSON->contactNum;
    $address = $postJSON->adrs;
    $email = $postJSON->email;
    $verify = $postJSON->verify;
    $password = $postJSON->pwd;
    $pass = md5($password);
    // $tm=md5(time());
    // $filename = $_FILES["image"]["name"];
    // $destination = "./image/".$tm.$filename;
    // $destination1 = "image/".$tm.$filename;
    // $target_path = "image/";
    // $target_path = $target_path . basename( $_FILES['image']['name']);
   // move_uploaded_file($_FILES["image"]["tmp_name"],$destination); 
    
$q = mysqli_query($con, "UPDATE `users` SET `firstname`='$fname',`lastname`='$lname',`gender`='$gender',`contactNum`='$contactNum',`adrs`='$address',`email`='$email',`pwd`='$pass', `verified`='$verify' WHERE `id` = '{$id}' LIMIT 1"); 

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


// function uploadImage($imgName){
//     if(isset($_FILES[$imgName])){
//         $img_tmp = $_FILES[$imgName]['tmp_name'];
//         $imgFolder = 'images/';
//         if(file_exists($img_tmp)){
//             $taille_maxi = 1000000;
//             $taille = filesize($_FILES[$imgName]['tmp_name']);
//             $imgsize = getimagesize($_FILES[$imgName]['tmp_name']);
//             $extensions = array('.png', '.gif' , '.jpg' , '.jpeg');
//             $extension = strtolower(strrchr($_FILES[$imgName]['name'], '.'));

//             if($imgsize['mime'] =='image/jpeg'){
//                 $img_src = imagecreatefromjpeg($img_tmp);
//             }else if($imgsize['mime' == 'image/png']){  
//                 $img_src = imagecreatefrompng($img_tmp);
//             }else if($imgsize['mime' == 'image/gif']){
//                 $img_src = imagecreatefromgif($img_tmp);
//             }

//             $new_width = 380;
//             $new_height = 380;
//             $image_finale = imagecreatetruecolor($new_width, $new_height);

//             imagecopyresampled($image_finale, $img_src, 0,0, 0, 0,$new_width,$new_height, $imgsize[0], $imgsize[0]);
//             $imgName = $imgFolder.'1'.'jpg';
//             imagejpeg($image_finale,$imgName);
//             return $imgName;
//         }
//     }
// }