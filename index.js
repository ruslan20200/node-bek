const { add, subtract, multiply, divide } = require("./arithmetic");

console.log("Сложение: 10 + 5 =", add(10, 5));
console.log("Вычитание: 10 - 5 =", subtract(10, 5));
console.log("Умножение: 10 * 5 =", multiply(10, 5));

const result = divide(10, 5);
console.log("Деление: 10 / 5 =", result.ok ? result.value : result.error);

const zeroResult = divide(10, 0);
console.log("10 / 0 =", zeroResult.ok ? zeroResult.value : zeroResult.error);

const invalidResult = add("a", 5);
console.log("a + 5 =", invalidResult.error);

const invalidDivideResult = divide(10, "b");
console.log("10 / b =", invalidDivideResult.error);
