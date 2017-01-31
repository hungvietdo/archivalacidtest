<!-- Test 3c-->
      <tr>
        <td>Test 3c</td>
        <td>
            <iframe id="iframe" height="40" sandbox="allow-scripts allow-same-origin"></iframe>
        </td>
        <td>
        <img src="images/red.png" title="test3c" id="test3c"/>
        </td>

              <td> <p id="score_test3c"><p></td>
      </tr>
<script>
 $('iframe').load(function(){
        var iframeDoc = document.getElementById('iframe').contentWindow.document;
        if ($(iframeDoc).find('#iframetext').text() == 'New HTML5 sandbox tag') {
          document.getElementById('test3c').src = 'images/pixel.png';
          document.getElementById('score_test3c').innerHTML = '1';
        }
});

</script>
