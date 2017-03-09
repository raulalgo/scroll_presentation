$(document).ready(function () {
  // Using scrollstory

  var counter = 0
  var role_steps = ["english","spanish","abreviate","siglas"]

  $("#container").scrollStory({
        contentSelector: '.story'
  });

  $('#container').scrollStory({
    contentSelector: '#red_box',
    itementerviewport: function(ev, item) {
      console.log("hola scrolly");
    }
  })

  /*$('#lead').click(function(){
    $('#lead').toggleClass("anticipation rest").queue(function(){
      $('#lead').toggleClass("anticipation rest")
    });*/
    //$('#far').toggleClass("away");
    /*$('#lead').mousedown(function(){
      $('#lead').addClass("anticipation");
      $('#lead').removeClass("rest");
    })*/
    /*$('#lead').mouseup(function(){
      $('#lead').removeClass("anticipation");
      $('#lead').addClass("rest");
    })*/

    $('#role').click(function(){
      console.log(counter);
      if (counter == 0) {
        $('#lead').toggleClass('away');
        $('#english h1').toggleClass('relocate');

      }
      else{
        $('#'+role_steps[counter-1]+', #' + role_steps[counter]).toggleClass("hide show")
      }
      counter++;
    })
});
