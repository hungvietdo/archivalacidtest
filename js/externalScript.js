document.addEventListener('DOMContentLoaded',function(){
	var externalScriptImage = new Image();
	externalScriptImage.src = "pixel.png";
	var scriptParent2 = document.getElementById('scriptParent_2b');
	scriptParent2.replaceChild(externalScriptImage,document.getElementById('test2b'));
    	document.getElementById('score_test2b').innerHTML = '1';
});
