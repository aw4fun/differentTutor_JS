 // clear object

 let user = {};

 // added property to object

 user.name = "useName";

 // added method

 user.swimSong = function () {
	 return console.log("I'm singer, as i'm swim");
 };

 // runtime program we can:
 // add new props and methods to objects
 // change props and methods
 // delete props and methods


 //change method

 user.swimSong = function () {
	 return console.log("OOOps i cant sing anymore...")
 };

 // add props

 user.newProperty = "HelllOOO!";

 // delete property

 delete user.newProperty;