function changePwdStatus(pwd, confirmPwd) {
  if (pwd.value === confirmPwd.value) {
    pwd.parentElement.classList.remove("error");
    confirmPwd.parentElement.classList.remove("error");
    console.log("removing");
    console.log(pwd.parentElement.classList, confirmPwd.parentElement.classList);
  } else {
    pwd.parentElement.classList.add("error");
    confirmPwd.parentElement.classList.add("error");
    console.log("adding");
    console.log(pwd.parentElement.classList, confirmPwd.parentElement.classList);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const pwds = document.querySelectorAll("input[type=\"password\"]");
  const pwd = pwds[0];
  const confirmPwd = pwds[1];
  // console.log(pwd, confirmPwd);
  // console.log(pwd.parentElement, confirmPwd.parentElement);
  pwd.addEventListener("keyup", () => {
    changePwdStatus(pwd, confirmPwd);
  })

  confirmPwd.addEventListener("keyup", () => {
    changePwdStatus(pwd, confirmPwd);
  })
})