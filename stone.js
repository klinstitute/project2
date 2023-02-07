$(document).ready(function() {
  var slides = $(".slides img");
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 5000);

  function nextSlide() {
    slides.eq(currentSlide).fadeOut(500);
    currentSlide = (currentSlide + 1) % slides.length;
    slides.eq(currentSlide).fadeIn(500);
  }

  function prevSlide() {
    slides.eq(currentSlide).fadeOut(500);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides.eq(currentSlide).fadeIn(500);
  }

  $(".controls .prev").click(function() {
    clearInterval(slideInterval);
    prevSlide();
  });

  $(".controls .next").click(function() {
    clearInterval(slideInterval);
    nextSlide();
  });
});