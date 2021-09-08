
$(window).scroll(function() {
	var height = $(window).scrollTop();
	
		 
	if(height > 10){
	$('header').addClass('active');
	} else{
		
	$('header').removeClass('active');
	}
	
	});



   $(document).ready(function(){

      $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock')
      });
   });   

   $('.header__link').click(function () {
      $('.header__burger,.header__menu').removeClass('active');
      $('body').removeClass('lock')
   })



	// Прокрутка при клике
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
	  anchor.addEventListener('click', function (e) {
		 e.preventDefault()
		 
		 const blockID = anchor.getAttribute('href').substr(1)
		 
		 document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		 })
	  })
	}





new Swiper ('.process-slider',{

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

 slidesPerView:2.3,
 initialSlide:0,
 slidesPerGroupe:1,
 speed:1000,
 
 loop:true  ,
 effect:'slide',
 centeredSlides:false,
 
observer:true,
observerParents:true,
observerSlideCheldren:true,

autoplay: {
      
      
   //? пауза межДу прокруткой
   delay:400,

//? закончить на послеДнем слайДе
   stopOnLastSlide:false,


//? отключить после ручного переключения
   disableOnInteraction:true,



},



breakpoints:{
   




   320:{
   
      slidesPerView:1,
   
   
   },
   480:{
   
      slidesPerView:1.5,
      centeredSlides: false,
      spaceBetween:10,
   },

   768:{
   
      slidesPerView:2.5,
      centeredSlides: false,
      spaceBetween:30,
   },
   992:{
      centeredSlides:true,
      slidesPerView:3,
      spaceBetween:70,
   
   },
   
   
   },


})



new Swiper ('.team-slider',{

   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable:true,
   },


navigation: {
   nextEl: '.team-button-next',
   prevEl: '.team-button-prev',

 },
 slidesPerView:3,
 slidesPerGroupe:1,
 speed:1000,
 centeredSlides: true,
 loop:true,
 effect:'slide',

 spaceBetween:0,

 autoplay: {
      
      
   //? пауза межДу прокруткой
   delay:500,

//? закончить на послеДнем слайДе
   stopOnLastSlide:false,


//? отключить после ручного переключения
   disableOnInteraction:true,



},
  
autoplay:true,


 breakpoints:{
   
   320:{
   
      slidesPerView:1,
      effect:'flip',
      fadeEffect:{
   
         //?смена прозрачночности 
         crossFade:true,

      },
   
   },
   480:{
      spaceBetween:30,
      slidesPerView:2,
      centeredSlides: false,
      
   },

   768:{
      
      slidesPerView:2.5,
      centeredSlides: false,
      effect:'coverflow',
      coverflowEffect:{
   
         //? угол
         rotate:80,

         //? наложение
         stretch:90,

         //? тень
         slideShadows:true,

      },

   
   },
   992:{
      centeredSlides: true,
      slidesPerView:3,
      
   
   },
   
   
   },



   observer:true,
   observerParents:true,
   observerSlideCheldren:true,




})

