<?php 

    //var_dump($_SERVER);exit;
    // create a 100*30 image
    $im = imagecreate(140,40);
    sleep($_GET['sleep']);

    // white background and blue text
    $bg = imagecolorallocate($im, 26,150,65);
    $textcolor = imagecolorallocate($im, 215,25,28);

    // write the string at the top left
    imagestring($im, 5, 5, 2,$_SERVER["SERVER_NAME"] , $textcolor);

    // output the image
    header("Content-type: image/png");
    imagepng($im);
    //

?>
