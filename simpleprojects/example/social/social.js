let likebtn=document.querySelectorAll("like");
let likecount=document.querySelectorAll("btncount");
likebtn.forEach(likebtn =>{
let count=0;
likebtn.addEventListener("click",function(){
    likebtn.classList.toggle("liked");
    if(likebtn.classList.contains("liked")){
        likebtn.classList.remove("bi-heart");
        likebtn.classList.add("bi-heart-fill");
        count++;
    }else{
        likebtn.classList.remove("bi-heart-fill");
        likebtn.classList.add("bi-heart");
        count--;
    }
    likecount.textContent=count;
});
});
