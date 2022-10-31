// A simple example on how to create and access values
// from a Dictionary

let mom = {
    id: 123,
    name: "Angela",
    age: 28,
    registered: true
}

let dad = {
    id: 456,
    name: "Andrew",
    age: 30,
    registered: false
}

// This is one way to access the information in the dictionary
console.log(mom.id);
console.log(mom.name);

// This is another way to access information in the dictionary
console.log(dad["id"]);
console.log(dad["name"]);
