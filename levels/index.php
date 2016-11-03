<html>
<head>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script>
//$( window ).load(function() {
$ (document).ready (function () { 
  second = ["1","2","4","6","8"];
  fails = 0;
  for (i=0;i<second.length;i++) {
  imgURL = "#img_" + second[i];
  $(imgURL).error(function(){
    //$(imgURL).attr("src","error.php");
    fails++;
  });
  }
})

$ (window).load (function () {
  $("#delayscore").html("Score: " + (second.length-fails) +"/"+ second.length);
});

</script>
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
                          echo '<img id="img_'.$i.'" src="img.php?sleep='.$i.'" alt="" height="40" width="40">';
                        }
                    ?>
                    </td>
                </tr  >
            </table> 
        <div id="delayscore">Score:</div>
    </body>
</html>
