document.addEventListener("DOMContentLoaded", function () {
    function toNumber(value: string | number): number | null {
        if (typeof value === "number") return value;
        const parsed = Number(value);
        return isNaN(parsed) ? null : parsed;
    }

    function add(a: string | number, b: string | number): number | string {
        const num1 = toNumber(a);
        const num2 = toNumber(b);
        if (num1 === null || num2 === null) return "Tham số không hợp lệ!";
        return num1 + num2;
    }

    function subtract(a: string | number, b: string | number): number | string {
        const num1 = toNumber(a);
        const num2 = toNumber(b);
        if (num1 === null || num2 === null) return "Tham số không hợp lệ!";
        return num1 - num2;
    }

    function multiply(a: string | number, b: string | number): number | string {
        const num1 = toNumber(a);
        const num2 = toNumber(b);
        if (num1 === null || num2 === null) return "Tham số không hợp lệ!";
        return num1 * num2;
    }

    function divide(a: string | number, b: string | number): number | string {
        const num1 = toNumber(a);
        const num2 = toNumber(b);
        if (num1 === null || num2 === null) return "Tham số không hợp lệ!";
        if (num2 === 0) return "Không thể chia cho 0!";
        return num1 / num2;
    }

    function power(a: string | number, b: string | number): number | string {
        const num1 = toNumber(a);
        const num2 = toNumber(b);
        if (num1 === null || num2 === null) return "Tham số không hợp lệ!";
        return Math.pow(num1, num2);
    }

    function sqrt(value: string | number, root: string| number): number | string {
        const num = toNumber(value);
        const hat= toNumber(root);
        if (num === null || hat === null) return "Tham số không hợp lệ!";
        if (num < 0) return "Không thể tính căn bậc hai của số âm!";
        return Math.pow(num, 1/hat);
    }

    function factorial(value: string | number): number | string {
        const num = toNumber(value);
        if (num === null || num < 0) return "Tham số không hợp lệ!";
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    const resultElement = document.getElementById("result")!;
    const number1 = document.getElementById("firstValue") as HTMLInputElement;
    const number2 = document.getElementById("secondValue") as HTMLInputElement;

    document.getElementById("add")?.addEventListener("click", () => {
        resultElement.textContent = `Kết quả: ${add(number1.value, number2.value)}`;
    });
    document.getElementById("minus")?.addEventListener("click", () => {
        resultElement.textContent = `Kết quả: ${subtract(number1.value, number2.value)}`;
    });
    document.getElementById("multiply")?.addEventListener("click", () => {
        resultElement.textContent = `Kết quả: ${multiply(number1.value, number2.value)}`;
    });
    document.getElementById("divide")?.addEventListener("click", () => {
        resultElement.textContent = `Kết quả: ${divide(number1.value, number2.value)}`;
    });
    document.getElementById("power")?.addEventListener("click", () => {
        resultElement.textContent = `Kết quả: ${power(number1.value, number2.value)}`;
    });
    document.getElementById("sqrt")?.addEventListener("click", () => {
        resultElement.textContent = `Kết quả: ${sqrt(number1.value, number2.value)}`;
    });
    document.getElementById("factorial")?.addEventListener("click", () => {
        resultElement.textContent = `Kết quả: ${factorial(number1.value)}`;
    });
});
