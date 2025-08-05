let strValue: string = "2";     // Kiểu string
let numValue: number = 2;       // Kiểu number

// So sánh bằng toán tử ==
console.log("== comparison:", strValue == numValue); // true

// So sánh bằng toán tử ===
console.log("=== comparison:", strValue === numValue); // false

/*
 Giải thích:

 - `strValue == numValue` => true
   Vì `==` là so sánh lỏng (loose equality), JavaScript/TypeScript sẽ **ép kiểu ngầm**
   → "2" (string) được chuyển thành 2 (number), rồi so sánh → kết quả: true

 - `strValue === numValue` => false
   Vì `===` là so sánh chặt (strict equality), không có ép kiểu
   → string khác number → kết quả: false

 Do đó, trong TypeScript nên dùng === để tránh lỗi do ép kiểu ngầm.
*/
