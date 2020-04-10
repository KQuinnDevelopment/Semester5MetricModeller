<?php

include_once "../config/db.php";

if ( $_SERVER['REQUEST_METHOD'] === 'POST' )
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
    return $result;
}
return 0;
?>