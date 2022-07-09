window.addEventListener("scroll", function(){
    if(this.window.scrollY > 150){
        this.document.querySelector("#navbar").style.opacity = 0.9
    } else{
        this.document.querySelector("#navbar").style.opacity = 1;
    }
});