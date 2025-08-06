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

let input = "hello world apple banana orange pumpkin cucumber";

let temp = input.split(" ");

for (let i = 0; i < temp.length; i++) {
    temp[i] = removeDuplicateChars(temp[i]);
}

let strMax = temp[0].length;

let index =0;

for (let i = 0; i < temp.length; i++) {
    if (strMax < temp[i].length) {
        strMax = temp[i].length;
        index = i;
    }
}

console.log(temp[index]);