"Use strict"

var memory = {

	random: [],

	init:function() {

		var cols = 4;
		var rows = 4;
		memory.random = RandomGenerator.getPictureArray(rows, cols);
		memory.createImg();
	},
	createImg: function (){
		console.log(memory.random);

		for (var i = 0; i < memory.random.length; i++){
			var tablediv = document.getElementById("memoryContainer");

			var div = document.createElement("div");
			var atag = document.createElement("a");
			var img = document.createElement("img");

			div.setAttribute("class", "divs");
			img.setAttribute("src", "pics/0.png");

			atag.appendChild(img);
			div.appendChild(atag);
			memoryContainer.appendChild(div);

			/**/
			atag.addEventListener('click', memory.turnTile);

			
		}
	},
	turnTile : function(e){
		console.log(this);
		var atag = this;
		

	}
};
window.onload = memory.init;