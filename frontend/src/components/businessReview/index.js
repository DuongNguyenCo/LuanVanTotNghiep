import Star from "../star";

function Review() {
  return (
    <div className="border-b py-2">
      <div className="text-xl">Văn hóa thang máy tệ, còn lại thì tạm ổn</div>
      <Star stars="95" />
      <div className="text-justify">
        Được cấp cả laptop và PC để làm việc. Laptop để họp hoặc remote vào PC.
        Lương ổn định. NV được hỗ trợ vay mua nhà từ 4-6%/năm tùy KPI cuối năm.
        OT được trả lương. Đồng nghiệp sếp quản lý rất oke Trả lương OT đầy đủ.
        nhưng nghe nói sắp tới sẽ k còn...
      </div>
    </div>
  );
}

export default Review;
