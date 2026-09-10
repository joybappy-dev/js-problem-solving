const colors1 = ["RED", "GREEN", "BLUE"];
const colors2 = colors1;
colors2.push("yellow");
console.log(colors2);
console.log(colors1); //yellow will appear in colors1 too (reference dhore rakhar bapar sapar)

const moreColors = [...colors1, "ORANGE", "TEAL"]; //reference dhore rakhena just copy kore

const person = {
    country: "Bangladesh",
    division: "Khulna",
    department: "Computer science and technology.",
};

const person2 = {
    ...person,
    name: "Joy Bappy",
};

person2.age=20;

console.log("person", person);
console.log("person2", person2);
