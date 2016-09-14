<?php
  if (!empty($_GET['sleep'])) 
  { 
  	$imgSrcLogo = 'imageContent.php?sleep='.$_GET['sleep']; 
  }	else {
  	$imgSrcLogo = 'imageContent.php';
	}
  echo('<img src="'.$imgSrcLogo.'"/>'); 
?>