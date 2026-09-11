const persons = [
    { name: "Hero", age: 22, marks: 99, regular: "yes" },
    { name: "Zero", age: 32, marks: 100, regular: "no" },
    { name: "Dero", age: 65, marks: 39, regular: "yes" },
];

persons.forEach((p, indx, arr) => {
    // console.log(indx + " " + p.name);
});

const newArray = persons.map(function (element, index, array) {
    // Return the transformed element to be added to newArray
    return element.name.toLowerCase();
});
// console.log(newArray);

const filteredArray = persons.filter((p) => p.marks > 10);
// console.log(filteredArray);

const found = persons.find((p) => p.name === "Hero");
// console.log(found)

const some = persons.some((p) => p.marks > 10);
// console.log(some);

const every = persons.every((p) => p.marks > 50);
// console.log(every)

const sum = persons.reduce((acc, current) => {
    return (acc += current.marks);
}, 0);
// console.log(sum);

const sorted = persons.sort((a,b)=>b.marks-a.marks)
// console.log(sorted)