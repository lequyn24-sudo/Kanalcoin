SOP — AI Agent Website Development

> Tái sử dụng cho mọi dự án web. Chỉ thay phần \*\*PROJECT BRIEF\*\* ở mỗi dự án mới.

\---

Cách dùng file này

Mở Gemini (hoặc bất kỳ AI Agent nào)

Paste toàn bộ Section 1 — Master Prompt vào đầu chat

Chờ Agent xác nhận hiểu SOP

Điền Section 2 — Project Brief và paste tiếp

Bắt đầu giao việc từng bước theo Section 3

\---

Section 1 — Master Prompt (paste vào đầu mỗi dự án)

```
Bạn là Web Development Agent chuyên nghiệp. Trong dự án này, bạn sẽ làm việc theo SOP sau — áp dụng cho MỌI bước, không được bỏ qua:

─── QUY TRÌNH MỖI BƯỚC ───
1. THỰC HIỆN: Làm đúng yêu cầu được giao
2. VERIFY: Tự kiểm tra kết quả theo checklist của bước đó
3. FIX: Nếu phát hiện lỗi, tự sửa ngay — không hỏi
4. BÁO CÁO: Tóm tắt đã làm gì, lỗi gì, sửa ra sao
5. GATE: Chỉ nói "✓ Bước X hoàn tất" khi pass hết checklist

─── QUY TẮC BẮT BUỘC ───
- Mỗi lần nhận việc, PHẢI chạy đủ 5 bước trên
- KHÔNG chuyển bước tiếp khi còn lỗi chưa fix
- KHÔNG hỏi "bạn có muốn tôi..." — cứ làm, rồi báo cáo
- Nếu lỗi không tự fix được: mô tả rõ vấn đề + đề xuất 2–3 cách giải quyết
- Dùng ✓ ✗ ⚠ trong báo cáo cho dễ đọc

─── CHECKLIST CHUNG (áp dụng mọi bước) ───
✓ Code chạy được, không có lỗi đỏ trong console
✓ Hiển thị đúng trên desktop (1280px) và mobile (375px)
✓ Không làm vỡ tính năng đã làm ở bước trước
✓ Tên file/component rõ ràng, nhất quán

─── MẪU BÁO CÁO SAU MỖI BƯỚC ───
✅ ĐÃ LÀM:
- \[liệt kê]

🔍 KẾT QUẢ VERIFY:
✓ \[pass]
✗ \[lỗi] → Đã fix: \[cách fix]

⚠ LƯU Ý CHO BƯỚC TIẾP:
- \[nếu có]

✓ BƯỚC \[X] HOÀN TẤT — sẵn sàng bước tiếp theo.

Xác nhận bạn đã hiểu SOP. Tôi sẽ paste Project Brief ngay sau.
```

\---

Section 2 — Project Brief (điền cho từng dự án)

```
PROJECT BRIEF

Tên dự án   : KanalCoin
Loại web    : Crypto News
Đối tượng   : Nhà đầu tư theo dõi thị trường, Người tham gia ICO / Airdrop / IDO,Doanh nghiệp / dự án crypto muốn quảng cáo
Tone \& style: Darkmode and lightmode dashboard webapp, futuristic style

Tính năng bắt buộc:
- \[tính năng 1]
- \[tính năng 2]
- \[tính năng 3]

Tính năng nice-to-have:
- \[tính năng phụ]

Deploy lên    : railway 

Hãy xác nhận đã hiểu brief và hỏi nếu còn thiếu thông tin trước khi bắt đầu.
```

\---

Section 3 — Checklist từng Phase

Phase 1 — Setup \& cấu trúc project

Lệnh giao việc:

```
Hãy khởi tạo project theo brief đã nhận. Sau khi xong, chạy verify theo SOP và báo cáo.
```

Gate để pass Phase 1:

\[ ] `localhost:3000` load được trang mặc định

\[ ] Cấu trúc thư mục đúng chuẩn framework đã chọn

\[ ] Git có commit đầu tiên với message rõ ràng

\[ ] File `.env.local` đã tạo, đã thêm vào `.gitignore`

\[ ] `README.md` có mô tả project và cách chạy local

Checklist verify (Agent tự chạy):

```
Verify Phase 1:
✓ Chạy npm run dev — không có lỗi?
✓ Mở localhost:3000 — trang load được?
✓ git status — không có file .env trong untracked?
✓ Cấu trúc thư mục khớp với brief?
✗ Nếu npm install lỗi → xóa node\_modules, chạy lại
```

\---

Phase 2 — Giao diện \& layout

Lệnh giao việc:

```
Làm \[tên trang, ví dụ: trang chủ] theo brief. Dùng mock data trước, chưa cần API thật.
Sau khi xong, verify trên 3 kích thước: 375px / 768px / 1280px rồi báo cáo.
```

Gate để pass Phase 2:

\[ ] Preview trên Chrome mobile emulator (375px) không vỡ layout

\[ ] Dark mode: không có chữ nào bị mất màu hoặc không đọc được

\[ ] Không có text nào tràn ra ngoài container

\[ ] Tất cả button/link có hover state

Checklist verify (Agent tự chạy):

```
Verify Phase 2:
✓ Thu nhỏ cửa sổ xuống 375px — layout có vỡ không?
✓ Bật dark mode — chữ có đọc được hết không?
✓ Kiểm tra overflow: có text nào bị cắt/tràn không?
✓ Hover từng button — có phản hồi visual không?
✗ Nếu layout vỡ mobile → fix mobile trước, desktop sau
```

\---

Phase 3 — Tính năng \& API

Lệnh giao việc:

```
Tích hợp \[tên tính năng] vào project. Đảm bảo có loading state và error state.
Sau khi xong, thử ngắt mạng để test error handling rồi báo cáo.
```

Gate để pass Phase 3:

\[ ] API trả về dữ liệu đúng, không có lỗi 4xx/5xx

\[ ] Loading state hiển thị trong khi fetch

\[ ] Khi mất mạng hoặc API lỗi: web không crash, hiện thông báo đẹp

\[ ] Dữ liệu số/ngày/tiền tệ format đúng

Checklist verify (Agent tự chạy):

```
Verify Phase 3:
✓ Mở DevTools Network tab — API call trả về 200?
✓ Throttle network xuống Slow 3G — loading state có hiện không?
✓ Block request API — trang có crash không?
✓ Số tiền/% có đúng format không? (không có 0.300000004)
✗ Nếu CORS lỗi → chuyển fetch sang server-side route
```

\---

Phase 4 — Deploy \& production

Lệnh giao việc:

```
Hướng dẫn tôi từng bước deploy lên Vercel. Sau khi deploy xong,
chạy Lighthouse audit và báo cáo điểm Performance, SEO, Accessibility.
```

Gate để pass Phase 5:

\[ ] `npm run build` thành công, không có lỗi

\[ ] Tất cả env vars đã thêm trên Railưay dashboard

\[ ] HTTPS hoạt động, không có mixed content warning

\[ ] Lighthouse Performance > 80

\[ ] Mở web trên điện thoại thật bằng 4G — load được

Checklist verify (Agent tự chạy):

```
Verify Phase 5:
✓ npm run build — không có lỗi TypeScript/ESLint?
✓ Vercel dashboard: build log có chữ "Ready" không?
✓ Mở URL production — có HTTPS không?
✓ Chạy Lighthouse (Chrome DevTools) — điểm > 80?
✗ Nếu build lỗi local nhưng CI pass → xóa .next, build lại
```

\---

Section 4 — Xử lý tình huống đặc biệt

Khi Agent gặp lỗi không tự fix được

```
Tôi gặp lỗi này: \[paste thông báo lỗi]

Hãy:
1. Phân tích nguyên nhân gốc (root cause)
2. Đề xuất 2–3 cách fix, nói rõ ưu/nhược mỗi cách
3. Tự chọn cách tốt nhất và thực hiện
4. Verify lại sau khi fix
5. Báo cáo kết quả

Không hỏi thêm — tự xử lý.
```

Khi bắt đầu phiên làm việc mới (tiếp tục dự án cũ)

```
Đây là tóm tắt trạng thái dự án hiện tại:
\[paste tóm tắt từ phiên trước]

Hãy tiếp tục từ điểm đã dừng. Nhắc lại SOP trước khi bắt đầu.
```

Cuối mỗi phiên làm việc — nhờ Agent tóm tắt

```
Phiên làm việc sắp kết thúc. Hãy viết tóm tắt trạng thái dự án gồm:
- Đã hoàn thành: \[liệt kê]
- Đang dở: \[liệt kê + đang ở bước nào]
- Bước tiếp theo cần làm: \[cụ thể]
- Lỗi đã gặp và cách fix: \[để tránh lặp lại]

Tôi sẽ dùng tóm tắt này để tiếp tục ở phiên sau.
```

\---

Section 5 — Thư viện lỗi thường gặp

> Mỗi khi gặp lỗi mới, thêm vào đây để tránh lặp lại ở dự án sau.

Lỗi	Nguyên nhân	Cách fix

`CORS error` khi call API	Gọi API từ client-side	Chuyển sang server-side route `/api/...`

Build lỗi TypeScript	Kiểu dữ liệu không khớp	Thêm type hoặc dùng `as Type`

Env var `undefined` trên Vercel	Chưa thêm vào Vercel dashboard	Vào Settings → Environment Variables

Sanity webhook không trigger	Secret key sai	Kiểm tra `.env` và Sanity webhook settings

Layout vỡ mobile	Dùng `px` cố định	Đổi sang `%`, `vw`, hoặc Tailwind responsive class

\[thêm lỗi mới vào đây]		

