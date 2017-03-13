<?php

    header("Content-Security-Policy: img-src  www.cs.odu.edu; 'self'");
?>
<html>
<head>
<script type="text/javascript">
function errorLoadingExternal() {
    document.getElementById("status").innerHTML = "There is a violation on CSP image rule new.";
}
</script>
</head>
<body>
<div id="status"></div>
<div>
  <img id="image" src="http://www.cs.odu.edu/%7Ehdo/cs697/acidtest/csp/images/googlelogo_color_272x92dp.png" height='50'
onerror="errorLoadingExternal()">
</div>
</body>
