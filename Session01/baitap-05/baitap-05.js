const hamTinhtoan=(...numbers)=>{
    // loc ra so chan va le
    const evenNumber= numbers.filter(num => num % 2 === 0);
    const oddNumber= numbers.filter(num => num % 2 !== 0);
    // Sum
    const evenSum= evenNumber.reduce((tong, num) => tong + num, 0);
    const oddSum= oddNumber.reduce((tong, num) => tong + num, 0);
    return {
        evenNumber,
        evenSum,
        oddNumber,
        oddSum
    }
}
const result = hamTinhtoan(2, 34, 21, 6, 77, 12, 45, 14, 55);

console.log(`Cac lo chan: ${result.evenNumber}`);
console.log(`Tong cac lo chan: ${result.evenSum}`);
console.log(`Cac lo le: ${result.oddNumber}`);
console.log(`Tong cac so le: ${result.oddSum}`);