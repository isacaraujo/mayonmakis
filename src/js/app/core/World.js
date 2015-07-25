(function (app) {

	var core = app.core = app.core||{};

	var Size = app.geom.Size,
		Points = app.geom.Points,
		Rect = app.geom.Rect,
		Camera = app.core.Camera,
		Keyboard = app.core.Keyboard,
		Player = app.display.Player;

	var World = core.World = gc.core.EventDispatcher.extend({

		objectsList: null,
		camera: null,
		keyboard: null,
		player: null,

		init: function (options) {
			this._super();
			this.createCamera(options);
			this.createPlayer(options);
			this.keyboard = new Keyboard();
			this.objectsList = [];
			this.size = options.size;
			createjs.Ticker.on('tick', this.onUpdate, false, this);
		},

		createCamera: function (options) {
			this.camera = new Camera({
				size: options.cameraSize,
				stage: options.stage
			});
		},

		createPlayer: function (options) {
			this.player = new Player();
			this.addObject(this.player);
		},

		addObject: function (o, index) {
			var list = this.objectsList.length;
			if (index === undefined || index >= list.length) {
				this.objectsList.push(o);
			} else {
				this.objectsList.splice(index, 0, o);
			}
		},

		onUpdate: function (evt) {
			this.player.calculateMovement(this.keyboard.state);
			for (var i = 0, len = this.objectsList.length; i < len; i++) {
				var o = this.objectsList[i];
				o.canMove() && this.handleCollision(o);
			}
		},

		handleCollision: function (o) {
			for (var i = 0, len = this.objectsList.length; i < len; i++) {
				var temp = this.objectsList[i];
				if (o.rect.isInsideOf(temp.rect)) o.colideWith(temp);
			}
		}

	});


}(window.app=window.app||{}));
