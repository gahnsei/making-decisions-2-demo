// let backpack = [];

// backpack.push(`Sword`);
// backpack.push(`Shield`);
// backpack.push(`Food`);

//backpack.shift();
// backpack.splice(0, 1);

// let furCoat = `Fur Coat`;

// backpack.push(furCoat);
// backpack.pop(furCoat);

// let itemCount = backpack.length;

// backpack.push(`Flint`, `Blanket`, `Knife`, `Toothbrush`);

// let backpack2 = backpack.splice(3, 3);

// console.log('backpack1', backpack, `backpack2`, backpack2);
// for (let i = 0; i < backpack.length; i++) {
//   console.log(backpack[i]);
// }

// if (backpack.length >= 3) {
//   for (let i = 0; i < 3; i++) {
//     console.log(backpack2[i]);
//   }
// } else {
//   for (let i = 0; i < backpack2.length; i++) {
//     console.log(backpack2[i]);
//   }
// }

let guessMe = 54

while (guessMe < 100) {
    console.log(`----------`, guessMe);
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log(`guessMe is divisiable by 4 or 5. Added 25`);
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log(`guessMe is divisable by 3. Subtracted 27`);
        guessMe -= 27
    } else {
        console.log(`hit else. Add 3`);
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now: ${guessMe}`);
}

console.log(`The final value:`, guessMe);