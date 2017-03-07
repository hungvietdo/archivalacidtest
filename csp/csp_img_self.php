<meta http-equiv="Content-Security-Policy" content=" img-src 'self';">
<html>
<head>
<script type="text/javascript">

function myFunction()
{
  //var filename = "googlelogo_local.png";
  var leaking= "http://www.cs.odu.edu/~hdo/cs697/acidtest/csp/images/googlelogo_color_272x92dp.png";
  document.getElementById("image").src=leaking;
  document.getElementById("leakingimage").src=leaking;
}
</script>

</head>
<body onload="myFunction()">
<div>
  <img id="image" src="images/googlelogo_local.png" height='50'>
</div>
<hr>
<div>
   Local image (attach by js)
</div>
<div>
  <img id="leakingimage" src="" height='50'>
</div>
<hr>
<div>
Direct image (direct link)<br>
</div>
<div>
  <img id="leakingimage_direct" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height='50'>
</div>
</body>
</html>
