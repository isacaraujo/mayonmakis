(function (app) {

	var geom = app.geom = app.geom||{};

	var Point = geom.Point = gc.core.Object.extend({

		x: 0,
		y: 0

		init: function (x, y) {
			this.x = x;
			this.y = y;
		}

	});


}(window.app=window.app||{}));
