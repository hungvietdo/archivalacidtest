<?php 

  // create a 100*30 image
$im = imagecreate(400, 30);

// white background and blue text
$bg = imagecolorallocate($im, 255, 255, 255);
$textcolor = imagecolorallocate($im, 255, 0, 0);

// write the string at the top left
imagestring($im, 5, 0, 0, "Not passed the test by ".$_GET['sleep'] ." second(s)." , $textcolor);

// output the image
header("Content-type: image/png");
imagepng($im);

?>