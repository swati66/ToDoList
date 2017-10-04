$("ul").on('click', "li", function () {
	$(this).toggleClass("strike");
});

$("ul").on('click', "span", function (event) {
	$(this).parent().fadeOut("2000ms", function () {
		$(this).remove();


	})
	event.stopPropagation();
});

$("input").on('keypress', function (event) {
	if (event.which === 13) {
		var el = $(this).val();
		$(this).val("");

		$("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + el + "</li>").appendTo("ul");
	}
})

$("h1").on('click', ".fa", function () {
	$("input").toggle();
	$(this).toggleClass('fa-minus');

});

