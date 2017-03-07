<meta http-equiv="Content-Security-Policy" content=" img-src www.cs.odu.edu;">

<html>
<head>

<script type="text/javascript">

function myFunction() {
  //var filename = "http:/";
  //var leaking= filename+"/www.cs.odu.edu/~hdo/cs697/acidtest/csp/images/googlelogo_color_272x92dp.png";
  //document.getElementById("image").src=leaking;
}

function errorLoadingExternal() {
    document.getElementById("status").innerHTML = "There is a violation on CSP image rule new.";
}


</script>
</head>
<body onload="myFunction()">
<div id="status"></div>
<div>
  <img id="image" src="http://www.cs.odu.edu/%7Ehdo/cs697/acidtest/csp/images/googlelogo_color_272x92dp.png" height='50'
onerror="errorLoadingExternal()">
</div>
</body>
