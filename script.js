const scrollButton = document.querySelector(".scroll-top");
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else
        $('.navbar').removeClass("sticky");
    });
    // toggle menu navbar
    $('.menu-btn').click(function(){
        $('.navbar ul').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    });

    $('li').click(function() {
        $('.navbar ul').removeClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('.navbar ul li a').on('click', function(){
        $('.navbar ul li a').removeClass('active');
        $('.navbar ul li a').removeAttr('style');
        $(this).addClass('active');
    });
    $('.menu-btn').click(function(){
        $(this).data('clicked', true)
    });
    $(window).scroll(function(){
    if ($('.navbar').hasClass("sticky")) {
        $('.navbar ul li a').removeAttr('style');
        if($('.menu-btn').data('clicked')){
        $('.active').css('color','#f9004d')
        }else{
        $('.active').css('color','black')
        }
    }else{
        $('.active').css('color','#f9004d')
    }
    })
});
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
        ){
        document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
        } else {
        document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

var typed = new Typed('.typing', {
    strings: ['Backend Web Developer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

if(scrollButton){
    window.addEventListener('scroll', ()=> {
        if(pageYOffset > (window.innerHeight * 1.2)){
        scrollButton.style.display="flex";
        }else{
        scrollButton.style.display="none";
        }
    });
    scrollButton.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
}