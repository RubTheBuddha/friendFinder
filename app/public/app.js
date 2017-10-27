$(document).ready(function() {

  var newFriend = {};
  var friendsScore = [];
  var Difference = [];
  var index = [];
  var numQ = 10;

  $("#submit").on("click", function(event) {
    event.preventDefault();
    var validate = false;

    var scoresInt = [];
      for (i = 1; i <= numQ; i++) {
        var score = parseInt($("#q" + i).val());
        scoresInt.push(score);
    }

    for (i = 0; i < scoresInt.length; i++) {
           if (scoresInt[i] === 0) {
              validate = true;
      }
    }

    if ($("#name").val() !== "" && $("#photo").val() !== "" && validate === false) {
    
      var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: JSON.stringify(scoresInt)
      };

     
      $("#name").val("");
      $("#photo").val("");
      $(".chosen-select").val(0);

      var currentURL = window.location.origin;

      $.post(currentURL + "/api/new", newFriend)
        .done(function(data) {
          alert("Adding to Friend Database");
          $("#imagemodal").modal("show");
          $("#result_name").html("<h3> My Name is : " + data.name + "</h3>");
          $("#imagepreview").attr("src", data.photo);
        });

    } else {
      alert("Please complete the entire form");
    }
  });


}); //document ready