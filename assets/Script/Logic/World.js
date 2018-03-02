// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {

		// world time
        _worldTime		: 0.0,
        _worldFrame		: 0,
		_worldFrameTime	: 0.03,
		_isWorldStop	: false,
		
		// unit
		_units			: [],
		
    },

    onLoad () {

	},

    start () {

	},
	
	// frame logic push
	frameUpdate () {
		for (var index = 0; index < _units.length; index++) {
			var unit = _units[index];
			unit.frameUpdate();
		}
	},

    update (dt) {
		if (this._isWorldStop) {
			return;
		}
        this._worldTime = this._worldTime + dt;
        var pastFrame =  this._worldTime / this._worldFrameTime;
		var frameCount = this._worldFrame - pastFrame;
		for (var index = 0; index < frameCount; index++) {
			frameUpdate();
		}
		this._worldFrameTime = this._worldFrameTime + frameCount;
    }
});
