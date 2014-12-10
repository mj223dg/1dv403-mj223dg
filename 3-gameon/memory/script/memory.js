"Use strict"

var memory = {

	random: [],
	turnedTiles: [],
	counter : [],
	correctCounter : [],
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
			atag.setAttribute("href", "#");
			atag.setAttribute("rel", memory.random[i]);
			
			atag.appendChild(img);
			div.appendChild(atag);
			memoryContainer.appendChild(div);
			atag.addEventListener('click', memory.turnTile);
			
		}
	},
	turnTile : function(e){
		e.preventDefault();
		//console.log(this.firstChild.setAttribute("src", "pics/1.png"));
		var tileValue = this;
		var rel = tileValue.rel;	
		if(memory.turnedTiles.length < 2){
			//set the tile attribute to type so you can't click it again when it's correct.
			if(!tileValue.hasAttribute("type")){
				
				tileValue.firstChild.setAttribute("src", "pics/"+rel+".png");
				tileValue.setAttribute("type", "#");
				memory.turnedTiles.push(tileValue);
				console.log(memory.turnedTiles);
			}
		}

		if(memory.turnedTiles.length === 2){
			//if correct flip the tile.
			if(memory.turnedTiles[0].getAttribute("rel") === memory.turnedTiles[1].getAttribute("rel")){	
				memory.turnedTiles.length = 0;
				memory.counter++;
				memory.correctCounter++;
			} else {
				setTimeout(function(){
					//if not correct dont flip tile.
					for(var i = 0; i < memory.turnedTiles.length; i += 1){
					
						memory.turnedTiles[i].firstChild.setAttribute("src", "pics/0.png");
						memory.turnedTiles[i].removeAttribute("type");

					}
					memory.turnedTiles.length = 0;
					memory.counter++;
					console.log(memory.counter);
				}, 1000);
			}
		}
		//if the the counter is equal to 8 you've won!.
		if (memory.correctCounter === 8){
			console.log("Du vann!")

			
			var counter = document.getElementById("text");
			counter.innerHTML = "Du vann på: " + memory.correctCounter + " klick!";

		}
	} 
};
window.onload = memory.init;