(function (app) {

	var geom = app.geom = app.geom||{};

	var Rect = geom.Rect = gc.core.Object.extend({

		width: 0,
		height: 0,
		x: 0,
		y: 0

		init: function (width, height, x, y) {
			this.width = width;
			this.height = height;
			this.x = x;
			this.y = y;
		},

		isInsideOf: function (rect) {
			return (this.x + this.width >= rect.x && this.x <= rect.x + rect.width) &&
				   (this.y + this.height >= rect.y && this.y <= rect.y + rect.height);
		}

	});


}(window.app=window.app||{}));
