// scrollbar 
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight -
window.innerHeight;
window.onscroll = function(){
let progressHeight = (window.pageYOffset / totalHeight *100);
progress.style.height = progressHeight + "%"
};

//preloader
var loader = document.getElementById("preloader");
window.addEventListener("load" , function(){
    loader.style.display = "none"
});
