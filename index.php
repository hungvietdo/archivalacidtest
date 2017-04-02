<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <title>Acid Test for Archival Tool</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Acid Tests">
    <meta name="author" content="Hung Do ws-dl cs odu">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="css/mycss.css" rel="stylesheet">
    <script src="js/jquery.js"></script>
    <script src="js/checkTest1.js"></script>
    <script src="js/arrayBuffer.js"></script>

<style type="text/css">
  img {width: 20px; height: 20px; margin: 0 1px 1px 0; padding: 0; display: block; float: left;}
  #originimage,#leakingimage {width: 200px; height: 20px;}
</style>
<link rel="stylesheet" type="text/css" href="css/1f.css" />
</head>
  <body>
  <?php include_once('testDescriptions.php');?>
    <div class="container">

      <div class="masthead">
        <ul class="nav nav-pills pull-right">
          <li class="active"><a href="/">Acid Test</a></li>
          <li><a href="" title="FAQ">FAQ</a></li>
        </ul>
        <h3 class="muted">Acid Test</h3>
      </div>

      <hr>

      <div class="jumbotron">
        <p class="lead">Archive this page from an archival tool to get the result. </p>
      </div>

      <a href="https://github.com/hungvietdo/archivalacidtest" class="btn btn-default"><i class="fa fa-github"></i> Edit on Github</a>

      <div id="totalscore" class=""><h2>Total Score: </h2>
      </div>

<!--This is test 1 -->
      <div class="">
          <hr>
        <div class="headerDes">
        <h2>Test 1</h2>
         <p><b>Description:</b> <?php echo $test1Des; ?></p>
        </div>
        <table class="table table-bordered table-responsive table-hover">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Test Content</th>
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
          </tbody>
          <tr border="0">
              <td colspan="3" border="0" align="right"><b>Total</b></td>
              <td><b><span id="test1_score"></span></b></td>
          </tr>
        </table>
<!--This is test 2 -->

      <div class="headerDes">
       <h2>Test 2</h2>
         <p><b>Description:</b> <?php echo $test2Des; ?></p>
      </div>
        <table class="table table-bordered table-responsive table-hover">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Test Content</th>
              <th>Status</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <?php include('tests/test2a.php')?>
            <?php include('tests/test2b.php')?>
            <?php include('tests/test2c.php')?>
            <?php include('tests/test2d.php')?>
            <?php include('tests/test2e.php')?>
            <?php include('tests/test2f.php')?>
            <?php include('tests/test2g.php')?>
          </tbody>
          <tr border="0">
              <td colspan="3" border="0" align="right"><b>Total</b></td>
              <td><b><span id="test2_score"></span></b></td>
          </tr>
        </table>

<!--This is test 3 -->
      <div class="headerDes">
       <h2>Test 3</h2>
         <p><b>Description:</b> <?php echo $test3Des; ?></p>
      </div>
        <table class="table table-bordered table-responsive table-hover">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Test Content</th>
              <th>Status</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <?php include('tests/test3a.php')?>
            <?php include('tests/test3b.php')?>
            <?php include('tests/test3c.php')?>
            <?php include('tests/test3d.php')?>
          </tbody>
          <tr border="0">
              <td colspan="3" border="0" align="right"><b>Total</b></td>
              <td><b><span id="test3_score"></span></b></td>
          </tr>

        </table>

<!--This is test 4 -->

    <div class="headerDes">
      <h2>Test 4</h2>
        <p><b>Description:</b> <?php echo $test4Des; ?></p>
    </div>
        <table class="table table-bordered table-responsive table-hover">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Test Content</th>
              <th>Status</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
              <?php include('tests/test4a.php')?>
          </tbody>
        </table>

<!--This is test 5 -->
    <div class="headerDes">
      <h2>Test 5</h2>
         <p><b>Description:</b> <?php echo $test5Des; ?></p>
    </div>
        <table class="table table-bordered table-responsive">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Test Content</th>
              <th>Status</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
              <?php include('tests/test5a.php')?>
          </tbody>
          <tr border="0">
              <td colspan="3" border="0" align="right"><b>Total</b></td>
              <td><b><span id="test5_score"></span></b></td>
          </tr>

        </table>
    <script src="js/myScript.js"></script>
      </div>
      <h2 id="resources">Resources</h2>
      <p>Checkout these links:</p>
      <ul>
        <li><a href="http://acid.matkelly.com/" target="_blank">Previous Project</a></li>
        <li><a href="http://www.cs.odu.edu/~mkelly/papers/2014_dl_acid.pdf" target="_blank">Presentations / Slides</a></li>

      </ul>

      <div class="footer">
        <p>www.ws-dl.cs.odu.edu - <a href="http://www.ws-dl.cs.odu.edu" rel="nofollow">Contact Us</a></p>
      </div>
    </div> <!-- /container -->
  </body>
</html>



