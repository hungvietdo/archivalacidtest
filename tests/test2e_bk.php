      <!-- Test 2e-->
      <tr>
        <td>Test 2e</td>
        <td> AJAX requests with content that should be included in the archive</td>
        <td>
          <div id="scriptParent_2e">
          </div>
        </td>
        <td> <p id="score_test2e">0 <p></td>
      </tr>
<script type="text/javascript">
//Test 2e, AJAX requests with content that should be included in the archive, test for false positive
// e.g. Same Origin Policy
document.addEventListener('DOMContentLoaded',function(){
	//Test 2e setup
	var test2EImageBlue = new Image();
	test2EImageBlue.src = "pixel.png";
	test2EImageBlue.id = "test2e";
	test2EImageBlue.title = "test2e";
	var scriptParent = document.getElementById('scriptParent_2e');
	scriptParent.appendChild(test2EImageBlue);	
	
	//Test 10 init AJAX
	var xhr = new XMLHttpRequest();
	xhr.open('GET','images/pixel.png',true); 
	try{
		xhr.responseType = 'arraybuffer';	//response type of synchronous request should not be changeable, INVALID_ACCESS_ERR: DOM Exception 15
		xhr.onload = function(e) {
			document.getElementById('test2e').src = "data:image/png;base64,"+base64ArrayBuffer(e.currentTarget.response);
    document.getElementById('score_test2e').innerHTML = '1';
		};
		xhr.send();	
	}catch(err){
		//console.log(err); //correct path
	}
	
	
});</script>
