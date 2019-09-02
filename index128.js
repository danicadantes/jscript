const iceCreamFlavors = ['Rocky Road','Kitkat','Strawberry','Almond','Oreo','Chocolate','Pineapple','Kamias','Durian','Mangosteen'];
let removedFlavors = [];

for (let i = 0; i < 4; i++) {
   removedFlavors.push(iceCreamFlavors.pop());    
}

console.log('Ice Cream Flavors:', iceCreamFlavors);
console.log('Ice Cream Flavors Length:', iceCreamFlavors.length);
console.log('Ice Cream Flavors Removed:', removedFlavors);