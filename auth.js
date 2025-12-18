// lấy phần tử
const authPopup = document.getElementById("authPopup");
const closeAuth = document.getElementById("closeAuth");
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const authModal = document.querySelector(".auth-modal");

// mở popup (fade-in)
document.querySelectorAll(".open-auth-btn").forEach(btn => {
    btn.onclick = () => {
        authPopup.style.display = "flex";
        authModal.classList.remove("fade-out");
        authModal.classList.add("fade-in");
    };
});

// đóng popup (fade-out)
function closePopup() {
    authModal.classList.remove("fade-in");
    authModal.classList.add("fade-out");

    setTimeout(() => {
        authPopup.style.display = "none";
    }, 250); // thời gian trùng với CSS fade-out
}

// nhấn nút × để đóng
closeAuth.onclick = () => {
    closePopup();
};

// chuyển tab Đăng nhập
loginTab.onclick = () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
};

// chuyển tab Đăng ký
registerTab.onclick = () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
};

// click ra ngoài modal để đóng
authPopup.onclick = (e) => {
    if (e.target === authPopup) {
        closePopup();
    }
};


// =========================
// AGE VERIFY (anti-flash)
// =========================

// lấy phần tử
const ageVerify = document.getElementById("ageVerify");
const btnUnder = document.getElementById("btnUnder");
const btnOver = document.getElementById("btnOver");
const ageMessage = document.getElementById("ageMessage");

// nếu đã xác nhận đủ tuổi → giữ ẩn popup
if (localStorage.getItem("ageVerified") === "yes") {
    ageVerify.classList.remove("show");
} else {
    ageVerify.classList.add("show");
}

btnOver.onclick = () => {
    localStorage.setItem("ageVerified", "yes");
    ageVerify.classList.remove("show");
};

btnUnder.onclick = () => {
    ageMessage.textContent = "Bạn chưa đủ 18 tuổi để truy cập website. Vui lòng quay lại sau!";
    ageMessage.style.display = "block";
};



const nav = document.querySelector(".taylor-nav");
const topbarHeight = document.querySelector(".top-bar").offsetHeight;

window.addEventListener("scroll", () => {
    if (window.scrollY > topbarHeight) {
        nav.classList.add("nav-fixed");
    } else {
        nav.classList.remove("nav-fixed");
    }
});

