document.addEventListener("DOMContentLoaded", () => {
  const tagline = document.querySelector(".tagline");
  const text = tagline.innerHTML;
  tagline.innerHTML = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      tagline.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }

  typeWriter();
});
