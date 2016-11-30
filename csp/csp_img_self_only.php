<meta http-equiv="Content-Security-Policy" content=" img-src 'self' ">
<html>
<head>

</head>
<body>
<h1>
  CSP with images 
</h1>
<div>
  <h4>Local image</h4>
</div>
<div>
  <img id="image" src="images/googlelogo_local.png" height='50'>
</div>
<hr>
<div>
    <h4>Direct image (https)</h4><br>
    https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
</div>
<div>
    <img id="image_https" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height='50'>
</div>

<hr>
<div>
    <h4>Direct image (http)</h4><br>
    http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
</div>
<div>
    <img id="image_http" src="http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height='50'>
</div>


</body>
</html>
