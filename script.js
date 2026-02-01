const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
document.getElementById("yes").addEventListener("click", () => {
  alert("You just made me the happiest person 😍");

});
