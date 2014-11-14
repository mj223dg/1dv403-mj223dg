"Use strict";
var MessageBoard = {
	
	messages: [],

	init:function(e){

	var mess = new Message("test", new Date());

	MessageBoard.messages.push("Hej, hej, nej, Nej");

	console.log(MessageBoard.messages);
	}
};
window.onload = MessageBoard.init;