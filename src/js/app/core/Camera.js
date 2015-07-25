(function (app) {

	var core = app.core = app.core||{};

	var Camera = core.Camera = gc.core.EventDispatcher.extend({

		size: null,
		stage: null,

		init: function (options) {
			this._super();
			this.size = options.size;
			this.setStage(options);
		},

		createStage: function (options) {
			var domStage = options.stage || document.createElement('canvas');
			domStage.width = this.size.width;
			domStage.height = this.size.height;
			this.stage = new createjs.Stage(domStage);
		}
	});


}(window.app=window.app||{}));
