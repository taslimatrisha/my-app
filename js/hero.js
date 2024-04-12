//-------start----------change navbar color on scroll-----------------------
function changeBg(){
    var navbar =document.getElementById('navbar');
    var scrollValue =window.scrollY;
    if(scrollValue<5){
      navbar.style.backgroundImage = "";
    }
    else{
      navbar.style.backgroundImage = "linear-gradient(45deg, rgba(255, 116, 182, 1) 0%, rgba(254, 113, 188, 1) 5%, rgba(241, 105, 208, 1) 17%, rgba(217, 99, 236, 1) 32%, rgba(201, 99, 249, 1) 44%, rgba(180, 107, 255, 1) 58%, rgba(139, 132, 255, 1) 83%, rgba(129, 138, 255, 1) 93%, rgba(129, 138, 255, 1) 100%)";
    }
  }
  window.addEventListener('scroll',changeBg);
  //-------end----------change navbar color on scroll-----------------------
  
  
  
  
  
  