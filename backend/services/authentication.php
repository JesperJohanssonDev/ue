<?php
    include('../configs/accessOrigin.php');
    include('../configs/mysqlConnect.php');

    $data = json_decode(file_get_contents("php://input"));
    $token = $data->token;

    $check = $db->prepare("SELECT * FROM users WHERE token=$token");
    $check->execute();
    $check = $check->fetchAll();

    if (count($check) == 1){
        print "authorized";
    } else {
        print "unauthorized";
    }