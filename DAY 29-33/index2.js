let int = 32;
let string = 'adi';
let string_2 = `aditya
raj`;
let string_3 = 'adityar' + 'aj singh' + 'rajput';
let array = ['aditya', 'love', 32, 58];
let job_object = {
    title : 'Developer',
    age : '35',
    salary : '200000',
}

console.log(array);
alert(string_2);
alert(string_3);
console.log(array[0], array[1]);
console.log(job_object.age);
console.log(job_object);

// Operations like addition and others are common in all

let newnum;
function calculate(){
    newnum = int -5;
}

calculate();
console.log(newnum);

int = 56;
calculate();
console.log(newnum);
////////////////////////////////////////////////////////

// return with functions
// Better than void function

function abc(){
    return int +5;
}

let a = abc();
console.log(a);

int = 78;
let b = abc()
console.log(b);

///////////////////////////////////////////////////////
// Function with parameters

function func(intis){
    return int-1;
}

let aa = func(int);
console.log(aa);

/////////////////////////////////////////////////////////

let person = {
    name : aditya,
    age : 20,
    status : nalla,
    fn_name(){
        console.log("helllo sir");
    }
} 

person.fn_name();

let my_string = 'stringishere';
console.log(my_string.length());
console.log(my_string.toUpperCase());

let arrayis = [ab, sdf, sdf, iijo];
console.log(arrayis.length());






{/* <head>
    <script src="first-script.js"></script>
    <script src="second-script.js"></script>
</head>
</body>
...
    <script src="third-script.js"></script>
</body> */}

///////////////////////////////////////
// ** (e.g. age = 4 ** 3): Exponentiation operator (i.e. replacement for age = 4 * 4 * 4)


// let myName = 'Max';
// and then use it in second-script.js:

// console.log(myName);