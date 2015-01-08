"use strict"

define(function(){

	var imageApp = {

		init:function(){
			document.getElementById("imageApp").onclick = function(){

				imageApp.elementCreations();
			}
			console.log("hej");
		},
		//Skapar elementen för imgviewer.
		elementCreations : function(){

			var divImg = document.createElement("div");
			divImg.setAttribute("Id", "window");
			document.body.appendChild(divImg);
			
			//document.body.style.backgroundImage="url('img_tree.png')";
		},

		/*
		request : function(){

		},
		*/

	}



return imageApp;
});