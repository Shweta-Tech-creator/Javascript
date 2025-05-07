const accountId = 1234
let  accountEmail = "shweta@gmail.com"
var  accountPassword = "12"
accountCity="Thane"
let accountState;

// accountId= 123  (not allowed)
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail="sweta@gmail.com"
accountPassword ="123"
accountCity="Jaipur"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])