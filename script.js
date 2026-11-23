// ===========================================================
// Bài 3.2.1 – Hiệu chỉnh theo sự kiện chuột (truy xuất DOM)
// ===========================================================

// ---------- 1. Đổi nội dung thẻ <div> khi rê chuột vào / ra ----------
const hopHover = document.getElementById("hop-hover");

hopHover.addEventListener("mouseover", function () {
  hopHover.innerHTML = "Mouse Event";
  hopHover.classList.add("dang-hover");
});

hopHover.addEventListener("mouseout", function () {
  hopHover.innerHTML = "Hover Me";
  hopHover.classList.remove("dang-hover");
});

// ---------- 2. Phóng to hình ảnh thêm 10% khi rê chuột vào ----------
const hinhAnh = document.getElementById("hinh-anh");
const beRongGoc = hinhAnh.width;   // bề rộng ban đầu: 240px

hinhAnh.addEventListener("mouseover", function () {
  hinhAnh.width = Math.round(beRongGoc * 1.1);   // tăng 10% => 264px
});

hinhAnh.addEventListener("mouseout", function () {
  hinhAnh.width = beRongGoc;                     // trở lại kích thước cũ
});

// ---------- 3. Hiện thông báo ngày giờ hiện tại khi nhấn nút ----------
// Thêm số 0 phía trước cho đủ 2 chữ số: 7 -> "07"
function haiChuSo(so) {
  return so < 10 ? "0" + so : String(so);
}

document.getElementById("nut-ngay-gio").addEventListener("click", function () {
  const bayGio = new Date();
  const cacThu = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

  const ngay = haiChuSo(bayGio.getDate()) + "/" +
               haiChuSo(bayGio.getMonth() + 1) + "/" +   // getMonth() đếm từ 0
               bayGio.getFullYear();
  const gio = haiChuSo(bayGio.getHours()) + ":" +
              haiChuSo(bayGio.getMinutes()) + ":" +
              haiChuSo(bayGio.getSeconds());

  alert("Bây giờ là " + gio + ", " + cacThu[bayGio.getDay()] + " ngày " + ngay);
});

// ---------- 4. Chuyển nội dung ô nhập sang chữ IN HOA ----------
document.getElementById("nut-in-hoa").addEventListener("click", function () {
  const oChu = document.getElementById("o-chu");
  oChu.value = oChu.value.toUpperCase();
});
