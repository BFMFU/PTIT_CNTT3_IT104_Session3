let num1: number = 20;
let num2: number = 5;
let num3: number;

let num4: string = "10";
let num5: boolean = true;

// Cộng
num3 = num1 + num2;
console.log("Cộng:", num3); // 25

// Trừ
num3 = num1 - num2;
console.log("Trừ:", num3); // 15

// Nhân
num3 = num1 * num2;
console.log("Nhân:", num3); // 100

// Chia
num3 = num1 / num2;
console.log("Chia:", num3); // 4

// Cộng chuỗi với boolean
let result = num4 + num5;
console.log("num4 + num5 =", result); // "10true"

/*
Giải thích:

- num4 là chuỗi "10"
- num5 là boolean true

Trong JavaScript/TypeScript, khi bạn cộng string + boolean,
trình thông dịch sẽ **ép kiểu boolean thành chuỗi**:

"10" + true ➝ "10" + "true" ➝ "10true"

Đây là ví dụ về **ép kiểu ngầm (implicit coercion)**.
*/
