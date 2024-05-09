# Hướng dẫn cài đặt và chạy ứng dụng

## Nhóm 1 - Lập trình di động nâng cao

### Thành viên nhóm
- 20110471 - Trần Nhật Hào
- 20110547 - Trần Thanh Phương

### Hướng dẫn

1. **Chuẩn bị**
   - Đảm bảo bạn đã cài đặt Node.js trên máy tính của mình.

2. **Tải mã nguồn**
   - Clone repository về máy tính của bạn:
     ```bash
     git clone <link_repository>
     ```

3. **Cài đặt**
   - Di chuyển vào thư mục ứng dụng cần cài đặt:
     - Đối với ứng dụng người dùng: `./client`
     - Đối với ứng dụng quản trị: `./client`
   - Cài đặt các gói npm:
     ```bash
     npm install
     ```

4. **Khởi động ứng dụng**
   - Sau khi cài đặt xong, bạn có thể khởi động ứng dụng bằng lệnh:
     ```bash
     npm start
     ```

5. **Sử dụng**
   - Khi ứng dụng đã khởi động, thực hiện các bước sau:
     - Nếu chạy trên máy ảo:
       - Nhấn `q` để chạy ứng dụng.
     - Nếu chạy trên thiết bị vật lý:
       - Nhấn `s` sau đó quét mã QR được hiển thị trên terminal để chạy ứng dụng.

> **Lưu ý:**
> - Server được triển khai trên Render (miễn phí), vui lòng đợi khoảng 3 phút để máy chủ khởi động.
> - Thư mục gốc là APMP-NHOM1.
