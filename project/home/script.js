var slideIndex = 0;
function showSlides() {

    document.getElementById("slide1").style.display="none";
    document.getElementById("slide2").style.display="none";
    document.getElementById("slide3").style.display="none";
    slideIndex++;
    if(slideIndex>3){
        slideIndex=1;
    }
    if(slideIndex==1)
        {
             document.getElementById("slide1").style.display="block";
        }
     else if(slideIndex==2)
        {
             document.getElementById("slide2").style.display="block";
        }
    else
       {
          document.getElementById("slide3").style.display="block";  
       }
    
setTimeout(showSlides, 3000);    
}
showSlides();

var slideIndexx = 0;
function showSlidess() {

    document.getElementById("slide4").style.display="none";
    document.getElementById("slide5").style.display="none";
    document.getElementById("slide6").style.display="none";
    slideIndexx++;
    if(slideIndexx>3){
        slideIndexx=1;
    }
    if(slideIndexx==1)
        {
             document.getElementById("slide4").style.display="block";
        }
     else if(slideIndexx==2)
        {
             document.getElementById("slide5").style.display="block";
        }
    else
       {
          document.getElementById("slide6").style.display="block";  
       }   
}
showSlidess();

var slideIndexxx = 0;
function showSlidesss() {

    document.getElementById("slide7").style.display="none";
    document.getElementById("slide8").style.display="none";
    document.getElementById("slide9").style.display="none";
    slideIndexxx++;
    if(slideIndexxx>3){
        slideIndexxx=1;
    }
    if(slideIndexxx==1)
        {
             document.getElementById("slide7").style.display="block";
        }
     else if(slideIndexxx==2)
        {
             document.getElementById("slide8").style.display="block";
        }
    else
       {
          document.getElementById("slide9").style.display="block";  
       }   
}
showSlidesss()