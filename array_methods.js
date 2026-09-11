const persons = [
    { name: "Hero", age: 22, marks: 99, regular: "yes" },
    { name: "Zero", age: 32, marks: 100, regular: "no" },
    { name: "Dero", age: 65, marks: 39, regular: "yes" },
];

persons.forEach((p, indx, arr) => {
    console.log(indx + " " + p.name);
});
