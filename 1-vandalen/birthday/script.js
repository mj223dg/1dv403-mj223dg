"use strict";

window.onload = function(){

	
	var birthday = function(date){

		//Hämtar dagens datum.
	var currentdate = new Date();

		//Användaren väljer sitt datum.
	var myBirthday = new Date(date);

			//Ful lösning på felmeddelande. Får vara där tills jag hittar annan lösning.
		if (myBirthday > currentdate){
		return (alert("Du är ej född."))
	}
	myBirthday.setFullYear(currentdate.getFullYear());
	if (currentdate.getTime() > myBirthday.getTime()) {
		myBirthday.setFullYear(myBirthday.getFullYear()+1);
	}
	var diff = myBirthday.getTime() - currentdate.getTime();
	var days = Math.ceil(diff/(1000*60*60*24));

		//Om dagarna är lika med 365 returnera case 1.
	if (days === 365) {
	
		return 0;
	};
	
	return days; 




			// Din kod här.




	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};