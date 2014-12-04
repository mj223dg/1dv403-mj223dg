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
		
		var tablediv = document.getElementById("memoryContainer");
			var div = document.createElement("div");
			var p = document.createElement("p");
			div.className = "storePics";
			memoryContainer.appendChild(div);
			div.appendChild(p);
			

			

		for (var i = 0; i < 3; i++){
			var row = document.createElement("tr");
			var a = document.createElement("a");
			var text = document.createTextNode("1");
			memoryContainer.appendChild(a);
			a.appendChild(text);

			}
		}
	};
window.onload = memory.init;