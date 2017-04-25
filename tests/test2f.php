<!-- Test 2f-->
      <tr>
        <td>Test 2f</td>
        <td> Code that manipulates DOM after a certain delay (test the synchronicity of the tools)</td>
        <td>
          <div id="scriptParent_2f">
          </div>
        </td>
        <td> <p id="score_test2f">0 <p></td>
      </tr>
<script type="text/javascript">
// X TODO Test 2f: some code only served to certain user agents
// Test 2f: code that manipulates DOM after a certain delay (test the synchonicity of tools)
document.addEventListener('DOMContentLoaded',function(){
	//Test 12 setup
	var test2FImageRed = new Image();
	test2FImageRed.src = "images/red.png";
	test2FImageRed.id = "test2f";
	test2FImageRed.title = "test2f";
	var scriptParent = document.getElementById('scriptParent_2f');
	scriptParent.appendChild(test2FImageRed);
	
	//change image after 5 seconds
	setTimeout(function(){
		document.getElementById('test2f').src = "images/pixel.png";
    document.getElementById('score_test2f').innerHTML = '1';
	},5000);	
	
});</script>
