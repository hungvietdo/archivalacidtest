<!-- Test 2g-->
      <tr>
        <td>Test 2e</td>
        <td>Code that dynamically adds stylesheets</td>
        <td>
          <div id="scriptParent_2e">
          </div>
        </td>
        <td> <p id="score_test2e">0 <p></td>
      </tr>
<script type="text/javascript">
// Test 2e: Dynamically added stylesheets
document.addEventListener('DOMContentLoaded',function(){
	//Test 2e setup
	var test2EImageRed = document.createElement('img');
	test2EImageRed.src = "images/transparent_2e.png";
	test2EImageRed.id = "test2e";
	test2EImageRed.title = "test2e";
	
	var scriptParent = document.getElementById('scriptParent_2e');
	scriptParent.appendChild(test2EImageRed);
	
	var linkTag = document.createElement("link");
	linkTag.href = "css/2e.css";
	linkTag.rel = "stylesheet";
	linkTag.type = "text/css";
	
	document.head.appendChild(linkTag);
	document.getElementById('score_test2e').innerHTML = '1';
});</script>
