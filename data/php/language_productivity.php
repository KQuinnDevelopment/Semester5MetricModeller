<?php

include_once "../config/db.php";

if ( $_SERVER['REQUEST_METHOD'] === 'GET' )
{  
    
    if ( $_GET['all'] === true )
    {
        try
        {
            $command = "SELECT ID, LANGUAGE FROM language_productivity";
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
    elseif ( $_GET['id'] )
    {

    }
    else
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
}
else {
    echo 0;
}
?>