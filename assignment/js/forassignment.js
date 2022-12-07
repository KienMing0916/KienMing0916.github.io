function openNav() {
    document.getElementById("overlay").style.width = "100%";
}

function closeNav() {
    document.getElementById("overlay").style.width = "0%";
}

let slideIndex = [1, 1, 1, 1, 1, 1];
let slideId = ["slidecontainer1", "slidecontainer2", "slidecontainer3", "slidecontainer4", "slidecontainer5", "slidecontainer6"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    x[slideIndex[no]-1].style.display = "block";  
}