document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g;
    function toNumber(value) {
        if (typeof value === "number")
            return value;
        var parsed = Number(value);
        return isNaN(parsed) ? null : parsed;
    }
    function add(a, b) {
        var num1 = toNumber(a);
        var num2 = toNumber(b);
        if (num1 === null || num2 === null)
            return "Tham số không hợp lệ!";
        return num1 + num2;
    }
    function subtract(a, b) {
        var num1 = toNumber(a);
        var num2 = toNumber(b);
        if (num1 === null || num2 === null)
            return "Tham số không hợp lệ!";
        return num1 - num2;
    }
    function multiply(a, b) {
        var num1 = toNumber(a);
        var num2 = toNumber(b);
        if (num1 === null || num2 === null)
            return "Tham số không hợp lệ!";
        return num1 * num2;
    }
    function divide(a, b) {
        var num1 = toNumber(a);
        var num2 = toNumber(b);
        if (num1 === null || num2 === null)
            return "Tham số không hợp lệ!";
        if (num2 === 0)
            return "Không thể chia cho 0!";
        return num1 / num2;
    }
    function power(a, b) {
        var num1 = toNumber(a);
        var num2 = toNumber(b);
        if (num1 === null || num2 === null)
            return "Tham số không hợp lệ!";
        return Math.pow(num1, num2);
    }
    function sqrt(value) {
        var num = toNumber(value);
        if (num === null)
            return "Tham số không hợp lệ!";
        if (num < 0)
            return "Không thể tính căn bậc hai của số âm!";
        return Math.sqrt(num);
    }
    function factorial(value) {
        var num = toNumber(value);
        if (num === null || num < 0)
            return "Tham số không hợp lệ!";
        if (num === 0 || num === 1)
            return 1;
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    var resultElement = document.getElementById("result");
    var number1 = document.getElementById("firstValue");
    var number2 = document.getElementById("secondValue");
    (_a = document.getElementById("add")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        resultElement.textContent = "K\u1EBFt qu\u1EA3: ".concat(add(number1.value, number2.value));
    });
    (_b = document.getElementById("minus")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        resultElement.textContent = "K\u1EBFt qu\u1EA3: ".concat(subtract(number1.value, number2.value));
    });
    (_c = document.getElementById("multiply")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        resultElement.textContent = "K\u1EBFt qu\u1EA3: ".concat(multiply(number1.value, number2.value));
    });
    (_d = document.getElementById("divide")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        resultElement.textContent = "K\u1EBFt qu\u1EA3: ".concat(divide(number1.value, number2.value));
    });
    (_e = document.getElementById("power")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
        resultElement.textContent = "K\u1EBFt qu\u1EA3: ".concat(power(number1.value, number2.value));
    });
    (_f = document.getElementById("sqrt")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
        resultElement.textContent = "K\u1EBFt qu\u1EA3: ".concat(sqrt(number1.value));
    });
    (_g = document.getElementById("factorial")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function () {
        resultElement.textContent = "K\u1EBFt qu\u1EA3: ".concat(factorial(number1.value));
    });
});
