      <!-- Test 2d-->
      <tr>
        <td>Test 2d</td>
        <td> AJAX image replacement of content  </td>
        <td>
          <div id="scriptParent_2d">
          </div>
        </td>
        <td> <p id="score_test2d">0 <p></td>
      </tr>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded',function(){
  //Test 2d setup
  var test2DImageRed = new Image();
  test2DImageRed.src = "images/red.png";
  test2DImageRed.id = "test2d";
  test2DImageRed.title = "test2d";
  var scriptParent = document.getElementById('scriptParent_2d');
  scriptParent.appendChild(test2DImageRed);
  
  //Test 2d init AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('GET','images/pixel.png',true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function(e) {
    document.getElementById('test2d').src = "data:image/png;base64,"+base64ArrayBuffer(e.currentTarget.response);
    document.getElementById('score_test2d').innerHTML = '1';
  };
  
  xhr.send(); 
});

</script>
