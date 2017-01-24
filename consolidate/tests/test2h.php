<!-- Test 2f-->
      <tr>
        <td>Test 2h</td>
        <td> AJAX image replacement of content  </td>
        <td>
          <div id="scriptParent_2h">
          </div>
        </td>
        <td> <p id="score_test2h">0 <p></td>
      </tr>
<script type="text/javascript">
// X TODO Test 2f: some code only served to certain user agents
// Test 2f: code that manipulates DOM after a certain delay (test the synchonicity of tools)
document.addEventListener('DOMContentLoaded',function(){
	//Test 12 setup
	var test2FImageRed = new Image();
	test2FImageRed.src = "images/red.png";
	test2FImageRed.id = "test2h";
	test2FImageRed.title = "test2h";
	var scriptParent = document.getElementById('scriptParent_2h');
	scriptParent.appendChild(test2FImageRed);
	
	//change image after 2 seconds
	setTimeout(function(){
		document.getElementById('test2h').src = "images/pixel.png";
    document.getElementById('score_test2h').innerHTML = '1';
	},2000);	
	
});</script>
