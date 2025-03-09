let numbers = [];
let count = 0;

for (let i = 0; i < 10; i++) {
    numbers[i] = +prompt(`nhập phần tử thứ ${i}`);
    if (numbers[i] === "") {
        count++;
    }
}

if (count === 0) {
    let maxNumber = numbers[0]; 
    let index = 0;

    for (let i = 1; i < numbers.length; i++) { 
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            index = i;
        }
    }
    console.log(`Số lớn nhất: ${maxNumber}`);
    console.log(`Vị trí: ${index}`);
} else {
    console.log("không có số nào lớn nhất");
}