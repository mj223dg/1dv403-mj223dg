"use strict"

define(function(){

	var imageApp = {

		URL : "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",

		init:function(){
			document.getElementById("imageApp").onclick = function(){

				if(!document.getElementById("window")){
					imageApp.elementCreations();
				}
			}
		},
		//Skapar elementen för imgviewer.
		elementCreations : function(){ 

			// Skapar själva fönstret.
			var divwindow = document.createElement("div");
			divwindow.setAttribute("Id", "window");
			document.body.appendChild(divwindow);

			//Där bilderna skall visas.
			var divImg = document.createElement("div");
			divImg.setAttribute("Id", "img");
			divwindow.appendChild(divImg);

			imageApp.getRequest(divImg);
			

		},

		getRequest : function(divImg){

			console.log("lzjsdjfgh")
		var divLoading = document.createElement("div");
		divLoading.setAttribute("class", "loadingDiv")
		var loadingImg = document.createElement("img");
		loadingImg.setAttribute("src", "pics/loading.gif")

		divImg.appendChild(divLoading);
		divLoading.appendChild(loadingImg);

		var xhr = new XMLHttpRequest();
		

		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if (xhr.status == 200){
					console.log("aasdddff")
					divImg.removeChild(divLoading);
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

			var bild = document.querySelector("#img");
			var thumbHeight = 0;
			var thumbWidth = 0;

			for(var i = 0; i < response.length; i +=1){
			

				var D = document.createElement("div");
				D.setAttribute("class", "pics");
				

				var atag = document.createElement("a");
				atag.setAttribute("href", "#");


				var picture = document.createElement("img");
				picture.setAttribute("src", response[i].thumbURL);

				
				bild.appendChild(D);
				D.appendChild(atag);
				atag.appendChild(picture);

				if(thumbHeight < response[i].thumbHeight){
					thumbHeight = response[i].thumbHeight;
				}

				if (thumbWidth < response[i].thumbWidth){
					thumbWidth = response[i].thumbWidth
				}

				D.style.height = thumbHeight+"px";
				D.style.width = thumbWidth+"px";

				picture.onclick = function(){
					var imgURL = this.src;
					imgURL = imgURL.replace("/thumbs", "");
					console.log(imgURL);
					document.body.style.backgroundImage =  "url('"+imgURL+"')";
				}
			}
		}


	}



return imageApp;
});