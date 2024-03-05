const accountId = 144553
let accountEmail = "Arif@google.com"
var accountPassword ="12345"
accountCity = "Kashmir"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bangaluru"

console.log(accountId);

/*
prefer not to use var
becuase of issue in block scope and functional scope
/*


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])