// Lấy tất cả các phần tử có class "need-description"
const needDescriptions = document.querySelectorAll(".need-description");
// Lấy tất cả các phần tử có class "description"
const descriptions = document.querySelectorAll(".description");

// Duyệt qua từng phần tử "need-description" và "description" tương ứng
needDescriptions.forEach((needDescription, index) => {
  const description = descriptions[index]; // Lấy phần tử description tương ứng

  let hoverTimeout; // Biến để giữ timeout

  // Khi hover vào phần tử "need-description"
  needDescription.addEventListener("pointerenter", () => {
    description.classList.remove("hidden"); // Bỏ ẩn để phần tử xuất hiện trong DOM
    hoverTimeout = setTimeout(() => {
      // Đặt thời gian delay
      description.classList.remove("opacity-0", "translate-y-2"); // Kích hoạt hiệu ứng mờ dần và di chuyển
      description.classList.add("opacity-80", "translate-y-0"); // Hiển thị mượt mà
    }, 200); // Chờ 200ms trước khi kích hoạt hiệu ứng
  });

  // Khi rời khỏi phần tử "need-description"
  needDescription.addEventListener("pointerleave", () => {
    clearTimeout(hoverTimeout); // Hủy bỏ timeout nếu chuột rời khỏi trước khi đủ lâu

    description.classList.remove("opacity-80", "translate-y-0"); // Bắt đầu hiệu ứng mờ dần và di chuyển xuống
    description.classList.add("opacity-0", "translate-y-2");

    // Ẩn phần tử sau khi animation kết thúc
    setTimeout(() => {
      if (description.classList.contains("opacity-0")) {
        description.classList.add("hidden");
      }
    }, 500); // Thời gian khớp với `transition duration-300`
  });
});
