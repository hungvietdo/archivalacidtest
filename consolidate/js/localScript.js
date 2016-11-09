document.addEventListener('DOMContentLoaded',function(){
	var localScriptImage = new Image();
	localScriptImage.src = "images/pixel.png";
	localScriptImage.title = "test2a";
	var scriptParent = document.getElementById('scriptParent');
	scriptParent.replaceChild(localScriptImage,document.getElementById('test2a'));
});
