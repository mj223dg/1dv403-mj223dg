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
		
		/*var tablediv = document.getElementById("memoryContainer");
			var div = document.createElement("div");
			var p = document.createElement("p");
			div.className = "storePics";
			memoryContainer.appendChild(div);
			div.appendChild(p);
			*/

			var tablediv = document.getElementById("memoryContainer");
			var li = document.createElement("li");
			var a = document.createElement("a");
			var text = document.createTextNode("123");
			memoryContainer.appendChild(li);
			li.appendChild(a);
			a.appendChild(text);
			a.setAttribute("pics/0.png")
		for (var i = 0; i < random.length; i++){
			
			}
		}
	};
window.onload = memory.init;