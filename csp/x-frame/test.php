<!DOCTYPE html>
<html>

<?php 
    header('X-Frame-Options: SAMEORIGIN'); 
?>
<head>
</head>
<body>
<iframe src="frame.php" height="200" width="300"></iframe>
<iframe src="http://www.google.com" height="500" width="800"></iframe>
<iframe sandbox="allow-scripts" src="sandbox.php" height="500" width="800"></iframe>

</body>
</html>
