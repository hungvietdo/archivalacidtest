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

      $i = 2; //2 seconds;
      echo "<h3>Test in ".$i." seconds:</h3>";	
      echo "<div>";
            $currentFolder=dirname($_SERVER['PHP_SELF']);
      $imgSrc='createImage.php?sleep='.$i;
      $notPass='notpass.php?sleep='.$i; 
      $url =  "http://{$_SERVER['HTTP_HOST']}{$currentFolder}";
      $responseCode = resCode($url."/".$imgSrc);
      if ($responseCode == 200)
      {
        echo('<img src="'.$imgSrc.'"/>');
      } else {
        echo('<img src="'.$notPass.'"/>'); 
      }
      echo "</div>";

      echo "<h3>Test in ".$i." seconds:</h3>";	
      echo "<div>";
            $currentFolder=dirname($_SERVER['PHP_SELF']);
      $imgSrc='createImage.php?sleep='.$i;
      $notPass='notpass.php?sleep='.$i; 
      $url =  "http://{$_SERVER['HTTP_HOST']}{$currentFolder}";
      $responseCode = resCode($url."/".$imgSrc);
      if ($responseCode == 200)
      {
        echo('<img src="'.$imgSrc.'"/>');
      } else {
        echo('<img src="'.$notPass.'"/>'); 
      }
      echo "</div>";

      ?>


</body>

</html>
