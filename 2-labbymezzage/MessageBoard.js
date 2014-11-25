"Use strict";
var MessageBoard = {
	
	messages: [],

	init:function(e){

	var submit = document.getElementById("button");

	submit.onclick = function() {
	var text = document.getElementById("textArea");

	MessageBoard.messages.push( new Message(text.value));
	console.log(MessageBoard.messages);



		}
	}
}
window.onload = MessageBoard.init;