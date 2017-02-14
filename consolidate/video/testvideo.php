<!DOCTYPE html>
<html>
<head>
 <script src="jquery.js"></script>

<script>

$.ajax({
    url:'movie.mp4',
    type:'HEAD',
    error: function()
    {
        //file not exists
	$('#demo' ).html('file does not exist');
    },
    success: function()
    {
        //file exists
	$('#demo' ).html('file exist');
    }
});

function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
</script>

</head>
<body>

<video width="40" height="40" autoplay loop>
  <source src="movie.mp4" type="video/mp4">
   
  Your browser does not support the video tag.
</video>
<div id="demo"></div>

</body>
