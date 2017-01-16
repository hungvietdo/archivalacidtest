<?php 

date_default_timezone_set('UTC');
//echo date(DATE_RFC2822);

    //var_dump($_SERVER);exit;
    // create a 100*30 image
    $im = imagecreate(300,25);
    sleep($_GET['sleep']);

    // white background and blue text
    $bg = imagecolorallocate($im, 26,150,65);
    $textcolor = imagecolorallocate($im, 255,237,160);

    //a date string
    $date = new DateTime();
    // write the string at the top left
    imagestring($im, 5, 5, 2, $date->format('Y-m-d H:i:sP T'), $textcolor);

    // output the image
    header("Content-type: image/png");
    imagepng($im);
    //

?>
