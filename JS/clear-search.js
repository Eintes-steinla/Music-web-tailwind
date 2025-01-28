const input = document.getElementById("input-1");
const clearBtn = document.getElementById("clear-x");

// Lắng nghe sự kiện focus vào ô input để hiển thị dấu X
input.addEventListener("focus", () => {
  clearBtn.classList.remove("hidden");
});

// Khi nhấn vào dấu X, xóa hết nội dung trong ô input
clearBtn.addEventListener("click", () => {
  input.value = "";
  clearBtn.classList.add("hidden"); // Ẩn dấu X sau khi xóa chữ
});

// Khi rời khỏi ô input (blur), dấu X sẽ ẩn đi nếu ô input rỗng
input.addEventListener("blur", () => {
  if (input.value.trim() === "") {
    clearBtn.classList.add("hidden");
  }
});
