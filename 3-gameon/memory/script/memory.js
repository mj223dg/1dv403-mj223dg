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
			var p = document.createElement("p");
			div.className = "storePics";
			memoryContainer.appendChild(div);
			div.appendChild(p);
			}
		}
	};
window.onload = memory.init;