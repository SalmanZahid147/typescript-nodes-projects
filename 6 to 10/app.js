"use strict";
//Q6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//code:
let name_ = "\t John Smith \n";
console.log(name_); // prints "\t John Smith \n"
console.log(name_.trim()); // prints "John Smith"
