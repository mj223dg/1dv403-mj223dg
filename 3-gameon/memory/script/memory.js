"Use strict"

var memory = {
	

	init:function() {

		var cols = 4;
		var rows = 4;
		var random = RandomGenerator.getPictureArray(rows, cols);
		memory.imgArray(random);
	},
	imgArray: function (random){
		console.log(random);

		for (var i = 0; i < random.length; i++){
			var tablediv = document.getElementById("memoryContainer");

			var div = document.createElement("div");
			var a = document.createElement("a");
			var img = document.createElement("img");

			div.setAttribute("class", "divs");
			img.setAttribute("src", "pics/0.png");

			memoryContainer.appendChild(div);
			div.appendChild(a);
			a.appendChild(img);
			memory.click();
			}
		},

		click: function(){
		

		}
	};
window.onload = memory.init;