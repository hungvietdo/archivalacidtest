<?php 
  header('Content-type: image/png');
  $imageText = 'This is an image.';

  if (!empty($_GET['sleep']))
  {
  	sleep($_GET['sleep']);
  	$imageText .= " Total time load: ".$_GET['sleep']. " second(s)";
  }
  
  $img=imagecreatetruecolor(500, 40); 
  $text_color = imagecolorallocate($img, 233, 14, 91);
  imagestring($img, 5, 15, 15, $imageText, $text_color);
  imagepng($img);
  imagedestroy($img);
?>