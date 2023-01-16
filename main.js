// Modules
import { halfOf, multiply } from './lib.js';
console.log("halfOf: " + halfOf(84));
console.log("multiply: " + multiply(21, 2));

import doSomething from './doSomething.js';
doSomething();

import { flag, touch } from './validator.js';
console.log("validator: before: " + flag);
touch();
console.log("validator: after: " + flag);



// Arrow function
const author = {
    fullName: "Bob Alice",
    books: [],
    printBooks() {
        this.books.forEach(book => console.log(book + 'by ' + this.fullName));
    }
};
console.log(author);

// Let and Const
function iterateVar() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}
console.log("iterateVar: ");
iterateVar();

function iterateLet() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}
// iterateLet(); // RefernceError caught due to let

const me = 1;
// me = 2; // TypeError caught


// Rest
function userFriends(user, ...friends) {
    console.log("Rest:"); 
    console.log(user + ' has ' + friends.length + ' friends'); 
} 
userFriends('User', 'Bob', 'Alice');

// Spread
function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log("Spread:");
    console.log(firstFriend); 
    console.log(secondFriend); 
    console.log(thirdFriends); 
}
userTopFriends(...['Alice', 'Bob', 'Michelle']);

// Closure
