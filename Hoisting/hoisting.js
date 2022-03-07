/*
1.
console.log(hello);
var hello = 'world';

After Hoisting:
*/

var hello;
console.log(hello);
hello = 'world';


/*
2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

After Hoisting:
*/

var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle); //outputs magnet
}
test();


/*
3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

After Hoisting:
*/

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); // only okay
}
console.log(brendan); // super cool


/*
4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

After Hoisting:
*/

var food = 'chicken';
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
console.log(food); // chicken
eat(); // half chicken

/*
5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

After Hoisting:
*/

var mean = function() {
    var food = "fish";
    food = "chicken";
    console.log(food); // chicken
    console.log(food); // chicken
}
mean();
console.log(food); // undefined
console.log(food); // undefined


/*
6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

After Hoisting:
*/

var genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre); // rock
    var genre = "r&b";
    console.log(genre); // r&b
}
console.log(genre); // disco
rewind();
console.log(genre); // disco

/*
7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

After Hoisting:
*/

function learn() {
    dojo = "seattle";
    console.log(dojo); // seattle
    var dojo = "burbank";
    console.log(dojo); // burbank
}
dojo = "san jose";
console.log(dojo); // san jose
learn();
console.log(dojo); // san jose


/*
8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

After Hoisting:
*/

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // error cannot assign string to object
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // name = Chicago, students = 65, hiring = true 
console.log(makeDojo("Berkeley", 0)); 
