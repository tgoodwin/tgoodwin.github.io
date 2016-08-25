$(document).ready(function()
{
	$(".galleryHolder").children().children("img").hide();
	$(".galleryHolder").each(function()
	{
		var child = $(this).children(":first");
		child.addClass("activeChild");
		child.addClass("preloadBackground");
		preloadImageAndFade(child.children("img"));
	});

	$(".galleryHolder").click(function()
	{
		if($(this).children().length > 1)
		{
			var activeChild = $(this).children(".activeChild");
			var next = activeChild.next("figure");
			if(next.length == 0)
			{
				next = activeChild.parent().children(":first");
			}
			activeChild.removeClass("activeChild");
			next.addClass("activeChild");
			next.children("img").hide();
			if(next.children("img").attr("data-loaded"))
			{
				next.children("img").fadeIn(400);
			}
			else
			{
				next.addClass("preloadBackground");
				preloadImageAndFade(next.children("img"));
			}
			activeChild.children("img").fadeOut(200, function()
			{
			});
		}
	});
});
