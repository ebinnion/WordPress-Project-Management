jQuery(document).ready(function($){

	var projectNameArray = new Array();
	var newDiv = document.createElement('div');

	var star;
	star = document.getElementById("star");

	


	$(star).click(function(){
		var projectName = document.getElementById("project_name").innerHTML;

		document.getElementById("inner1").innerHTML = projectName;
		document.getElementById("inner2").innerHTML = projectName;
		document.getElementById("inner3").innerHTML = projectName;

	});
});