<?php
    include('../configs/accessOrigin.php');
    include('../configs/mysqlConnect.php');

    $data = json_decode(file_get_contents("php://input"));
    $token = $data->token;

    $check = $db->prepare("SELECT qualifications.id as qualificationID, qualifications.quality as quality
                            FROM qualifications, users WHERE users.token=$token AND users.id=qualifications.userID");
    $check->execute();
    $check = $check->fetchAll(PDO::FETCH_ASSOC);

    $json=json_encode($check);
    print $json;

