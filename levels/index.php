<?php
function resCode($URL)
{
    $exists = true;
    $file_headers = @get_headers($URL);
    $InvalidHeaders = array('200','404', '403', '500');

    foreach($InvalidHeaders as $HeaderVal)
    {
            if(strstr($file_headers[0], $HeaderVal))
            {
                    
                    return $HeaderVal;
            }
    }
    return 0;
}

?>

<html>
	<head>
		
	</head>
	<body>
	
	<h1>
		Acid Test Main Page
	</h1>
		<h3>PHP test</h3>	
	<?php 
		for ($i = 1; $i <= 6; $i++) {
			$i++;
    		echo "<h3>Test in ".$i." seconds:</h3>";	
			echo "<div>";
				
					$imgSrc='createImage.php?sleep='.$i;
					$notPass='notpass.php?sleep='.$i; 
					$url =  dirname("http://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}");
					$responseCode = resCode($url."/".$imgSrc);

					if ($responseCode == 200)
					{
						echo('<img src="'.$imgSrc.'"/>');
					} else {
						echo('<img src="'.$notPass.'"/>'); 
					}
			echo "</div>";
 		}
 	?>
		
		<h3>JS testing<h3>
		
		<script type="text/javascript">
		
		//	document.getElementById("demo").innerHTML =
		//"Page location is " + window.location.href;
		window.onload = function () {
		
		}
	</script>

	</body>

</html>
