      <!-- Test 2c-->
      <tr>
        <td>Test 2c</td>
        <td> Script inline, DOM Manipulation  </td>
        <td>
          <div id="scriptParent_2c">
          </div>
        </td>
        <td> <p id="score_test2c">0 <p></td>
      </tr>
<script type="text/javascript">
//Test 2c, Script inline, DOM Manipution
document.addEventListener('DOMContentLoaded',function(){
  var inlineScriptImage = new Image();
  inlineScriptImage.src = "pixel.png";
  inlineScriptImage.title = "test2c";
  var scriptParent = document.getElementById('scriptParent_2c');
  scriptParent.appendChild(inlineScriptImage);
  document.getElementById('score_test2c').innerHTML = '1';
});
</script>
