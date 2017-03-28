<?php
//header("Content-Security-Policy: img-src www.cs.odu.edu;"); 
?>
<html>

<head>
<meta http-equiv="Content-Security-Policy" content="img-src www.google.com">
</head>
<body>
    <div>
        <h4>Image does not display since meta-tag is not allowed (though CSP allows in header) .</h4><br>
    <img id="image_http" src="http://www.cs.odu.edu/~hdo/images/odu.png" height='50'>
    </div>
 <div>
        <h4>Image does not display since header is not allowed image from google (even though allowed in meta tags).</h4><br>
    <img id="image_http" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" height='50'>
    </div>



</body>
</html>
