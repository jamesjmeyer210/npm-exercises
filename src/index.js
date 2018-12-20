const $ = require('jquery');
import {sayHello} from "./say-hello.js"

const sayHelloTo = (name) => {
	console.log(`Hello ${name}.`);
}

sayHelloTo("James");
$("body").append(`<h1>Welcome to the npm build suit!</h1>`);

sayHello();
