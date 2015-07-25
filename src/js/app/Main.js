(function (app) {

	var World = app.core.World,
		Size = app.geom.Size,
		Points = app.geom.Points,
		Rect = app.geom.Rect;

	var Main = gc.core.EventDispatcher.extend({

		world: null,

		init: function () {
			this._super();
			this.createWorld();
		},

		createWorld: function () {
			this.world = new World({
				size: new Size(6000, 1200),
				cameraSize: new Size(300, 300, 0, 0),
				stage: document.getElementById('stage')
			});
		}
	});

	document.addEventListener('DOMContentLoaded', function () {
		return new Main();
	}, false);

}(window.app=window.app||{}));
