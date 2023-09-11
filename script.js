// var string ="Hello";
// // string += "world";
// string =string + "world";
// console.log(string + "!");


//console.log((5+4)/3);
//console.log(undefined/5);
//function test1(a){
//	console.log(a/5);
//}
//test1();
// ******Equality
//var x=4, y=4;
// if (x == y){
//	console.log("x=4 is equal to y=4");
//}
//x="4";
//if (x == y){
//console.log("x='4' is equal to y=4");
//}
// if(x ==y){
// 	console.log("Strict")
// }
// x="4";
// //if (x == y){
// console.log("x='4' is equal to y=4");
// }
// if (false || null ||
// 	undefined || "" || 0 || NaN){
// 	console.log("This line won't ever execute");
// }
// else{
// 	console.log("All false");
// }
// function a()
// {
// 	return
// 	{
// 		name: "Yaakov"
// 	};
// }
//  function b(){
//  	return{
//  		name:"yaakov"
//  	};
//  }
//  console.log(a());
//  console.log(b());
// var sum = 0;
// for(var i= 0;i<10; i++){
// 	console.log(i);
// 	sum =sum+i;
// }
// console.log("sum of 0 through 9 is: " + sum);

// function orderchickenwith(sideDish){
// sideDish = sideDish || "whatever";
// console.log("Chicken with" + sideDish);
// }
// orderchickenwith("noodles");
// orderchickenwith();



// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }
// let isHappyHour = 'a';

// // Logical Operator
// isHappyHour = isHappyHour || 'b'; // 'a'

// // Ternary
// isHappyHour = isHappyHour ? isHappyHour : 'a'; // 'b'

// If/Else
// if (isHappyHour) {
//   isHappyHour = isHappyHour;
// } else {
//   isHappyHour = 'a';
// }

// console.log(isHappyHour); // 'b'

// var company = new Object();
// company.name ="Fb";
// company.ceo = new Object();
// company.ceo.firstname ="mark";
// company.ceo.lastname ="zuckerberg";
// console.log(company);
// console.log("company ceo name is" + company.ceo.firstname);
// var stockprop ="stock of company";
// company["stockprop"] =110;
// console.log(company);

// var fb ={
// 	name:"facebook",
// 	ceo:{
// 		firstname:"mark",
// 		lastname:"zuckerberg",
// 	},
// 	stockofcompany:110
// };
// console.log(fb);

// function multiply(x,y){
// 	return x*y;
// }
// multiply.version="v.1.0.0";
// console.log(multiply.version);


// //function factory
// function makeMultiplier(multiplier) {
//   var myFunFunc = function (x) {
//     return multiplier * x;
//   };
  
//   return myFunFunc;
// }

// var operation = makeMultiplier(10);
// console.log(operation(10));

// var a=7;
// var b=a;
// console.log("a:" +a);
// console.log("b:" +b);

// b=5;
// console.log("after b update");
// console.log("a:" +a);
// console.log("b:" +b);


// var a={x: 7};
// var b=a;
// console.log(a);
// console.log(b);

// b.x=5;
// console.log("after b.x update");
// console.log(a);
// console.log(b);

// function changePrimitive(primValue){
// console.log("in changePrimitve.....");
// console.log("before: ");
// console.log(primValue);

// primValue=5;
// console.log("After: ");
// console.log(primValue);
// }
// var value=7;
// changePrimitive(value); //primValue = value
// console.log("after changePrimitve, orig value: ");
// console.log(value);

// function changeObject(ObjValue){
// console.log("in changeObject.....");
// console.log("before: ");
// console.log(ObjValue);

// ObjValue=5;
// console.log("After: ");
// console.log(ObjValue);
// }
// value ={x:7};
// changeObject(value); //primValue = value
// console.log("after changeObject, orig value: ");
// console.log(value);

// function Circle(radius){
// this.radius= radius;
// }
// Circle.prototype.getArea =
// function () {
// 	return Math.PI= Math.pow(this.radius,2);
// }
// var myCircle =new Circle(10); //new Object();
// console.log(myCircle);

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

// var literalcircle={
// 	radius:10,
// 	getArea: function(){
// 		var self = this;
// 		console.log(this);

// 		var increaseRadius = function(){
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };
// console.log(literalcircle.getArea());
// var array = new Array();
// array[0] = "JJ";
// array[1] = 2;
// array[2] = function (name){
// 	console.log("hello" + name);

// };
// array[3] = {course: "HTML, CSS & JS"};
// console.log(array[0]);
// array[2](array[0]);
// console.log(array[3].course);

// var names=["jjd","fdg","DSvf"];
// console.log(names);

// for (var i =0; i<names.length; i++){
// 	console.log("Hello " + names[i]);
// }
//  names[100] = "jj";
// for (var i =0; i<names.length; i++){
// 	console.log("Hello " + names[i]);
// }
// var names2=["jjd","fdg","DSvf"];
// var myobj ={
// 	name:"jjd",
// 	course:"dhejwj"
// };
// for(var prop in myobj){
// 	console.log(prop 
// 		+": "+ myobj[prop]);
// }
// var names2=["jjd","fdg","DSvf"];
// for (var name in names2){
// 	console.log("Hello" + names2[name]);

// }
// names2.greeting ="hi";
// for (var name in names2){
// 	console.log("Hello" + names2[name]);
// }

// function makeMultiplier (multiplier){
// 	function b(){
// 		console.log("Multiplier is: "+ multiplier);
// 	}
// 	b();

// 	return(
// 	     function(x){
// 	     	return multiplier * x;

// 	     }
// 		);
// }
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));


var JohnGreeter={};
JohnGreeter.name="Fatima";
JohnGreeter.sayHello = function(){	
	console.log("Hello " + JohnGreeter.name);
}





















