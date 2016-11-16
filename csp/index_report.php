<meta http-equiv="Content-Security-Policy-Report-Only" 

content="
script-src 'self' ;
">
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="self_script.js"></script>
</head>
<body>
<h1>
  Acid Test Main Page
</h1>
<div>
  Local image
</div>
<div>
  <img id="image" src="" height='50'>
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
  Direct image (direct link)
</div>
<div>
  <img id="leakingimage_direct" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height='50'>
</div>
</body>
</html>
