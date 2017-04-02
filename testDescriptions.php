<?php

$test1Des = <<<EOT
The set of Basic Tests is meant to ensure that simple representations of resources on web pages are captured. 
Each tests’ name represents what is presented to be captured by the archival crawler. This test is focus on image and css representation. <br>
<ul>
  <li>Test 1a: Add a local image with simple tag img </li>
  <li>Test 1b: Add the same image from 1a test but using absolute url src='http://www.cs.odu.edu/hdo/acidtest/images/pixel.png'  </li>
  <li>Test 1c: Add an image from different domain</li>
  <li>Test 1d: A content of an image in base64 will be attached directly to image source tag.</li>
  <li>Test 1e: Using a schemaless URL, without http nor https in URL </li>
  <li>Test 1f: An image will be loaded in recursively load as resource in css file.</li>
</ul> 

<b>Note:</b><br>
<img src="images/pixel.png"> <p>A blue rectangle in Status column indicates a test passed sucessfully. </p>
<img src="images/red.png">
Otherwise a red rectangle will be displayed.
EOT;

$test2Des = <<<EOT
The second group of tests is to evaluate the archival crawler’s JavaScript support including local, inline, ajax, dynamic script.
<ul>
  <li>Test 2a: </li>
  <li>Test 2b: </li>
  <li>Test 2c: </li>
  <li>Test 2d: </li>
  <li>Test 2e: </li>
  <li>Test 2f: </li>
  <li>Test 2g: </li>
</ul> 
<b>Note:</b><br>
<img src="images/pixel.png"> <p>A blue rectangle in Status column indicates a test passed sucessfully. </p>
<img src="images/red.png">
Otherwise a red rectangle will be displayed.
EOT;

$test3Des = <<<EOT
The third group of tests evaluates script-related features of HTML5 such as cavas, sandbox, video tags.
<ul>
  <li>Test 3a: </li>
  <li>Test 3b: </li>
  <li>Test 3c: </li>
  <li>Test 3d: </li>
</ul> 
<b>Note:</b><br>
<img src="images/pixel.png"> <p>A blue rectangle in Status column indicates a test passed sucessfully. </p>
<img src="images/red.png">
Otherwise a red rectangle will be displayed.
EOT;

$test4Des = <<<EOT
This test is to measure how long an archival crawler can wait for response from server.
EOT;

$test5Des = <<<EOT
This test is design to test resource leakage in the archives. Two green images below should display the same time if there is no leakage from the archives.
EOT;



?>
