$(function(){
  $("a").click(function(event){
      if(this.hash !=="") {
          event.preventDefault();

          var viajes = this.hash;
          $("html,body").animate({
              scrollTop: $(viajes).offset().top
          }, 800, function(){
              window.location.hash=viajes;
          });
      }
  });
});;