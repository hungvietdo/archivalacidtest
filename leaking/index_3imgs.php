<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script type="text/javascript">
//$( window ).load(function() {
$ (document).ready (function () { 
 var protocol = "http://";
 var filename = protocol + "www.cs.odu.edu/~hdo/cs697/acidtest/leaking/img.php"; 
 $("#leakingimage").attr("src",filename);

 //difference image but with same content. test with webrecorder
 var filename = protocol + "www.cs.odu.edu/~hdo/cs697/acidtest/leaking/img1.php"; 
 $("#third_img").attr("src",filename);

});

$ (window).load (function () {
	var org_uri = $('#originimage')[0].src;
	var leak_uri= $('#leakingimage')[0].src;
	if (org_uri == leak_uri) 
		{
			$("#pass").html("Pass");
		} else {
			$("#fail").html("Failed");
		}
});
</script>
</head>
<body>

<h1>
Acid Test Main Page
</h1>

<div id="demo"></div>
<br>
<img id="leakingimage" src="">Name: img.php <br>
<img id="originimage" src="img.php">Name: img.php
<br>
<h3>Testing on leaking resource:
<p class="text-primary" id="pass"></p>
<p class="text-danger" id="fail"></p>

</h3>

<img id="third_img" src="">Name: img1.php

</body>
</html>
