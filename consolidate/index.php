<!DOCTYPE html>
<html>
<head>
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/myScript.js"></script>
<link rel='stylesheet' type='text/css' href='css/bootstrap.min.css'>

<style type="text/css">
  img {width: 40px; height: 40px; margin: 0 1px 1px 0; padding: 0; display: block; float: left;}
  #originimage,#leakingimage {width: 200px; height: 40px;}
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
    <?php include('tests/test1a.php')?>
    <?php include('tests/test1b.php')?>
    <?php include('tests/test1c.php')?>
    <?php include('tests/test1d.php')?>
    <?php include('tests/test1e.php')?>
    <?php include('tests/test1f.php')?>

    <!-- Total score Test 1-->
    <tr class="warning">
      <td colspan="3" class="text-right"><strong>Total score for Test 1</strong></td>
      <td> <strong><p id="test1_score"> <p></strong></td>
    </tr>
    
    <?php include('tests/test2a.php')?>
    <?php include('tests/test2b.php')?>
    <?php include('tests/test2c.php')?>

<!-- Total score Test 2-->
      <tr class="warning">
        <td colspan="3" class="text-right"><strong>Total score for Test 2</strong></td>
        <td> <strong><p id="test2_score"> <p></strong></td>
      </tr>


    <?php include('tests/test4a.php')?>

    <?php include('tests/test5a.php')?>




<!-- Total score Test 2-->
      <tr class="warning">
        <td colspan="3" class="text-right"><strong>Total score for Test 5</strong></td>
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


<h3 id="test4_score"></h3>
<br><br>

</div>
</body>
</html>
