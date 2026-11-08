
$(document).ready(function() {

  $("#aboutBtn").click(function() {
    $("#moreAbout").toggle();
  });

  $("#colorBtn").click(function() {
    $("#skills h2").css("color", "#7472ee");
  });
  
  $("#experienceBtn").click(function() {
    $("#collegeExperience").toggle();
  });

});
