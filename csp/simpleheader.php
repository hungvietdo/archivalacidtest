<?php 
header("Content-Security-Policy: img-src www.cs.odu.edu;");
?>
<html>
<head>

</head>
<body>
    <div>
        <h4>First image should display normally.</h4><br>
    <img id="image_http" src="http://www.cs.odu.edu/~hdo/images/webbcenter.jpg" height='200'>
    </div>
    <div>

        <h4>Second image is not expected to display.</h4><br>
    <img id="image_http" src="https://shibboleth.odu.edu/img/header_images/0.jpg" height='200'>
    </div>
</body>
</html>
