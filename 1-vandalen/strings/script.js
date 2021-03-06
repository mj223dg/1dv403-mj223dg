"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		 //return (str.toLowerCase());
		
		var a = str;
		var b = "";
		if (str.length > 0){
	 		for (var i = 0; i < a.length; i++){
		 		//Alla unicodevärden mellan 65 och 90 blir gemener, även mellan 196 och 214.
			 	if (a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90 || a.charCodeAt(i) >= 196 && a.charCodeAt(i) <= 214){
			 		//Ändrar alla stora bokstäver till små och tvärtom. Gör även alla A, a till #. 
			 		b = b + a.charAt(i).toLowerCase().replace(/a/g, "#");
			 	} else {
			 		b = b + a.charAt(i).toUpperCase().replace(/A/g, "#");
			 	};
		 	};
		 	return(b);
	 	} else {
		 	return "Vänligen skriv något!";
	 	};


		





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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};