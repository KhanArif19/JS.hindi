// let a = 10
// const b = 2
        0
// var c = 30

// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:", a);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Arif"

    function two() {
        const wrbsite = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Arif"
    if (username === "Arif") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);


//  ++++++++++++++++++  interesting  +++++++++++++++++++


console.log(addone(5))
function addone(num) {
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

