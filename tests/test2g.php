<!-- Test 2g-->
      <tr>
        <td>Test 2g</td>
        <td>Code that dynamically adds stylesheets</td>
        <td>
          <div id="scriptParent_2g">
          </div>
        </td>
        <td> <p id="score_test2g">0 <p></td>
      </tr>
<script type="text/javascript">
// Test 2h: Dynamically added stylesheets
document.addEventListener('DOMContentLoaded',function(){
	//Test 2j setup
	var test2GImageRed = document.createElement('img');
	test2GImageRed.src = "images/transparent_2g.png";
	test2GImageRed.id = "test2g";
	test2GImageRed.title = "test2g";
	
	var scriptParent = document.getElementById('scriptParent_2g');
	scriptParent.appendChild(test2GImageRed);
	
	var linkTag = document.createElement("link");
	linkTag.href = "css/2g.css";
	linkTag.rel = "stylesheet";
	linkTag.type = "text/css";
	
	document.head.appendChild(linkTag);
  document.getElementById('score_test2g').innerHTML = '1';
});</script>
