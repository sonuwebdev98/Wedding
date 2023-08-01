// Humburger menu 
$(function () {

    
    $(".hamburger").click(function () {

      $("ul").toggleClass("active");

    });


    
    
  });

// Humburger menu 




//...................Sticky Navbar starts ...............//
$(function(){

  $(window).on('scroll', function(){

    if ($(window).scrollTop ()){

        $('.navigation').addClass('nav-hide-show');
    }


    else{
        $('.navigation').removeClass('nav-hide-show');
    }

})


});




//...................Sticky Navbar Ends ...............//

// OwlCarousel-1 starts here 

$('.owl-carousel-1').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

// OwlCarousel-1 ends here 


// owlCarousel starts 2
$('.owl-carousel-2').owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayTimedelay:10000,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:2
      },

      468:{
          items:2
      },


      768:{
          items:3
      },
      992:{
          items:4
      },
      1200:{
        items:5
    }


  }
})

// owlCarousel 2 ends