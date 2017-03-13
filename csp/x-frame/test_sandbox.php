<!DOCTYPE html>
<html>

<?php 
    header('X-Frame-Options: SAMEORIGIN'); 
?>
<head>
</head>
<body>

<div style="float: left;">
Iframe: sandbox=""
<br>
<iframe sandbox="" src="sandbox.php" height="300" width="300"></iframe>
</div>
<div style="float: left;">
Iframe: sandbox="allow-scripts"
<br>
<iframe sandbox="allow-scripts" src="sandbox.php" height="300" width="300"></iframe>
</div>
</body>
</html>
