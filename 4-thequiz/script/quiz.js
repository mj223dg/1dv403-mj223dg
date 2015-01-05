"use strict"

	var quiz = {

    neURL : "http://vhost3.lnu.se:20080/question/1",
    counter : 0,
    tries : [],
    response: [],

	init : function(){
		quiz.elementCreation();
		quiz.getRequest();
		document.getElementById("knapp").addEventListener("click", function(){
			quiz.sendit();
		});
	},

	elementCreation : function(){
		var question = document.getElementById("question");
		var div = document.createElement("div");
		var pTag = document.createElement("p");

		question.appendChild(div);
		div.appendChild(pTag);
		pTag.setAttribute("class", "p");
		
	},

	getRequest : function(){

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if (xhr.status == 200){

					console.log(xhr.responseText);
					console.log(JSON.parse(xhr.responseText));
					quiz.response = JSON.parse(xhr.responseText);

					quiz.neURL = quiz.response.nextURL;
					quiz.viewQuestion(quiz.response);
				}else{
					console.log("Läsfel, status:"+xhr.status);
				}
			}
		}
		xhr.open("GET", quiz.neURL, true);
		xhr.send(null);
	},

	sendit : function(){
		
		var textArea = document.getElementById("textArea").value;
		var xhr = new XMLHttpRequest();
		quiz.counter +=1;
		xhr.onreadystatechange = function(){
						
			if(xhr.readyState === 4){
				if(xhr.status == 200){
					quiz.response = JSON.parse(xhr.responseText);
					quiz.tries.push(quiz.counter);
					quiz.counter = 0;
					if("nextURL" in quiz.response){
						quiz.viewQuestion(JSON.parse(xhr.responseText));
						quiz.neURL = quiz.response.nextURL;
						
						setTimeout(function(){
							quiz.getRequest();
						}, 1000);
						

					}else{
						quiz.enditall();
					}


				}else{
					quiz.wrong(quiz.response);
					console.log("Läsfel, status:"+xhr.status);
				}
			}
		}
		xhr.open("POST", quiz.neURL , true);
		xhr.setRequestHeader("Content-Type", "application/json");
		var answer = {
			"answer": textArea
		}
		xhr.send(JSON.stringify(answer));


		
	},

	viewQuestion : function(responseText){
		var questionText = document.querySelector(".p")
		if("question" in responseText){
			questionText.innerHTML = responseText.question;

		}else{
			questionText.innerHTML = responseText.message;
		}
	},

	wrong : function(){
		var w = document.querySelector(".p");
		w.innerHTML = "Wrong! Try again."
		setTimeout(function(){
			w.innerHTML = quiz.response.question;
		},1000);
	}, 

	enditall : function(){
		var q = document.getElementById("question");
		q.innerHTML = "";
		for(var i = 0; i < quiz.tries.length; i +=1){

			var p = document.createElement("p");
			q.appendChild(p);
			
			if(quiz.tries[i] < 2){
				p.innerHTML = "Question "+(i+1)+" toke "+quiz.tries[i]+" try.";
			}else{
				p.innerHTML = "Question "+(i+1)+" toke "+quiz.tries[i]+" tries.";
			}
			
			
		}
	},
	
}
	window.onload = quiz.init;


