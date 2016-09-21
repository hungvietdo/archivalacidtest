<html>
	<head>
		
	</head>
	<body>
	
		<h1>
			Acid Test Main Page
		</h1>
		<h3>PHP test</h3>
		<div>Load for two seconds</div>		
<div id="demo">
				<?php 
		$imgSrc='createImage.php?sleep=2'; 
		echo('<img src="'.$imgSrc.'"/>');

		?>
		</div>

			
		<div>Load for six seconds</div>		
<div id="demo">
		<div>		<?php 
		$imgSrc='createImage.php?sleep=6'; 
		echo('<img src="'.$imgSrc.'"/>');

		?>
		</div>
		
		<h3>JS testing<h3>
		
		<script type="text/javascript">
		
		//	document.getElementById("demo").innerHTML =
		//"Page location is " + window.location.href;
		window.onload = function () {
		
		}
	</script>

	</body>

</html>
