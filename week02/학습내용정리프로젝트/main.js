const submitBtn = document.getElementById("submitBtn");
const phoneInput = document.getElementById("phoneInput");
const result = document.getElementById("result");
const fortuneTitle = document.getElementById("fortuneTitle");
const fortuneText = document.getElementById("fortuneText");

submitBtn.addEventListener("click", () => {
  const phone = phoneInput.value;
  const fortune = getPhoneFortune(phone);

  fortuneTitle.textContent = fortune.title;
  fortuneText.textContent = fortune.text;

  result.style.display = "block";
});
