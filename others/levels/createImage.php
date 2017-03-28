<?php 
  header('Content-type: image/png');
  $imageText = 'This is an image.';

  if (!empty($_GET['sleep']))
  {
  	sleep($_GET['sleep']);
  	$imageText .= " Total time load: ".$_GET['sleep']. " second(s)";
  }
  
 

  // create a 100*30 image
$im = imagecreate(400, 30);

// white background and blue text
$bg = imagecolorallocate($im, 255, 255, 255);
$textcolor = imagecolorallocate($im, 0, 0, 255);

// write the string at the top left
imagestring($im, 5, 0, 0, "Passed test with ".$_GET['sleep'] ." second(s)." , $textcolor);

// output the image
header("Content-type: image/png");
imagepng($im);

?>