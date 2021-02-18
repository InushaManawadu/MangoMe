function changeBgColor(el) {
    document.body.style.backgroundColor = el.value;
}

function changeTxtColor(el) {
    var elements = document.getElementsByTagName("footer");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.color = el.value;
    }
    var links = document.links;
    for (i = 10; i < 16; i++) {
        if (links[i].href) {
            links[i].style.color = el.value;
        }
    }
    document.getElementById("terms").style.color = el.value;
    document.getElementById("policy").style.color = el.value;
    document.getElementById("language").style.color = el.value;
}

var slideIndex = 1;
displaySlides(slideIndex);

function switchSlides(n) {
    displaySlides(slideIndex += n);
}

function selectSlide(n) {
    displaySlides(slideIndex = n);
}

function displaySlides(n) {
    var slides = document.getElementsByClassName("slide");
    var previews = document.getElementsByClassName("preview");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}