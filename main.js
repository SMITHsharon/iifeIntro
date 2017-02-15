var outside = "global";

function scopeStuff(){
	var inside = "local";
	// console.log("outside from inside the function", outside); //global
	// console.log("inside from inside the function", inside); // local

}

// console.log("outside from inside the function", outside); // global
// console.log("inside from inside the function", inside); // undefined

scopeStuff(); // global // local



var global_base = 500;
function throwAway(){
	global_base+=500;
	console.log(global_base); // 1000
}

throwAway(); // the ()s invoke (call) the function

// document.getElementById.addEventListener("click", throwAway) 
// no ()s on functions for click events ... the ()s fire the function; 
// want the click to fire the function
// without the ()s, just referencing the function


// ALTERNATIVELY ... TO 



// throwAway(); // put the ()s right after the {}s of the function definition [INVOKES IT]
				// enclose the whole function in ()s [DECLARES THE FUNCTION]

// IIFE immediately invokes function expression
// immediately-invoked function expression

// function declaration

var global_base = 500;
(function throwAway(){
	global_base+=500;
	console.log(global_base); // 1000
})();

//******* This :: is same as this ^^
!function throwAway(){
	global_base+=500;
	console.log(global_base); // 1000
}();


// function expression 
var x = function (){
	console.log("whatever");
};

//****************************************
// this is the shell // set up first thing
// var cats = (function(){ 
// })();

var cats = (function(){ 
	var color = "black";
	var type = "tiger";

	return {
		getColor : function(){
			return color;
		}, 
		getType : function(){
			return type;
		},
		setColor: function(newColor){
			color = newColor;
		}
	};
})();

console.log(cats.getColor());






















