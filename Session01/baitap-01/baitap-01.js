const bankinh=parseInt(prompt(`Moi ban nhap ban kinh: `));

function ChuvivaDientich(bankinh){
    if(bankinh<0){
        console.log("ban kinh phai lon hon 0");
    }
    const chuVi= 2*Math.PI*bankinh;
    const dienTich= Math.PI*Math.pow(bankinh,2);
    return {
        chuVi: chuVi,
        dienTich: dienTich
    }
}
const ketqua=ChuvivaDientich(bankinh);
console.log(`Chu vi: ${ketqua.chuVi}`);
console.log(`Dien tich: ${ketqua.dienTich}`);
