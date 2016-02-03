<?php

    $hostname = "127.0.0.1";
    $username = "root";
    $password = "root";
    $database = "ue";

    $db = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);