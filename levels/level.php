<html>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

 
if (!empty($_GET["level"]))
{
	//sleep(1);
	echo ('This is the  level '.$_GET["level"]);

	$_GET["level"] = $_GET["level"] + 1;
	if ($_GET["level"]<10)
		header('Location: '.$_SERVER['PHP_SELF']."?level=".$_GET["level"]); 
} else
{	
	echo ('This is the first level');
	header("location: level.php?level=1");	
}

?>

</html>
