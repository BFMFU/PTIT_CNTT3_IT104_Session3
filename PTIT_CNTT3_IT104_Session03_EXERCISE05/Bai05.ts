let firstName: string = "duy";
let lastName: string = "manh";

// Hàm viết hoa chữ cái đầu tiên
function capitalize(name: string): string {
    if (name.length === 0) return "";
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// Viết hoa nếu cần
firstName = capitalize(firstName);
lastName = capitalize(lastName);

// Nối chuỗi
let fullName: string = firstName + " " + lastName;

// In kết quả
console.log("Full name:", fullName);
