$(function () {
  $("#movie-form").on("submit", function (evt) {
    evt.preventDefault();

    let movieTitle = $("#movie-title").val();
    let rating = $("#movie-rating").val();

    $("#movie-list").append(
      "<tr><td>" +
        movieTitle +
        "</td><td>" +
        rating +
        '</td><td><input type="checkbox"/></td><td><button id="remove">X</button></td></tr>'
    );

    $("#movie-form").trigger("reset");
  });

  $("tbody").on("click", "#remove", function (evt) {
    $(evt.target).closest("tr").remove();
  });
});
