<?php 

    // create a 100*30 image
    $im = imagecreate(20, 20);
    sleep($_GET['sleep']);

    $bg = imagecolorallocate($im, 215,25,28);
    $textcolor = imagecolorallocate($im, 215,25,28);

    // write the string at the top left
    imagestring($im, 5, 5, 2, $_GET['sleep'] , $textcolor);

    // output the image
    header("Content-type: image/png");
    imagepng($im);
    //

?>
