'use strict';

var FAN = FAN || {};

FAN.films = (function($) {
	var el, $el, template;

	function _initialize(opts) {
		console.log('_initialize ', this);

		el = opts.el;
		$el = $(el);
		template = opts.template;

		_getFilms();
		_attachFilmsEvents();
	}

	function _showFilms(data) {
		$el.append(template(data));
	}

	function _getFilms() {
		console.log('_getFilms');

		$.ajax({
			url: 'http://localhost:9000/scripts/popular_movies.json',
			type: 'GET',
			context: el,
			data: { },
			success: function(data) {
				console.log(data);
				_showFilms(data);
			}
		});
	}

	function _attachFilmsEvents() {
		$el.next('[data-action="show-more"]').on('click', function(e) {
			e.preventDefault();
			_getFilms();
		});
	}

	return {
		init: _initialize
	};
}(jQuery));

$(function(){
	FAN.films.init({
		el: '.popular-films',
		template: Handlebars.templates['film']
	});
});