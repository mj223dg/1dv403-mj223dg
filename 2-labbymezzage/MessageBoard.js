"Use strict";
var MessageBoard = {
	
	messages: [],

	init:function(e) {

		var submit = document.getElementById("button");
		button.addEventListener("click", MessageBoard.submit, false );
		var text = document.getElementById("textArea");

		//Så att du kan trycka enter för att skicka meddelandet och trycka ctrl + enter för att göra radbrytning.
		text.addEventListener("keypress", function(e){
			if(!e){ e = window.event; }

			if(e.keyCode == 13 && !e.shiftKey){
				e.preventDefault();

				MessageBoard.submit();
			}
		});
	},
		
	
	submit : function() {
		//Hämtar inmatad värde från textArea.
			var text = document.getElementById("textArea");
		//Skapar meddelande och lägger till värde och tid.
			var mess = new Message(text.value, new Date());
			
			MessageBoard.messages.push(mess);
			var sentMessage = MessageBoard.messages.length - 1;
			sentMessage.value = "";
			MessageBoard.renderMessage(sentMessage); 
			textArea.value = "";
	},
	//
	renderMessage : function(messageID) {
		//Skapar element och lägger in div-tagg och p-tagg.
		var chatLog = document.getElementById("chatLog");
		var p = document.createElement("p");
		var time = document.createElement("p");
		var messageText = document.createElement("p");
		var div = document.createElement("div");
		div.className = "divClass";
		p.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		chatLog.appendChild(div);
		div.appendChild(p);
		div.appendChild(time);
		div.appendChild(messageText);

		time.innerHTML = MessageBoard.messages[messageID].getDateText();
		//skapar element.
		var a = document.createElement("a");
		var img = document.createElement("img"); 
		img.setAttribute("src", "delete.png");
		div.appendChild(img);

		//skapar element.
		var b = document.createElement("a");
		var img2 = document.createElement("img");
		img2.setAttribute("src", "clock.png");
		div.appendChild(img2);

		//För att få upp confirm alerten.
		img.onclick = function() {

			if (confirm("Vill du radera meddelandet?")) {
				MessageBoard.removeMessage(messageID);
			}
		}

		img2.onclick = function() {
			alert(MessageBoard.messages[messageID].toString());
		}

		MessageBoard.messageCounter();

	},

	//Raderar samtliga meddelande och skriver ut 
	renderMessages : function(messageID) {
		document.getElementById("chatLog").innerHTML = "";
	
		for (var i = 0; i < MessageBoard.messages.length; ++i) {
		MessageBoard.renderMessage(i);
		}
	},

	//Raderar meddelandet.
	removeMessage : function(messageID) {
		MessageBoard.messages.splice(messageID, 1);
		MessageBoard.renderMessages(messageID);
		MessageBoard.messageCounter();
	},

	//Skapar meddelanderäknaren.
	messageCounter : function() {
		var messageCount = MessageBoard.messages.length;
		var counter = document.getElementById("messageCounter");
		counter.innerHTML = "Antal meddelande: " + messageCount;
	}

}

window.onload = MessageBoard.init;