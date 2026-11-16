function add(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "Ошибка: нужно ввести два числа.";
    } else {
        return a + b;
    }
}

function subtract(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "Ошибка: нужно ввести два числа.";
    } else {
        return a - b;
    }
}

function multiply(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "Ошибка: нужно ввести два числа.";
    } else {
        return a * b;
    }
}

function divide(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "Ошибка: нужно ввести два числа.";
    } else if (b === 0) {
        return "Ошибка: на ноль делить нельзя.";
    } else {
        return a / b;
    }
}

console.log("Сложение:", add(10, 5));
console.log("Проверка сложения:", add("а", 5));

console.log("Вычитание:", subtract(10, 5));
console.log("Проверка вычитания:", subtract(10, "б"));

console.log("Умножение:", multiply(10, 5));
console.log("Проверка умножения:", multiply("в", 5));

console.log("Деление:", divide(10, 5));
console.log("Проверка деления:", divide(10, "г"));
console.log("Проверка деления на ноль:", divide(10, 0));
