window.onload = function(){
    let evenEle = document.querySelectorAll(".course>div:nth-child(even)");
    let oddEle = document.querySelectorAll(".course>div:nth-child(odd)");
    for (let e of evenEle){
        e.classList.add("animate__animated");
        e.classList.add("animate__backInLeft");
    }
    for (let e of oddEle){
        e.classList.add("animate__animated");
        e.classList.add("animate__backInRight");
    }
}