const dice = document.querySelector(".dice");

const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });
  const advices = await response.json();
  const adviceText = document.querySelector(".advice-text");
  adviceText.textContent = advices.slip.advice;
  const adviceNumber = document.querySelector(".advice-number");
  adviceNumber.textContent = `ADVICE #${advices.slip.id}`;
};

fetchAdvice();

dice.addEventListener("click", function () {
  fetchAdvice();
});
