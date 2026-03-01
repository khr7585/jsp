const likebtn= document.querySelectorAll(".bi");
likebtn.forEach(heart => {
  heart.addEventListener("click", function () {
    const countSpan = this.nextElementSibling;
    let count = parseInt(countSpan.textContent);
    this.classList.toggle("liked");
    if (this.classList.contains("liked")) {
      this.classList.remove("bi-heart");
      this.classList.add("bi-heart-fill");
      count++;
    } else {
      this.classList.remove("bi-heart-fill");
      this.classList.add("bi-heart");
      count--;
    }
    countSpan.textContent = count;
  });
});
