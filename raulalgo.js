$(document).ready(function () {
  // Using scrollstory
  $("#container").scrollStory({
        contentSelector: '.story',
        keyboard: true,
        autoActivateFirstItem: true
  });

  // For using waypoint.js

  /*var waypoint = $('#basic_waypoint').waypoint({
    handler: function(direction) {
      console.log("hola waypoints");
    },
    offset: '100%'
  })*/

});
