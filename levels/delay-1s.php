<html>

<?php

$seconds = 1;

// current time
echo "Start time: " . date('h:i:s') . "<br>";

// sleep for 10 seconds
sleep($seconds);

echo "Sleep for {$seconds} seconds <br>";
// wake up !
echo "End time: " . date('h:i:s') . "<br>";

?>

</html>
