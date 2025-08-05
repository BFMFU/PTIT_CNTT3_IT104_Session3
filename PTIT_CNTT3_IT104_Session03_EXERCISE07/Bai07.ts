function removeDuplicateChars(input: string): string {
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (result.indexOf(char) === -1) {
            result += char;
        }
    }

    return result;
}

let input1 = "banana";
let input2 = "hello world";

console.log(removeDuplicateChars(input1));  
console.log(removeDuplicateChars(input2)); 
