(function (app) {

	var display = app.display = app.display||{};

	var Player = display.Player = app.display.DisplayObject.extend({

		init: function (options) {
			this._super(options);
		},

		calculateMovement: function (keyboardState) {
			if (null === keyboardState) return;
			switch (keyboardState) {

				case KeyboardState.UP:
					break;

				case KeyboardState.DOWN:
					break;

				case KeyboardState.LEFT:
					break;

				case KeyboardState.RIGHT:
					break;

				case KeyboardState.UP_LEFT:
					break;

				case KeyboardState.UP_RIGHT:
					break;

				case KeyboardState.DOWN_LEFT:
					break;

				case KeyboardState.DOWN_RIGHT:
					break;
			}
		},

		colideWith: function (o) {
			// TODO - work when colide with an object.
		}
	});


}(window.app=window.app||{}));
