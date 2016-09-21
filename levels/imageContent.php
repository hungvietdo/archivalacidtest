<?php

 if (!empty($_GET['sleep']))
  {
  	sleep($_GET['sleep']);
  	$imageText .= " Total time load: ".$_GET['sleep']. " second(s)";
  }

$url = 'images/Old_Dominion_University_seal.png';
 header('Content-type: image/png');
echo file_get_contents($url);

?>