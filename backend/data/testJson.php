<?php


    include_once('../configs/accessOrigin.php');
    include_once('../configs/mysqlConnect.php');

    $data = json_decode(file_get_contents("php://input"));
    $token = $data->token;

    $check = $db->prepare("SELECT id, email, token FROM users WHERE token=$token");
    $check->execute();
    $check = $check->fetchAll(PDO::FETCH_ASSOC);

    $json=json_encode($check);
    print $json;