/*
You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

items = []
items.push {a: "b", c: "d"}
*/
let items = [];
let obj = { a: "b", c: "d" };
items.push(obj);

// top rated solution:
var items2 = [];
items2.push({ a: "b", c: "d" });
