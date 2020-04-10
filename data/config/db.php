<?php

/* Noah Varghese 000753196 10/03/2018 This software is my own work -->
  /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

try {
    // set database to use
    $database = "metric_modeller";
    // Set options to retrieve data
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ];
    
    $char = "utf8";
    // Credentials
    $server = "localhost";
    $user = "root";
    $password = "";
    // Connection string
    $dbh = new PDO("mysql:host=$server;dbname=$database;charset=$char", $user, $password, $options);

} catch (Exception $ex) {
    die("ERROR: Couldn't connect.{$ex->getMessage()}");
}
?>