// Write a function called even(), which receives an array containing numbers as a parameter.
// The function returns a second (usually smaller) array which has the even numbers of the original
// array. The function must not make changes to the original table.
// Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item
// array with items 2 and 4. Print both the original array and the new array to the console
// in the main program after you have called the function.
// You can hard code the array, no need for prompt().

function even(lista) {
    const evenNumbers = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            evenNumbers.push(lista[i]);
        }
    }
    return evenNumbers;
}
const Array = [2, 7, 4, 9, 12, 15, 18];
const Array2 = even(Array);

console.log("Original array:", Array);
console.log("Even array:", Array2);
