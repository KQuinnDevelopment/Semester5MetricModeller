<?php

include_once "../config/db.php";

// Allow access only if request is correct method
if ( $_SERVER['REQUEST_METHOD'] === 'GET' )
{  
    // Options on what type of data to retrieve
    if( empty( $_GET['language'] ) )
    {
        try
        {
            $command = "SELECT * FROM language_productivity";
            $stmt = $dbh->prepare($command);
            $stmt->execute();    
        } 
        catch (EException $e)
        {
            die("Error: Could not connect: " . $e->getMessage());
        }
        $result = $stmt->fetchAll();
        // Return succesful
        http_reponse_code(200);
        echo json_encode($result);
    }
}
// Set error code for debugging
http_reponse_code(400);
?>