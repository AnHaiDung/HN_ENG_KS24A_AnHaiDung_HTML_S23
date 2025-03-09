let n = +prompt("nhập số phần tử trong mảng");
let numbers = [];
let count = 0;
let sum =0;

if (n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
}else if (n === 0) {
    console.log("không có ký tự số");
}else{
    for (let i = 0; i < n; i++) {
        numbers[i] = +prompt(`nhập phần tử thứ ${i}`);
        if (isNaN(numbers[i])) {
            continue;
        }else{
            sum +=numbers[i]
        }
    }
    console.log(sum);
}