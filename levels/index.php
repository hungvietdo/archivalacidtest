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
        <h3>Delay on embbeded resource</h3>
            <?php $arrDelay = array(1,2,4,6,8);?>
            <table>
                <tr>
                    <td>
                    <?php
                      foreach ($arrDelay as $i)
                        {
                          echo '<img src="img.php?sleep='.$i.'" alt="" height="20" width="20">';
                        }
                    ?>
                    </td>
                </tr  >
            </table> 
    </body>
</html>
