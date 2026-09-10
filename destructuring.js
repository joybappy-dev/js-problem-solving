// destructuring object
const person = {
    name: "Titenium",
    position: 166,
    address: {
        area: "Hisham",
        road: "82/7",
    },
};

const { name, address: myAddress } = person;
const { area, road } = myAddress;
// console.log(myAddress)

// desturing array
const colors = ["RED", "GREEN", "BLACK"];
const [,,kalo] = colors;
// console.log(kalo)
