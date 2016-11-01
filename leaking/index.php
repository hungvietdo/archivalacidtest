<html>
<head>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script>
//$( window ).load(function() {
$ (document).ready (function () { 
var protocol = "http://";
 var filename = protocol + "cs.odu.edu/~hdo/cs697/acidtest/leaking/img.php"; 
  $("#leakingimage").attr("src",filename);
});
$ (window).load (function () {
  $("#secondimage").html();
});


// Assign handlers immediately after making the request,
// and remember the jqXHR object for this request
</script>
</head>
<body>

<h1>
Acid Test Main Page
</h1>

<img id="leakingimage" src="">

</body>
</html>
