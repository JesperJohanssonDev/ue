<?php
    include("../configs/accessOrigin.php");
    include("../configs/mysqlConnect.php");

    $data = json_decode(file_get_contents("php://input"));

    $password = $data->password;
    $username = $data->username;
    $userInfo = $db->query("SELECT email FROM users WHERE email='$username' AND password='$password'");
    $userInfo = $userInfo->fetchAll();

    $token;

    if (count($userInfo) == 1){
        $token = uniqid();

        $q = "UPDATE users SET token=:token WHERE email=:email AND password=:password";
        $query = $db->prepare($q);
        $execute = $query->execute(array(
            ":token" => $token,
            ":email" => $username,
            ":password" => $password
        ));

        print json_encode($token);

    } else {
        print "unauthorized";
    }
