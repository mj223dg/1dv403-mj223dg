"use strict"

	var quiz = {

	

	httpRequest : new XMLHttpRequest(),
    url : "http://vhost3.lnu.se:20080/question/1",
	

	init : function(){
		quiz.getRequest(quiz.httpRequest)
		document.getElementById("knapp").addEventListener("click", function(){
			
	})
	},

	getRequest : function(xhr){
	xhr.onreadystatechanged = function(){
		if (xhr.redyState === 4) {
			if (xhr.status == 200){
				console.log(xhr.responseText);
			}else{
				console.log("Läsfel, status:"+xhr.status);
				}
			}
		}
	xhr.open("GET", quiz.url, true);
	xhr.send(null);
	},

	
}
	window.onload = quiz.init;
