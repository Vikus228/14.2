let numbers = [];

for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}

console.log(numbers);

numbers = numbers.filter(number => number >= 0);

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] ** 2;
}

console.log(numbers);

numbers.sort((a, b) => {return b-a})

console.log(numbers);

