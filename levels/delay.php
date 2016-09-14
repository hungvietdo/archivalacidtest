<html>

<?php

$seconds = $_GET["seconds"];

// current time
echo "Start time: " . date('h:i:s') . "<br>";

// sleep for 10 seconds
sleep($seconds);

echo "Sleep for {$seconds} seconds <br>";
// wake up !
echo "End time: " . date('h:i:s') . "<br>";

include ('img.php');
?>

</html>
