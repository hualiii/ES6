// 所以，简而言之，这里有两点区别：
//
// class Rabbit	class Rabbit extends Object
// –	needs to call super() in constructor
// Rabbit.__proto__ === Function.prototype	Rabbit.__proto__ === Object