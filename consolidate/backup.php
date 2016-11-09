<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script>
//$( window ).load(function() {
$ (document).ready (function () { 
  test1 = ["a","b","c","d","e","f"];
  test1_fails = 0;
  for (i=0;i<test1.length;i++) {
  imgURL = "#test1" + test1[i];
  $(imgURL).error(function(){
    test1_fails++;
  });
  }
})

$ (window).load (function () {
  $("#test1_score").html("Score: " + (test1.length-test1_fails) +"/"+ test1.length);
});

</script>

<style type="text/css">
 img {width: 40px; height: 40px; margin: 0 1px 1px 0; padding: 0; display: block; float: left;}

</style>
<link rel="stylesheet" type="text/css" href="css/1f.css" />
</head>
<body>
<h3>Images: relative, absolute, encoded</h3>
<div id="test1">
<!--Test 1a, Local Image, relative --><img src="images/pixel.png" title="test1a" id="test1a"/>
<!--Test 1b, Local Image, absolute --><img src="http://acid.matkelly.com/pixel.png" title="test1b" id="test1b"/>
<!--Test 1c, Remote Image, absolute --><img src="http://www.cs.odu.edu/~mkelly/acid/pixel.png" title="test1c" id="test1c" />
<!--Test 1d, Inline Content, Encoded Image--><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
bWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz
NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlE
PSJ4bXAuaWlkOjZDOTUzNTREMUVCRDExRTJBRjM2RkI1NjAwQzQzQTFGIiB4bXBNTTpEb2N1bWVu
dElEPSJ4bXAuZGlkOjZDOTUzNTRFMUVCRDExRTJBRjM2RkI1NjAwQzQzQTFGIj4gPHhtcE1NOkRl
cml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkM5NTM1NEIxRUJEMTFFMkFGMzZG
QjU2MDBDNDNBMUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkM5NTM1NEMxRUJEMTFFMkFG
MzZGQjU2MDBDNDNBMUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1l
dGE+IDw/eHBhY2tldCBlbmQ9InIiPz5pvSZLAAAADklEQVR42mJmYPgPEGAAAQ8BA8CY0HcAAAAA
SUVORK5CYII=" title="test1d" id="test1d" />
<!--Test 1e, Scheme-less resource --><img src="//acid.matkelly.com/pixel.png" title="test1e" id="test1e" />
<!--Test 1f, Recursively included CSS --><img src="images/transparent_1f.png" title="test1f" class="onef" id="onef" />
</div>
<h2 id="test1_score"></h2>

</body>
</html>
