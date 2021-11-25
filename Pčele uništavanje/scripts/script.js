$(".dugme").on("click", function () {
  if ($(this).text() == "Ponovi!") $(this).text("Spasi pčelu!");
  else $(this).text("Ponovi!");
  $("#pcela").toggle(2000);
  $(".p2").toggle(3000);
});
