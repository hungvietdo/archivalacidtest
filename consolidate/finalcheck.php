<?php
sleep(2);
echo '
  <script>
  $ (document).ready (function () {
  //Calculate test 1 score
  test1 = ["a","b","c","d","e","f"];
  test1_fails = 0;
  for (i=0;i<test1.length;i++) {
    imgURL = "#test1" + test1[i];
    $(imgURL).error(function(){
      test1_fails++;
alert(test1_fails);
    });
  }
  $("#test1a").error(function () {
      $("#test1a").unbind("error").attr("src", "pixel.png");
      });

})
  </script>
  ';
?>
