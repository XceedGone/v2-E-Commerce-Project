<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();
	
header("Content-Type: application/json; charset=UTF-8");

$con = mysqli_connect("localhost", "root", "", "project") or die("could not connect DB");

 
date_default_timezone_set('Asia/Manila');