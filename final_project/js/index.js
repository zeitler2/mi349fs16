
	$('#oz-header').load('components/header.html');
	$('#oz-menu').load('components/menu.html');
	$('#oz-menu-bottom').load('components/menu.html');
	$('#oz-featured-tiles').load('featured_tiles.html');
	$('#oz-featured-reviews').load('featured_tiles.html');
	$('#oz-featured-shares').load('featured_tiles.html');

	function filter_articles(target, type) {
		target.find('article').hide();
		target.find(type).show();
	}
	
$(document).ready( function() {
	filter_articles($('#oz-featured-reviews'), '.tag-review');
	filter_articles($('#oz-featured-shares'), '.tag-share');
	$('.hidden').closest('article').on('click', function() {
		$(this).find('.hidden').slideToggle();
		$(this).closest('article').parent('div').toggleClass('row-container');
	});
});