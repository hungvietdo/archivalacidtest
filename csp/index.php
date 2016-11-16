<?php header("Content-Security-Policy: img-src 'https://www.google.com'");?>
<html>
<head>
<script type="text/javascript">

function myFunction()
{
  var filename = "img.php";
  var leaking= "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  document.getElementById("image").src=filename;
  document.getElementById("leakingimage").src=leaking;
}
</script>

</head>
<body onload="myFunction()">
<h1>
  Acid Test Main Page
</h1>
<div>
  Origin image
</div>
<div>
  <img id="image" src="" height='50'>
</div>
<div>
  Leaking image (with js)
</div>
<div>
  <img id="leakingimage" src="" height='50'>
</div>
<div>
  Leaking image (direct link)
</div>
<div>
  <img id="leakingimage_direct" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height='50'>
</div>
<script type="text/javascript">
  var filename = "img.php";
  var leaking= "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  document.getElementById("image").src=filename;
  document.getElementById("leakingimage").src=leaking;
</script>
</body>
</html>
