<?php 
header("Content-Security-Policy:img-src www.cs.odu.edu");
?>
<html>

<head>
<meta http-equiv="Content-Security-Policy" content=" img-src www.cs.odu.edu">
</head>
<body>
    <div>
        <h4>Image from ODU webserver with header response from PHP.</h4><br>
    <img id="image_http" src="http://www.cs.odu.edu/~hdo/images/odu.png" height='50'>
    </div>
</body>
</html>
