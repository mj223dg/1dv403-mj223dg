"Use strict";
function Message(message, date) {

	this.getText = function() {
		return message;
	}
	this.setText = function(_text) {
		message = text;
	}
	this.getDate = function(){
		return date;
	}
	this.setDate = function(_date) {
		date = _date;
	}
}

Message.prototype.toString = function() {

	var date = this.getDate();
	var month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]

	var year = date.getFullYear();
	var months = month[date.getMonth()];
	var day = date.getDate();
	
	var hour = Message.zero(date.getHours());
	var minute = Message.zero(date.getMinutes());
	var seconds = Message.zero(date.getSeconds());

	return "Inlägget skapades den: " + day + " " + months + " " + year + " " + "Klockan " + hour + ":" + minute + ":" + seconds;
}

Message.prototype.getHTMLText = function() {

	var htmlText = this.getText();

	return htmlText.replace(/[\n\r]/g, "<br />");
}

Message.prototype.getDateText = function() {
	var date = this.getDate();
	var hour = Message.zero(date.getHours());
	var minute = Message.zero(date.getMinutes());
	var seconds = Message.zero(date.getSeconds());

	return hour + ":" + minute + ":" + seconds;
}

Message.zero = function(i) {
	if ( i < 10 ){
		i = "0" + i;
	}
	return i;
}