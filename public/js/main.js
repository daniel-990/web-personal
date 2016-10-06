$(document).ready(function(){
    init();
    Scroll();
    $("body").jpreLoader();
});

function init(){
    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true 
    });
    $('.collapsible').collapsible();
} 

function Scroll(){
    $("#menu-lateral li a").on("click",function(){
    var seccion = $(this).attr("data-menu");
    $("body").animate({ scrollTop: $("#item-"+seccion).offset().top},1000);
  });

    $("#scroll").on('click', function(){
    	$("body").animate({ scrollTop: $("#item-1").offset().top},1000);
    });
}
