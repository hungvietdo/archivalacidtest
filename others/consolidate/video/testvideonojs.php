<!DOCTYPE html>
<html>
<head>
 <script src="jquery.js"></script>

<script>

 var response = $.ajax({
           url: 'movie.mp4',
                             async: false
                                 }).status;
     alert(response);
</script>

</head>
<body>

<video width="40" height="40" autoplay loop>
  <source src="movie.mp4" type="video/mp4">
   
  Your browser does not support the video tag.
</video>
<div id="demo"></div>

</body>
