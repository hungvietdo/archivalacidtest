<?php

  if (!empty($_GET['sleep'])) 
  { 
  	$imgSrc='createImage.php?sleep='.$_GET['sleep']; 
  }	else {
  	$imgSrc='createImage.php'; 
	}
  echo('<img src="'.$imgSrc.'"/>');
?>