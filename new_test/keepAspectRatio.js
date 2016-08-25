function keepAspectRatio()
{
	$(".aspectRatio").each(function()
	{
		var attr = $(this).attr('data-aspectratio');
		if (typeof attr !== 'undefined')
		{
			var width = $(this).width();
			var height = width * parseFloat(attr);
			height = Math.floor(height);

			$(this).css("height", height + "px");
    	}
	});
}

$(window).resize(function()
{
	keepAspectRatio();
});

$(document).ready(function()
{
	$(".lazyLoad").css("visibility", "hidden");
});
