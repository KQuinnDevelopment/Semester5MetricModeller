<?php

include_once "../config/db.php";

if ( $_SERVER['REQUEST_METHOD'] === 'GET' )
{  
    // Get all values to populate table
    if ( ! $_GET['column'] )
    {
        try
        {
            $command = "SELECT * FROM project_history";
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
}