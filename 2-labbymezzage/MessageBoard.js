"Use strict";
var MessageBoard = {
	
	messages: [],

	init:function(e){

	var mess = new Message("test", new Date());

	MessageBoard.messages.push("Hej, hej, nej, Nej");

	console.log(MessageBoard.messages);
	var submit = document.getElementById("button");

	MessageBoard.messages.push("meddelande")


	submit.onclick = function() {
		alert("Blablabla");
	}
	var send = document.getElementById("sendMessage");
	send.onclick = MessageBoard.createMessage;
	},
	createMessage: function(){
		var empty = document.getElementById("meddelande").value;
			if ("" === empty) {
				return false;
			};
			var newMessage = new Message(document.form.meddelande.value);
			MessageBoard.messages.push(newMessage);
			MessageBoard.renderMessages();
	}

	var msg = document.createElement("div");
	msg.className = "msg";
	msg.innerHTML = MessageBoard.messages[messageID].getHTMLText();
	msg.appendChild(button);

var mess = document.getElementById("TextBoxContainer");
mess.appendChild(msg);
};

window.onload = MessageBoard.init;