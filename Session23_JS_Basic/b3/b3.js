let n = +prompt("nhập số phần tử trong mảng");
let numbers = [];
let count = 0;

if (n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
}else if (n === 0) {
    console.log("mảng không có phần tử")
}else{
    for (let i = 0; i < n; i++) {
        numbers[i] = +prompt(`nhập phần tử thứ ${i}`);
        if (Number.isInteger(numbers[i]) && numbers[i] < 0 ) {
            count++;
        }
    }
    console.log(count);
}


