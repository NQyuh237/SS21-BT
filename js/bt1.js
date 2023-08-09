

function checkEmailExist(email) {
    let registeredEmails = ["abc@gmail.com"];
    return registeredEmails.includes(email);
}

function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (email == "") {
        alert("Email không được bỏ trống");
        return;
    }

    if (email < 2) {
        alert("Email không hợp lệ");
        return;
    }

    if (checkEmailExist(email)) {
        alert("Email đã tồn tại");
        return;
    }

    if (password == "") {
        alert("Mật khẩu không được bỏ trống");
        return;
    }

    if (confirmPassword == "") {
        alert("Xác nhận mật khẩu không được bỏ trống");
        return;
    }

    if (password != confirmPassword) {
        alert("Xác nhận mật khẩu không trùng khớp");
        return;
    }

    localStorage.setItem(email, password)

    alert("Đăng ký tài khoản thành công");
}