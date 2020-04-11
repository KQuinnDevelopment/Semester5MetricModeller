<?php

include_once "../config/db.php";

if ( $_SERVER['REQUEST_METHOD'] === 'GET' )
{  
    
    // Get all values to populate table
    if ( ! $_GET['column'] )
    {
        try
        {
            $command = "SELECT * FROM language_productivity";
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
    // Instead of getting all the contents only grab what is needed to populate the select input
    if ( $_GET['column'] === 'source' )
    {
        try
        {
            $command = "SELECT AVERAGE_SOURCE_STATEMENTS_PER_FUNCTION_POINT AS SOURCE, LANGUAGE FROM language_productivity";
            $stmt = $dbh->prepare($command);
            $stmt->execute();
        } 
        catch (Exception $e)
        {
            die("Error: Could not connect: " . $e->getMessage());
        }
        $result = $stmt->fetchAll();
        // Return succesful
        echo json_encode($result);
    }
}
else {
    echo 0;
}
?>