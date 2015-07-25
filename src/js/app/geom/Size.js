(function (app) {

	var geom = app.geom = app.geom||{};

	var Size = geom.Size = gc.core.Object.extend({

		width: 0,
		height: 0

		init: function (width, height) {
			this.width = width;
			this.height = height;
		}

	});


}(window.app=window.app||{}));
