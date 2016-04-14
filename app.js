var main = function()
{
  $('.toggleOn').click(function()
  {
    $('.menuLeft').animate(
    {
      left: "0px"
      }, 200);
    $('.topBar').animate(
    {
      height: "0px";
      }, 200);
  });

  $('toggleOff').click(function()
  {
    $('menuLeft').animate(
    {
      left: "-250px"
      }, 200);
    $('.topBar').animate(
    {
      height: "78px";
      }, 200);
  });
};

$(document).ready(main);
