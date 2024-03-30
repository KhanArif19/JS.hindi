// const coding = ["js", "rubby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }

// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
];

let userBooks = books.filter( (bk) => bk.genre === 'Non-Fiction')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1981 && bk.genre === "Fiction"
})
console.log(userBooks);
    