var btnTinhTien = document.getElementById('btnTinhTien');
btnTinhTien.onclick = function() {
    var hoTen = document.getElementById('hoTen').value;
    var thuNhap = +document.getElementById('thuNhap').value;
    var soNguoi = +document.getElementById('soNguoi').value;
    var pTinhTien = document.getElementById('pTinhTien');
    
    if( thuNhap <= 60e6){ // theo đề bài < 60e6
        var tien = (thuNhap - 4e6 - soNguoi * 1.6e6)*0.05
        pTinhTien.innerHTML = tien.toLocaleString() + 'VND'
    }else if(thuNhap > 60e6 && thuNhap <= 120e6){
        var tien = (60e6 - 4e6 - soNguoi * 1.6e6) * 0.05 + ((thuNhap - 60e6) - 4e6 - soNguoi * 1.6e6)* 0.1;
        pTinhTien.innerHTML = tien.toLocaleString() + 'VND'
    }else if(thuNhap > 120e6 && thuNhap <= 210e6){
        var tien = (60e6 - 4e6 - soNguoi * 1.6e6) * 0.05 + (60e6 - 4e6 - soNguoi * 1.6e6)* 0.1 + ((thuNhap - 120e6) - 4e6 - soNguoi * 1.6e6)* 0.15;
        pTinhTien.innerHTML = tien.toLocaleString() + 'VND'
    }else if(thuNhap > 210e6 && thuNhap <= 384e6){
        var tien = (60e6 - 4e6 - soNguoi * 1.6e6) * 0.05 + (60e6 - 4e6 - soNguoi * 1.6e6)* 0.1 + (90e6 - 4e6 - soNguoi * 1.6e6)* 0.15 + ((thuNhap - 210e6) - 4e6 - soNguoi * 1.6e6)* 0.2;
        pTinhTien.innerHTML = tien.toLocaleString() + 'VND'
    }else if(thuNhap > 384e6 && thuNhap <= 624e6){
        var tien = (60e6 - 4e6 - soNguoi * 1.6e6) * 0.05 + (60e6 - 4e6 - soNguoi * 1.6e6)* 0.1 + (90e6 - 4e6 - soNguoi * 1.6e6)* 0.15 + (174e6 - 4e6 - soNguoi * 1.6e6)* 0.2+ ((thuNhap - 384e6) - 4e6 - soNguoi * 1.6e6)* 0.25;
        pTinhTien.innerHTML = tien.toLocaleString() + 'VND'
    }else if(thuNhap > 624e6 && thuNhap <= 960e6){
        var tien = (60e6 - 4e6 - soNguoi * 1.6e6) * 0.05 + (60e6 - 4e6 - soNguoi * 1.6e6)* 0.1 + (90e6 - 4e6 - soNguoi * 1.6e6)* 0.15 + (174e6 - 4e6 - soNguoi * 1.6e6)* 0.2+ (240e6 - 4e6 - soNguoi * 1.6e6)* 0.25 + ((thuNhap - 624e6) - 4e6 - soNguoi * 1.6e6)* 0.3;
        pTinhTien.innerHTML = tien.toLocaleString() + 'VND'
    }else if(thuNhap > 960e6){
        var tien = (60e6 - 4e6 - soNguoi * 1.6e6) * 0.05 + (60e6 - 4e6 - soNguoi * 1.6e6)* 0.1 + (90e6 - 4e6 - soNguoi * 1.6e6)* 0.15 + (174e6 - 4e6 - soNguoi * 1.6e6)* 0.2+ (240e6 - 4e6 - soNguoi * 1.6e6)* 0.25 + (336e6 - 4e6 - soNguoi * 1.6e6)* 0.3 + ((thuNhap - 960e6) - 4e6 - soNguoi * 1.6e6)* 0.35;
        pTinhTien.innerHTML = tien.toLocaleString() + 'VND'
    }else {
        pTinhTien.innerHTML = 'không xác định'
    }

}

// BÀI 2:TÍNH TIỀN CÁP


var chonKh =document.getElementById('chonKh');
chonKh.onclick = function() {
    var kH = document.getElementById('chonKh').value
    if((kH) == 'doanhNghiep'){
        document.getElementById('ketNoi').style.display = 'block'
    }else if(kH == ''){
        pTinhTien.innerHTML = 'Vui lòng chọn mục khách hàng'
    }
}

var btnTinhTienCap = document.getElementById('btnTinhTienCap');
btnTinhTienCap.onclick = function() {
    var chonKh = document.getElementById('chonKh').value;
    var maKh = document.getElementById('maKh').value;
    var soKenh = +document.getElementById('soKenh').value;
    var ketNoi = +document.getElementById('ketNoi').value

    var pTinhTienCap = document.getElementById('pTinhTienCap')

    if(chonKh === 'nhaDan' && soKenh !==0){
        var tien = (4.5 + 20.5 + soKenh * 7.5);
        pTinhTienCap.innerHTML = `${maKh}, số tiền là: ${tien} $ `
    }else if(chonKh === 'doanhNghiep' && ketNoi <= 10 && soKenh !==0){
        var tien = (15 + 75 + soKenh * 50);
        pTinhTienCap.innerHTML = `${maKh}, số tiền là: ${tien} $ `
       
    }else if(chonKh === 'doanhNghiep' && ketNoi > 10 && soKenh !==0){
        var tien = (15 + 75 + soKenh * 50 + (ketNoi - 10) * 5);
        pTinhTienCap.innerHTML = `${maKh}, số tiền là: ${tien} $ `
      
    }else{
        pTinhTienCap.innerHTML = ' không xác định '
        
    }
    
    // pTinhTienCap.innerHTML = `${maKh}, số tiền là: ${tien} $ `  //undefined
    
}
