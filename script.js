$(document).ready(function(){
	$("#movie-search-form").on("submit", function(event){
		event.preventDefault();
		var title = encodeURIComponent($("#movie-title").val());

		$.ajax ({
			type: "GET",
			url: "http://omdbapi.com?t=" + title,
			success: function(movies) {
				if(movies.Response === "False"){
					alert("That movie cannot be found");
				} else {
				HANDLE.renderTemplate({
					templateSource: "#movie-card-template",
					data: movies,
					where: "#movie-card-container",
					clearOriginal: true
				});

				$("#search-input-box").hide();

				$("#reset-search-button").show();
				}
			},
			error: function(){
				alert("error getting movie");
			}
		});
	});
});

// $(document).ready(function(){
//   $("#movie-search-form").on("submit", function(event){
//     event.preventDefault();
//     var title = encodeURIComponent($("#movie-title").val());

//     $.ajax({
//       type: "GET",
//       url: "http://www.omdbapi.com?t=" + title,
//       success: function(movies){
//         if(movies.Response === "False"){
//           alert("That movie cannot be found");
//         } else {
//           HANDLE.renderTemplate({
//             templateSource: "#movie-card-template",
//             data: movies,
//             where: "#movie-card-container",
//             clearOriginal: true
//           });

//           $("#search-input-box").hide();

//           $("#reset-search-button").show();
//         }
//       },
//       error: function(){
//         alert("error getting movie data");
//       }
//     });
//   });
// });