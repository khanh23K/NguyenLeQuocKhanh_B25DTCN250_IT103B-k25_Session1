let tenSach = prompt("Nhập tên sách: ");
let sothutu = prompt("Nhập số thứ tự của sách trong thư viện");

let tenSachGoc = tenSach;
let tenSachChuanHoa = tenSach.trim().toUpperCase();
let muaSach = "LIST - " + tenSachChuanHoa +" - "+ sothutu;

    console.log("Tên sách gốc: " + tenSachGoc);
    console.log("Mã sách sau chuẩn hóa: " + muaSach);