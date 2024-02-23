const questions = [
  {
    _id: 1,
    title: 'Thắc mắc điểm số',
    userFullName: 'Trương Thiên Ý',
    createdAt: '24-01-2024 08:08:54',
    views: 6,
    content:
      'Em vẫn chưa thấy điểm thi Lý 1 hk1 của mình trên bảng điểm online. Không biết là do vẫn chưa chấm xong hoặc nếu xong r em nên liên hệ ở đâu để biết điểm ạ. Em cảm ơn.',
    answer: `Thân chào Ý!
    Điểm thi Lý 1, em có thể liên hệ bộ môn vật lý thuộc khoa khoa học ứng dụng hoặc văn phòng Khoa khoa học ứng dụng ở tầng A1-902 nhé em
    Các môn khác em có thể liên hệ trực tiếp Khoa quản môn học để được biết nhé.
    Trân trọng!`,
    answerFullName: 'Nguyễn Thanh Tân',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
  {
    _id: 2,
    title: 'Luật cảnh báo học vụ quá 24 chỉ',
    userFullName: 'Nguyễn Xuân Thịnh',
    createdAt: '20-01-2024 10:04:11',
    views: 23,
    content:
      'Luật cảnh cáo học vụ nếu tồn đọng từ đầu khóa quá 24 chỉ được tính theo tín chỉ hay tính theo môn nợ .tức là nếu em học 1 môn mà rớt 2 lần thì thì tính là 3 hay là 6',
    answer:
      'Chỉ tính số tín chỉ của môn rớt, cho dù em rớt mấy lần thì cũng chỉ tính số tín chỉ của môn đó thôi nha em',
    answerFullName: 'Phan Vũ Thanh Thảo',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
  {
    _id: 3,
    title: 'KHUẤT MẮC VỀ ĐIỂM THI ANH VĂN ĐẦU RA',
    userFullName: 'Diệp Gia Hữu',
    createdAt: '19-01-2024 10:25:44',
    views: 35,
    content: `Chào quý Thầy / Cô,
    Chuyện là em vừa thi avdr vào 14/01/2024 và nhận điểm ở trang online vào chiều 19/01/2024.
    Tuy nhiên, điểm số trên trang online và tổng số câu đúng ký nhận sau khi thi không khớp với nhau (nguồn thang điểm ở link bên dưới)
    Thì cho em hỏi, em có thể liên hệ thầy / cô nào để nhận được sử hỗ trợ kiểm tra ạ?
    Mong quý thầy / cô giải đáp giúp em.
    Em xin chân thành cảm ơn!
    Nguồn thang điêm: https://toplistviet.org/thang-diem-va-cach-tinh-diem-bai-thi-toeic-anh-van-dau-ra-spkt-2021.html`,
    answer: `Chào em,
    Mỗi part mỗi câu có số điểm khác nhau chứ không phải đồng đều và kết quả này chấm online từ bên đối tác. Nếu số câu của em không đúng thì mới kiểm tra lại, em dùng mail sinh viên liên hệ hanhptt@hcmute.edu.vn để kiểm tra số câu đúng của em.
    Thân.`,
    answerFullName: 'Phạm Thị Thúy Hạnh',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
  {
    _id: 4,
    title: 'diepgiahuu99@gmail.com',
    userFullName: 'Diệp Gia Hữu',
    createdAt: '19-01-2024 05:19:54',
    views: 20,
    content: `Dạ chào Thầy / Cô,
    Chuyện là em vừa thi anh văn đầu ra ở trường và nhận lại kết quả không tương xứng với một số mốc điểm mà em thao khảo từ nhiều nguồn so với số câu đúng mà em đã ký nhận sau khi thi
    Thì không biết thang điểm ở Trường là như nào ạ? 
    Với có cách nào để em có thể phúc khảo hay xem số câu đúng / điểm từng part không ạ?
    Rất mong được quý thầy / cô giải đáp.
    Em chân thành cảm ơn!`,
    answer: `Chào em,
    Mỗi part mỗi câu có số điểm khác nhau chứ không phải đồng đều và kết quả này chấm online từ bên đối tác. Nếu số câu của em không đúng thì mới kiểm tra lại, em dùng mail sinh viên liên hệ hanhptt@hcmute.edu.vn để kiểm tra số câu đúng của em.
    Thân`,
    answerFullName: 'Phạm Thị Thúy Hạnh',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
  {
    _id: 5,
    title: 'Quy đổi điểm AV và AVDR',
    userFullName: 'Nguyễn Văn Thọ',
    createdAt: '18-01-2024 10:43:58',
    views: 62,
    content: `Em kính chào qúy thầy cô ạ !
    Em có làm đơn chuyển điểm AV45 và miễn AVDR đợt 1 của học kì này, dạ thầy/cô cho em hỏi về thời hạn cuối đơn được duyệt là khi nào và em có thể kiểm tra bằng cách nào ạ. Và nếu được duyệt thì em có kịp xin xét TN vào đợt tháng 3 không ạ.
    Em xin cảm ơn ạ!`,
    answer: `  Em liên hệ cô Quỳnh quynhbt@hcmute.edu.vn nhé để biết khi nào có hậu kiểm, có hậu kiểm mới nhập chuyển điểm và nhập miễn avdr
    Thân`,
    answerFullName: 'Phan Vũ Thanh Thảo',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
  {
    _id: 6,
    title: 'Cảnh cáo học vụ',
    userFullName: 'Nguyễn Xuân Thịnh',
    createdAt: '18-01-2024 12:55:18',
    views: 40,
    content:
      'Em bị rớt 1 môn 2 lần thì môn đó được tính là 4 chỉ hay 8 chỉ tại trong cảnh cáo học vụ có ghi nếu nợ quá 24 chỉ sẽ bị cảnh cáo',
    answer: 'vẫn tính số tín chỉ của môn đó là 4 nha em. em chỉ rớt 1 môn mà',
    answerFullName: 'Phan Vũ Thanh Thảo',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
  {
    _id: 7,
    title: 'bảo lưu',
    userFullName: 'Phan Hoài An',
    createdAt: '17-01-2024 04:10:27',
    views: 15,
    content:
      'dạ, trường hợp mà bảo lưu hết 2 hk rồi mà muốn bảo lưu tiếp thì liên hệ ai hay làm ntn ạ?',
    answer: 'Em liên hệ phòng Tuyển sinh và CTSV nha',
    answerFullName: 'Phan Vũ Thanh Thảo',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
  {
    _id: 8,
    title: 'Thắc mắc về vấn đề chuyển ngành khoa này sang ngành khác khoa khác',
    userFullName: 'Du Quốc Bảo',
    createdAt: '17-01-2024 01:45:12',
    views: 24,
    content: `Hiện tại em đang là K22 ngành ĐT-VT, em đang muốn chuyển ngành vì lí do tài chính gia đình khó khăn cùng với ngành không phù hợp với em.
    Em đang muốn chuyển sang ngành Ngôn ngữ anh của khoa ngoại ngữ
    Theo điều kiện của biên bản họp thì em thoả điều kiện 1 với số điểm xét tốt nghiệp THPTQG cao hơn điểm chuẩn đầu vào ngành em muốn đổi. 
    Vậy theo Thầy/Cô, hiện giờ em có thể làm đơn để xin chuyển ngành được không ạ?
    
    Em mong Thầy/Cô có thể giúp đỡ em chuyển ngành cũng như giải đáp thắc mắc ạ.
    Em xin cảm ơn.`,
    answer: 'Đơn xin chuyển ngành, em liên hệ phòng Tuyển sinh và CTSV nhé',
    answerFullName: 'Phan Vũ Thanh Thảo',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
  {
    _id: 9,
    title:
      'Về việc hạ bậc loại tốt nghiệp khi học lại quá 5% chương trình đào tạo',
    userFullName: 'Nguyễn Thái Đạt',
    createdAt: '17-01-2024 12:32:51',
    views: 24,
    content: `Xin chào ban tư vấn
    Theo quy định thì khi tốt nghiệp loại xuất sắc và loại giỏi sẽ bị hạ 1 bậc khi phải học lại quá 5% tổng chương trình đào tạo. Vậy với chương trình đào tạo kĩ sư 150 tín chỉ thì 5% là 7,5 tín chỉ. Vậy cho em hỏi đã học lại 7 tín chỉ có thuộc diện bị hạ 1 bậc không ạ. Em xin cảm ơn.`,
    answer: `Chào em. em gửi cụ thể thông tin sinh viên để cô kiểm tra né. hoặc e gửi qua gmail cô Quỳnh quynhbt@hcmute.edu.vn nha em.
    thân!`,
    answerFullName: 'Bùi Thị Quỳnh',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
  {
    _id: 10,
    title: 'Cảnh cáo học vụ',
    userFullName: 'Nguyễn Huy Nam',
    createdAt: '17-01-2024 08:42:00',
    views: 53,
    content:
      'Em là sinh viên khóa k22 do bận việc gia đình nên học kì này em đăng kí số lượng tín chỉ học phần ít hơn 10 tín chỉ thì em có bị cảnh báo học vụ không ạ',
    answer:
      'Xét Cảnh báo học vụ không ảnh hưởng bởi số tín chỉ tối thiểu nhé em',
    answerFullName: 'Phan Vũ Thanh Thảo',
    userAvatar: null,
    answerAvatar: null,
    departmentName: 'Khoa Công Nghệ Thông Tin',
    fieldName: 'Tư vấn chứng chỉ',
  },
];

export default questions;
