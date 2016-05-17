<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <title>Archival Acid Test</title>
   
   <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

</head>

<body id="page-top" class="index">

   <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
        <a class="navbar-brand" href="index.html">Archival Acid Test</a>
    </div>
    <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="tests.html">Acid Test</a></li>
          <li><a href="faq.html">FAQ</a></li>
        </ul>
  </div><!-- /.navbar-collapse -->
  </div>
</nav>

 


    <!-- Header -->
    <header>



        <div class="container">
            <div class="row">
                
                <div class="col-lg-6 col-lg-offset-3">
                    
                <br><br><br><br><br><br>

                <?php 
                    if ($_POST["website"] == "") 
                        {
                            echo "Please input a correct website.";
                        } 
                ?>
                     
                        <form action="checking.php" method="post">
                        <div class="input-group">
                             <input class="form-control input" id="mainsearch" type="text" name="website" placeholder="www.yoursite.com" value="<?php echo $_POST["website"]; ?>">
                            
                                <span class="input-group-btn">
                                    <button id="checknow" type="submit" class="btn btn-success">Check now <i class="icon-double-angle-right"></i></button>
                                </span>
                        </div>
                        </form>
                <br><br><br>
                </div>



                <div class="col-lg-10 col-lg-offset-1">
                    
                        <ul class="nav nav-tabs">
                            <li><a href="#aaa" data-toggle="tab">Basic</a></li>
                            <li><a href="#bbb" data-toggle="tab">JavaScript</a></li>
                            <li><a href="#ccc" data-toggle="tab">HTML5 Features</a></li>
                        </ul>
                    <div class="tab-content" id="tabs">
                        <div class="tab-pane" id="aaa">
                            
                            <div class="text-center">
                                

                                <span> Checking website: <?php echo $_POST["website"]; ?> </span>
                                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                                
                            </div>

                        </div>

                        <div class="tab-pane" id="bbb">
                            
                            <p>JavaScript Test</p>
                        </div>
                        <div class="tab-pane" id="ccc">
                            <p>
                                Content of HTML5 Features
                            </p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </header>

   

 
   

    <!-- Footer -->
    <footer class="text-center">
         
            <div class="container">
                <div class="row">
                    
                    <div class="footer-col col-md-4">
                        <h3>Location</h3>
                        <p>Department of Computer Science<br>
                            Old Dominion University<br>
                            Norfolk VA 23529 </p>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Our Research Group</h3>
                        <ul class="list-inline">
                            <li>
                                <a href="https://ws-dl.cs.odu.edu" target="_blank" class="btn-social btn-outline"><i class="fa fa-fw fa-google-plus"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/WebSciDL" target="_blank" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Source Code</h3>
                        <p>Fork me on <a href="https://github.com/hungvietdo/archivalacidtest" target="_blank">GitHub</a>.</p>
                    </div>
                </div>
            </div>
        

        <!-- <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright &copy; Your Website 2016
                    </div>
                </div>
            </div>
        </div> -->
    </footer>

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll visible-xs visible-sm">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>

   
  <script src="js/customjquery.js"></script>
</body>

</html>
