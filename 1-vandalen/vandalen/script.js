"use strict";

var makePerson = function(persArr) { 
	var result = {};
	var isString;
	var isInteger;
	var i;

// Tar ut namnen och sorterar dem innan de sätts ihop igen.
var names = persArr.map(function (name) {return name.name;}).sort(function(a, b); {return a.localCompare(b)}).join(", ");

//Tar ut åldrarna
var ages = persArr(function (age){return age.age;});

//Lägger ihop åldrarna och tar fram medelåldern.
var averageAge = persArr.reduce(function(a, b){ return a+b;});
averageAge /= ages.length;
averageAge = Math.round(averageAge)
var maxAge = Math.max.apply(Math, ages);
var minAge = Math.min.apply(Math, ages);

// Lägger in resultaten i objektet.
result.names = names;
result.maxAge = maxAge;
result.minAge = minAge;
result.averageAge = averageAge;

	
	return result; 
}; 

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var data = data.map(function isString(value, index, array){

names = names.every(function isString(value, index, array){


