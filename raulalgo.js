$(document).ready(function () {
  // Using scrollstory

  var counter = 0
  var role_steps = ["english","spanish","abreviate","abreviate"]

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
      if (counter == 0 || counter == 3) {
        $('#'+role_steps[counter]+' .far').toggleClass('away');
        $('#'+role_steps[counter]+' h1').toggleClass('relocate');

      }
      else{
        clicker(counter, role_steps)
      }
      counter++;
    })

    $('.thebutton').click(function(){
      $('.seventh').addClass("away");
    });
});

function clicker (current, class_array) {
  if(current < class_array.length) {
    $('#'+class_array[current-1]+', #'+class_array[current]).toggleClass("hide show");
  }
}
