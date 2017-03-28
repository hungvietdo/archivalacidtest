<?php

	$i=$_GET['level'];
	$i++;
	if ($i<100)
	{
		echo "this is a frame at level" . $i;
		echo'<iframe height="600px" width="100%" src="child.php?level='.$i.'" name="iframe_a"></iframe>';
	} else 
	{

		echo '<script type="text/javascript"> alert("Reach to the '.$i.' level.");</script>';
	}
	
?>
