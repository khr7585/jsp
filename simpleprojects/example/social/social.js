let likebtn=document.getElementById("like");
let likecount=document.getElementById("btncount");
let count=0;
likebtn.addEventListener("click",function(){
    count++;
    likecount.textContent=count;
    
});