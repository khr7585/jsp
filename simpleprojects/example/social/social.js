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
function hemanthprofile(){
    window.location.href="hemanthpro.html";
}
function sivaprofile(){
    window.location.href="sivapro.html";
}
function jadalprofile(){
    window.location.href="jadalpro.html";
}
function webpage(){
    window.location.href="social.html";
}
//profile js
function back() {
        window.location.href = "social.html";
      }
      const button = document.getElementById("following");
      button.addEventListener("click", function () {
        if (button.innerText === "Follow") {
          button.innerText = "Following";
        } else {
          button.innerText = "Follow";
        }
      });
