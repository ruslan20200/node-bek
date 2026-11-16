function add(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return { ok: false, error: "Both values must be numbers." };
    } else {
        return a + b;
    }
}

function subtract(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return { ok: false, error: "Both values must be numbers." };
    } else {
        return a - b;
    }
}

function multiply(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return { ok: false, error: "Both values must be numbers." };
    } else {
        return a * b;
    }
}

function divide(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return { ok: false, error: "Both values must be numbers." };
    } else if (b === 0) {
        return { ok: false, error: "Division by zero is not allowed." };
    } else {
        return { ok: true, value: a / b };
    }
}

module.exports = { add, subtract, multiply, divide };
