<meta http-equiv="Content-Security-Policy" 

content="
img-src 'self' http://www.google.com;
script-src 'self' https://ajax.googleapis.com 'unsafe-inline';

">
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript">

function myFunction()
{
  var filename = "img.php";
  var leaking= "http://www.cs.odu.edu/~hdo/cs697/acidtest/csp/googlelogo_color_272x92dp.png";
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
   image (with js)
</div>
<div>
  <img id="leakingimage" src="" height='50'>
</div>
<div>
  Direct image (direct link)
</div>
<div>
  <img id="leakingimage_direct" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height='50'>
</div>
</body>
</html>
