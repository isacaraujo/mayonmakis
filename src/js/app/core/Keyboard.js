(function (app) {

	var core = app.core = app.core||{};


	var KeyboardState = core.KeyboardType = {
		UP:         38,
		DOWN:  	    40,
		LEFT:       37,
		RIGHT:      39,
		
		UP_LEFT:    38 + 37,
		UP_RIGHT:   38 + 39,
		DOWN_LEFT:  40 + 37,
		DOWN_RIGHT: 40 + 39
	};

	var Keyboard = core.Keyboard = gc.core.EventDispatcher.extend({

		state: null,
		pressed: null,

		init: function (options) {
			this._super(options);
			this.pressed = [];
			var doc = gc.core.NativeElements.document;
			doc.on('keydown', this.onKeydown, false, this);
			doc.on('keyup', this.onKeyup, false, this);
		},

		alreadyPressed: function (key) {
			return this.pressed.indexOf(key) !== -1;
		},

		isValidKey: function (key) {
			return key >= KeyboardState.LEFT && 
				   key <= KeyboardState.DOWN;
		},

		onKeydown: function (event) {
			var key = event.keyCode;
			!this.alreadyPressed(key) && this.isValidKey(key) this.pressed.push(key);
			this.updateState();
		},

		onKeyup: function (event) {
			var key = event.keyCode;
			if (this.alreadyPressed(key)) {
				var i = this.pressed.indexOf(key);
				this.pressed.splice(i, 1);
				this.updateState();
			}
		},

		updateState: function () {
			if (!this.pressed.length) {
				this.state = null;
				return;
			}
			var k0 = this.pressed[0],
				k1 = this.pressed[1];
			if (k1) k0 += k1;
			this.state = k0;
		}

	});

}(window.app=window.app||{}));
