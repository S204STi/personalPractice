//function to animate the menuLeft element

var main = function ()
{
  //clicking on the toggleOn element should reveal the menuLeft element
  $('.toggleOn').click(function()
  {
    $('.menuLeft').animate({
      left: "0px"
      }, 200);


  });
//clicking on the toggleOff element should hide the menuLeft element
  $('.toggleOff').click(function()
  {
    $('.menuLeft').animate({
      left: "-250px"
      }, 200);


  });
};

$(document).ready(main);
