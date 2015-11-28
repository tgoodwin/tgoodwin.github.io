function preloadImageAndFade(_jquerySelektor)
{
	var theThis = _jquerySelektor;
	var src =  theThis.attr("data-src");

	$("<img />").attr("src", src).load(function()
	{
		theThis.attr("src", src);
		theThis.attr("data-loaded", true);
		//theThis.removeAttr("data-src");
		theThis.fadeIn(400, function()
		{
			$(this).parent().removeClass("preloadBackground");
		});
	});
}

function lazyLoad()
{
	$(".lazyLoad").each(function()
	{
		var attr = $(this).attr('data-src');
		if (typeof attr !== 'undefined')
		{
			var docViewTop = $(window).scrollTop();
    		var docViewBottom = docViewTop + $(window).height();

	    	var elemTop = $(this).offset().top;
	    	var elemBottom = elemTop + $(this).height();

	    	if(elemTop <= docViewBottom && elemBottom >= docViewTop)
	    	{
	    		$(this).css("visibility", "visible");
				$(this).hide();
				$(this).removeClass("lazyLoad");
				preloadImageAndFade($(this));
	    	}
    	}
	});
}

$(window).scroll(function()
{
    lazyLoad();
});

$(window).resize(function()
{
	lazyLoad();
});

$(document).ready(function()
{
	$(".lazyLoad").css("visibility", "hidden");
});
