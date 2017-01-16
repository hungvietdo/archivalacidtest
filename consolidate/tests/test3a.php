 <!-- Test 3a-->

<script>
  //TEST 3a: HTML5 Canvas drawing
  document.addEventListener('DOMContentLoaded',function(){
  //Test 3a setup
  var test3Acanvas = document.createElement('canvas');
  test3Acanvas.width = "10";
  test3Acanvas.height = "10";
  test3Acanvas.id = "test3a";
  var scriptParent = document.getElementById('html5Parent');
  scriptParent.replaceChild(test3Acanvas,document.getElementById('test3Ascript'));

  //Test 3a, HTML5 Canvas Draw
  var canvas = document.getElementById('test3a');
  var context = canvas.getContext("2d");
  context.fillStyle = "#0000FF";
  context.fillRect(0,0,10,10);

});
</script>

      <tr>
        <td>Test 3a</td>
        <td> HTML5 Canvas Drawing </td>
        <td>
          <!--Test 1a, Local Image, relative -->
          

<img src="images/pixel.png" title="test1a" id="test1a"/>
        </td>
        <td> <p id="score_test3a">1 <p></td>
      </tr>
