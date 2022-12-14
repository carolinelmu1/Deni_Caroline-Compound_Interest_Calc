const principalInput = document.getElementById("principal");
const interestInput = document.getElementById("interest");
const compoundedInput = document.getElementById("compounded");
const yearsInput = document.getElementById("years");
const earnedResult = document.getElementById("earned");
const totalResult = document.getElementById("total");

principalInput.addEventListener("input", computeCompoundInterest);
interestInput.addEventListener("input", computeCompoundInterest);
compoundedInput.addEventListener("input", computeCompoundInterest);
yearsInput.addEventListener("input", computeCompoundInterest);

function computeCompoundInterest() {
  const principal = Number(principalInput.value);
  const interest = Number(interestInput.value);
  const compounded = Number(compoundedInput.value);
  const years = Number(yearsInput.value);
  const total =
    principal * Math.pow(1 + interest / 100 / compounded, compounded * years);
  const earned = total - principal;
  earnedResult.textContent = earned.toFixed(2);
  totalResult.textContent = total.toFixed(2);
}
