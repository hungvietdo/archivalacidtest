<!DOCTYPE html>
<html>
<head>
<script src="js/jquery.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<link rel='stylesheet' type='text/css' href='//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>
<script>
//$( window ).load(function() {
$ (document).ready (function () { 
  test1 = ["a","b","c","d","e","f"];
  test1_fails = 0;
  for (i=0;i<test1.length;i++) {
    imgURL = "#test1" + test1[i];
    $(imgURL).error(function(){
      test1_fails++;
    });
  }
  
  test2 = ["a","b","c"];
  test2_fails = 0;
  for (i=0;i<test2.length;i++) {
    imgURL = "#test2" + test2[i];
    $(imgURL).error(function(){
      test2_fails++;
    });
  }
  
  test4 = ["1","2","4","6","8"];
  test4_fails = 0;
  for (i=0;i<test4.length;i++) {
  imgURL = "#img_" + test4[i];
  $(imgURL).error(function(){
    test4_fails++;
  });
  }

  //test5
  var protocol = "http://";
  var filename = protocol + "www.cs.odu.edu/~hdo/cs697/acidtest/consolidate/img_leak.php"; 
  $("#leakingimage").attr("src",filename);

})

$ (window).load (function () {
  $("#test1_score").html((test1.length-test1_fails) +"/"+ test1.length);
  $("#test2_score").html("Score: " + (test2.length-test2_fails) +"/"+ test2.length);

  $("#test4_score").html("Score: " + (test4.length-test4_fails) +"/"+ test4.length);

  //Test5
  var org_uri = $('#originimage')[0].src;
  var leak_uri= $('#leakingimage')[0].src;
  if (org_uri == leak_uri)
    {
      $("#pass").html("Pass");
    } else {
      $("#fail").html("Failed");
    }
});

</script>

<style type="text/css">
  img {width: 40px; height: 40px; margin: 0 1px 1px 0; padding: 0; display: block; float: left;}
  #originimage {width: 200px; height: 40px;}
</style>
<link rel="stylesheet" type="text/css" href="css/1f.css" />
</head>
<body>

<div class="container">
  <h2>Acid Test</h2>
  <p>Results</p>
  <table class="table table-bordered">
    <thead>
      <tr class="active">
        <th>Test #</th>
        <th>Description</th>
        <th>Status</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <!-- Test 1a-->
      <tr>
        <td>Test 1a</td>
        <td> Local Image, relative </td>
        <td>
          <!--Test 1a, Local Image, relative --><img src="images/pixel.png" title="test1a" id="test1a"/>
        </td>
        <td> <p id="score_test1a">1 <p></td>
      </tr>

      <!-- Test 1b-->
      <tr>
        <td>Test 1b</td>
        <td> Local Image, absolute </td>
        <td>
          <!--Test 1b, Local Image, absolute --><img src="http://acid.matkelly.com/pixel.png" title="test1b" id="test1b"/>
        </td>
        <td> <p id="score_test1b">1 <p></td>
      </tr>

      <!-- Test 1c-->
      <tr>
        <td>Test 1c</td>
        <td> Remote Image, absolute </td>
        <td>
          <!--Test 1c, Remote Image, absolute --><img src="http://www.cs.odu.edu/~mkelly/acid/pixel.png" title="test1c" id="test1c" />
        </td>
        <td> <p id="score_test1c">1 <p></td>
      </tr>
      <!-- Test 1d-->
      <tr>
        <td>Test 1d</td>
        <td> Inline Content, Encoded Image </td>
        <td>
                  <!--Test 1d, Inline Content, Encoded Image-->
              <img src="data:image/png;base64,
              iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
              bWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
              bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
              eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz
              NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
              dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
              dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
              IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
              ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
              cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlE
              PSJ4bXAuaWlkOjZDOTUzNTREMUVCRDExRTJBRjM2RkI1NjAwQzQzQTFGIiB4bXBNTTpEb2N1bWVu
              dElEPSJ4bXAuZGlkOjZDOTUzNTRFMUVCRDExRTJBRjM2RkI1NjAwQzQzQTFGIj4gPHhtcE1NOkRl
              cml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkM5NTM1NEIxRUJEMTFFMkFGMzZG
              QjU2MDBDNDNBMUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkM5NTM1NEMxRUJEMTFFMkFG
              MzZGQjU2MDBDNDNBMUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1l
              dGE+IDw/eHBhY2tldCBlbmQ9InIiPz5pvSZLAAAADklEQVR42mJmYPgPEGAAAQ8BA8CY0HcAAAAA
              SUVORK5CYII=" title="test1d" id="test1d" />
        </td>
        <td> <p id="score_test1d">1 <p></td>
      </tr>

      <!-- Test 1e-->
      <tr>
        <td>Test 1e</td>
        <td> Scheme-less resource </td>
        <td>
          <!--Test 1e, Scheme-less resource --><img src="//acid.matkelly.com/pixel.png" title="test1e" id="test1e" />
        </td>
        <td> <p id="score_test1b">1 <p></td>
      </tr>

      <!-- Test 1f-->
      <tr>
        <td>Test 1f</td>
        <td> Recursively included CSS  </td>
        <td>
          <!--Test 1f, Recursively included CSS --><img src="images/transparent_1f.png" title="test1f" class="onef" id="onef" />
        </td>
        <td> <p id="score_test1c">1 <p></td>
      </tr>
  <!-- Total score Test 1-->
      <tr class="warning">
        <td colspan="3" class="text-right"><strong>Total score for Test 1</strong></td>
        <td> <strong><p id="test1_score"> <p></strong></td>
      </tr>

      <!-- Test 2a-->
      <tr>
        <td>Test 2a</td>
        <td> Script, local</td>
        <td>

          <div id="scriptParent_2a">
            <!--Test 2a, Script, local --><script type="text/javascript" src="js/localScript.js" id="test2a"></script>
          </div>
        </td>
        <td> <p id="score_test2a">1 <p></td>
      </tr>
      <!-- Test 2b-->
      <tr>
        <td>Test 2b</td>
        <td> Script, remote  </td>
        <td>
          <div id="scriptParent_2b">
            <!--Test 2b, Script, remote --><script type="text/javascript" src="js/externalScript.js" id="test2b"></script>
          </div>
        </td>
        <td> <p id="score_test2b">1 <p></td>
      </tr>
      <!-- Test 2c-->
      <tr>
        <td>Test 2c</td>
        <td> Recursively included CSS  </td>
        <td>
          <div id="scriptParent_2c">
              <script type="text/javascript">
              //Test 2c, Script inline, DOM Manipution
              document.addEventListener('DOMContentLoaded',function(){
                var inlineScriptImage = new Image();
                inlineScriptImage.src = "pixel.png";
                inlineScriptImage.title = "test2c";
                var scriptParent = document.getElementById('scriptParent_2c');
                scriptParent.appendChild(inlineScriptImage);
              });
              </script>
          </div>
        </td>
        <td> <p id="score_test2c">1 <p></td>
      </tr>
<!-- Total score Test 2-->
      <tr class="warning">
        <td colspan="3" class="text-right"><strong>Total score for Test 2</strong></td>
        <td> <strong><p id="test2_score"> <p></strong></td>
      </tr>

  <!-- Test 5-->
      <tr>
        <td>Test 5</td>
        <td> Script, remote  </td>
        <td>
          <div id="scriptParent_2b">
            <img id="originimage" src="img_leak.php" width="300">
          </div>
        </td>
        <td> <p id="score_test2b">1 <p></td>
      </tr>

  <!-- Test -->
      <tr>
        <td>Test 2b</td>
        <td> Script, remote  </td>
        <td>
          <div id="scriptParent_2b">
            <img id="leakingimage" src="">
          </div>
        </td>
        <td> <p id="score_test2b">1 <p></td>
      </tr>


<!-- Total score Test 2-->
      <tr class="warning">
        <td colspan="3" class="text-right"><strong>Total score for Test 2</strong></td>
        <td> <strong><p id="test2_score"> <p></strong></td>
      </tr>
    </tbody>
  </table>
</div>

<div id="scriptParent">
<br>
<h3>Test2: local, remote, and inline JavaScript</h3>

</div>
<h3 id="test2_score"></h3>
</div>

<div id="ajaxParent">
<br>
<h3>Test3: Ajax Tests</h3>
<script type="text/javascript">
//Test 3a, AJAX image replacement of content that should be in the archive
document.addEventListener('DOMContentLoaded',function(){
//Test 3a setup
var test2DImageRed = new Image();
test2DImageRed.src = "images/red.png";
test2DImageRed.id = "test3a";
test2DImageRed.title = "test3a";
var scriptParent = document.getElementById('ajaxParent');
scriptParent.appendChild(test2DImageRed);	

//Test 3a init AJAX
var xhr = new XMLHttpRequest();
xhr.open('GET','http://acid.matkelly.com/pixel.png',true);
xhr.responseType = 'arraybuffer';
xhr.onload = function(e) {
document.getElementById('test3a').src = "data:image/png;base64,"+base64ArrayBuffer(e.currentTarget.response);
};

xhr.send();
});

//Test 2e, AJAX requests with content that should be included in the archive, test for false positive
// e.g. Same Origin Policy
document.addEventListener('DOMContentLoaded',function(){
//Test 2e setup
var test2EImageBlue = new Image();
test2EImageBlue.src = "pixel.png";
test2EImageBlue.id = "test2e";
test2EImageBlue.title = "test2e";
var scriptParent = document.getElementById('ajaxParent');
scriptParent.appendChild(test2EImageBlue);	

//Test 10 init AJAX
var xhr = new XMLHttpRequest();
xhr.open('GET','http://acid.matkelly.com/pixel.png',true); 
try{
  xhr.responseType = 'arraybuffer';	//response type of synchronous request should not be changeable, INVALID_ACCESS_ERR: DOM Exception 15
  xhr.onload = function(e) {
      document.getElementById('test2e').src = "data:image/png;base64,"+base64ArrayBuffer(e.currentTarget.response);
    };
  xhr.send();	
}catch(err){
//console.log(err); //correct path
}

});
</script>
</div>
<h3 id="test3_score"></h3>
<br><br>
<div id="test4">
<br>
<h3>Test4: Delay on embbeded resource</h3>
            <?php $arrDelay = array(1,2,4,6,8);
                  foreach ($arrDelay as $i)
                    {
                      echo '<img id="img_'.$i.'" src="img.php?sleep='.$i.'" alt="" height="40" width="40">';
                    }
            ?>
</div>

<h3 id="test4_score"></h3>
<br><br>
<div id="test5">
    <br>
    <h3>Test5: Leaking resources</h3>

 <div class="text-primary" id="pass"></div>
<div class="text-danger" id="fail"></div>

</div>


</body>
</html>
