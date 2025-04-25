const checkNumber=parseInt(prompt(`Moi ban nhap so can kiem tra: `));

const checkParity=(checkNumber) =>{
    // Kiểm tra xem đầu vào có phải là số không
    if (typeof checkNumber !== 'number' || isNaN(checkNumber)) {
        return "Gia tri nhap vao khong phai so";
    }

    // Kiểm tra chẵn hay lẻ
    if (checkNumber % 2 === 0) {
        return `${checkNumber} la so chan`;
    } else {
        return `${checkNumber} la so le`;
    }
}

console.log(checkParity(checkNumber));
