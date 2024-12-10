const array = [1, 23, 4];

$(() => {
  $("#title").css("color", "red");

  $("#btnHide").on("click", () => {
    $("img").hide(5000);
  });

  $("#btnShow").on("click", () => {
    $("#title").show();
  });

  $("#btnToggle").on("click", () => {
    $("img").toggle(5000);
  });

  $("#btnStop").on("click", () => {
    $("img").stop();
  });

  $(".list").on("click", (event) => {
    $(event.target).closest("li").toggleClass("highlight");
  });

  $("#btnSlide").on("click", () => {
    $("img").slideUp(2000);
  });

  $("#btnFade").on("click", () => {
    $("img").fadeOut(3000);
  });

  $("#btnAnimate").on("click", () => {
    $("img").animate({ opacity: 0.5, width: "300px" }, 2000);
  });

  $("#btnChangeSub").on("click", () => {
    $("#subTitle")
      .addClass("highlight")
      .text("This is the SubTitle")
      .fadeOut(1000);
  });
  $.each(array, (num) => {
    console.log(num);
  });

  const title = $("#subTitle").text();
  console.log(title);
});