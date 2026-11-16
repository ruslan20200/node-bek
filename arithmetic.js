function add(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return { ok: false, error: "Ошибка: нужно ввести два числа." };
    } else {
        return a + b;
    }
}

function subtract(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return { ok: false, error: "Ошибка: нужно ввести два числа." };
    } else {
        return a - b;
    }
}

function multiply(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return { ok: false, error: "Ошибка: нужно ввести два числа." };
    } else {
        return a * b;
    }
}

function divide(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return { ok: false, error: "Ошибка: нужно ввести два числа." };
    } else if (b === 0) {
        return { ok: false, error: "Ошибка: на ноль делить нельзя." };
    } else {
        return { ok: true, value: a / b };
    }
}

module.exports = { add, subtract, multiply, divide };
