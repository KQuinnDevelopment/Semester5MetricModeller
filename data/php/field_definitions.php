<?php

include_once "../config/db.php";

if ( $_SERVER['REQUEST_METHOD'] === 'GET' )
{  
    try
    {
        $command = "SELECT * FROM field_definitions";
        $stmt = $dbh->prepare($command);
        $stmt->execute();  
    }
    catch (Exception $e)
    {
        die("Error: Could not connect: " . $e->getMessage());
    }
    $result = $stmt->fetchAll();
    echo json_encode($result);
}