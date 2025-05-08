let score = "19abc"
console.log(typeof score);    //string 
console.log(typeof (score));   //string

let valueNumber = Number(score)
console.log(typeof valueNumber);       //number
console.log(valueNumber);     //NaN(not a number)

    // if (let score = null) then value of it is zero.
    // if (let score = undefined ) then value is Nan.
    // for boolean (true => 1 ; false => 0)
    // for (let score = "shweta") string (NaN => not a number)


    // "19" => 19
    // "19s" => NaN (not a number)


// boolean
let isloggedIn = 1
let booleanIsloggedin = Boolean( isloggedIn)
console.log(booleanIsloggedin);

    // 1 => true ; 0 => false
    // "" => false ; "shweta" => true


// convert to string
let number = 19
let number1 = String( number)
console.log(number1);
console.log(typeof number1);


// ********* operations **********

let num = 19
let negnum = -num
console.log(negnum);


let str1 = "shweta"
let str2 = " ganesh kadam "
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2);   //122
console.log(1+ 2 + "2");   //32

console.log(+true);  //1
console.log(+"");


let gamecounter = 100
++gamecounter
console.log(gamecounter);
