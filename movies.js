$("#submit").on("click", function (e) {
  e.preventDefault();
  if ($("#title").val().length < 2) {
    return alert("title must be at least two characters long");
  }
  if (Number($("#rating").val()) < 0 || Number($("#rating").val()) > 10) {
    return alert("rating must be a number between 0 and 10");
  }
  $("#display").append(
    $("<p>", {
      text: `Title: ${$("#title").val()} Rating: ${$("#rating").val()}`,
      style: "display: inline-block",
    }),
    $("<button id='delete'>delete</button>"),
    $("<br>")
  );
});

$("#display").on("click", "#delete", function () {
  $(this).next().remove();
  $(this).prev().remove();
  $(this).remove();
});
