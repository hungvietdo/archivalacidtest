 <!-- Test 4-->
      <tr>
        <td>Test 4</td>
        <td> Delay on embedded resource</td>
        <td>
            <?php $arrDelay = array(1,2,4,6,8);
                  foreach ($arrDelay as $i)
                    {
                      echo '<img id="img_'.$i.'" src="img.php?sleep='.$i.'" alt="" height="40" width="40">';
                    }
            ?>
        </td>
        <td> <p id="score_test4a"> <p></td>
      </tr>

