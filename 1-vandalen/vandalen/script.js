"use strict";

var makePerson = function(persArr) { 
var result = {};


	// Tar ut namnen och sorterar dem innan de sätts ihop igen.
var names = persArr.map(function (names){return names.name;}).sort(function(a, b) { return a.localeCompare(b) }).join(", ");

	//Tar ut åldrarna.
var ages = persArr.map(function (ages){ return ages.age;});

	//Lägger ihop åldrarna och tar fram medelåldern.
var totalAge = ages.reduce(function(a, b){ return a + b;});
totalAge /= ages.length;
var averageAge = totalAge;
averageAge = Math.round(averageAge);
var maxAge = Math.max.apply(Math, ages);
var minAge = Math.min.apply(Math, ages);

	// Lägger in resultaten i objektet.
result.names = names;
result.maxAge = maxAge;
result.minAge = minAge;
result.averageAge = averageAge;

	return result; 
} 

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);