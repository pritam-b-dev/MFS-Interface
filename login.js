const inputUserNumber = document.getElementById("inputUserNumber");
const pin = document.getElementById("pin");
const continueBtn = document.getElementById("continueBtn");

const users = [
  { userNum: "012345678", userpPw: "1234" },
  { userNum: "010101010", userpPw: "1234" },
];

continueBtn.addEventListener("click", () => {
  const user = users.find((u) => {
    return u.userNum === inputUserNumber.value && u.userpPw === pin.value;
  });
  if (user) {
    window.location.assign("./home.html");
  } else {
    alert("wrong otp");
  }
  inputUserNumber.value = "";
  pin.value = "";
});
