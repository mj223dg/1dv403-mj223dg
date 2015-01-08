"use strict"

define(function(){

	var imageApp = {

		URL : "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",
		divwindow: null,

		init:function(){
			document.getElementById("imageApp").onclick = function(){

				imageApp.elementCreations();
				imageApp.getRequest();
			}
		},
		//Skapar elementen för imgviewer.
		elementCreations : function(){ 

			// Skapar själva fönstret.
			imageApp.divwindow = document.createElement("div");
			imageApp.divwindow.setAttribute("Id", "window");
			document.body.appendChild(imageApp.divwindow);

			//Där bilderna skall visas.
			var divImg = document.createElement("div");
			divImg.setAttribute("Id", "img");

			//
			imageApp.divwindow.appendChild(divImg);

			//document.body.style.backgroundImage="url('img_tree.png')";
		},

		getRequest : function(){

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if (xhr.status == 200){
					imageApp.insertImages(JSON.parse(xhr.responseText));
				}else{
					console.log("Läsfel, status:"+xhr.status);
				}
			}
		}
		xhr.open("GET", imageApp.URL, true);
		xhr.send(null);

		},
		
		insertImages : function(response){
			var bild = imageApp.divwindow.querySelector("#img");

			for(var i = 0; i < response.length; i +=1){
				var D = document.createElement("div");
				bild.appendChild(D);

				
			}
		}


	}



return imageApp;
});