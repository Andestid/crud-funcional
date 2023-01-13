const {item:frutero,dinero} = require('./frutas.js');

const cowsay = require("cowsay");
console.log(cowsay.say({
text: "ven",
e: "oO",
T: "U "
}));
frutero.forEach(item => {
    console.count(item)
});
console.log(dinero);