var modal = document.querySelector('.modal');
var slideIndex = 1;
showSlides(slideIndex);



/* window scroll*/

document.addEventListener(DomContentLoader, () => ) {


}


document.querySelector('.prev').addEventListener("click", function () {
    showSlides(slideIndex += 1);
    console.log('prev')

});


document.querySelector('.next').addEventListener("click", () => {
    showSlides(slideIndex += -1);
    console.log('next')
});


document.querySelector('.').addEventListener('click', () => {
    document.getElementById("myModal").style.display = "block";

})


document.querySelector('.close').addEventListener('click', () => {
    document.getElementById("myModal").style.display = "none";
})

document.querySelector('li').addEventListener("click", () => {
    modal.style.display = 'block'
    console.log('yes')

});




function plusSlides() {
    showSlides(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    //    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("dot");
//  if (n > slides.length) {slideIndex = 1}    
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";  
//  }
//  for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";  
//  dots[slideIndex-1].className += " active";
//}
//
