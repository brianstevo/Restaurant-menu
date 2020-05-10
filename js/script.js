$(document).ready(function(){
//    togglerbutton
    $('.navbar-toggler').click(function(){
       $('.navbar-toggler').toggleClass('change');
    })
//    stickynav
//    $(window).scroll(function(){
//       let positon = $(this).scrollTop();
//        if(positon>=728){
//            $('.navbar').addClass('navbar-background');
//            $('.navbar').addClass('fixed-top');
//        }
//        else{
//              $('.navbar').removeClass('navbar-background');
//            $('.navbar').removeClass('fixed-top');
//       }
//    })
    
//    smooth scroll
    $('.nav-item a, .header-link, #back-to-top').click(function(link){
        link.preventDefault();
        let target=$(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top - 25
        },1000);
        
    })
//    back to top
        $(window).scroll(function(){
       let positon = $(this).scrollTop();
        console.log(positon);
        if(positon>=728){
            $('#back-to-top').addClass('scrollTop');
        }
        else{
          $('#back-to-top').removeClass('scrollTop');
       }
    })
    
    
    
    
    
    
    
    
    
    
    
    
   $("#header,.info").ripples({
  dropRadius: 20,
  perturbance:0,
})
    $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
        gallery:{
            enabled:true
        }
  // other options
})
});