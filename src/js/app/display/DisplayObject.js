(function (app) {

	var display = app.display = app.display||{};

	var DisplayObject = display.DisplayObject = app.core.EventDispatcher.extend({

		init: function (options) {
			this._super(options);
		},

		colideWith: function (o) {
			// TODO - do nothing
		}

	});


}(window.app=window.app||{}));
