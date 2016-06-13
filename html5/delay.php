<!DOCTYPE html>
<html>
<body>

<?php
date_default_timezone_set('UTC');
echo date('h:i:s') . "<br>";

?>

<dir id="demo"></dir>

<script type="text/javascript">
	
	var delay=6000; //1 second

	var htmltext = "<?php echo 'abc'?>";

	document.addEventListener('DOMContentLoaded',function(){
	//Test 12 setup
	var scriptParent = document.getElementById('demo');
	//scriptParent.innerHTML = htmltext;
	
});

	setTimeout(function() {
			var scriptParent = document.getElementById('demo');
	scriptParent.innerHTML = htmltext;
  
}, delay);
</script>

</body>
</html>