let numbers = [];
let count = 0;

for (let i = 0; i < 10; i++) {
    numbers[i] = prompt(`nhập phần tử thứ ${i}`);
    if (numbers[i]>10) {
        console.log(numbers[i]);
        count = 1;
    }
}
if(count === 0){
    console.log("Không có số nào lớn hơn 10");
}