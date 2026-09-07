// task1: calculate average marks
const student = {
    name: "Rahim",
    id: 102,
    marks: {
        bng: 100,
        eng: 100,
        math: 70,
        cprogramming: 99,
    },
};

// method 1
// retrive subjects in array from nested object
// const subjects = Object.subs(student.marks);
// let total=0;
// for (sub of subjects) {
//     // traverse through each sub
//     // get mark of each subject
//     total += student.marks[sub];
// }
// const average = total/subjects.length;
// console.log(average)

// // method 2
// let total = 0;
// const subjects = [];
// for (sub in student.marks) {
//     subjects.push(sub);
//     total += student.marks[sub];
// }
// const average = total / subjects.length;
// console.log("Average: ", average);

// task2: calculate total item and total price
const cart = [
    { name: "Shirts", price: 1200, quantity: 2 },
    { name: "Pants", price: 1800, quantity: 1 },
    { name: "Socks", price: 150, quantity: 3 },
];
// let shirts_price = 0;
// let pants_price = 0;
// let socks_price = 0;

// let shirts_quantity = 0;
// let pants_quantity = 0;
// let socks_quantity = 0;

// // get one cart item in each iteration
// for (item of cart) {
//     if (item.name === "Shirts") {
//         shirts_price = item.price * item.quantity;
//         shirts_quantity = item.quantity;
//     }
//     if (item.name === "Pants") {
//         pants_price = item.price * item.quantity;
//         pants_quantity = item.quantity;
//     }
//     if (item.name === "Socks") {
//         socks_price = item.price * item.quantity;
//         socks_quantity = item.quantity;
//     }
// }
// const total_price = shirts_price + pants_price + socks_price;
// const total_items = shirts_quantity + pants_quantity + socks_quantity;
// console.log("Total Items: ", total_items);
// console.log("Total Price: ", total_price);
