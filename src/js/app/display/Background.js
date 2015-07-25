(function (app) {

	var display = app.display = app.display||{};

	var Background = display.Background = app.display.DisplayObject.extend({

		init: function (options) {
			this._super(options);
		}
	});


}(window.app=window.app||{}));
