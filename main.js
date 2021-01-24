function $(query, arr) {
    let res = document.querySelectorAll(query);
    let output = undefined;

    switch (res.length) {
        case 0:
            break;
        case 1:
            if (arr) {
                output = [];
                output.push(res[0]);
            } else {
                output = res[0];
            }
            break;

        default:
            output = [];
            for (let i = 0; i < res.length; i++) {
                output.push(res[i])
            }
            break;
    }
    return output;
}

//  Getting a unique element
console.dir(document.getElementById("title"));


console.log(document.getElementsByClassName("blue"));

for (let i = 0; i < document.getElementsByClassName("blue").length; i++) {

    console.log(document.getElementsByClassName("blue")[i]);

}

let myNewDiv = `<div class="blue"> This is the fourth blue</div>`;


// This doesn't works because an HTML collection is not totally the same as an array
// document.getElementsByClassName("blue").push(myNewDiv);

console.log(document.querySelectorAll(".red"));


let myNewDiv2 = `<div class="red"> This is the third red</div>`;

// This doesn't work because this is a NodeList
// document.querySelectorAll(".red").push(myNewDiv2);


// Dollar function examples

console.log($("#nothing"));

// One element, but in an array

console.log($("#title", true));

// One element on its own (not in an array)

console.log($("#title"));

// More than one element 

console.log($(".blue"));

console.log($("div"));

console.log("-----------------------------");

// An example of an array method

let myAnimals = ["dog", "cat", "fish"];

let myNewAnimal = "parrot";

console.log(myAnimals);

myAnimals.push(myNewAnimal);

console.log(myAnimals);