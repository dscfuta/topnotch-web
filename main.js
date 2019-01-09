/**
 * This file takes details from the form page, when the sumbit button is pressed
 * it get the details from the input field and send this files to 
 * the database
 */

var slide_index = 1;  
displaySlides(slide_index);  

function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
    displaySlides(slide_index = n); 

}  
function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("myslides");  
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
}  
    slides[slide_index - 1].style.display = "block";        
} 






