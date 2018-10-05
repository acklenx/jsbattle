var JsBattle =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractView2 = __webpack_require__(11);

var _AbstractView3 = _interopRequireDefault(_AbstractView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPixiView = function (_AbstractView) {
  _inherits(AbstractPixiView, _AbstractView);

  function AbstractPixiView(model) {
    _classCallCheck(this, AbstractPixiView);

    var _this = _possibleConstructorReturn(this, (AbstractPixiView.__proto__ || Object.getPrototypeOf(AbstractPixiView)).call(this, model));

    _this._model = model;
    _this._view = new PIXI.Container();
    _this._create(_this._view);
    return _this;
  }

  _createClass(AbstractPixiView, [{
    key: "update",
    value: function update(events) {
      _get(AbstractPixiView.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiView.prototype), "update", this).call(this, events);
      if (this._model.x !== undefined) {
        this._view.x = this._model.x;
      }
      if (this._model.y !== undefined) {
        this._view.y = this._model.y;
      }
      if (this._model.angle !== undefined) {
        this._view.rotation = this._model.angle * (Math.PI / 180);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(AbstractPixiView.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiView.prototype), "destroy", this).call(this);
      if (this.view.parent) {
        this.view.parent.removeChild(this.view);
      }
    }
  }, {
    key: "_create",
    value: function _create(container) {}
  }]);

  return AbstractPixiView;
}(_AbstractView3.default);

exports.default = AbstractPixiView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPixiView2 = __webpack_require__(1);

var _AbstractPixiView3 = _interopRequireDefault(_AbstractPixiView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPixiTankView = function (_AbstractPixiView) {
  _inherits(AbstractPixiTankView, _AbstractPixiView);

  function AbstractPixiTankView(model) {
    _classCallCheck(this, AbstractPixiTankView);

    var _this = _possibleConstructorReturn(this, (AbstractPixiTankView.__proto__ || Object.getPrototypeOf(AbstractPixiTankView)).call(this, model));

    _this._hudView = new PIXI.Container();
    _this._createHud(_this._hudView);
    return _this;
  }

  _createClass(AbstractPixiTankView, [{
    key: 'update',
    value: function update(events) {
      _get(AbstractPixiTankView.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiTankView.prototype), 'update', this).call(this, events);
      this.view.rotation = 0;
      this.body.rotation = this.model.angle * (Math.PI / 180);
      this.gun.rotation = (this.model.angle + this.model.gunAngle) * (Math.PI / 180);
      this.radar.rotation = (this.model.angle + this.model.radarAngle) * (Math.PI / 180);
      this.energyBar.scale.x = this.model.energy / this.model.maxEnergy;
      this.label.text = this.model.fullName;

      this.hudView.x = this.view.x;
      this.hudView.y = this.view.y;

      for (var i = 0; i < events.length; i++) {
        this._onEvent(events[i]);
      }
    }
  }, {
    key: '_onEvent',
    value: function _onEvent(event) {
      switch (event.type) {
        case 'shoot':
          this._onShoot(event);
          break;
        case 'destroy':
          this._onDestroy(event);
          break;
      }
    }
  }, {
    key: '_onShoot',
    value: function _onShoot(event) {}
  }, {
    key: '_onDestroy',
    value: function _onDestroy(event) {
      this.destroy();
    }
  }, {
    key: '_create',
    value: function _create(container) {
      _get(AbstractPixiTankView.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiTankView.prototype), '_create', this).call(this, container);
      this._body = this._createBody();
      this._gun = this._createGun();
      this._radar = this._createRadar();
      container.addChild(this._body);
      container.addChild(this._gun);
      container.addChild(this._radar);
    }
  }, {
    key: '_createHud',
    value: function _createHud(container) {
      this._label = this._createLabel();
      this._energyBar = this._createEnergyBar();
      container.addChild(this._createHudBackground());
      container.addChild(this._energyBar);
      container.addChild(this._label);
    }
  }, {
    key: '_createBody',
    value: function _createBody() {
      return new PIXI.Sprite();
    }
  }, {
    key: '_createGun',
    value: function _createGun() {
      return new PIXI.Sprite();
    }
  }, {
    key: '_createRadar',
    value: function _createRadar() {
      return new PIXI.Sprite();
    }
  }, {
    key: '_createHudBackground',
    value: function _createHudBackground() {
      return new PIXI.Sprite();
    }
  }, {
    key: '_createEnergyBar',
    value: function _createEnergyBar() {
      return new PIXI.Sprite();
    }
  }, {
    key: '_createLabel',
    value: function _createLabel() {
      return new PIXI.Text();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(AbstractPixiTankView.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiTankView.prototype), 'destroy', this).call(this);
      if (this.hudView.parent) {
        this.hudView.parent.removeChild(this.hudView);
      }
    }
  }, {
    key: 'body',
    get: function get() {
      return this._body;
    }
  }, {
    key: 'hudView',
    get: function get() {
      return this._hudView;
    }
  }, {
    key: 'gun',
    get: function get() {
      return this._gun;
    }
  }, {
    key: 'radar',
    get: function get() {
      return this._radar;
    }
  }, {
    key: 'label',
    get: function get() {
      return this._label;
    }
  }, {
    key: 'energyBar',
    get: function get() {
      return this._energyBar;
    }
  }]);

  return AbstractPixiTankView;
}(_AbstractPixiView3.default);

exports.default = AbstractPixiTankView;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(15);

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(16);

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(17);

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(18);

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(19);

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(20);

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(21);

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Renders simulation of the battle. The object must be passed to
 * constructor of Simulation object
 * @see Simulation
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer() {
    _classCallCheck(this, Renderer);
  }

  /**
   * Renders the battlefield. Called only at the beginning. Used usually to render
   * background of the Simulation
   * @param {Battlefield} - battlefield object
   */


  _createClass(Renderer, [{
    key: 'initBatlefield',
    value: function initBatlefield(battlefield) {}

    /**
     * @return value from 0 to 1 that represents the current quality of the renderer. This parameter is controlled by Simulation object
     * @see Simulation.setRendererQuality()
     */

  }, {
    key: 'preRender',


    /**
     * Called before rendering of each frame
     */
    value: function preRender() {}

    /**
     * Called after rendering of each frame
     */

  }, {
    key: 'postRender',
    value: function postRender() {}

    /**
     * Render a tank
     * @param {Tank} tank - a tank to be rendered
     * @param {Array} events - list of events related to the tank that occurred since the last call of this method
     */

  }, {
    key: 'renderTank',
    value: function renderTank(tank, events) {}

    /**
     * Renders clock of the battle
     * @param {Number} msElapsed - time that has elapsed (in milliseconds)
     * @param {Number} msLimit - maximum battle duration (in milliseconds)
     */

  }, {
    key: 'renderClock',
    value: function renderClock(msElapsed, msLimit) {}

    /**
     * Renders statistics of all tanks. Called once per frame
     * @param {Array} tankList - list of all tanks that are involved in the battle
     */

  }, {
    key: 'renderTankStats',
    value: function renderTankStats(tankList) {}

    /**
     * Render a bullet
     * @param {Bullet} bullet - a bullet to be rendered
     * @param {Array} events - list of events related to the bullet that occurred since the last call of this method
     */

  }, {
    key: 'renderBullet',
    value: function renderBullet(bullet, events) {}
    /**
     * Sets speed of the simulation. Could be used to time-scale animations so they match simulation speed
     * @pram {Number} multiplier - simulation speed multiplier
     */

  }, {
    key: 'setSpeed',
    value: function setSpeed(v) {}
  }, {
    key: 'stop',
    value: function stop() {}
  }, {
    key: 'quality',
    get: function get() {
      return 1;
    },
    set: function set(v) {}
  }]);

  return Renderer;
}();

exports.default = Renderer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractRenderer2 = __webpack_require__(34);

var _AbstractRenderer3 = _interopRequireDefault(_AbstractRenderer2);

var _AbstractPixiView = __webpack_require__(1);

var _AbstractPixiView2 = _interopRequireDefault(_AbstractPixiView);

var _AbstractPixiTankView = __webpack_require__(4);

var _AbstractPixiTankView2 = _interopRequireDefault(_AbstractPixiTankView);

var _PixiRendererClockModel = __webpack_require__(35);

var _PixiRendererClockModel2 = _interopRequireDefault(_PixiRendererClockModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPixiRenderer = function (_AbstractRenderer) {
  _inherits(AbstractPixiRenderer, _AbstractRenderer);

  function AbstractPixiRenderer(name) {
    _classCallCheck(this, AbstractPixiRenderer);

    var _this = _possibleConstructorReturn(this, (AbstractPixiRenderer.__proto__ || Object.getPrototypeOf(AbstractPixiRenderer)).call(this));

    _this._name = name;

    if (typeof PIXI === 'undefined') {
      throw "Pixi.js is required!";
    }
    _this._masterContainer = new PIXI.Container();
    _this._tankContainer = new PIXI.Container();
    _this._bulletContainer = new PIXI.Container();
    _this._hudContainer = new PIXI.Container();
    _this._masterContainer.addChild(_this._tankContainer);
    _this._masterContainer.addChild(_this._bulletContainer);
    _this._masterContainer.addChild(_this._hudContainer);
    _this._renderer = null;
    _this._stage = null;
    _this._clockModel = new _PixiRendererClockModel2.default();
    _this._clockView = null;
    _this._battlefieldView = null;
    if (window.devicePixelRatio >= 2) {
      _this._rendererScale = 2;
    } else {
      _this._rendererScale = 1;
    }
    return _this;
  }

  _createClass(AbstractPixiRenderer, [{
    key: "initBatlefield",
    value: function initBatlefield(battlefield) {
      _get(AbstractPixiRenderer.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiRenderer.prototype), "initBatlefield", this).call(this, battlefield);
      this._masterContainer.x = -this.offsetX;
      this._masterContainer.y = -this.offsetY;

      var rendererSettings = {
        view: this._canvas,
        antialias: false,
        backgroundColor: 0xffffff,
        resolution: this._rendererScale
      };

      this._renderer = new PIXI.autoDetectRenderer(battlefield.width + 2 * battlefield.margin, battlefield.height + 2 * battlefield.margin, rendererSettings);
      this._stage = new PIXI.Container();

      this._battlefieldView = this._createBattlefieldView(battlefield);
      this._clockView = this._createClockView(this._clockModel);

      this._stage.addChild(this._battlefieldView.view);
      this._stage.addChild(this._masterContainer);
      this._stage.addChild(this._clockView.view);

      this._renderer.render(this._stage);
    }
  }, {
    key: "init",
    value: function init(canvas) {
      this._canvas = canvas;
    }
  }, {
    key: "loadAssets",
    value: function loadAssets(done) {
      var _this2 = this;

      if (!this._name) {
        done();
        return;
      }
      var loader = PIXI.loader;
      var loadedResources = [];
      for (var res in loader.resources) {
        loadedResources.push(res);
      }

      this._getSpritesheetUrls(this._name, this._rendererScale).filter(function (url) {
        return loadedResources.indexOf(url) == -1;
      }).forEach(function (url) {
        loader.add(url);
      });
      loader.load(function (loader, resources) {
        _this2.onAssetsLoaded();
        done();
      });
    }
  }, {
    key: "onAssetsLoaded",
    value: function onAssetsLoaded() {}
  }, {
    key: "preRender",
    value: function preRender() {
      this._battlefieldView.update();
    }
  }, {
    key: "renderTank",
    value: function renderTank(tank, events) {
      _get(AbstractPixiRenderer.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiRenderer.prototype), "renderTank", this).call(this, tank, events);
      var view = this.getTankView(tank.id);
      if (!view.parent && view.isAlive) {
        this._tankContainer.addChild(view.view);
        this._hudContainer.addChild(view.hudView);
      }
    }
  }, {
    key: "renderBullet",
    value: function renderBullet(bullet, events) {
      _get(AbstractPixiRenderer.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiRenderer.prototype), "renderBullet", this).call(this, bullet, events);
      var view = this.getBulletView(bullet.id);
      if (!view.parent && view.isAlive) {
        this._bulletContainer.addChild(view.view);
      }
    }
  }, {
    key: "renderClock",
    value: function renderClock(msElapsed, msLimit) {
      this._clockModel.update(msElapsed, msLimit);
      this._clockView.update();
    }
  }, {
    key: "postRender",
    value: function postRender() {
      _get(AbstractPixiRenderer.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiRenderer.prototype), "postRender", this).call(this);
      this._renderer.render(this._stage);
    }
  }, {
    key: "_getSpritesheetUrls",
    value: function _getSpritesheetUrls(rendererName, rendererScale) {
      var resolution = rendererScale == 2 ? "retina@2x" : "web";
      return ["img/spritesheets/" + rendererName + "/" + resolution + "/jsbattle.json"];
    }
  }, {
    key: "_createTankView",
    value: function _createTankView(tank) {
      return new _AbstractPixiTankView2.default(tank);
    }
  }, {
    key: "_createBulletView",
    value: function _createBulletView(bullet) {
      return new _AbstractPixiView2.default(bullet);
    }
  }, {
    key: "_createBattlefieldView",
    value: function _createBattlefieldView(battlefield) {
      return new _AbstractPixiView2.default(battlefield);
    }
  }, {
    key: "_createClockView",
    value: function _createClockView(clock) {
      return new _AbstractPixiView2.default(clock);
    }
  }, {
    key: "stage",
    get: function get() {
      return this._stage;
    }
  }, {
    key: "battlefieldView",
    get: function get() {
      return this._battlefieldView;
    }
  }, {
    key: "masterContainer",
    get: function get() {
      return this._masterContainer;
    }
  }]);

  return AbstractPixiRenderer;
}(_AbstractRenderer3.default);

exports.default = AbstractPixiRenderer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPixiView2 = __webpack_require__(1);

var _AbstractPixiView3 = _interopRequireDefault(_AbstractPixiView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPixiBulletView = function (_AbstractPixiView) {
  _inherits(AbstractPixiBulletView, _AbstractPixiView);

  function AbstractPixiBulletView(model) {
    _classCallCheck(this, AbstractPixiBulletView);

    return _possibleConstructorReturn(this, (AbstractPixiBulletView.__proto__ || Object.getPrototypeOf(AbstractPixiBulletView)).call(this, model));
  }

  _createClass(AbstractPixiBulletView, [{
    key: "update",
    value: function update(events) {
      _get(AbstractPixiBulletView.prototype.__proto__ || Object.getPrototypeOf(AbstractPixiBulletView.prototype), "update", this).call(this, events);
      this.view.scale.x = this.view.scale.y = this.model.power * 0.7 + 0.3;
      if (this.model.exploded) {
        this.destroy();
      }
    }
  }]);

  return AbstractPixiBulletView;
}(_AbstractPixiView3.default);

exports.default = AbstractPixiBulletView;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AiDefinition = __webpack_require__(10);

var _AiDefinition2 = _interopRequireDefault(_AiDefinition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UltimateBattleDescriptor = function () {
  function UltimateBattleDescriptor() {
    _classCallCheck(this, UltimateBattleDescriptor);

    this._version = 2;
    this._aiList = [];
    this._rngSeed = new Date().getTime();
    this._teamMode = false;
  }

  _createClass(UltimateBattleDescriptor, [{
    key: "addAiDefinition",
    value: function addAiDefinition(ai) {
      this._aiList.push(ai);
    }
  }, {
    key: "setTeamMode",
    value: function setTeamMode(v) {
      this._teamMode = v;
    }
  }, {
    key: "getTeamMode",
    value: function getTeamMode() {
      return this._teamMode;
    }
  }, {
    key: "setRngSeed",
    value: function setRngSeed(seed) {
      this._rngSeed = seed;
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return this._version;
    }
  }, {
    key: "getAiList",
    value: function getAiList() {
      return this._aiList;
    }
  }, {
    key: "getRngSeed",
    value: function getRngSeed() {
      return this._rngSeed;
    }
  }, {
    key: "encode",
    value: function encode() {
      var json = {
        version: this._version,
        rngSeed: this._rngSeed,
        teamMode: this._teamMode,
        aiList: []
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._aiList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var ai = _step.value;

          json.aiList.push(ai.toJSON());
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var raw = JSON.stringify(json);
      return raw;
    }
  }, {
    key: "decode",
    value: function decode(data) {
      var json = void 0;
      try {
        json = JSON.parse(data);
      } catch (err) {
        throw new Error("Cannot parse UBD file! " + err);
      }
      if (this._version != json.version) {
        throw new Error("Version of UBD does not match. Version " + json.version + " is not supported. Please convert to version " + this._version);
      }
      this._rngSeed = json.rngSeed;
      this._teamMode = json.teamMode;

      var ai = void 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = json.aiList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var aiJson = _step2.value;

          ai = new _AiDefinition2.default();
          ai.fromJSON(aiJson);
          this._aiList.push(ai);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      var result = new UltimateBattleDescriptor();
      result.setRngSeed(this.getRngSeed());
      result.setTeamMode(this.getTeamMode());
      var aiList = this.getAiList();
      var aiClone = void 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = aiList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var ai = _step3.value;

          aiClone = ai.clone();
          result.addAiDefinition(ai);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return result;
    }
  }]);

  return UltimateBattleDescriptor;
}();

exports.default = UltimateBattleDescriptor;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SUSSPEND_AI_SANDBOX_WARNING = false;

/**
 * Describes AI algorithm of the tank. There could be two sources of AI scripts:
 * files or string variable. Depending on source of scripts `fromFile()` or `fromCode()`
 * methods should be used to initialize the object
 */

var AiDefinition = function () {

  /**
   * Creates AiDefinition. Constructor is not available outside of
   * `JsBattle.min.js` library. To create AiDefinition object use
   * `JsBattle.createAiDefinition()` instead
   */
  function AiDefinition() {
    _classCallCheck(this, AiDefinition);

    var uid = new Date().getTime().toString();
    uid = uid.substr(uid.length - 6, 6) + "" + Math.round(10000000 * Math.random());
    uid = Number(uid);
    uid = uid.toString(35);
    this._name = "";
    this._team = uid;
    this._code = null;
    this._initData = null;
    this._useSandbox = true;
    this._executionLimit = 100;
  }

  /**
   * @return JSON representation of AiDefiniton
   */


  _createClass(AiDefinition, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this._name,
        team: this._team,
        code: this._code,
        initData: this._initData,
        useSandbox: this._useSandbox,
        executionLimit: this.executionLimit
      };
    }

    /**
     * @param {object} data - JSON data to be parsed
     */

  }, {
    key: "fromJSON",
    value: function fromJSON(data) {
      this._name = data.name;
      this._team = data.team;
      this._code = data.code;
      this._initData = data.initData;
      this._useSandbox = data.useSandbox;
      this._executionLimit = data.executionLimit;
    }

    /**
     * @return copy of the object
     */

  }, {
    key: "clone",
    value: function clone() {
      var result = new AiDefinition();
      result.fromJSON(this.toJSON());
      return result;
    }

    /**
     * @return name of the AI. The same name will be assigned to the tank
     */

  }, {
    key: "fromFile",


    /**
     * Creates AI definition that has source codes in a file. All AI scripts
     * are kept in `/tanks/[tankName].tank.js` files
     * @param {String} tankName - name of the tank. Its source code is kept in `/tanks/[tankName].tank.js`
     * @param {object} initData - optional initial data that is passed to the AI and can be accessed from tank info object (`info.initData`)
     */
    value: function fromFile(tankName, initData) {
      if (!tankName) throw "TankName is required";
      this._name = tankName;
      this._code = null;
      this._initData = initData !== undefined ? initData : null;
    }

    /**
     * Creates AI definition that has the algorithm codded in provided in string parameter.
     * @param {String} tankName - name of the tank.
     * @param {String} code - JavaScript code of AI script.
     * @param {object} initData - optional initial data that is passed to the AI and can be accessed from tank info object (`info.initData`)
     */

  }, {
    key: "fromCode",
    value: function fromCode(tankName, code, initData) {
      if (!tankName) throw "TankName is required";
      if (!code) throw "Code is required";
      code = code.replace(/importScripts\w*\([^\)]*\)/g, '');
      this._name = tankName;
      this._code = code;
      this._initData = initData !== undefined ? initData : null;
    }

    /**
     * Set name of the team. Tanks from the same team can coomunicate with eachother and cooperate
     * @param {string} name - unique name of the team
     */

  }, {
    key: "assignToTeam",
    value: function assignToTeam(teamName) {
      this._team = teamName;
    }

    /**
     * Allows to running code of AI in the same sandbox as the core of JsBattle game. It is
     * potentially dangerous since code of AI Script can access code of JS Battle and
     * influence it. However disabling sandbox can significantly increase performance
     * (especially if you run several simulations in concurrent). Use this approach
     * only for trusted AI code.
     */

  }, {
    key: "disableSandbox",
    value: function disableSandbox() {
      if (!this._code) {
        throw "Sandbox can be disabled for AI created from code only.";
      }
      if (!SUSSPEND_AI_SANDBOX_WARNING) {
        console.warn("Disabling sandbox for AI! It could be dangerous.");
        SUSSPEND_AI_SANDBOX_WARNING = true;
      }
      this._useSandbox = false;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }

    /**
     * @return name of the team
     */

  }, {
    key: "teamName",
    get: function get() {
      return this._team;
    }

    /**
     * @return Maximum time for execution of AI script (in milliseconds)
     */

  }, {
    key: "executionLimit",
    get: function get() {
      return this._executionLimit;
    }

    /**
     * @param {Number} limit -  Maximum time for execution of AI script (in milliseconds)
     */
    ,
    set: function set(v) {
      this._executionLimit = v;
    }

    /**
     * @return path to file with code of Web Worker where the AI will be ran.
     */

  }, {
    key: "filePath",
    get: function get() {
      if (!this._useSandbox) return null;
      if (this._code) {
        return "tanks/lib/codeWorker.js";
      } else {
        return "tanks/" + this._name + ".tank.js";
      }
    }

    /**
     * @return source code of AI algorithm as a string. This property is not empty only for AIs created by `fromCode()` call
     * @see AiDefinition.fromCode()
     */

  }, {
    key: "code",
    get: function get() {
      return this._code;
    }

    /**
     * @return optional initial data that is passed to the AI and can be accessed from tank info object (`info.initData`)
     */

  }, {
    key: "initData",
    get: function get() {
      return this._initData;
    }

    /**
     * @return true if AI should be sandboxed. Otherwise false. By default, all AIs are sandboxed.
     */

  }, {
    key: "useSandbox",
    get: function get() {
      return this._useSandbox;
    }
  }]);

  return AiDefinition;
}();

exports.default = AiDefinition;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractView = function () {
  function AbstractView(model) {
    _classCallCheck(this, AbstractView);

    this._model = model;
    this._view = null;
    this._isAlive = true;
  }

  _createClass(AbstractView, [{
    key: 'destroy',
    value: function destroy() {
      this._isAlive = false;
    }
  }, {
    key: 'update',
    value: function update(events) {}
  }, {
    key: 'isAlive',
    get: function get() {
      return this._isAlive;
    }
  }, {
    key: 'model',
    get: function get() {
      return this._model;
    }
  }, {
    key: 'view',
    get: function get() {
      return this._view;
    }
  }]);

  return AbstractView;
}();

exports.default = AbstractView;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Simulation = __webpack_require__(13);

var _Simulation2 = _interopRequireDefault(_Simulation);

var _Renderer = __webpack_require__(6);

var _Renderer2 = _interopRequireDefault(_Renderer);

var _DebugRenderer = __webpack_require__(33);

var _DebugRenderer2 = _interopRequireDefault(_DebugRenderer);

var _BWRenderer = __webpack_require__(40);

var _BWRenderer2 = _interopRequireDefault(_BWRenderer);

var _BrodyRenderer = __webpack_require__(45);

var _BrodyRenderer2 = _interopRequireDefault(_BrodyRenderer);

var _VoidRenderer = __webpack_require__(51);

var _VoidRenderer2 = _interopRequireDefault(_VoidRenderer);

var _AiDefinition = __webpack_require__(10);

var _AiDefinition2 = _interopRequireDefault(_AiDefinition);

var _UltimateBattleDescriptor = __webpack_require__(9);

var _UltimateBattleDescriptor2 = _interopRequireDefault(_UltimateBattleDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  createSimulation: function createSimulation(renderer) {
    renderer = renderer ? renderer : new _Renderer2.default();
    var sim = new _Simulation2.default(renderer);
    return sim;
  },

  createAiDefinition: function createAiDefinition() {
    return new _AiDefinition2.default();
  },

  createUBD: function createUBD() {
    return new _UltimateBattleDescriptor2.default();
  },

  createRenderer: function createRenderer(name) {
    switch (name) {
      case 'debug':
        return new _DebugRenderer2.default();
      case 'bw':
        return new _BWRenderer2.default();
      case 'brody':
        return new _BrodyRenderer2.default();
      case 'void':
        return new _VoidRenderer2.default();
      default:
        throw "Unknown rederer " + name;
    }
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tank = __webpack_require__(14);

var _Tank2 = _interopRequireDefault(_Tank);

var _Team = __webpack_require__(23);

var _Team2 = _interopRequireDefault(_Team);

var _Bullet = __webpack_require__(24);

var _Bullet2 = _interopRequireDefault(_Bullet);

var _Battlefield = __webpack_require__(25);

var _Battlefield2 = _interopRequireDefault(_Battlefield);

var _EventStore = __webpack_require__(26);

var _EventStore2 = _interopRequireDefault(_EventStore);

var _CollisionResolver = __webpack_require__(27);

var _CollisionResolver2 = _interopRequireDefault(_CollisionResolver);

var _AiWrapper = __webpack_require__(29);

var _AiWrapper2 = _interopRequireDefault(_AiWrapper);

var _PerformanceMonitor = __webpack_require__(32);

var _PerformanceMonitor2 = _interopRequireDefault(_PerformanceMonitor);

var _UltimateBattleDescriptor = __webpack_require__(9);

var _UltimateBattleDescriptor2 = _interopRequireDefault(_UltimateBattleDescriptor);

var _seedrandom = __webpack_require__(5);

var _seedrandom2 = _interopRequireDefault(_seedrandom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Battle simulation component. Process the simulation updating all related objects
 * and refreshing the renderer.
 */
var Simulation = function () {
  /**
   * Create Simulation object. Constructor is not available outside of
   * `JsBattle.min.js` library. To create Simulation object use
   * `JsBattle.createSimulation(renderer)` instead
   * @param {Renderer} renderer - Renderer used to present results of the simulation
   */
  function Simulation(renderer) {
    _classCallCheck(this, Simulation);

    this._aiList = [];
    this._allTankList = [];
    this._tankList = [];
    this._bulletList = [];
    this._explodedTankList = [];
    this._explodedBulletList = [];
    this._battlefield = null;
    this._simulationTimeout = null;
    this._renderInterval = null;
    this._simulationStepDuration = 17;
    this._renderStepDuration = 30;
    this._renderer = renderer;
    this._isRunning = false;
    this._collisionResolver = new _CollisionResolver2.default();
    this._rngSeed = new Date().getTime() + Math.round(Math.random() * 1000000);
    this._rng = (0, _seedrandom2.default)(this._rngSeed);
    this._speedMultiplier = 1;
    this._onSimulationStepCallback = [];
    this._onRenderStepCallback = [];
    this._onFinishCallback = [];
    this._onErrorCallback = [];
    this._onStartCallback = [];
    this._timeElapsed = 0;
    this._timeLimit = 30000;
    this._eventStore = new _EventStore2.default();
    this._nextTankId = 1;
    this._nextBulletId = 1;
    this._rendererQuality = 'auto';
    this._perfMon = new _PerformanceMonitor2.default();
    this._perfMon.setSimulationStepDuration(this._simulationStepDuration / this._speedMultiplier);
    this._callStackLimit = Number.MAX_VALUE;
    this._callStackCount = 0;
    this._teamMap = [];
    this._teamList = [];
    this._ultimateBattleDescriptor = new _UltimateBattleDescriptor2.default();
  }

  /**
    * Seed random number generator. Each time when you seed rng with the same data
    * it will return the same sequence of numbers. That feature can be used
    * to reconstruct exactly the same, "randomized" simulation condidtions.
    *
    * IMPORTANT! set it just after calling constructor of the calss. Otherwise
    * some RNG calls could be unseeded.
    *
    * @param {Number} seed - rng seed data
    */


  _createClass(Simulation, [{
    key: "setRngSeed",
    value: function setRngSeed(seed) {
      this._rngSeed = seed;
      this._ultimateBattleDescriptor.setRngSeed(seed);
      this._rng = (0, _seedrandom2.default)(this._rngSeed);
    }

    /**
     * @return seed of random number generator
     */

  }, {
    key: "getRngSeed",
    value: function getRngSeed() {
      return this._rngSeed;
    }

    /**
     * @return random number from seeded rng
     */

  }, {
    key: "getRandom",
    value: function getRandom() {
      return this._rng();
    }

    /**
     * Initialize the battle field. Must be called before any other calls
     * to simulation object
     * @param {Number} width - width of the battlefield
     * @param {Number} height - height of the battlefield
     */

  }, {
    key: "init",
    value: function init(width, height) {
      this._battlefield = new _Battlefield2.default();
      this._battlefield.setSize(width, height);
      this._battlefield.randomize(this._rng());
      this._renderer.initBatlefield(this._battlefield);
      this._collisionResolver.updateBattlefield(this._battlefield);
    }

    /**
     * @return all tanks that were added to the battle
     */

  }, {
    key: "start",


    /**
     * Starts simulation of the battle. It will initialize all AI scripts, trigger `onStart` event
     * and launch rendering and simulation processing loops. Remember to call `Simulation.init()` and
     * `Simulation.addTank()` before executing this method.
     * @see Simulation.onStart()
     */
    value: function start() {
      this._isRunning = true;
      var i = void 0;
      var self = this;

      if (this._renderInterval) {
        clearInterval(this._renderInterval);
        this._renderInterval = null;
      }

      this._activateAi(function () {
        self._renderInterval = setInterval(function () {
          self._updateView();
        }, self._renderStepDuration);

        if (self._simulationTimeout) {
          clearTimeout(self._simulationTimeout);
        }
        self._perfMon.start();
        for (i = 0; i < self._onStartCallback.length; i++) {
          self._onStartCallback[i]();
        }self._simulationStep();
      }, function (err) {
        console.error(err);
        for (i = 0; i < self._onErrorCallback.length; i++) {
          self._onErrorCallback[i](err.message ? err.message : "Error during simulation");
        }
      });
    }
  }, {
    key: "_simulationStep",
    value: function _simulationStep() {
      this._perfMon.onSimulationStep();
      var startTime = new Date().getTime();
      var self = this;
      var i = void 0;
      this._updateModel();
      this._updateAi(function () {
        if (self._simulationTimeout) {
          clearTimeout(self._simulationTimeout);
          self._simulationTimeout = null;
        }
        if (self._getTeamsLeft() <= 1 || self._timeElapsed == self._timeLimit) {
          self.stop();
          self._updateModel();
          self._updateView();
          for (i = 0; i < self._onFinishCallback.length; i++) {
            self._onFinishCallback[i]();
          }
        }
        if (self._isRunning) {
          var processingTime = new Date().getTime() - startTime;
          var dt = self._simulationStepDuration / self._speedMultiplier - processingTime;
          dt = Math.round(dt);
          for (i = 0; i < self._onSimulationStepCallback.length; i++) {
            self._onSimulationStepCallback[i]();
          }self._timeElapsed = Math.min(self._timeElapsed + self._simulationStepDuration, self._timeLimit);
          if (dt > 0) {
            self._callStackCount = 0;
            self._simulationTimeout = setTimeout(self._simulationStep.bind(self), dt);
          } else if (self._callStackCount >= self._callStackLimit) {
            self._simulationTimeout = setTimeout(self._simulationStep.bind(self), 1);
          } else {
            self._callStackCount++;
            self._simulationStep();
          }
        }
      }, function (err) {
        console.error(err);
        for (i = 0; i < self._onErrorCallback.length; i++) {
          self._onErrorCallback[i](err.message ? err.message : "Error during simulation");
        }
      });
    }

    /**
     * Create a tank according to provided `AiDefinition`. Remember to add at
     * least two tanks to the battle. Otherwise, it will stop immediately and
     * the winner will be recognized
     * @param {AiDefinition} - defintion of tank AI script
     */

  }, {
    key: "addTank",
    value: function addTank(aiDefinition) {
      if ((typeof aiDefinition === "undefined" ? "undefined" : _typeof(aiDefinition)) != 'object') {
        throw "AI definition must be an object";
      }
      if (!this._battlefield) {
        throw "Simulation not initialized";
      }
      if (!aiDefinition.teamName) {
        throw "Team name cannot be empty!";
      }
      var startSlot = this._battlefield.getStartSlot();
      if (!startSlot) {
        throw "No free space in the battlefield";
      }
      this._ultimateBattleDescriptor.addAiDefinition(aiDefinition);
      this._ultimateBattleDescriptor.setTeamMode(this.hasTeams());
      var tank = this._createTank(aiDefinition);
      tank.randomize(this.getRandom());
      tank.moveTo(startSlot.x, startSlot.y);
      this._tankList.push(tank);
      this._allTankList.push(tank);
      if (this._allTankList.length > 2) {
        this._timeLimit += 2000;
      }

      if (!this._teamMap[aiDefinition.teamName]) {
        this._teamMap[aiDefinition.teamName] = new _Team2.default(aiDefinition.teamName);
        this._teamList.push(this._teamMap[aiDefinition.teamName]);
      }
      this._teamMap[aiDefinition.teamName].addTank(tank);

      var ai = this._createAiWrapper(tank, aiDefinition);
      this._aiList.push(ai);

      return ai;
    }

    /**
     * Set speed multiplier of the simulation. Setting to `2`means that everything will be
     * two times faster than usual. Setting to `0.5` will simulate the battle 2 times slower
     * than usual
     * @param {Number} multiplier - simulation speed multiplier
     */

  }, {
    key: "setSpeed",
    value: function setSpeed(v) {
      this._speedMultiplier = Math.max(0.01, Number(v));
      this._perfMon.setSimulationStepDuration(this._simulationStepDuration / this._speedMultiplier);
      this._renderer.setSpeed(v);
    }

    /**
     * Sets quality of renderer controlled by simulation object.
     * You can specify a value between 0 (lowest quality) and 1 (highest quality)
     * or allow the simulation to adjust it automatically by passing 'auto' string
     * Automatic quality adjustment try to keep the speed of the animation at proper level.
     * If simulation is lagging, quality will be reduced to ensure that the simulation
     * does not take longer than it should
     * @param {Number|String} qualityLevel - number between 0 and 1 or 'auto' string
     */

  }, {
    key: "setRendererQuality",
    value: function setRendererQuality(v) {
      if (isNaN(v) && v != 'auto') return;
      if (!isNaN(v)) {
        v = Math.min(1, Math.max(0, v));
      }
      this._rendererQuality = v;
    }

    /**
     * Stops battle simulation. It also stops rendering loop.
     * After calling this method you should not try to call
     * start to resume the battle but rather create a new
     * Simulation object and initialize it from the beginning
     */

  }, {
    key: "stop",
    value: function stop() {
      this._isRunning = false;
      this._perfMon.stop();
      this._renderer.stop();
      if (this._simulationTimeout) {
        clearTimeout(this._simulationTimeout);
        this._simulationTimeout = null;
      }
      if (this._renderInterval) {
        clearInterval(this._renderInterval);
        this._renderInterval = null;
      }
      var ai = void 0,
          i = void 0;
      for (i = 0; i < this._aiList.length; i++) {
        ai = this._aiList[i];
        if (!ai) continue;
        ai.deactivate();
      }
      this._aiList = [];
    }

    /**
     * Allow adding a callback that will be called after each step of simulation
     * processing loop. The callback takes no arguments. The frequency of this event
     * depends on simulation speed.
     * @param {Function} callback - callback that will be called on each event occurence.
     * @see `Simulation.setSpeed()`
     */

  }, {
    key: "onStep",
    value: function onStep(callback) {
      this._onSimulationStepCallback.push(callback);
    }

    /**
     * Allow adding a callback that will be called after each refresh of the renderer.
     * The callback takes no arguments. `onRender` and `onStep` event are not synchronized
     * and may be called at different intervals. Increasing of animation speed will not
     * increase rendering frequency. Rendering frequency is affected by quality of
     * rendering parameter
     * @param {Function} callback - callback that will be called on each event occurence.
     * @see `Simulation.setSpeed()`
     * @see `Simulation.setRendererQuality()`
     */

  }, {
    key: "onRender",
    value: function onRender(callback) {
      this._onRenderStepCallback.push(callback);
    }

    /**
     * Allow adding a callback that will be called when the battle is started.
     * It is executed after initialization of all AI Scripts, just before
     * first step of simulation processing loop. The callback takes no arguments.
     * @param {Function} callback - callback that will be called on each event occurence.
     */

  }, {
    key: "onStart",
    value: function onStart(callback) {
      this._onStartCallback.push(callback);
    }

    /**
     * Allow adding a callback that will be called when the battle is over.
     * The callback takes no arguments.
     * @param {Function} callback - callback that will be called on each event occurence.
     */

  }, {
    key: "onFinish",
    value: function onFinish(callback) {
      this._onFinishCallback.push(callback);
    }

    /**
     * Allow adding a callback that will be called when an error occur.
     * The callback takes one arguments: error message
     * @param {Function} callback - callback that will be called on each event occurence.
     */

  }, {
    key: "onError",
    value: function onError(callback) {
      this._onErrorCallback.push(callback);
    }

    /**
     * Create Ultimate Battle Descriptor that contains all data requied to replay
     * the battle and reflect its exact course.
     * @return UltimateBattleDescriptor object
     */

  }, {
    key: "createUltimateBattleDescriptor",
    value: function createUltimateBattleDescriptor() {
      return this._ultimateBattleDescriptor.clone();
    }

    /**
     * @return true if at least two tanks are cooperating within one team
     */

  }, {
    key: "hasTeams",
    value: function hasTeams() {
      return this._teamList.length != this._tankList.length;
    }
  }, {
    key: "_activateAi",
    value: function _activateAi(done, error) {
      this._runInSequence(this._aiList, 'activate', this._rng(), done, error);
    }
  }, {
    key: "_updateAi",
    value: function _updateAi(done, error) {
      this._runInSequence(this._aiList, 'simulationStep', null, done, error);
    }
  }, {
    key: "_runInSequence",
    value: function _runInSequence(objectList, methodName, argument, done, error) {
      if (objectList.length == 0) {
        return done();
      }
      function wrapCallback() {
        var args = [];
        var callback = arguments[1];
        var self = arguments[0];
        for (var i = 2; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        return function (args2) {
          callback.apply(self, args.concat(args2));
        };
      }

      var self = null;
      var doneWrapper = wrapCallback(self, done);
      var errorWrapper = wrapCallback(self, error);

      var c = void 0;
      if (argument) {
        c = wrapCallback(objectList[objectList.length - 1], objectList[objectList.length - 1][methodName], argument, doneWrapper, errorWrapper);
      } else {
        c = wrapCallback(objectList[objectList.length - 1], objectList[objectList.length - 1][methodName], doneWrapper, errorWrapper);
      }
      for (var i = objectList.length - 2; i >= 0; i--) {
        if (argument) {
          c = wrapCallback(objectList[i], objectList[i][methodName], argument, c, errorWrapper);
        } else {
          c = wrapCallback(objectList[i], objectList[i][methodName], c, errorWrapper);
        }
      }
      c();
    }
  }, {
    key: "_updateModel",
    value: function _updateModel() {
      var i = void 0,
          tank = void 0,
          bullet = void 0,
          ai = void 0;

      for (i = 0; i < this._tankList.length; i++) {
        tank = this._tankList[i];
        if (!tank) continue;
        tank.simulationStep(this._collisionResolver);
      }

      var killCount = 0;
      for (i = 0; i < this._tankList.length; i++) {
        tank = this._tankList[i];
        if (!tank) continue;
        if (tank.energy <= 0) {
          killCount++;
          this._tankList[i] = null;
          this._explodedTankList.push(tank);
          this._collisionResolver.removeTank(tank);
          this._eventStore.add("tank_" + tank.id, {
            type: "destroy",
            tank: tank
          });
        }
      }
      var newAiList = [];
      for (i = 0; i < this._aiList.length; i++) {
        ai = this._aiList[i];
        if (!ai) continue;
        if (ai.tank.energy <= 0) {
          this._aiList[i] = null;
          ai.deactivate();
          continue;
        }
        newAiList.push(ai);
      }
      this._aiList = newAiList;

      for (i = 0; i < this._tankList.length; i++) {
        tank = this._tankList[i];
        if (!tank) continue;
        if (tank.isShooting) {
          var power = tank.handleShoot();
          bullet = this._createBullet(tank, power);
          this._bulletList.push(bullet);
          this._eventStore.add("tank_" + tank.id, {
            type: "shoot",
            tank: tank,
            bullet: bullet
          });
        }
      }
      for (i = 0; i < this._tankList.length; i++) {
        tank = this._tankList[i];
        if (!tank) continue;
        for (var j = 0; j < killCount; j++) {
          tank.onSurviveScore();
        }
      }
      var hitTest = void 0;
      for (i = 0; i < this._bulletList.length; i++) {
        bullet = this._bulletList[i];
        if (!bullet) continue;
        bullet.simulationStep();
        hitTest = this._collisionResolver.hitTestBullet(bullet);
        if (hitTest) {
          this._bulletList[i] = null;
          this._explodedBulletList.push(bullet);
          this._collisionResolver.removeBullet(bullet);
          this._eventStore.add("bullet_" + bullet.id, {
            type: "explode",
            bullet: bullet
          });
        }
      }
      for (i in this._teamMap) {
        this._teamMap[i].processMessages();
      }
    }
  }, {
    key: "_updateView",
    value: function _updateView() {
      if (this._rendererQuality == 'auto') {
        this._renderer.quality = this._perfMon.qualityLevel;
      } else {
        this._renderer.quality = this._rendererQuality;
      }
      var i = void 0,
          tank = void 0,
          bullet = void 0;
      this._renderer.preRender();
      this._renderer.renderClock(this._timeElapsed, this._timeLimit);
      for (i = 0; i < this._tankList.length; i++) {
        tank = this._tankList[i];
        if (!tank) continue;
        this._renderer.renderTank(tank, this._eventStore.get("tank_" + tank.id));
      }
      for (i = 0; i < this._bulletList.length; i++) {
        bullet = this._bulletList[i];
        if (!bullet) continue;
        this._renderer.renderBullet(bullet, this._eventStore.get("bullet_" + bullet.id));
      }
      while (this._explodedTankList.length) {
        tank = this._explodedTankList.pop();
        this._renderer.renderTank(tank, this._eventStore.get("tank_" + tank.id));
      }
      while (this._explodedBulletList.length) {
        bullet = this._explodedBulletList.pop();
        this._renderer.renderBullet(bullet, this._eventStore.get("bullet_" + bullet.id));
      }
      this._renderer.renderTankStats(this._allTankList);
      this._renderer.postRender();
      for (i = 0; i < this._onRenderStepCallback.length; i++) {
        this._onRenderStepCallback[i]();
      }this._eventStore.clear();
    }
  }, {
    key: "_getTeamsLeft",
    value: function _getTeamsLeft() {
      var teamsLeft = 0;
      for (var i in this._teamMap) {
        if (!this._teamMap[i].isAlive) continue;
        teamsLeft++;
      }
      return teamsLeft;
    }
  }, {
    key: "_createAiWrapper",
    value: function _createAiWrapper(tank, aiDefinition) {
      return new _AiWrapper2.default(tank, aiDefinition);
    }
  }, {
    key: "_createTank",
    value: function _createTank(aiDefinition) {
      var tank = new _Tank2.default(aiDefinition, this._nextTankId++);
      return tank;
    }
  }, {
    key: "_createBullet",
    value: function _createBullet(owner, power) {
      var bullet = new _Bullet2.default(owner, this._nextBulletId++, power);
      return bullet;
    }
  }, {
    key: "tankList",
    get: function get() {
      return this._allTankList;
    }

    /**
     * @return list of teams
     */

  }, {
    key: "teamList",
    get: function get() {
      return this._teamList;
    }

    /**
     * @return renderer attached to the simulation
     */

  }, {
    key: "renderer",
    get: function get() {
      return this._renderer;
    }
  }, {
    key: "battlefield",
    get: function get() {
      return this._battlefield;
    }

    /**
     * @return amount of time that has elapsed from the beginning of the battle (in milliseconds)
     */

  }, {
    key: "timeElapsed",
    get: function get() {
      return this._timeElapsed;
    }

    /**
     * @return maximum duration of the battle (in milliseconds). The battle will be over after that time.
     */

  }, {
    key: "timeLimit",
    get: function get() {
      return this._timeLimit;
    },
    set: function set(v) {
      this._timeLimit = v;
    }
  }]);

  return Simulation;
}();

exports.default = Simulation;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _seedrandom = __webpack_require__(5);

var _seedrandom2 = _interopRequireDefault(_seedrandom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function normalizeAngle(a) {
  while (a > 180) {
    a -= 360;
  }while (a < -180) {
    a += 360;
  }return a;
}

/**
 * Object represents a tank that is involved in the battle during simulation
 */

var Tank = function () {

  /**
   * Constructor should not be called directly but through
   * `Simulation.addTank()` method
   * @param {AiDefinition} aiDefinition - definition of tank's AI Script
   * @param {Number} id - unique id of the tank
   * @param {Team} team - reference to team object where the tank belongs
   */
  function Tank(aiDefinition, id) {
    _classCallCheck(this, Tank);

    if ((typeof aiDefinition === 'undefined' ? 'undefined' : _typeof(aiDefinition)) != 'object') {
      throw "AI definition must be an object";
    }
    this._id = id;
    this._name = aiDefinition.name;
    this._team = null;
    this._maxEnergy = 100;
    this._energy = this._maxEnergy;
    this._x = 0;
    this._y = 0;
    this._lastX = 0;
    this._lastY = 0;
    this._angle = 0;
    this._gunAngle = 0;
    this._radarAngle = 0;
    this._throttle = 0;
    this._actualThrottle = 0;
    this._speed = 0;
    this._turn = 0;
    this._gunTurn = 0;
    this._radarTurn = 0;
    this._wallHit = false;
    this._enemyHit = false;
    this._allyHit = false;
    this._beingRammed = false;
    this._radarRange = 300;
    this._radarFocal = 6;
    this._enemySpot = null;
    this._allySpot = null;
    this._bulletsSpot = [];
    this._gunReloadTime = 70;
    this._gunTimer = 0;
    this._shootingPower = 0;
    this._targetingAlarmTimer = 0;
    this._debugData = {};
    this._score = 0;
    this._state = null;
    this._hasBoost = false;
    this._maxBoost = 400;
    this._boost = this._maxBoost;
    this._wallDistance = null;
    this._skin = 'zebra';
  }

  /**
   * @return unique id of the tank
   */


  _createClass(Tank, [{
    key: 'onEnemyHitScore',
    value: function onEnemyHitScore(damage) {
      this._score += damage;
    }
  }, {
    key: 'onEnemyKillScore',
    value: function onEnemyKillScore() {
      this._score += 20;
    }
  }, {
    key: 'onSurviveScore',
    value: function onSurviveScore() {
      this._score += 10;
    }

    /**
     * @return initial amount of the energy
     */

  }, {
    key: 'setThrottle',
    value: function setThrottle(v) {
      this._throttle = Math.min(1, Math.max(-1, v));
    }
  }, {
    key: 'setTurn',
    value: function setTurn(v) {
      this._turn = Math.min(1, Math.max(-1, v));
    }
  }, {
    key: 'setGunTurn',
    value: function setGunTurn(v) {
      this._gunTurn = Math.min(1, Math.max(-1, v));
    }
  }, {
    key: 'setRadarTurn',
    value: function setRadarTurn(v) {
      this._radarTurn = Math.min(1, Math.max(-1, v));
    }
  }, {
    key: 'setBoost',
    value: function setBoost(v) {
      this._hasBoost = v ? true : false;
    }
  }, {
    key: 'setDebugData',
    value: function setDebugData(v) {
      this._debugData = v;
    }
  }, {
    key: 'onWallHit',
    value: function onWallHit() {
      this._wallHit = true;
      this.onDamage(0.2);
    }
  }, {
    key: 'onEnemyHit',
    value: function onEnemyHit() {
      this._enemyHit = true;
      this.onDamage(0.2);
    }
  }, {
    key: 'onAllyHit',
    value: function onAllyHit() {
      this._allyHit = true;
      this.onDamage(0.2);
    }
  }, {
    key: 'onBeingRam',
    value: function onBeingRam(speed) {
      this._beingRammed = true;
      this.onDamage(0.1 + Math.round(speed * 8) * 0.1);
    }
  }, {
    key: 'onEnemySpot',
    value: function onEnemySpot(enemy) {
      this._enemySpot = enemy;
    }
  }, {
    key: 'onAllySpot',
    value: function onAllySpot(ally) {
      this._allySpot = ally;
    }
  }, {
    key: 'onBulletSpot',
    value: function onBulletSpot(bullet) {
      this._bulletsSpot.push(bullet);
    }
  }, {
    key: 'onWallSpot',
    value: function onWallSpot(distance) {
      this._wallDistance = distance;
    }
  }, {
    key: 'onTargetingAlarm',
    value: function onTargetingAlarm() {
      this._targetingAlarmTimer = 3;
    }
  }, {
    key: 'isAlly',
    value: function isAlly(tank) {
      if (!this._team) return false;
      if (!tank.team) return false;
      return this._team.name == tank.team.name;
    }

    /**
     * @return true if tank is on the radar of an enemy. Otherwise false
     */

  }, {
    key: 'onDamage',
    value: function onDamage(damage) {
      this._energy = Math.max(0, this._energy - damage);
    }
  }, {
    key: 'moveTo',
    value: function moveTo(xPosition, yPosition) {
      this._x = xPosition;
      this._y = yPosition;
      this._lastX = xPosition;
      this._lastY = yPosition;
    }

    /**
     * @return debug data set by AI script via `control.DEBUG`
     */

  }, {
    key: 'handleShoot',
    value: function handleShoot() {
      var value = this._shootingPower;
      this._shootingPower = 0;
      return value;
    }
  }, {
    key: 'shoot',
    value: function shoot(value) {
      value = Math.max(0.1, Math.min(1, value));
      if (!this.isReloading) {
        this._gunTimer = Math.round(value * this._gunReloadTime);
        this._shootingPower = value;
      }
    }
  }, {
    key: 'randomize',
    value: function randomize(seed) {
      if (seed === undefined) {
        seed = new Date().getTime() + Math.round(Math.random() * 1000000);
      }
      var rng = (0, _seedrandom2.default)(seed);
      this._angle = Math.round(360 * rng()) - 180;
    }
  }, {
    key: 'init',
    value: function init(settings) {
      if (settings && settings.SKIN) {
        this._skin = settings.SKIN;
      }
    }
  }, {
    key: 'simulationStep',
    value: function simulationStep(collisionResolver) {
      var self = this;

      if (self._energy == 0) {
        return;
      }

      if (self._hasBoost && self._boost > 0) {
        self._boost--;
      }

      var oldX = self._x;
      var oldY = self._y;

      var maxSpeed = self._throttle * (self.hasBoost ? 4 : 2);
      var accelerationFactor = self.hasBoost ? 10 : 20;
      self._actualThrottle += (maxSpeed - self._actualThrottle) / accelerationFactor;

      var v = self._actualThrottle;
      var rotation = self._angle * (Math.PI / 180);
      self._x += v * Math.cos(rotation);
      self._y += v * Math.sin(rotation);
      self._wallHit = false;
      self._enemyHit = false;
      self._allyHit = false;
      var hitTest = !collisionResolver.checkTank(self);
      if (hitTest) {
        self._x = oldX;
        self._y = oldY;
        self._actualThrottle = 0;
      }
      if (this._beingRammed) {
        // must be done later because ramming is
        // reported after collisionResolver.checkTank(self)
        // it is detected when collisionResolver.checkTank
        // is called for attacing tank
        self._enemyHit = true;
        this._beingRammed = false;
      }

      self._angle += 2 * self._turn;
      self._radarAngle += 6 * self._radarTurn;
      self._gunAngle += 3 * self._gunTurn;

      self._angle = normalizeAngle(self._angle);
      self._radarAngle = normalizeAngle(self._radarAngle);
      self._gunAngle = normalizeAngle(self._gunAngle);
      collisionResolver.updateTank(self);

      self._enemySpot = null;
      self._allySpot = null;
      self._wallDistance = null;
      self._targetingAlarmTimer = Math.max(0, self._targetingAlarmTimer - 1);
      collisionResolver.scanTanks(self);
      collisionResolver.scanBullets(self);
      collisionResolver.scanWalls(self);

      if (self._gunTimer > 0) {
        self._gunTimer--;
      }

      var enemyData = null;
      var allyData = null;
      var bulletsData = [];
      while (self._bulletsSpot.length) {
        var bullet = self._bulletsSpot.shift();
        bulletsData.push({
          id: bullet.id,
          x: bullet.x,
          y: bullet.y,
          angle: bullet.angle,
          speed: bullet.speed,
          damage: bullet.damage
        });
      }

      if (self._enemySpot) {
        enemyData = {
          id: self._enemySpot.id,
          x: self._enemySpot.x,
          y: self._enemySpot.y,
          angle: self._enemySpot.angle,
          speed: self._enemySpot.speed,
          energy: self._enemySpot.energy
        };
      }
      if (self._allySpot) {
        allyData = {
          id: self._allySpot.id,
          x: self._allySpot.x,
          y: self._allySpot.y,
          angle: self._allySpot.angle,
          speed: self._allySpot.speed,
          energy: self._allySpot.energy
        };
      }

      var dx = self._x - self._lastX;
      var dy = self._y - self._lastY;
      self._speed = Math.sqrt(dx * dx + dy * dy);

      self._lastX = self._x;
      self._lastY = self._y;

      self._state = {
        x: self._x,
        y: self._y,
        angle: self._angle,
        energy: self._energy,
        boost: self._boost,
        collisions: {
          wall: self._wallHit,
          enemy: self._enemyHit,
          ally: self._allyHit
        },
        radar: {
          angle: self._radarAngle,
          targetingAlarm: self.targetingAlarm,
          wallDistance: self._wallDistance,
          enemy: enemyData,
          ally: allyData,
          bullets: bulletsData
        },
        gun: {
          angle: self._gunAngle,
          reloading: self.isReloading
        },
        radio: {
          inbox: self.team ? self.team.getMessages(self.id) : []
        }
      };
    }
  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }
    /**
     * @return skin name applied to the tank
     */

  }, {
    key: 'skin',
    get: function get() {
      return this._skin;
    }

    /**
     * @return an object that represents current state of the tank
     */

  }, {
    key: 'state',
    get: function get() {
      return this._state;
    }

    /**
     * @return amount of energy that the tank has
     */

  }, {
    key: 'energy',
    get: function get() {
      return this._energy;
    }

    /**
     * @return current score of the tank
     */

  }, {
    key: 'score',
    get: function get() {
      return this._score;
    }
  }, {
    key: 'maxEnergy',
    get: function get() {
      return this._maxEnergy;
    }

    /**
     * @return range of tank's radar
     */

  }, {
    key: 'radarRange',
    get: function get() {
      return this._radarRange;
    }

    /**
     * @return angle that radar field covers
     */

  }, {
    key: 'radarFocal',
    get: function get() {
      return this._radarFocal;
    }

    /**
     * @return name of the tank
     */

  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }

    /**
     * @return full name contains name of the tank and its unique ID
     */

  }, {
    key: 'fullName',
    get: function get() {
      return this._name + " #" + this._id;
    }

    /**
     * @return name of the team
     */

  }, {
    key: 'team',
    get: function get() {
      return this._team;
    }

    /**
     * @return x position of the tank
     */

  }, {
    key: 'x',
    get: function get() {
      return this._x;
    }

    /**
     * @return y position of the tank
     */

  }, {
    key: 'y',
    get: function get() {
      return this._y;
    }

    /**
     * @return linear speed of the tank
     */

  }, {
    key: 'speed',
    get: function get() {
      return this._speed;
    }
  }, {
    key: 'gunLength',
    get: function get() {
      return 25;
    }

    /**
     * @return rotation of tank's body
     */

  }, {
    key: 'angle',
    get: function get() {
      return this._angle;
    }

    /**
     * @return current throttle of the tank
     */

  }, {
    key: 'throttle',
    get: function get() {
      return this._throttle;
    }
    /**
     * @return true if tank has boost turned on. Otherwise false
     */

  }, {
    key: 'hasBoost',
    get: function get() {
      return this._hasBoost && this._boost > 0;
    }

    /**
     * @return amount of boost that has left
     */

  }, {
    key: 'boost',
    get: function get() {
      return this._boost;
    }

    /**
     * @return initial amount of boost
     */

  }, {
    key: 'maxBoost',
    get: function get() {
      return this._maxBoost;
    }

    /**
     * @return rotation of tank's gun (relative to tank's body)
     */

  }, {
    key: 'gunAngle',
    get: function get() {
      return this._gunAngle;
    }

    /**
     * @return rotation of tank's radar (relative to tank's body)
     */

  }, {
    key: 'radarAngle',
    get: function get() {
      return this._radarAngle;
    }
  }, {
    key: 'enemySpot',
    get: function get() {
      return this._enemySpot;
    }
  }, {
    key: 'allySpot',
    get: function get() {
      return this._allySpot;
    }
  }, {
    key: 'targetingAlarm',
    get: function get() {
      return this._targetingAlarmTimer > 0;
    }
  }, {
    key: 'debugData',
    get: function get() {
      return this._debugData;
    }
  }, {
    key: 'isShooting',
    get: function get() {
      return this._shootingPower > 0;
    }
  }, {
    key: 'shootingPower',
    get: function get() {
      return this._shootingPower;
    }
  }, {
    key: 'isReloading',
    get: function get() {
      return this._gunTimer > 0;
    }
  }]);

  return Tank;
}();

exports.default = Tank;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


(function (global, module, define) {

  function Alea(seed) {
    var me = this,
        mash = Mash();

    me.next = function () {
      var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
      me.s0 = me.s1;
      me.s1 = me.s2;
      return me.s2 = t - (me.c = t | 0);
    };

    // Apply the seeding algorithm from Baagoe.
    me.c = 1;
    me.s0 = mash(' ');
    me.s1 = mash(' ');
    me.s2 = mash(' ');
    me.s0 -= mash(seed);
    if (me.s0 < 0) {
      me.s0 += 1;
    }
    me.s1 -= mash(seed);
    if (me.s1 < 0) {
      me.s1 += 1;
    }
    me.s2 -= mash(seed);
    if (me.s2 < 0) {
      me.s2 += 1;
    }
    mash = null;
  }

  function copy(f, t) {
    t.c = f.c;
    t.s0 = f.s0;
    t.s1 = f.s1;
    t.s2 = f.s2;
    return t;
  }

  function impl(seed, opts) {
    var xg = new Alea(seed),
        state = opts && opts.state,
        prng = xg.next;
    prng.int32 = function () {
      return xg.next() * 0x100000000 | 0;
    };
    prng.double = function () {
      return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
    };
    prng.quick = prng;
    if (state) {
      if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }

  function Mash() {
    var n = 0xefc8249d;

    var mash = function mash(data) {
      data = data.toString();
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };

    return mash;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(0) && __webpack_require__(3)) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.alea = impl;
  }
})(undefined, ( false ? 'undefined' : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(0) // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function (global, module, define) {

  function XorGen(seed) {
    var me = this,
        strseed = '';

    me.x = 0;
    me.y = 0;
    me.z = 0;
    me.w = 0;

    // Set up generator function.
    me.next = function () {
      var t = me.x ^ me.x << 11;
      me.x = me.y;
      me.y = me.z;
      me.z = me.w;
      return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
    };

    if (seed === (seed | 0)) {
      // Integer seed.
      me.x = seed;
    } else {
      // String seed.
      strseed += seed;
    }

    // Mix in string seed, then discard an initial batch of 64 values.
    for (var k = 0; k < strseed.length + 64; k++) {
      me.x ^= strseed.charCodeAt(k) | 0;
      me.next();
    }
  }

  function copy(f, t) {
    t.x = f.x;
    t.y = f.y;
    t.z = f.z;
    t.w = f.w;
    return t;
  }

  function impl(seed, opts) {
    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };
    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(0) && __webpack_require__(3)) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xor128 = impl;
  }
})(undefined, ( false ? 'undefined' : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(0) // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function (global, module, define) {

  function XorGen(seed) {
    var me = this,
        strseed = '';

    // Set up generator function.
    me.next = function () {
      var t = me.x ^ me.x >>> 2;
      me.x = me.y;me.y = me.z;me.z = me.w;me.w = me.v;
      return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
    };

    me.x = 0;
    me.y = 0;
    me.z = 0;
    me.w = 0;
    me.v = 0;

    if (seed === (seed | 0)) {
      // Integer seed.
      me.x = seed;
    } else {
      // String seed.
      strseed += seed;
    }

    // Mix in string seed, then discard an initial batch of 64 values.
    for (var k = 0; k < strseed.length + 64; k++) {
      me.x ^= strseed.charCodeAt(k) | 0;
      if (k == strseed.length) {
        me.d = me.x << 10 ^ me.x >>> 4;
      }
      me.next();
    }
  }

  function copy(f, t) {
    t.x = f.x;
    t.y = f.y;
    t.z = f.z;
    t.w = f.w;
    t.v = f.v;
    t.d = f.d;
    return t;
  }

  function impl(seed, opts) {
    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };
    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(0) && __webpack_require__(3)) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xorwow = impl;
  }
})(undefined, ( false ? 'undefined' : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(0) // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function (global, module, define) {

  function XorGen(seed) {
    var me = this;

    // Set up generator function.
    me.next = function () {
      // Update xor generator.
      var X = me.x,
          i = me.i,
          t,
          v,
          w;
      t = X[i];t ^= t >>> 7;v = t ^ t << 24;
      t = X[i + 1 & 7];v ^= t ^ t >>> 10;
      t = X[i + 3 & 7];v ^= t ^ t >>> 3;
      t = X[i + 4 & 7];v ^= t ^ t << 7;
      t = X[i + 7 & 7];t = t ^ t << 13;v ^= t ^ t << 9;
      X[i] = v;
      me.i = i + 1 & 7;
      return v;
    };

    function init(me, seed) {
      var j,
          w,
          X = [];

      if (seed === (seed | 0)) {
        // Seed state array using a 32-bit integer.
        w = X[0] = seed;
      } else {
        // Seed state using a string.
        seed = '' + seed;
        for (j = 0; j < seed.length; ++j) {
          X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
        }
      }
      // Enforce an array length of 8, not all zeroes.
      while (X.length < 8) {
        X.push(0);
      }for (j = 0; j < 8 && X[j] === 0; ++j) {}
      if (j == 8) w = X[7] = -1;else w = X[j];

      me.x = X;
      me.i = 0;

      // Discard an initial 256 values.
      for (j = 256; j > 0; --j) {
        me.next();
      }
    }

    init(me, seed);
  }

  function copy(f, t) {
    t.x = f.x.slice();
    t.i = f.i;
    return t;
  }

  function impl(seed, opts) {
    if (seed == null) seed = +new Date();
    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };
    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if (state.x) copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(0) && __webpack_require__(3)) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xorshift7 = impl;
  }
})(undefined, ( false ? 'undefined' : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(0) // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function (global, module, define) {

  function XorGen(seed) {
    var me = this;

    // Set up generator function.
    me.next = function () {
      var w = me.w,
          X = me.X,
          i = me.i,
          t,
          v;
      // Update Weyl generator.
      me.w = w = w + 0x61c88647 | 0;
      // Update xor generator.
      v = X[i + 34 & 127];
      t = X[i = i + 1 & 127];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      // Update Xor generator array state.
      v = X[i] = v ^ t;
      me.i = i;
      // Result is the combination.
      return v + (w ^ w >>> 16) | 0;
    };

    function init(me, seed) {
      var t,
          v,
          i,
          j,
          w,
          X = [],
          limit = 128;
      if (seed === (seed | 0)) {
        // Numeric seeds initialize v, which is used to generates X.
        v = seed;
        seed = null;
      } else {
        // String seeds are mixed into v and X one character at a time.
        seed = seed + '\0';
        v = 0;
        limit = Math.max(limit, seed.length);
      }
      // Initialize circular array and weyl value.
      for (i = 0, j = -32; j < limit; ++j) {
        // Put the unicode characters into the array, and shuffle them.
        if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
        // After 32 shuffles, take v as the starting w value.
        if (j === 0) w = v;
        v ^= v << 10;
        v ^= v >>> 15;
        v ^= v << 4;
        v ^= v >>> 13;
        if (j >= 0) {
          w = w + 0x61c88647 | 0; // Weyl.
          t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.
          i = 0 == t ? i + 1 : 0; // Count zeroes.
        }
      }
      // We have detected all zeroes; make the key nonzero.
      if (i >= 128) {
        X[(seed && seed.length || 0) & 127] = -1;
      }
      // Run the generator 512 times to further mix the state before using it.
      // Factoring this as a function slows the main generator, so it is just
      // unrolled here.  The weyl generator is not advanced while warming up.
      i = 127;
      for (j = 4 * 128; j > 0; --j) {
        v = X[i + 34 & 127];
        t = X[i = i + 1 & 127];
        v ^= v << 13;
        t ^= t << 17;
        v ^= v >>> 15;
        t ^= t >>> 12;
        X[i] = v ^ t;
      }
      // Storing state as object members is faster than using closure variables.
      me.w = w;
      me.X = X;
      me.i = i;
    }

    init(me, seed);
  }

  function copy(f, t) {
    t.i = f.i;
    t.w = f.w;
    t.X = f.X.slice();
    return t;
  };

  function impl(seed, opts) {
    if (seed == null) seed = +new Date();
    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };
    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if (state.X) copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(0) && __webpack_require__(3)) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xor4096 = impl;
  }
})(undefined, // window object or global
( false ? 'undefined' : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(0) // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function (global, module, define) {

  function XorGen(seed) {
    var me = this,
        strseed = '';

    // Set up generator function.
    me.next = function () {
      var b = me.b,
          c = me.c,
          d = me.d,
          a = me.a;
      b = b << 25 ^ b >>> 7 ^ c;
      c = c - d | 0;
      d = d << 24 ^ d >>> 8 ^ a;
      a = a - b | 0;
      me.b = b = b << 20 ^ b >>> 12 ^ c;
      me.c = c = c - d | 0;
      me.d = d << 16 ^ c >>> 16 ^ a;
      return me.a = a - b | 0;
    };

    /* The following is non-inverted tyche, which has better internal
     * bit diffusion, but which is about 25% slower than tyche-i in JS.
    me.next = function() {
      var a = me.a, b = me.b, c = me.c, d = me.d;
      a = (me.a + me.b | 0) >>> 0;
      d = me.d ^ a; d = d << 16 ^ d >>> 16;
      c = me.c + d | 0;
      b = me.b ^ c; b = b << 12 ^ d >>> 20;
      me.a = a = a + b | 0;
      d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
      me.c = c = c + d | 0;
      b = b ^ c;
      return me.b = (b << 7 ^ b >>> 25);
    }
    */

    me.a = 0;
    me.b = 0;
    me.c = 2654435769 | 0;
    me.d = 1367130551;

    if (seed === Math.floor(seed)) {
      // Integer seed.
      me.a = seed / 0x100000000 | 0;
      me.b = seed | 0;
    } else {
      // String seed.
      strseed += seed;
    }

    // Mix in string seed, then discard an initial batch of 64 values.
    for (var k = 0; k < strseed.length + 20; k++) {
      me.b ^= strseed.charCodeAt(k) | 0;
      me.next();
    }
  }

  function copy(f, t) {
    t.a = f.a;
    t.b = f.b;
    t.c = f.c;
    t.d = f.d;
    return t;
  };

  function impl(seed, opts) {
    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };
    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) == 'object') copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(0) && __webpack_require__(3)) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.tychei = impl;
  }
})(undefined, ( false ? 'undefined' : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(0) // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (pool, math) {
  //
  // The following constants are related to IEEE 754 limits.
  //

  // Detect the global object, even if operating in strict mode.
  // http://stackoverflow.com/a/14387057/265298
  var global = (0, eval)('this'),
      width = 256,
      // each RC4 output is 0 <= x < 256
  chunks = 6,
      // at least six RC4 outputs for each double
  digits = 52,
      // there are 52 significant digits in a double
  rngname = 'random',
      // rngname: name for Math.random and Math.seedrandom
  startdenom = math.pow(width, chunks),
      significance = math.pow(2, digits),
      overflow = significance * 2,
      mask = width - 1,
      nodecrypto; // node.js crypto module, initialized at the bottom.

  //
  // seedrandom()
  // This is the seedrandom function described above.
  //
  function seedrandom(seed, options, callback) {
    var key = [];
    options = options == true ? { entropy: true } : options || {};

    // Flatten the seed string or build one from local entropy if needed.
    var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed, 3), key);

    // Use the seed to initialize an ARC4 generator.
    var arc4 = new ARC4(key);

    // This function returns a random double in [0, 1) that contains
    // randomness in every bit of the mantissa of the IEEE 754 value.
    var prng = function prng() {
      var n = arc4.g(chunks),
          // Start with a numerator n < 2 ^ 48
      d = startdenom,
          //   and denominator d = 2 ^ 48.
      x = 0; //   and no 'extra last byte'.
      while (n < significance) {
        // Fill up all significant digits by
        n = (n + x) * width; //   shifting numerator and
        d *= width; //   denominator and generating a
        x = arc4.g(1); //   new least-significant-byte.
      }
      while (n >= overflow) {
        // To avoid rounding up, before adding
        n /= 2; //   last byte, shift everything
        d /= 2; //   right using integer math until
        x >>>= 1; //   we have exactly the desired bits.
      }
      return (n + x) / d; // Form the number within [0, 1).
    };

    prng.int32 = function () {
      return arc4.g(4) | 0;
    };
    prng.quick = function () {
      return arc4.g(4) / 0x100000000;
    };
    prng.double = prng;

    // Mix the randomness into accumulated entropy.
    mixkey(tostring(arc4.S), pool);

    // Calling convention: what to return as a function of prng, seed, is_math.
    return (options.pass || callback || function (prng, seed, is_math_call, state) {
      if (state) {
        // Load the arc4 state from the given state if it has an S array.
        if (state.S) {
          copy(state, arc4);
        }
        // Only provide the .state method if requested via options.state.
        prng.state = function () {
          return copy(arc4, {});
        };
      }

      // If called as a method of Math (Math.seedrandom()), mutate
      // Math.random because that is how seedrandom.js has worked since v1.0.
      if (is_math_call) {
        math[rngname] = prng;return seed;
      }

      // Otherwise, it is a newer calling convention, so return the
      // prng directly.
      else return prng;
    })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
  }
  math['seed' + rngname] = seedrandom;

  //
  // ARC4
  //
  // An ARC4 implementation.  The constructor takes a key in the form of
  // an array of at most (width) integers that should be 0 <= x < (width).
  //
  // The g(count) method returns a pseudorandom integer that concatenates
  // the next (count) outputs from ARC4.  Its return value is a number x
  // that is in the range 0 <= x < (width ^ count).
  //
  function ARC4(key) {
    var t,
        keylen = key.length,
        me = this,
        i = 0,
        j = me.i = me.j = 0,
        s = me.S = [];

    // The empty key [] is treated as [0].
    if (!keylen) {
      key = [keylen++];
    }

    // Set up S using the standard key scheduling algorithm.
    while (i < width) {
      s[i] = i++;
    }
    for (i = 0; i < width; i++) {
      s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
      s[j] = t;
    }

    // The "g" method returns the next (count) outputs as one number.
    (me.g = function (count) {
      // Using instance members instead of closure state nearly doubles speed.
      var t,
          r = 0,
          i = me.i,
          j = me.j,
          s = me.S;
      while (count--) {
        t = s[i = mask & i + 1];
        r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
      }
      me.i = i;me.j = j;
      return r;
      // For robust unpredictability, the function call below automatically
      // discards an initial batch of values.  This is called RC4-drop[256].
      // See http://google.com/search?q=rsa+fluhrer+response&btnI
    })(width);
  }

  //
  // copy()
  // Copies internal state of ARC4 to or from a plain object.
  //
  function copy(f, t) {
    t.i = f.i;
    t.j = f.j;
    t.S = f.S.slice();
    return t;
  };

  //
  // flatten()
  // Converts an object tree to nested arrays of strings.
  //
  function flatten(obj, depth) {
    var result = [],
        typ = typeof obj === 'undefined' ? 'undefined' : _typeof(obj),
        prop;
    if (depth && typ == 'object') {
      for (prop in obj) {
        try {
          result.push(flatten(obj[prop], depth - 1));
        } catch (e) {}
      }
    }
    return result.length ? result : typ == 'string' ? obj : obj + '\0';
  }

  //
  // mixkey()
  // Mixes a string seed into a key that is an array of integers, and
  // returns a shortened string seed that is equivalent to the result key.
  //
  function mixkey(seed, key) {
    var stringseed = seed + '',
        smear,
        j = 0;
    while (j < stringseed.length) {
      key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
    }
    return tostring(key);
  }

  //
  // autoseed()
  // Returns an object for autoseeding, using window.crypto and Node crypto
  // module if available.
  //
  function autoseed() {
    try {
      var out;
      if (nodecrypto && (out = nodecrypto.randomBytes)) {
        // The use of 'out' to remember randomBytes makes tight minified code.
        out = out(width);
      } else {
        out = new Uint8Array(width);
        (global.crypto || global.msCrypto).getRandomValues(out);
      }
      return tostring(out);
    } catch (e) {
      var browser = global.navigator,
          plugins = browser && browser.plugins;
      return [+new Date(), global, plugins, global.screen, tostring(pool)];
    }
  }

  //
  // tostring()
  // Converts an array of charcodes to a string
  //
  function tostring(a) {
    return String.fromCharCode.apply(0, a);
  }

  //
  // When seedrandom.js is loaded, we immediately mix a few bits
  // from the built-in RNG into the entropy pool.  Because we do
  // not want to interfere with deterministic PRNG state later,
  // seedrandom will not call math.random on its own again after
  // initialization.
  //
  mixkey(math.random(), pool);

  //
  // Nodejs and AMD support: export the implementation as a module using
  // either convention.
  //
  if (( false ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
    module.exports = seedrandom;
    // When in node.js, try using crypto package for autoseeding.
    try {
      nodecrypto = __webpack_require__(22);
    } catch (ex) {}
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return seedrandom;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // End anonymous scope, and pass initial values.
})([], // pool: entropy pool starts empty
Math // math: package containing random, pow, and seedrandom
);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Team = function () {
  function Team(name) {
    _classCallCheck(this, Team);

    this._name = name;
    this._members = [];
    this._inboxMap = [];
    this._outboxMap = [];
  }

  _createClass(Team, [{
    key: "addTank",
    value: function addTank(tank) {
      if (tank.team) throw "Tank " + tank.fullName + " is already assigned to team " + tank.team.name;
      for (var i in this._members) {
        if (this._members[i].id == tank.id) return;
      }
      this._members.push(tank);
      tank._team = this;
      this._inboxMap[tank.id] = [];
      this._outboxMap[tank.id] = [];
    }
  }, {
    key: "getMessages",
    value: function getMessages(receiverId) {
      return this._outboxMap[receiverId];
    }
  }, {
    key: "sendMessages",
    value: function sendMessages(senderId, messages) {
      for (var i in this._inboxMap) {
        if (i == senderId) continue;
        this._inboxMap[i] = this._inboxMap[i].concat(messages);
      }
    }
  }, {
    key: "processMessages",
    value: function processMessages() {
      var i = void 0;
      for (i in this._inboxMap) {
        this._outboxMap[i] = this._inboxMap[i];
        this._inboxMap[i] = [];
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._members.length;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "aliveCount",
    get: function get() {
      var count = 0;
      for (var i = 0; i < this._members.length; i++) {
        if (this._members[i].energy > 0) {
          count++;
        }
      }
      return count;
    }
  }, {
    key: "score",
    get: function get() {
      var sum = 0;
      for (var i = 0; i < this._members.length; i++) {
        sum += this._members[i].score;
      }
      return sum;
    }
  }, {
    key: "energy",
    get: function get() {
      var sum = 0;
      for (var i = 0; i < this._members.length; i++) {
        sum += this._members[i].energy;
      }
      return sum;
    }
  }, {
    key: "maxEnergy",
    get: function get() {
      var sum = 0;
      for (var i = 0; i < this._members.length; i++) {
        sum += this._members[i].maxEnergy;
      }
      return sum;
    }
  }, {
    key: "isAlive",
    get: function get() {
      return this.aliveCount > 0;
    }
  }, {
    key: "members",
    get: function get() {
      return this._members;
    }
  }]);

  return Team;
}();

exports.default = Team;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullet = function () {
  function Bullet(owner, id, power) {
    _classCallCheck(this, Bullet);

    this._id = id;
    this._owner = owner;
    this._angle = owner.angle + owner.gunAngle;
    while (this._angle > 180) {
      this._angle -= 360;
    }while (this._angle < -180) {
      this._angle += 360;
    }this._x = owner.x + owner.gunLength * Math.cos(this._angle * (Math.PI / 180));
    this._y = owner.y + owner.gunLength * Math.sin(this._angle * (Math.PI / 180));
    this._speed = 4;
    this._power = power;
    this._damage = Math.round(1000 * power + 300 * power * power) * 0.01;
    this._exploded = false;
  }

  _createClass(Bullet, [{
    key: 'onWallHit',
    value: function onWallHit() {
      this._exploded = true;
    }
  }, {
    key: 'onEnemyHit',
    value: function onEnemyHit(enemy) {
      this._exploded = true;
      enemy.onDamage(this._damage);
    }
  }, {
    key: 'simulationStep',
    value: function simulationStep() {
      this._x += this._speed * Math.cos(this._angle * (Math.PI / 180));
      this._y += this._speed * Math.sin(this._angle * (Math.PI / 180));
    }
  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }
  }, {
    key: 'x',
    get: function get() {
      return this._x;
    }
  }, {
    key: 'y',
    get: function get() {
      return this._y;
    }
  }, {
    key: 'angle',
    get: function get() {
      return this._angle;
    }
  }, {
    key: 'speed',
    get: function get() {
      return this._speed;
    }
  }, {
    key: 'damage',
    get: function get() {
      return this._damage;
    }
  }, {
    key: 'power',
    get: function get() {
      return this._power;
    }
  }, {
    key: 'owner',
    get: function get() {
      return this._owner;
    }
  }, {
    key: 'exploded',
    get: function get() {
      return this._exploded;
    }
  }]);

  return Bullet;
}();

exports.default = Bullet;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _seedrandom = __webpack_require__(5);

var _seedrandom2 = _interopRequireDefault(_seedrandom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Battlefield = function () {
  function Battlefield(width, height) {
    _classCallCheck(this, Battlefield);

    this._width = null;
    this._height = null;
    this._startSlotList = [];
    this._offsetX = 0;
    this._offsetY = 0;
  }

  _createClass(Battlefield, [{
    key: "setSize",
    value: function setSize(width, height) {
      this._width = width - this.margin * 2;
      this._height = height - this.margin * 2;
    }
  }, {
    key: "randomize",
    value: function randomize(seed) {
      // remember to call it after setSize !!!
      if (seed === undefined) {
        seed = new Date().getTime() + Math.round(Math.random() * 1000000);
      }
      var rng = (0, _seedrandom2.default)(seed);

      this._offsetX = Math.round(rng() * 10000 - 5000);
      this._offsetY = Math.round(rng() * 10000 - 5000);

      // generate list of start slots
      this._startSlotList = [];
      var slotSize = 90;
      for (var x = this.minX + slotSize; x < this.maxX - slotSize; x += slotSize) {
        for (var y = this.minY + slotSize; y < this.maxY - slotSize; y += slotSize) {
          this._startSlotList.push({ x: x, y: y });
        }
      }
      // shuffle start slots
      var currentIndex = this._startSlotList.length,
          temporaryValue = void 0,
          randomIndex = void 0;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(rng() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this._startSlotList[currentIndex];
        this._startSlotList[currentIndex] = this._startSlotList[randomIndex];
        this._startSlotList[randomIndex] = temporaryValue;
      }
    }
  }, {
    key: "getStartSlot",
    value: function getStartSlot() {
      if (this._startSlotList.length) {
        return this._startSlotList.pop();
      }
      return null;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }, {
    key: "margin",
    get: function get() {
      return 25;
    }
  }, {
    key: "minX",
    get: function get() {
      return this._offsetX + this.margin;
    }
  }, {
    key: "minY",
    get: function get() {
      return this._offsetY + this.margin;
    }
  }, {
    key: "maxX",
    get: function get() {
      return this._offsetX + this._width + this.margin;
    }
  }, {
    key: "maxY",
    get: function get() {
      return this._offsetY + this._height + this.margin;
    }
  }, {
    key: "offsetX",
    get: function get() {
      return this._offsetX;
    }
  }, {
    key: "offsetY",
    get: function get() {
      return this._offsetY;
    }
  }]);

  return Battlefield;
}();

exports.default = Battlefield;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventStore = function () {
  function EventStore() {
    _classCallCheck(this, EventStore);

    this._data = [];
  }

  _createClass(EventStore, [{
    key: 'add',
    value: function add(index, event) {
      if (!this._data[index]) {
        this._data[index] = [];
      }
      this._data[index].push(event);
    }
  }, {
    key: 'get',
    value: function get(index) {
      if (!this._data[index]) {
        this._data[index] = [];
      }
      return this._data[index];
    }
  }, {
    key: 'clear',
    value: function clear(index) {
      this._data = [];
    }
  }]);

  return EventStore;
}();

exports.default = EventStore;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sat = __webpack_require__(28);

var _sat2 = _interopRequireDefault(_sat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CollisionResolver = function () {
  function CollisionResolver() {
    _classCallCheck(this, CollisionResolver);

    this._wallList = [];
    this._tankMap = [];
    this._bulletMap = [];
    this._radarBeamMap = [];
    this._battlefield = null;
  }

  _createClass(CollisionResolver, [{
    key: 'updateBattlefield',
    value: function updateBattlefield(battlefield) {
      this._battlefield = {
        minX: battlefield.minX,
        minY: battlefield.minY,
        maxX: battlefield.maxX,
        maxY: battlefield.maxY
      };
      var wall = void 0;
      wall = new _sat2.default.Box(new _sat2.default.Vector(battlefield.minX - 10, battlefield.minY), 10, battlefield.height).toPolygon();
      this._wallList.push(wall);
      wall = new _sat2.default.Box(new _sat2.default.Vector(battlefield.minX, battlefield.minY - 10), battlefield.width, 10).toPolygon();
      this._wallList.push(wall);
      wall = new _sat2.default.Box(new _sat2.default.Vector(battlefield.maxX, battlefield.minY), 10, battlefield.height).toPolygon();
      this._wallList.push(wall);
      wall = new _sat2.default.Box(new _sat2.default.Vector(battlefield.minX, battlefield.maxY), battlefield.width, 10).toPolygon();
      this._wallList.push(wall);
    }
  }, {
    key: 'updateTank',
    value: function updateTank(tank) {
      var tankShape = this._getTankShape(tank);
      tankShape.pos.x = tank.x;
      tankShape.pos.y = tank.y;
    }
  }, {
    key: 'removeBullet',
    value: function removeBullet(bullet) {
      this._bulletMap[bullet.id] = null;
    }
  }, {
    key: 'removeTank',
    value: function removeTank(tank) {
      this._tankMap[tank.id] = null;
      this._radarBeamMap[tank.id] = null;
    }
  }, {
    key: 'hitTestBullet',
    value: function hitTestBullet(bullet) {
      var bulletShape = this._getBulletShape(bullet);
      var tankShape = bullet.owner.energy ? this._getTankShape(bullet.owner) : null;

      bulletShape.pos.x = bullet.x;
      bulletShape.pos.y = bullet.y;

      var i = void 0;
      var hitTest = void 0;
      var wall = void 0;
      for (i in this._wallList) {
        wall = this._wallList[i];
        hitTest = _sat2.default.testCirclePolygon(bulletShape, wall);
        if (hitTest) {
          bullet.onWallHit();
          return true;
        }
      }
      var enemyShape = void 0;
      for (i in this._tankMap) {
        enemyShape = this._tankMap[i];
        if (!enemyShape) continue;
        if (enemyShape == tankShape) {
          continue;
        }
        hitTest = _sat2.default.testCircleCircle(bulletShape, enemyShape);
        if (hitTest) {
          var energyBefore = enemyShape.tank.energy;
          bullet.onEnemyHit(enemyShape.tank);
          var areAllies = bullet.owner.isAlly(enemyShape.tank);
          if (!areAllies) {
            bullet.owner.onEnemyHitScore(energyBefore - enemyShape.tank.energy);
          }
          if (enemyShape.tank.energy == 0) {
            bullet.owner.onEnemyKillScore();
          }
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'checkTank',
    value: function checkTank(tank) {
      var tankShape = this._getTankShape(tank);

      tankShape.pos.x = tank.x;
      tankShape.pos.y = tank.y;

      var i = void 0;
      var hitTest = void 0;
      var wall = void 0;
      for (i in this._wallList) {
        wall = this._wallList[i];
        hitTest = _sat2.default.testCirclePolygon(tankShape, wall);
        if (hitTest) {
          tank.onWallHit();
          return false;
        }
      }
      var enemyShape = void 0;
      for (i in this._tankMap) {
        enemyShape = this._tankMap[i];
        if (!enemyShape) continue;
        if (enemyShape == tankShape) {
          continue;
        }
        hitTest = _sat2.default.testCircleCircle(tankShape, enemyShape);
        var areAllies = tank.isAlly(enemyShape.tank);
        if (hitTest) {
          if (!areAllies) {
            var energyBefore = enemyShape.tank.energy;
            tank.onEnemyHit();
            enemyShape.tank.onBeingRam(tank.speed);
            tank.onEnemyHitScore(energyBefore - enemyShape.tank.energy);
            return false;
          } else {
            tank.onAllyHit();
            return false;
          }
        }
      }
      return true;
    }
  }, {
    key: 'scanTanks',
    value: function scanTanks(tank) {
      var radarBeamShape = this._getRadarBeamShape(tank);
      var tankShape = this._getTankShape(tank);
      radarBeamShape.setAngle((tank.angle + tank.radarAngle) * Math.PI / 180);
      radarBeamShape.pos.x = tank.x;
      radarBeamShape.pos.y = tank.y;

      var i = void 0;
      var enemyShape = void 0;
      var hitTest = void 0;
      var enemies = [];

      for (i in this._tankMap) {
        enemyShape = this._tankMap[i];
        if (!enemyShape) continue;
        if (enemyShape == tankShape) {
          continue;
        }
        hitTest = _sat2.default.testPolygonCircle(radarBeamShape, enemyShape);
        if (hitTest) {
          enemies.push(enemyShape.tank);
        }
      }
      if (enemies.length == 0) {
        return false;
      }
      var closestEnemy = null;
      var closestEnemyDistance = tank.radarRange;
      var closestAlly = null;
      var closestAllyDistance = tank.radarRange;
      var d = void 0,
          dx = void 0,
          dy = void 0,
          ally = void 0;
      for (i in enemies) {
        dx = enemies[i].x - tank.x;
        dy = enemies[i].y - tank.y;
        d = Math.sqrt(dx * dx + dy * dy);
        ally = enemies[i].isAlly(tank);
        if (!ally && (!closestEnemy || d < closestEnemyDistance)) {
          closestEnemy = enemies[i];
          closestEnemyDistance = d;
        } else if (ally && (!closestAlly || d < closestAllyDistance)) {
          closestAlly = enemies[i];
          closestAllyDistance = d;
        }
      }
      if (closestAlly) {
        tank.onAllySpot(closestAlly);
      }
      if (closestEnemy) {
        tank.onEnemySpot(closestEnemy);
        closestEnemy.onTargetingAlarm();
      }

      return true;
    }
  }, {
    key: 'scanBullets',
    value: function scanBullets(tank) {
      var radarBeamShape = this._getRadarBeamShape(tank);
      radarBeamShape.setAngle((tank.angle + tank.radarAngle) * Math.PI / 180);
      radarBeamShape.pos.x = tank.x;
      radarBeamShape.pos.y = tank.y;

      var i = void 0;
      var hitTest = void 0;
      var bulletShape = void 0;
      var spottedBullets = false;

      for (i in this._bulletMap) {
        bulletShape = this._bulletMap[i];
        if (!bulletShape) continue;
        if (bulletShape.bullet.owner == tank) continue;
        hitTest = _sat2.default.testCirclePolygon(bulletShape, radarBeamShape);
        if (hitTest) {
          tank.onBulletSpot(bulletShape.bullet);
          spottedBullets = true;
        }
      }

      return spottedBullets;
    }
  }, {
    key: 'scanWalls',
    value: function scanWalls(tank) {
      var distance = this._getWallDistance(tank);
      if (distance < tank.radarRange) {
        tank.onWallSpot(distance);
        return true;
      }
      return false;
    }
  }, {
    key: '_getWallDistance',
    value: function _getWallDistance(tank) {
      var angle = tank.angle + tank.radarAngle;
      while (angle > 180) {
        angle -= 360;
      }while (angle < -180) {
        angle += 360;
      }var distanceNorth = tank.y - this._battlefield.minY;
      var distanceSouth = this._battlefield.maxY - tank.y;
      var distanceWest = tank.x - this._battlefield.minX;
      var distanceEast = this._battlefield.maxX - tank.x;

      if (angle == -180 || angle == 180) {
        // W
        return distanceWest;
      } else if (angle == 0) {
        // E
        return distanceEast;
      } else if (angle == -90) {
        // N
        return distanceNorth;
      } else if (angle == 90) {
        // S
        return distanceSouth;
      }

      var d1 = void 0,
          d2 = void 0;

      if (angle > -180 && angle < -90) {
        // NW
        d1 = distanceWest / Math.cos((angle + 180) * (Math.PI / 180));
        d2 = distanceNorth / Math.sin((angle + 180) * (Math.PI / 180));
      } else if (angle > -90 && angle < 0) {
        // NE
        d1 = distanceEast / Math.cos(-angle * (Math.PI / 180));
        d2 = distanceNorth / Math.sin(-angle * (Math.PI / 180));
      } else if (angle > 0 && angle < 90) {
        // SE
        d1 = distanceEast / Math.cos(angle * (Math.PI / 180));
        d2 = distanceSouth / Math.sin(angle * (Math.PI / 180));
      } else {
        // SW
        d1 = distanceWest / Math.cos((180 - angle) * (Math.PI / 180));
        d2 = distanceSouth / Math.sin((180 - angle) * (Math.PI / 180));
      }

      return Math.min(d1, d2);
    }
  }, {
    key: '_getTankShape',
    value: function _getTankShape(tank) {
      if (!this._tankMap[tank.id]) {
        if (tank.energy == 0) {
          throw "Cannot create shape for destroyed tank";
        }
        var shape = new _sat2.default.Circle(new _sat2.default.Vector(tank.x, tank.y), 18);
        this._tankMap[tank.id] = shape;
        shape.tank = tank;
      }
      return this._tankMap[tank.id];
    }
  }, {
    key: '_getBulletShape',
    value: function _getBulletShape(bullet) {
      if (!this._bulletMap[bullet.id]) {
        if (bullet.exploded) {
          throw "Cannot create shape for exploded bullet";
        }
        var shape = new _sat2.default.Circle(new _sat2.default.Vector(bullet.x, bullet.y), 3);
        this._bulletMap[bullet.id] = shape;
        shape.bullet = bullet;
      }
      return this._bulletMap[bullet.id];
    }
  }, {
    key: '_getRadarBeamShape',
    value: function _getRadarBeamShape(tank) {
      if (!this._radarBeamMap[tank.id]) {
        if (tank.energy == 0) {
          throw "Cannot create radar beam shape for destroyed tank";
        }
        var width = tank.radarRange * Math.tan(tank.radarFocal * (Math.PI / 180)) / 2;
        var shape = new _sat2.default.Polygon(new _sat2.default.Vector(tank.x, tank.y), [new _sat2.default.Vector(0, 3), new _sat2.default.Vector(0, -3), new _sat2.default.Vector(tank.radarRange, -width), new _sat2.default.Vector(tank.radarRange, width)]);

        this._radarBeamMap[tank.id] = shape;
        shape.tank = tank;
      }
      return this._radarBeamMap[tank.id];
    }
  }]);

  return CollisionResolver;
}();

exports.default = CollisionResolver;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Version 0.7.1 - Copyright 2012 - 2018 -  Jim Riecken <jimr@jimr.ca>
//
// Released under the MIT License - https://github.com/jriecken/sat-js
//
// A simple library for determining intersections of circles and
// polygons using the Separating Axis Theorem.
/** @preserve SAT.js - Version 0.7.1 - Copyright 2012 - 2018 - Jim Riecken <jimr@jimr.ca> - released under the MIT License. https://github.com/jriecken/sat-js */

/*global define: false, module: false*/
/*jshint shadow:true, sub:true, forin:true, noarg:true, noempty:true,
  eqeqeq:true, bitwise:true, strict:true, undef:true,
  curly:true, browser:true */

// Create a UMD wrapper for SAT. Works in:
//
//  - Plain browser via global SAT variable
//  - AMD loader (like require.js)
//  - Node.js
//
// The quoted properties all over the place are used so that the Closure Compiler
// does not mangle the exposed API in advanced mode.
/**
 * @param {*} root - The global scope
 * @param {Function} factory - Factory that creates SAT module
 */
(function (root, factory) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module['exports'] = factory();
  } else {
    root['SAT'] = factory();
  }
})(undefined, function () {
  "use strict";

  var SAT = {};

  //
  // ## Vector
  //
  // Represents a vector in two dimensions with `x` and `y` properties.


  // Create a new Vector, optionally passing in the `x` and `y` coordinates. If
  // a coordinate is not specified, it will be set to `0`
  /**
   * @param {?number=} x The x position.
   * @param {?number=} y The y position.
   * @constructor
   */
  function Vector(x, y) {
    this['x'] = x || 0;
    this['y'] = y || 0;
  }
  SAT['Vector'] = Vector;
  // Alias `Vector` as `V`
  SAT['V'] = Vector;

  // Copy the values of another Vector into this one.
  /**
   * @param {Vector} other The other Vector.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['copy'] = Vector.prototype.copy = function (other) {
    this['x'] = other['x'];
    this['y'] = other['y'];
    return this;
  };

  // Create a new vector with the same coordinates as this on.
  /**
   * @return {Vector} The new cloned vector
   */
  Vector.prototype['clone'] = Vector.prototype.clone = function () {
    return new Vector(this['x'], this['y']);
  };

  // Change this vector to be perpendicular to what it was before. (Effectively
  // roatates it 90 degrees in a clockwise direction)
  /**
   * @return {Vector} This for chaining.
   */
  Vector.prototype['perp'] = Vector.prototype.perp = function () {
    var x = this['x'];
    this['x'] = this['y'];
    this['y'] = -x;
    return this;
  };

  // Rotate this vector (counter-clockwise) by the specified angle (in radians).
  /**
   * @param {number} angle The angle to rotate (in radians)
   * @return {Vector} This for chaining.
   */
  Vector.prototype['rotate'] = Vector.prototype.rotate = function (angle) {
    var x = this['x'];
    var y = this['y'];
    this['x'] = x * Math.cos(angle) - y * Math.sin(angle);
    this['y'] = x * Math.sin(angle) + y * Math.cos(angle);
    return this;
  };

  // Reverse this vector.
  /**
   * @return {Vector} This for chaining.
   */
  Vector.prototype['reverse'] = Vector.prototype.reverse = function () {
    this['x'] = -this['x'];
    this['y'] = -this['y'];
    return this;
  };

  // Normalize this vector.  (make it have length of `1`)
  /**
   * @return {Vector} This for chaining.
   */
  Vector.prototype['normalize'] = Vector.prototype.normalize = function () {
    var d = this.len();
    if (d > 0) {
      this['x'] = this['x'] / d;
      this['y'] = this['y'] / d;
    }
    return this;
  };

  // Add another vector to this one.
  /**
   * @param {Vector} other The other Vector.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['add'] = Vector.prototype.add = function (other) {
    this['x'] += other['x'];
    this['y'] += other['y'];
    return this;
  };

  // Subtract another vector from this one.
  /**
   * @param {Vector} other The other Vector.
   * @return {Vector} This for chaiing.
   */
  Vector.prototype['sub'] = Vector.prototype.sub = function (other) {
    this['x'] -= other['x'];
    this['y'] -= other['y'];
    return this;
  };

  // Scale this vector. An independant scaling factor can be provided
  // for each axis, or a single scaling factor that will scale both `x` and `y`.
  /**
   * @param {number} x The scaling factor in the x direction.
   * @param {?number=} y The scaling factor in the y direction.  If this
   *   is not specified, the x scaling factor will be used.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['scale'] = Vector.prototype.scale = function (x, y) {
    this['x'] *= x;
    this['y'] *= typeof y != 'undefined' ? y : x;
    return this;
  };

  // Project this vector on to another vector.
  /**
   * @param {Vector} other The vector to project onto.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['project'] = Vector.prototype.project = function (other) {
    var amt = this.dot(other) / other.len2();
    this['x'] = amt * other['x'];
    this['y'] = amt * other['y'];
    return this;
  };

  // Project this vector onto a vector of unit length. This is slightly more efficient
  // than `project` when dealing with unit vectors.
  /**
   * @param {Vector} other The unit vector to project onto.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['projectN'] = Vector.prototype.projectN = function (other) {
    var amt = this.dot(other);
    this['x'] = amt * other['x'];
    this['y'] = amt * other['y'];
    return this;
  };

  // Reflect this vector on an arbitrary axis.
  /**
   * @param {Vector} axis The vector representing the axis.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['reflect'] = Vector.prototype.reflect = function (axis) {
    var x = this['x'];
    var y = this['y'];
    this.project(axis).scale(2);
    this['x'] -= x;
    this['y'] -= y;
    return this;
  };

  // Reflect this vector on an arbitrary axis (represented by a unit vector). This is
  // slightly more efficient than `reflect` when dealing with an axis that is a unit vector.
  /**
   * @param {Vector} axis The unit vector representing the axis.
   * @return {Vector} This for chaining.
   */
  Vector.prototype['reflectN'] = Vector.prototype.reflectN = function (axis) {
    var x = this['x'];
    var y = this['y'];
    this.projectN(axis).scale(2);
    this['x'] -= x;
    this['y'] -= y;
    return this;
  };

  // Get the dot product of this vector and another.
  /**
   * @param {Vector}  other The vector to dot this one against.
   * @return {number} The dot product.
   */
  Vector.prototype['dot'] = Vector.prototype.dot = function (other) {
    return this['x'] * other['x'] + this['y'] * other['y'];
  };

  // Get the squared length of this vector.
  /**
   * @return {number} The length^2 of this vector.
   */
  Vector.prototype['len2'] = Vector.prototype.len2 = function () {
    return this.dot(this);
  };

  // Get the length of this vector.
  /**
   * @return {number} The length of this vector.
   */
  Vector.prototype['len'] = Vector.prototype.len = function () {
    return Math.sqrt(this.len2());
  };

  // ## Circle
  //
  // Represents a circle with a position and a radius.

  // Create a new circle, optionally passing in a position and/or radius. If no position
  // is given, the circle will be at `(0,0)`. If no radius is provided, the circle will
  // have a radius of `0`.
  /**
   * @param {Vector=} pos A vector representing the position of the center of the circle
   * @param {?number=} r The radius of the circle
   * @constructor
   */
  function Circle(pos, r) {
    this['pos'] = pos || new Vector();
    this['r'] = r || 0;
  }
  SAT['Circle'] = Circle;

  // Compute the axis-aligned bounding box (AABB) of this Circle.
  //
  // Note: Returns a _new_ `Polygon` each time you call this.
  /**
   * @return {Polygon} The AABB
   */
  Circle.prototype['getAABB'] = Circle.prototype.getAABB = function () {
    var r = this['r'];
    var corner = this["pos"].clone().sub(new Vector(r, r));
    return new Box(corner, r * 2, r * 2).toPolygon();
  };

  // ## Polygon
  //
  // Represents a *convex* polygon with any number of points (specified in counter-clockwise order)
  //
  // Note: Do _not_ manually change the `points`, `angle`, or `offset` properties. Use the
  // provided setters. Otherwise the calculated properties will not be updated correctly.
  //
  // `pos` can be changed directly.

  // Create a new polygon, passing in a position vector, and an array of points (represented
  // by vectors relative to the position vector). If no position is passed in, the position
  // of the polygon will be `(0,0)`.
  /**
   * @param {Vector=} pos A vector representing the origin of the polygon. (all other
   *   points are relative to this one)
   * @param {Array.<Vector>=} points An array of vectors representing the points in the polygon,
   *   in counter-clockwise order.
   * @constructor
   */
  function Polygon(pos, points) {
    this['pos'] = pos || new Vector();
    this['angle'] = 0;
    this['offset'] = new Vector();
    this.setPoints(points || []);
  }
  SAT['Polygon'] = Polygon;

  // Set the points of the polygon.
  //
  // Note: The points are counter-clockwise *with respect to the coordinate system*.
  // If you directly draw the points on a screen that has the origin at the top-left corner
  // it will _appear_ visually that the points are being specified clockwise. This is just
  // because of the inversion of the Y-axis when being displayed.
  /**
   * @param {Array.<Vector>=} points An array of vectors representing the points in the polygon,
   *   in counter-clockwise order.
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['setPoints'] = Polygon.prototype.setPoints = function (points) {
    // Only re-allocate if this is a new polygon or the number of points has changed.
    var lengthChanged = !this['points'] || this['points'].length !== points.length;
    if (lengthChanged) {
      var i;
      var calcPoints = this['calcPoints'] = [];
      var edges = this['edges'] = [];
      var normals = this['normals'] = [];
      // Allocate the vector arrays for the calculated properties
      for (i = 0; i < points.length; i++) {
        calcPoints.push(new Vector());
        edges.push(new Vector());
        normals.push(new Vector());
      }
    }
    this['points'] = points;
    this._recalc();
    return this;
  };

  // Set the current rotation angle of the polygon.
  /**
   * @param {number} angle The current rotation angle (in radians).
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['setAngle'] = Polygon.prototype.setAngle = function (angle) {
    this['angle'] = angle;
    this._recalc();
    return this;
  };

  // Set the current offset to apply to the `points` before applying the `angle` rotation.
  /**
   * @param {Vector} offset The new offset vector.
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['setOffset'] = Polygon.prototype.setOffset = function (offset) {
    this['offset'] = offset;
    this._recalc();
    return this;
  };

  // Rotates this polygon counter-clockwise around the origin of *its local coordinate system* (i.e. `pos`).
  //
  // Note: This changes the **original** points (so any `angle` will be applied on top of this rotation).
  /**
   * @param {number} angle The angle to rotate (in radians)
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['rotate'] = Polygon.prototype.rotate = function (angle) {
    var points = this['points'];
    var len = points.length;
    for (var i = 0; i < len; i++) {
      points[i].rotate(angle);
    }
    this._recalc();
    return this;
  };

  // Translates the points of this polygon by a specified amount relative to the origin of *its own coordinate
  // system* (i.e. `pos`).
  //
  // This is most useful to change the "center point" of a polygon. If you just want to move the whole polygon, change
  // the coordinates of `pos`.
  //
  // Note: This changes the **original** points (so any `offset` will be applied on top of this translation)
  /**
   * @param {number} x The horizontal amount to translate.
   * @param {number} y The vertical amount to translate.
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype['translate'] = Polygon.prototype.translate = function (x, y) {
    var points = this['points'];
    var len = points.length;
    for (var i = 0; i < len; i++) {
      points[i]["x"] += x;
      points[i]["y"] += y;
    }
    this._recalc();
    return this;
  };

  // Computes the calculated collision polygon. Applies the `angle` and `offset` to the original points then recalculates the
  // edges and normals of the collision polygon.
  /**
   * @return {Polygon} This for chaining.
   */
  Polygon.prototype._recalc = function () {
    // Calculated points - this is what is used for underlying collisions and takes into account
    // the angle/offset set on the polygon.
    var calcPoints = this['calcPoints'];
    // The edges here are the direction of the `n`th edge of the polygon, relative to
    // the `n`th point. If you want to draw a given edge from the edge value, you must
    // first translate to the position of the starting point.
    var edges = this['edges'];
    // The normals here are the direction of the normal for the `n`th edge of the polygon, relative
    // to the position of the `n`th point. If you want to draw an edge normal, you must first
    // translate to the position of the starting point.
    var normals = this['normals'];
    // Copy the original points array and apply the offset/angle
    var points = this['points'];
    var offset = this['offset'];
    var angle = this['angle'];
    var len = points.length;
    var i;
    for (i = 0; i < len; i++) {
      var calcPoint = calcPoints[i].copy(points[i]);
      calcPoint["x"] += offset["x"];
      calcPoint["y"] += offset["y"];
      if (angle !== 0) {
        calcPoint.rotate(angle);
      }
    }
    // Calculate the edges/normals
    for (i = 0; i < len; i++) {
      var p1 = calcPoints[i];
      var p2 = i < len - 1 ? calcPoints[i + 1] : calcPoints[0];
      var e = edges[i].copy(p2).sub(p1);
      normals[i].copy(e).perp().normalize();
    }
    return this;
  };

  // Compute the axis-aligned bounding box. Any current state
  // (translations/rotations) will be applied before constructing the AABB.
  //
  // Note: Returns a _new_ `Polygon` each time you call this.
  /**
   * @return {Polygon} The AABB
   */
  Polygon.prototype["getAABB"] = Polygon.prototype.getAABB = function () {
    var points = this["calcPoints"];
    var len = points.length;
    var xMin = points[0]["x"];
    var yMin = points[0]["y"];
    var xMax = points[0]["x"];
    var yMax = points[0]["y"];
    for (var i = 1; i < len; i++) {
      var point = points[i];
      if (point["x"] < xMin) {
        xMin = point["x"];
      } else if (point["x"] > xMax) {
        xMax = point["x"];
      }
      if (point["y"] < yMin) {
        yMin = point["y"];
      } else if (point["y"] > yMax) {
        yMax = point["y"];
      }
    }
    return new Box(this["pos"].clone().add(new Vector(xMin, yMin)), xMax - xMin, yMax - yMin).toPolygon();
  };

  // Compute the centroid (geometric center) of the polygon. Any current state
  // (translations/rotations) will be applied before computing the centroid.
  //
  // See https://en.wikipedia.org/wiki/Centroid#Centroid_of_a_polygon
  //
  // Note: Returns a _new_ `Vector` each time you call this.
  /**
   * @return {Vector} A Vector that contains the coordinates of the Centroid.
   */
  Polygon.prototype["getCentroid"] = Polygon.prototype.getCentroid = function () {
    var points = this["calcPoints"];
    var len = points.length;
    var cx = 0;
    var cy = 0;
    var ar = 0;
    for (var i = 0; i < len; i++) {
      var p1 = points[i];
      var p2 = i === len - 1 ? points[0] : points[i + 1]; // Loop around if last point
      var a = p1["x"] * p2["y"] - p2["x"] * p1["y"];
      cx += (p1["x"] + p2["x"]) * a;
      cy += (p1["y"] + p2["y"]) * a;
      ar += a;
    }
    ar = ar * 3; // we want 1 / 6 the area and we currently have 2*area
    cx = cx / ar;
    cy = cy / ar;
    return new Vector(cx, cy);
  };

  // ## Box
  //
  // Represents an axis-aligned box, with a width and height.


  // Create a new box, with the specified position, width, and height. If no position
  // is given, the position will be `(0,0)`. If no width or height are given, they will
  // be set to `0`.
  /**
   * @param {Vector=} pos A vector representing the bottom-left of the box (i.e. the smallest x and smallest y value).
   * @param {?number=} w The width of the box.
   * @param {?number=} h The height of the box.
   * @constructor
   */
  function Box(pos, w, h) {
    this['pos'] = pos || new Vector();
    this['w'] = w || 0;
    this['h'] = h || 0;
  }
  SAT['Box'] = Box;

  // Returns a polygon whose edges are the same as this box.
  /**
   * @return {Polygon} A new Polygon that represents this box.
   */
  Box.prototype['toPolygon'] = Box.prototype.toPolygon = function () {
    var pos = this['pos'];
    var w = this['w'];
    var h = this['h'];
    return new Polygon(new Vector(pos['x'], pos['y']), [new Vector(), new Vector(w, 0), new Vector(w, h), new Vector(0, h)]);
  };

  // ## Response
  //
  // An object representing the result of an intersection. Contains:
  //  - The two objects participating in the intersection
  //  - The vector representing the minimum change necessary to extract the first object
  //    from the second one (as well as a unit vector in that direction and the magnitude
  //    of the overlap)
  //  - Whether the first object is entirely inside the second, and vice versa.
  /**
   * @constructor
   */
  function Response() {
    this['a'] = null;
    this['b'] = null;
    this['overlapN'] = new Vector();
    this['overlapV'] = new Vector();
    this.clear();
  }
  SAT['Response'] = Response;

  // Set some values of the response back to their defaults.  Call this between tests if
  // you are going to reuse a single Response object for multiple intersection tests (recommented
  // as it will avoid allcating extra memory)
  /**
   * @return {Response} This for chaining
   */
  Response.prototype['clear'] = Response.prototype.clear = function () {
    this['aInB'] = true;
    this['bInA'] = true;
    this['overlap'] = Number.MAX_VALUE;
    return this;
  };

  // ## Object Pools

  // A pool of `Vector` objects that are used in calculations to avoid
  // allocating memory.
  /**
   * @type {Array.<Vector>}
   */
  var T_VECTORS = [];
  for (var i = 0; i < 10; i++) {
    T_VECTORS.push(new Vector());
  }

  // A pool of arrays of numbers used in calculations to avoid allocating
  // memory.
  /**
   * @type {Array.<Array.<number>>}
   */
  var T_ARRAYS = [];
  for (var i = 0; i < 5; i++) {
    T_ARRAYS.push([]);
  }

  // Temporary response used for polygon hit detection.
  /**
   * @type {Response}
   */
  var T_RESPONSE = new Response();

  // Tiny "point" polygon used for polygon hit detection.
  /**
   * @type {Polygon}
   */
  var TEST_POINT = new Box(new Vector(), 0.000001, 0.000001).toPolygon();

  // ## Helper Functions

  // Flattens the specified array of points onto a unit vector axis,
  // resulting in a one dimensional range of the minimum and
  // maximum value on that axis.
  /**
   * @param {Array.<Vector>} points The points to flatten.
   * @param {Vector} normal The unit vector axis to flatten on.
   * @param {Array.<number>} result An array.  After calling this function,
   *   result[0] will be the minimum value,
   *   result[1] will be the maximum value.
   */
  function flattenPointsOn(points, normal, result) {
    var min = Number.MAX_VALUE;
    var max = -Number.MAX_VALUE;
    var len = points.length;
    for (var i = 0; i < len; i++) {
      // The magnitude of the projection of the point onto the normal
      var dot = points[i].dot(normal);
      if (dot < min) {
        min = dot;
      }
      if (dot > max) {
        max = dot;
      }
    }
    result[0] = min;result[1] = max;
  }

  // Check whether two convex polygons are separated by the specified
  // axis (must be a unit vector).
  /**
   * @param {Vector} aPos The position of the first polygon.
   * @param {Vector} bPos The position of the second polygon.
   * @param {Array.<Vector>} aPoints The points in the first polygon.
   * @param {Array.<Vector>} bPoints The points in the second polygon.
   * @param {Vector} axis The axis (unit sized) to test against.  The points of both polygons
   *   will be projected onto this axis.
   * @param {Response=} response A Response object (optional) which will be populated
   *   if the axis is not a separating axis.
   * @return {boolean} true if it is a separating axis, false otherwise.  If false,
   *   and a response is passed in, information about how much overlap and
   *   the direction of the overlap will be populated.
   */
  function isSeparatingAxis(aPos, bPos, aPoints, bPoints, axis, response) {
    var rangeA = T_ARRAYS.pop();
    var rangeB = T_ARRAYS.pop();
    // The magnitude of the offset between the two polygons
    var offsetV = T_VECTORS.pop().copy(bPos).sub(aPos);
    var projectedOffset = offsetV.dot(axis);
    // Project the polygons onto the axis.
    flattenPointsOn(aPoints, axis, rangeA);
    flattenPointsOn(bPoints, axis, rangeB);
    // Move B's range to its position relative to A.
    rangeB[0] += projectedOffset;
    rangeB[1] += projectedOffset;
    // Check if there is a gap. If there is, this is a separating axis and we can stop
    if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
      T_VECTORS.push(offsetV);
      T_ARRAYS.push(rangeA);
      T_ARRAYS.push(rangeB);
      return true;
    }
    // This is not a separating axis. If we're calculating a response, calculate the overlap.
    if (response) {
      var overlap = 0;
      // A starts further left than B
      if (rangeA[0] < rangeB[0]) {
        response['aInB'] = false;
        // A ends before B does. We have to pull A out of B
        if (rangeA[1] < rangeB[1]) {
          overlap = rangeA[1] - rangeB[0];
          response['bInA'] = false;
          // B is fully inside A.  Pick the shortest way out.
        } else {
          var option1 = rangeA[1] - rangeB[0];
          var option2 = rangeB[1] - rangeA[0];
          overlap = option1 < option2 ? option1 : -option2;
        }
        // B starts further left than A
      } else {
        response['bInA'] = false;
        // B ends before A ends. We have to push A out of B
        if (rangeA[1] > rangeB[1]) {
          overlap = rangeA[0] - rangeB[1];
          response['aInB'] = false;
          // A is fully inside B.  Pick the shortest way out.
        } else {
          var option1 = rangeA[1] - rangeB[0];
          var option2 = rangeB[1] - rangeA[0];
          overlap = option1 < option2 ? option1 : -option2;
        }
      }
      // If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
      var absOverlap = Math.abs(overlap);
      if (absOverlap < response['overlap']) {
        response['overlap'] = absOverlap;
        response['overlapN'].copy(axis);
        if (overlap < 0) {
          response['overlapN'].reverse();
        }
      }
    }
    T_VECTORS.push(offsetV);
    T_ARRAYS.push(rangeA);
    T_ARRAYS.push(rangeB);
    return false;
  }
  SAT['isSeparatingAxis'] = isSeparatingAxis;

  // Calculates which Voronoi region a point is on a line segment.
  // It is assumed that both the line and the point are relative to `(0,0)`
  //
  //            |       (0)      |
  //     (-1)  [S]--------------[E]  (1)
  //            |       (0)      |
  /**
   * @param {Vector} line The line segment.
   * @param {Vector} point The point.
   * @return  {number} LEFT_VORONOI_REGION (-1) if it is the left region,
   *          MIDDLE_VORONOI_REGION (0) if it is the middle region,
   *          RIGHT_VORONOI_REGION (1) if it is the right region.
   */
  function voronoiRegion(line, point) {
    var len2 = line.len2();
    var dp = point.dot(line);
    // If the point is beyond the start of the line, it is in the
    // left voronoi region.
    if (dp < 0) {
      return LEFT_VORONOI_REGION;
    }
    // If the point is beyond the end of the line, it is in the
    // right voronoi region.
    else if (dp > len2) {
        return RIGHT_VORONOI_REGION;
      }
      // Otherwise, it's in the middle one.
      else {
          return MIDDLE_VORONOI_REGION;
        }
  }
  // Constants for Voronoi regions
  /**
   * @const
   */
  var LEFT_VORONOI_REGION = -1;
  /**
   * @const
   */
  var MIDDLE_VORONOI_REGION = 0;
  /**
   * @const
   */
  var RIGHT_VORONOI_REGION = 1;

  // ## Collision Tests

  // Check if a point is inside a circle.
  /**
   * @param {Vector} p The point to test.
   * @param {Circle} c The circle to test.
   * @return {boolean} true if the point is inside the circle, false if it is not.
   */
  function pointInCircle(p, c) {
    var differenceV = T_VECTORS.pop().copy(p).sub(c['pos']);
    var radiusSq = c['r'] * c['r'];
    var distanceSq = differenceV.len2();
    T_VECTORS.push(differenceV);
    // If the distance between is smaller than the radius then the point is inside the circle.
    return distanceSq <= radiusSq;
  }
  SAT['pointInCircle'] = pointInCircle;

  // Check if a point is inside a convex polygon.
  /**
   * @param {Vector} p The point to test.
   * @param {Polygon} poly The polygon to test.
   * @return {boolean} true if the point is inside the polygon, false if it is not.
   */
  function pointInPolygon(p, poly) {
    TEST_POINT['pos'].copy(p);
    T_RESPONSE.clear();
    var result = testPolygonPolygon(TEST_POINT, poly, T_RESPONSE);
    if (result) {
      result = T_RESPONSE['aInB'];
    }
    return result;
  }
  SAT['pointInPolygon'] = pointInPolygon;

  // Check if two circles collide.
  /**
   * @param {Circle} a The first circle.
   * @param {Circle} b The second circle.
   * @param {Response=} response Response object (optional) that will be populated if
   *   the circles intersect.
   * @return {boolean} true if the circles intersect, false if they don't.
   */
  function testCircleCircle(a, b, response) {
    // Check if the distance between the centers of the two
    // circles is greater than their combined radius.
    var differenceV = T_VECTORS.pop().copy(b['pos']).sub(a['pos']);
    var totalRadius = a['r'] + b['r'];
    var totalRadiusSq = totalRadius * totalRadius;
    var distanceSq = differenceV.len2();
    // If the distance is bigger than the combined radius, they don't intersect.
    if (distanceSq > totalRadiusSq) {
      T_VECTORS.push(differenceV);
      return false;
    }
    // They intersect.  If we're calculating a response, calculate the overlap.
    if (response) {
      var dist = Math.sqrt(distanceSq);
      response['a'] = a;
      response['b'] = b;
      response['overlap'] = totalRadius - dist;
      response['overlapN'].copy(differenceV.normalize());
      response['overlapV'].copy(differenceV).scale(response['overlap']);
      response['aInB'] = a['r'] <= b['r'] && dist <= b['r'] - a['r'];
      response['bInA'] = b['r'] <= a['r'] && dist <= a['r'] - b['r'];
    }
    T_VECTORS.push(differenceV);
    return true;
  }
  SAT['testCircleCircle'] = testCircleCircle;

  // Check if a polygon and a circle collide.
  /**
   * @param {Polygon} polygon The polygon.
   * @param {Circle} circle The circle.
   * @param {Response=} response Response object (optional) that will be populated if
   *   they interset.
   * @return {boolean} true if they intersect, false if they don't.
   */
  function testPolygonCircle(polygon, circle, response) {
    // Get the position of the circle relative to the polygon.
    var circlePos = T_VECTORS.pop().copy(circle['pos']).sub(polygon['pos']);
    var radius = circle['r'];
    var radius2 = radius * radius;
    var points = polygon['calcPoints'];
    var len = points.length;
    var edge = T_VECTORS.pop();
    var point = T_VECTORS.pop();

    // For each edge in the polygon:
    for (var i = 0; i < len; i++) {
      var next = i === len - 1 ? 0 : i + 1;
      var prev = i === 0 ? len - 1 : i - 1;
      var overlap = 0;
      var overlapN = null;

      // Get the edge.
      edge.copy(polygon['edges'][i]);
      // Calculate the center of the circle relative to the starting point of the edge.
      point.copy(circlePos).sub(points[i]);

      // If the distance between the center of the circle and the point
      // is bigger than the radius, the polygon is definitely not fully in
      // the circle.
      if (response && point.len2() > radius2) {
        response['aInB'] = false;
      }

      // Calculate which Voronoi region the center of the circle is in.
      var region = voronoiRegion(edge, point);
      // If it's the left region:
      if (region === LEFT_VORONOI_REGION) {
        // We need to make sure we're in the RIGHT_VORONOI_REGION of the previous edge.
        edge.copy(polygon['edges'][prev]);
        // Calculate the center of the circle relative the starting point of the previous edge
        var point2 = T_VECTORS.pop().copy(circlePos).sub(points[prev]);
        region = voronoiRegion(edge, point2);
        if (region === RIGHT_VORONOI_REGION) {
          // It's in the region we want.  Check if the circle intersects the point.
          var dist = point.len();
          if (dist > radius) {
            // No intersection
            T_VECTORS.push(circlePos);
            T_VECTORS.push(edge);
            T_VECTORS.push(point);
            T_VECTORS.push(point2);
            return false;
          } else if (response) {
            // It intersects, calculate the overlap.
            response['bInA'] = false;
            overlapN = point.normalize();
            overlap = radius - dist;
          }
        }
        T_VECTORS.push(point2);
        // If it's the right region:
      } else if (region === RIGHT_VORONOI_REGION) {
        // We need to make sure we're in the left region on the next edge
        edge.copy(polygon['edges'][next]);
        // Calculate the center of the circle relative to the starting point of the next edge.
        point.copy(circlePos).sub(points[next]);
        region = voronoiRegion(edge, point);
        if (region === LEFT_VORONOI_REGION) {
          // It's in the region we want.  Check if the circle intersects the point.
          var dist = point.len();
          if (dist > radius) {
            // No intersection
            T_VECTORS.push(circlePos);
            T_VECTORS.push(edge);
            T_VECTORS.push(point);
            return false;
          } else if (response) {
            // It intersects, calculate the overlap.
            response['bInA'] = false;
            overlapN = point.normalize();
            overlap = radius - dist;
          }
        }
        // Otherwise, it's the middle region:
      } else {
        // Need to check if the circle is intersecting the edge,
        // Change the edge into its "edge normal".
        var normal = edge.perp().normalize();
        // Find the perpendicular distance between the center of the
        // circle and the edge.
        var dist = point.dot(normal);
        var distAbs = Math.abs(dist);
        // If the circle is on the outside of the edge, there is no intersection.
        if (dist > 0 && distAbs > radius) {
          // No intersection
          T_VECTORS.push(circlePos);
          T_VECTORS.push(normal);
          T_VECTORS.push(point);
          return false;
        } else if (response) {
          // It intersects, calculate the overlap.
          overlapN = normal;
          overlap = radius - dist;
          // If the center of the circle is on the outside of the edge, or part of the
          // circle is on the outside, the circle is not fully inside the polygon.
          if (dist >= 0 || overlap < 2 * radius) {
            response['bInA'] = false;
          }
        }
      }

      // If this is the smallest overlap we've seen, keep it.
      // (overlapN may be null if the circle was in the wrong Voronoi region).
      if (overlapN && response && Math.abs(overlap) < Math.abs(response['overlap'])) {
        response['overlap'] = overlap;
        response['overlapN'].copy(overlapN);
      }
    }

    // Calculate the final overlap vector - based on the smallest overlap.
    if (response) {
      response['a'] = polygon;
      response['b'] = circle;
      response['overlapV'].copy(response['overlapN']).scale(response['overlap']);
    }
    T_VECTORS.push(circlePos);
    T_VECTORS.push(edge);
    T_VECTORS.push(point);
    return true;
  }
  SAT['testPolygonCircle'] = testPolygonCircle;

  // Check if a circle and a polygon collide.
  //
  // **NOTE:** This is slightly less efficient than polygonCircle as it just
  // runs polygonCircle and reverses everything at the end.
  /**
   * @param {Circle} circle The circle.
   * @param {Polygon} polygon The polygon.
   * @param {Response=} response Response object (optional) that will be populated if
   *   they interset.
   * @return {boolean} true if they intersect, false if they don't.
   */
  function testCirclePolygon(circle, polygon, response) {
    // Test the polygon against the circle.
    var result = testPolygonCircle(polygon, circle, response);
    if (result && response) {
      // Swap A and B in the response.
      var a = response['a'];
      var aInB = response['aInB'];
      response['overlapN'].reverse();
      response['overlapV'].reverse();
      response['a'] = response['b'];
      response['b'] = a;
      response['aInB'] = response['bInA'];
      response['bInA'] = aInB;
    }
    return result;
  }
  SAT['testCirclePolygon'] = testCirclePolygon;

  // Checks whether polygons collide.
  /**
   * @param {Polygon} a The first polygon.
   * @param {Polygon} b The second polygon.
   * @param {Response=} response Response object (optional) that will be populated if
   *   they interset.
   * @return {boolean} true if they intersect, false if they don't.
   */
  function testPolygonPolygon(a, b, response) {
    var aPoints = a['calcPoints'];
    var aLen = aPoints.length;
    var bPoints = b['calcPoints'];
    var bLen = bPoints.length;
    // If any of the edge normals of A is a separating axis, no intersection.
    for (var i = 0; i < aLen; i++) {
      if (isSeparatingAxis(a['pos'], b['pos'], aPoints, bPoints, a['normals'][i], response)) {
        return false;
      }
    }
    // If any of the edge normals of B is a separating axis, no intersection.
    for (var i = 0; i < bLen; i++) {
      if (isSeparatingAxis(a['pos'], b['pos'], aPoints, bPoints, b['normals'][i], response)) {
        return false;
      }
    }
    // Since none of the edge normals of A or B are a separating axis, there is an intersection
    // and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
    // final overlap vector.
    if (response) {
      response['a'] = a;
      response['b'] = b;
      response['overlapV'].copy(response['overlapN']).scale(response['overlap']);
    }
    return true;
  }
  SAT['testPolygonPolygon'] = testPolygonPolygon;

  return SAT;
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EvalWorker = __webpack_require__(30);

var _EvalWorker2 = _interopRequireDefault(_EvalWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AiWrapper = function () {
  function AiWrapper(tank, aiDefinition) {
    _classCallCheck(this, AiWrapper);

    if (!tank) throw "Tank is required";
    if (!aiDefinition) throw "AiDefinition is required";
    this._tank = tank;
    this._aiWorker = null;
    this._aiProcessingStart = 0;
    this._aiProcessingCheckInterval = null;
    this._aiProcessingResolveCallback = null;
    this._aiProcessingRejectCallback = null;
    this._slowAiChances = 10;
    this._onActivationCallback = [];
    this._onDectivationCallback = [];
    this._aiProcessingTimeLimit = 3000;
    this._aiDefinition = aiDefinition;
    this._isReady = false;
    this._controlData = {
      THROTTLE: 0,
      BOOST: 0,
      TURN: 0,
      RADAR_TURN: 0,
      GUN_TURN: 0,
      SHOOT: 0,
      OUTBOX: [],
      DEBUG: {}
    };
  }

  _createClass(AiWrapper, [{
    key: 'setProcessingLimit',
    value: function setProcessingLimit(v) {
      this._aiProcessingTimeLimit = v;
    }
  }, {
    key: 'onActivation',
    value: function onActivation(callback) {
      this._onActivationCallback.push(callback);
    }
  }, {
    key: 'onDectivation',
    value: function onDectivation(callback) {
      this._onDeactivationCallback.push(callback);
    }
  }, {
    key: '_formatError',
    value: function _formatError(err) {
      if (!err.message) return 'unknown';
      var msg = err.message;
      if (err.lineno) {
        msg = "Line #" + err.lineno + ": " + msg;
      }
      return msg;
    }
  }, {
    key: 'activate',
    value: function activate(seed, resolve, reject) {
      if (typeof seed != 'number') throw "seed must be a number, '" + (typeof seed === 'undefined' ? 'undefined' : _typeof(seed)) + "' given";
      if (typeof resolve != 'function') throw "resolve callback must be a function, '" + (typeof resolve === 'undefined' ? 'undefined' : _typeof(resolve)) + "' given";
      if (typeof reject != 'function') throw "reject callback must be a function, '" + (typeof reject === 'undefined' ? 'undefined' : _typeof(reject)) + "' given";
      var self = this;
      self._aiWorker = self._createWorker(this._aiDefinition);
      self._aiWorker.onerror = function (err) {
        console.error(err);
        if (self._aiProcessingRejectCallback) {
          self._aiProcessingRejectCallback({
            message: "Web Worker of '" + self._tank.fullName + "' returned an error: " + self._formatError(err),
            performanceIssues: false,
            tankName: self._tank.name,
            tankId: self._tank.id
          });
          self._aiProcessingResolveCallback = null;
          self._aiProcessingRejectCallback = null;
        }
      };

      if (self._aiProcessingCheckInterval) {
        clearInterval(self._aiProcessingCheckInterval);
        self._aiProcessingCheckInterval = null;
      }

      self._aiProcessingCheckInterval = setInterval(function () {
        if (self._aiProcessingRejectCallback) {
          var now = new Date().getTime();
          var dt = now - self._aiProcessingStart;
          if (dt > self._aiProcessingTimeLimit) {
            clearInterval(self._aiProcessingCheckInterval);
            self._aiProcessingCheckInterval = null;
            self._aiProcessingRejectCallback({
              message: "Simulation cannot be continued because " + self._tank.name + " #" + self._tank.id + " does not respond",
              performanceIssues: true,
              tankName: self._tank.name,
              tankId: self._tank.id
            });
          }
        }
      }, Math.max(self._aiDefinition.executionLimit, Math.round(self._aiProcessingTimeLimit / 2)));

      self._aiWorker.onmessage = function (commandEvent) {
        var value = commandEvent.data;
        if (self._aiProcessingResolveCallback) {
          if (value.type == 'init') {
            self._configureTank(value.settings ? value.settings : {});
            self._isReady = true;
            for (var i = 0; i < self._onActivationCallback.length; i++) {
              self._onActivationCallback[i].bind(self)();
            }
          } else {
            self._controlTank(value);
          }

          var callback = void 0;
          var now = new Date().getTime();
          var dt = now - self._aiProcessingStart;
          if (dt > self._aiDefinition.executionLimit && value.type != 'init') {
            self._slowAiChances--;
            console.warn("Execution of AI for tank " + self._tank.name + " #" + self._tank.id + " takes too long (" + dt + "ms). If problem repeats, AI will be terminated.");
            if (self._slowAiChances <= 0) {
              callback = self._aiProcessingRejectCallback;
              self._aiProcessingResolveCallback = null;
              self._aiProcessingRejectCallback = null;
              callback({
                message: "Simulation cannot be continued because " + self._tank.name + " #" + self._tank.id + " has performance issues",
                performanceIssues: true,
                tankName: self._tank.name,
                tankId: self._tank.id
              });
              return;
            }
          }
          callback = self._aiProcessingResolveCallback;
          self._aiProcessingResolveCallback = null;
          self._aiProcessingRejectCallback = null;
          callback();
        }
      };

      var teamInfo = null;
      if (self._tank.team && self._tank.team.size > 1) {
        teamInfo = {
          name: self._tank.team.name,
          mates: self._tank.team.members.map(function (t) {
            return t.id;
          })
        };
      } else {
        teamInfo = {
          name: self._tank.fullName,
          mates: [self._tank.id]
        };
      }
      var infoData = {
        id: self._tank.id,
        team: teamInfo
      };
      if (self._aiDefinition.initData) {
        infoData.initData = self._aiDefinition.initData;
      }
      self._aiProcessingStart = new Date().getTime();
      self._aiProcessingResolveCallback = resolve;
      self._aiProcessingRejectCallback = reject;
      self._aiWorker.postMessage({
        command: 'init',
        seed: seed + ":" + self._tank.id,
        settings: {
          SKIN: 'zebra'
        },
        info: infoData,
        code: self._aiDefinition.code
      });
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      if (this._aiWorker) {
        this._aiWorker.terminate();
        this._aiWorker = null;
      }

      if (this._aiProcessingCheckInterval) {
        clearInterval(this._aiProcessingCheckInterval);
        this._aiProcessingCheckInterval = null;
      }
      for (var i = 0; i < this._onDectivationCallback.length; i++) {
        this._onDectivationCallback[i].bind(this)();
      }
    }
  }, {
    key: 'simulationStep',
    value: function simulationStep(resolve, reject) {
      if (typeof resolve != 'function') throw "resolve callback must be a function, '" + (typeof resolve === 'undefined' ? 'undefined' : _typeof(resolve)) + "' given";
      if (typeof reject != 'function') throw "reject callback must be a function, '" + (typeof reject === 'undefined' ? 'undefined' : _typeof(reject)) + "' given";
      if (!this._isReady) {
        throw "AI of " + this._tank.fullName + " not initliazed";
      }
      var self = this;
      if (self._aiWorker && self._tank.energy == 0) {
        self._aiWorker.terminate();
        self._aiWorker = null;
        resolve();
        return;
      }

      self._aiProcessingStart = new Date().getTime();
      self._aiProcessingResolveCallback = resolve;
      self._aiProcessingRejectCallback = reject;
      self._aiWorker.postMessage({
        command: 'update',
        state: self._tank.state,
        control: self._controlData
      });
    }
  }, {
    key: '_configureTank',
    value: function _configureTank(input) {
      var settings = {};

      var skinList = ['zebra', 'forest', 'black', 'tiger', 'desert', 'lava', 'ocean'];
      if (skinList.indexOf(input.SKIN) != -1) {
        settings.SKIN = input.SKIN;
      }
      this._tank.init(settings);
    }
  }, {
    key: '_controlTank',
    value: function _controlTank(value) {
      var self = this;
      self._controlData.THROTTLE = Number(value.THROTTLE);
      self._controlData.TURN = Number(value.TURN);
      self._controlData.GUN_TURN = Number(value.GUN_TURN);
      self._controlData.RADAR_TURN = Number(value.RADAR_TURN);
      self._controlData.SHOOT = Number(value.SHOOT);
      self._controlData.DEBUG = value.DEBUG;
      self._controlData.BOOST = value.BOOST ? 1 : 0;

      self._controlData.THROTTLE = isNaN(self._controlData.THROTTLE) ? 0 : self._controlData.THROTTLE;
      self._controlData.TURN = isNaN(self._controlData.TURN) ? 0 : self._controlData.TURN;
      self._controlData.GUN_TURN = isNaN(self._controlData.GUN_TURN) ? 0 : self._controlData.GUN_TURN;
      self._controlData.RADAR_TURN = isNaN(self._controlData.RADAR_TURN) ? 0 : self._controlData.RADAR_TURN;
      self._controlData.SHOOT = isNaN(self._controlData.SHOOT) ? 0 : self._controlData.SHOOT;

      self._controlData.THROTTLE = Math.min(1, Math.max(-1, Number(self._controlData.THROTTLE)));
      self._controlData.TURN = Math.min(1, Math.max(-1, Number(self._controlData.TURN)));
      self._controlData.GUN_TURN = Math.min(1, Math.max(-1, Number(self._controlData.GUN_TURN)));
      self._controlData.RADAR_TURN = Math.min(1, Math.max(-1, Number(self._controlData.RADAR_TURN)));
      self._controlData.SHOOT = Math.min(1, Math.max(0, Number(self._controlData.SHOOT)));

      self._tank.setThrottle(self._controlData.THROTTLE);
      self._tank.setBoost(self._controlData.BOOST);
      self._tank.setTurn(self._controlData.TURN);
      self._tank.setRadarTurn(self._controlData.RADAR_TURN);
      self._tank.setGunTurn(self._controlData.GUN_TURN);
      self._tank.setDebugData(self._controlData.DEBUG);
      if (self._controlData.SHOOT) {
        self._tank.shoot(self._controlData.SHOOT);
      }
      self._controlData.SHOOT = 0;

      var messages = [];
      for (var i in value.OUTBOX) {
        messages.push(JSON.parse(JSON.stringify(value.OUTBOX[i])));
      }

      if (self._tank.team) {
        self._tank.team.sendMessages(self._tank.id, messages);
      }

      self._controlData.OUTBOX = [];
    }
  }, {
    key: '_createWorker',
    value: function _createWorker(def) {
      if (def.useSandbox) {
        return new Worker(def.filePath);
      } else {
        return new _EvalWorker2.default();
      }
    }
  }, {
    key: 'tank',
    get: function get() {
      return this._tank;
    }
  }, {
    key: 'worker',
    get: function get() {
      return this._aiWorker;
    }
  }]);

  return AiWrapper;
}();

exports.default = AiWrapper;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extendedMath = __webpack_require__(31);

var TankController = function () {
  function TankController() {
    _classCallCheck(this, TankController);

    this._initCallback = function () {};
    this._loopCallback = function () {};
  }

  _createClass(TankController, [{
    key: 'loop',
    value: function loop(callback) {
      this._loopCallback = callback;
    }
  }, {
    key: 'init',
    value: function init(callback) {
      this._initCallback = callback;
    }
  }]);

  return TankController;
}();

var EvalWorker = function () {
  function EvalWorker() {
    _classCallCheck(this, EvalWorker);

    this.onmessage = function (msg) {};
    this._callStackLimit = 100;
    this._callStackCount = 0;
    this._tankController = new TankController();
  }

  _createClass(EvalWorker, [{
    key: 'postMessage',
    value: function postMessage(inputData) {
      var _this = this;

      var response = null;
      if (inputData.command == 'init') {
        if (!inputData.code) throw "The code is required!";
        var settings = inputData.settings;
        var info = inputData.info;
        var Math = extendedMath();

        var tank = this._tankController;
        eval(inputData.code); // jshint ignore:line
        tank._initCallback(settings, info);
        response = { data: { type: 'init', settings: settings } };
      } else if (inputData.command == 'update') {
        var state = inputData.state;
        var control = inputData.control;
        if (this._tankController._loopCallback) {
          this._tankController._loopCallback(state, control);
          response = { data: control };
        } else {
          response = { data: control };
        }
      }
      if (this._callStackCount < this._callStackLimit) {
        this._callStackCount++;
        this.onmessage(response);
      } else {
        this._callStackCount = 0;
        setTimeout(function () {
          _this.onmessage(response);
        }, 1);
      }
    }
  }, {
    key: 'terminate',
    value: function terminate() {}
  }]);

  return EvalWorker;
}();

exports.default = EvalWorker;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var result = {};
  var items = ["LN10", "PI", "E", "LOG10E", "SQRT2", "LOG2E", "SQRT1_2", "LN2", "cos", "pow", "log", "tan", "sqrt", "ceil", "asin", "abs", "max", "exp", "atan2", "random", "round", "floor", "acos", "atan", "min", "sin"];
  for (var i in items) {
    result[items[i]] = Math[items[i]];
  }

  result.deg = {};

  result.rad = {};

  result.deg.normalize = function (a) {
    a = Number(a);
    while (a > 180) {
      a -= 360;
    }while (a <= -180) {
      a += 360;
    }return a;
  };

  result.rad.normalize = function (a) {
    a = Number(a);
    while (a > result.PI) {
      a -= result.PI * 2;
    }while (a <= -result.PI) {
      a += result.PI * 2;
    }return a;
  };

  result.deg2rad = function (v) {
    return result.rad.normalize(v * (result.PI / 180));
  };

  result.rad2deg = function (v) {
    return result.deg.normalize(v * (180 / result.PI));
  };

  result.rad.atan2 = result.atan2;

  result.deg.atan2 = function (y, x) {
    return result.rad2deg(result.rad.atan2(y, x));
  };

  result.distance = function (x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return result.sqrt(dx * dx + dy * dy);
  };

  result.randomRange = function (a, b) {
    if (a > b) throw "The range is incorrect. First number must be lower than second";
    return a + result.random() * (b - a);
  };
  return result;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PerformanceMonitor = function () {
  function PerformanceMonitor() {
    _classCallCheck(this, PerformanceMonitor);

    this._simulationStepDuration = 30;
    this._stepCounter = 0;
    this._checkLoop = 0;
    this._started = false;
    this._desiredPerfomance = Math.floor(1000 / this._simulationStepDuration);
    this._actualPerfomance = this._desiredPerfomance;
    this._perfomanceIndex = 1;
    this._desiredQuality = 1;
    this._quality = this._desiredQuality;
    this._checkInterval = 500;
  }

  _createClass(PerformanceMonitor, [{
    key: 'start',
    value: function start() {
      this._started = true;
      var self = this;
      this._checkLoop = setInterval(function () {
        self._check();
      }, this._checkInterval);
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._started = false;
      if (this._checkLoop) {
        clearInterval(this._checkLoop);
        this._checkLoop = null;
      }
    }
  }, {
    key: 'setSimulationStepDuration',
    value: function setSimulationStepDuration(v) {
      if (v != this._simulationStepDuration) {
        this._quality = this._desiredQuality;
      }
      this._simulationStepDuration = v;
      this._desiredPerfomance = Math.floor(1000 / v);
    }
  }, {
    key: 'onSimulationStep',
    value: function onSimulationStep() {
      if (this._started) {
        this._stepCounter++;
      }
    }
  }, {
    key: '_check',
    value: function _check() {
      this._actualPerfomance = Math.ceil(this._stepCounter * (1000 / this._checkInterval));
      this._stepCounter = 0;
      var index = this._desiredPerfomance ? this._actualPerfomance / this._desiredPerfomance : 1;
      this._perfomanceIndex = (this._perfomanceIndex + index) / 2;
      this._updateQuality();
    }
  }, {
    key: '_updateQuality',
    value: function _updateQuality() {
      var lowestQuality = 2.5 * this._perfomanceIndex - 1.25;
      lowestQuality = Math.max(0, Math.min(1, lowestQuality));
      var decreaseStep = -0.5 * this._perfomanceIndex + 0.45;

      if (this._perfomanceIndex > 1) {
        this._desiredQuality += 0.1;
      } else {
        this._desiredQuality -= decreaseStep;
      }

      this._desiredQuality = Math.max(0, Math.min(1, this._desiredQuality));

      var targetQuality = Math.max(lowestQuality, this._desiredQuality);

      this._desiredQuality = (this._desiredQuality + targetQuality) / 2;
      if (this._desiredQuality < this._quality) {
        this._quality = this._desiredQuality;
      } else {
        this._quality = (this._desiredQuality + 9 * this._quality) / 10;
      }
    }
  }, {
    key: 'started',
    get: function get() {
      return this._started;
    }
  }, {
    key: 'desiredPerfomance',
    get: function get() {
      return this._desiredPerfomance;
    }
  }, {
    key: 'actualPerfomance',
    get: function get() {
      return this._actualPerfomance;
    }
  }, {
    key: 'qualityLevel',
    get: function get() {
      return this._quality;
    }
  }]);

  return PerformanceMonitor;
}();

exports.default = PerformanceMonitor;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPixiRenderer2 = __webpack_require__(7);

var _AbstractPixiRenderer3 = _interopRequireDefault(_AbstractPixiRenderer2);

var _DebugBattlefieldView = __webpack_require__(36);

var _DebugBattlefieldView2 = _interopRequireDefault(_DebugBattlefieldView);

var _DebugClockView = __webpack_require__(37);

var _DebugClockView2 = _interopRequireDefault(_DebugClockView);

var _DebugBulletView = __webpack_require__(38);

var _DebugBulletView2 = _interopRequireDefault(_DebugBulletView);

var _DebugTankView = __webpack_require__(39);

var _DebugTankView2 = _interopRequireDefault(_DebugTankView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DebugRenderer = function (_AbstractPixiRenderer) {
  _inherits(DebugRenderer, _AbstractPixiRenderer);

  function DebugRenderer() {
    _classCallCheck(this, DebugRenderer);

    var _this = _possibleConstructorReturn(this, (DebugRenderer.__proto__ || Object.getPrototypeOf(DebugRenderer)).call(this));

    _this._frameCounter = 0;
    _this._fpsLabel = null;
    _this._scoreBoard = null;
    return _this;
  }

  _createClass(DebugRenderer, [{
    key: "initBatlefield",
    value: function initBatlefield(battlefield) {
      _get(DebugRenderer.prototype.__proto__ || Object.getPrototypeOf(DebugRenderer.prototype), "initBatlefield", this).call(this, battlefield);

      var labelStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 12,
        fill: '#00ff00'
      });

      this._fpsLabel = new PIXI.Text("FPS", labelStyle);
      this._fpsLabel.x = 100;
      this._fpsLabel.y = 5;
      this.stage.addChild(this._fpsLabel);

      var self = this;
      setInterval(function () {
        self._fpsLabel.text = "FPS: " + self._frameCounter;
        self._frameCounter = 0;
      }, 1000);

      labelStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 12,
        fill: '#00ff00'
      });

      this._scoreBoard = new PIXI.Text("scores", labelStyle);
      this._scoreBoard.x = battlefield.margin + 2;
      this._scoreBoard.y = battlefield.margin + 2;
      this._scoreBoard.alpha = 0.5;
      this.stage.addChild(this._scoreBoard);
    }
  }, {
    key: "renderTankStats",
    value: function renderTankStats(tankList) {
      _get(DebugRenderer.prototype.__proto__ || Object.getPrototypeOf(DebugRenderer.prototype), "renderTankStats", this).call(this, tankList);
      var scores = [];
      var i = void 0;
      for (i = 0; i < tankList.length; i++) {
        scores.push({
          name: tankList[i].fullName,
          energy: tankList[i].energy,
          value: tankList[i].score
        });
      }
      scores.sort(function (a, b) {
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        return 0;
      });
      var msg = "";
      for (i = 0; i < scores.length; i++) {
        msg += scores[i].value.toFixed(3) + " - " + scores[i].name + (scores[i].energy == 0 ? " [X]" : "") + "\n";
      }
      this._scoreBoard.text = msg;
    }
  }, {
    key: "postRender",
    value: function postRender() {
      _get(DebugRenderer.prototype.__proto__ || Object.getPrototypeOf(DebugRenderer.prototype), "postRender", this).call(this);
      this._frameCounter++;
    }
  }, {
    key: "_createBattlefieldView",
    value: function _createBattlefieldView(battlefield) {
      return new _DebugBattlefieldView2.default(battlefield);
    }
  }, {
    key: "_createClockView",
    value: function _createClockView(clock) {
      return new _DebugClockView2.default(clock);
    }
  }, {
    key: "_createBulletView",
    value: function _createBulletView(bullet) {
      return new _DebugBulletView2.default(bullet);
    }
  }, {
    key: "_createTankView",
    value: function _createTankView(tank) {
      return new _DebugTankView2.default(tank);
    }
  }]);

  return DebugRenderer;
}(_AbstractPixiRenderer3.default);

exports.default = DebugRenderer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Renderer2 = __webpack_require__(6);

var _Renderer3 = _interopRequireDefault(_Renderer2);

var _AbstractView = __webpack_require__(11);

var _AbstractView2 = _interopRequireDefault(_AbstractView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderer = function (_Renderer) {
  _inherits(AbstractRenderer, _Renderer);

  function AbstractRenderer() {
    _classCallCheck(this, AbstractRenderer);

    var _this = _possibleConstructorReturn(this, (AbstractRenderer.__proto__ || Object.getPrototypeOf(AbstractRenderer)).call(this));

    _this._tankMap = [];
    _this._bulletMap = [];
    _this._offsetX = 0;
    _this._offsetY = 0;
    _this._speedMultiplier = 1;
    return _this;
  }

  _createClass(AbstractRenderer, [{
    key: "initBatlefield",
    value: function initBatlefield(battlefield) {
      this._offsetX = battlefield.offsetX;
      this._offsetY = battlefield.offsetY;
    }
  }, {
    key: "renderTank",
    value: function renderTank(tank, events) {
      this._renderModel(tank, events, this._tankMap, this._createTankView);
    }
  }, {
    key: "renderBullet",
    value: function renderBullet(bullet, events) {
      this._renderModel(bullet, events, this._bulletMap, this._createBulletView);
    }
  }, {
    key: "getBulletView",
    value: function getBulletView(id) {
      return this._bulletMap[id];
    }
  }, {
    key: "getTankView",
    value: function getTankView(id) {
      return this._tankMap[id];
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(v) {
      this._speedMultiplier = v;
    }
  }, {
    key: "_renderModel",
    value: function _renderModel(model, events, map, factory) {
      var view = null;
      if (map[model.id]) {
        view = map[model.id];
      } else {
        view = factory(model);
        map[model.id] = view;
      }
      view.update(events);
      return view;
    }
  }, {
    key: "_createTankView",
    value: function _createTankView(tank) {
      return new _AbstractView2.default(tank);
    }
  }, {
    key: "_createBulletView",
    value: function _createBulletView(bullet) {
      return new _AbstractView2.default(bullet);
    }
  }, {
    key: "offsetX",
    get: function get() {
      return this._offsetX;
    }
  }, {
    key: "offsetY",
    get: function get() {
      return this._offsetY;
    }
  }, {
    key: "speedMultiplier",
    get: function get() {
      return this._speedMultiplier;
    }
  }]);

  return AbstractRenderer;
}(_Renderer3.default);

exports.default = AbstractRenderer;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PixiRendererClockModel = function () {
  function PixiRendererClockModel() {
    _classCallCheck(this, PixiRendererClockModel);
  }

  _createClass(PixiRendererClockModel, [{
    key: "construct",
    value: function construct() {
      this._msElapsed = 0;
      this._msLimit = 0;
    }
  }, {
    key: "update",
    value: function update(msElapsed, msLimit) {
      this._msElapsed = msElapsed;
      this._msLimit = msLimit;
    }
  }, {
    key: "msElapsed",
    get: function get() {
      return this._msElapsed;
    }
  }, {
    key: "msLimit",
    get: function get() {
      return this._msLimit;
    }
  }, {
    key: "text",
    get: function get() {
      var msTotal = Math.max(0, this._msLimit - this._msElapsed);
      var s = Math.floor(msTotal / 1000);
      var ms = msTotal % 1000;
      s = s.toString();
      while (s.length < 2) {
        s = "0" + s;
      }ms = ms.toString();
      while (ms.length < 3) {
        ms = "0" + ms;
      }return "0:" + s + "." + ms;
    }
  }]);

  return PixiRendererClockModel;
}();

exports.default = PixiRendererClockModel;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPixiView2 = __webpack_require__(1);

var _AbstractPixiView3 = _interopRequireDefault(_AbstractPixiView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DebugBattlefieldView = function (_AbstractPixiView) {
  _inherits(DebugBattlefieldView, _AbstractPixiView);

  function DebugBattlefieldView() {
    _classCallCheck(this, DebugBattlefieldView);

    return _possibleConstructorReturn(this, (DebugBattlefieldView.__proto__ || Object.getPrototypeOf(DebugBattlefieldView)).apply(this, arguments));
  }

  _createClass(DebugBattlefieldView, [{
    key: "_create",
    value: function _create(container) {
      var background = new PIXI.Graphics();
      background.beginFill(0x000000);
      background.lineStyle(1, 0xffff00, 0.8);
      background.drawRect(0, 0, this.model.width + 2 * this.model.margin, this.model.height + 2 * this.model.margin);
      background.endFill();
      container.addChild(background);
      background = new PIXI.Graphics();
      background.beginFill(0x000000);
      background.lineStyle(1, 0xffff00, 0.8);
      background.drawRect(this.model.margin, this.model.margin, this.model.width, this.model.height);
      background.endFill();
      container.addChild(background);
    }
  }, {
    key: "update",
    value: function update(events) {}
  }]);

  return DebugBattlefieldView;
}(_AbstractPixiView3.default);

exports.default = DebugBattlefieldView;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPixiView2 = __webpack_require__(1);

var _AbstractPixiView3 = _interopRequireDefault(_AbstractPixiView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DebugClockView = function (_AbstractPixiView) {
  _inherits(DebugClockView, _AbstractPixiView);

  function DebugClockView(model) {
    _classCallCheck(this, DebugClockView);

    return _possibleConstructorReturn(this, (DebugClockView.__proto__ || Object.getPrototypeOf(DebugClockView)).call(this, model));
  }

  _createClass(DebugClockView, [{
    key: '_create',
    value: function _create(container) {
      var labelStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 12,
        fill: '#00ff00'
      });

      this._label = new PIXI.Text("clock", labelStyle);
      this._label.x = 5;
      this._label.y = 5;
      container.addChild(this._label);
    }
  }, {
    key: 'update',
    value: function update(events) {
      this._label.text = this.model.text;
    }
  }]);

  return DebugClockView;
}(_AbstractPixiView3.default);

exports.default = DebugClockView;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPixiBulletView = __webpack_require__(8);

var _AbstractPixiBulletView2 = _interopRequireDefault(_AbstractPixiBulletView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DebugBulletView = function (_AbstractPixiBulletVi) {
  _inherits(DebugBulletView, _AbstractPixiBulletVi);

  function DebugBulletView(model) {
    _classCallCheck(this, DebugBulletView);

    return _possibleConstructorReturn(this, (DebugBulletView.__proto__ || Object.getPrototypeOf(DebugBulletView)).call(this, model));
  }

  _createClass(DebugBulletView, [{
    key: "_create",
    value: function _create(container) {
      var bullet = new PIXI.Graphics();
      bullet.beginFill(0x00ff00, 0.5);
      bullet.drawCircle(0, 0, 5);
      bullet.endFill();
      container.addChild(bullet);
    }
  }]);

  return DebugBulletView;
}(_AbstractPixiBulletView2.default);

exports.default = DebugBulletView;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPixiTankView2 = __webpack_require__(4);

var _AbstractPixiTankView3 = _interopRequireDefault(_AbstractPixiTankView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DebugTankView = function (_AbstractPixiTankView) {
  _inherits(DebugTankView, _AbstractPixiTankView);

  function DebugTankView(model) {
    _classCallCheck(this, DebugTankView);

    return _possibleConstructorReturn(this, (DebugTankView.__proto__ || Object.getPrototypeOf(DebugTankView)).call(this, model));
  }

  _createClass(DebugTankView, [{
    key: '_createBody',
    value: function _createBody() {
      var body = new PIXI.Graphics();
      body.lineStyle(1, 0xffff00, 0.8);
      body.beginFill(0x00ff00, 0.5);
      body.drawRect(-15, -15, 30, 30);
      body.endFill();
      return body;
    }
  }, {
    key: '_createGun',
    value: function _createGun() {
      var body = new PIXI.Graphics();
      body.beginFill(0x00ff00, 0.5);
      body.lineStyle(1, 0xffff00, 0.8);
      body.drawCircle(0, 0, 10);
      body.drawRect(0, -3, 30, 6);
      body.endFill();
      return body;
    }
  }, {
    key: '_createRadar',
    value: function _createRadar() {
      var body = new PIXI.Graphics();
      body.beginFill(0x00ff00, 0.5);
      body.lineStyle(1, 0xffff00, 0.8);
      body.drawRect(-3, -10, 6, 20);
      body.endFill();
      body.lineStyle();
      body.beginFill(0xaaffaa, 0.1);
      body.moveTo(0, -3);
      var radarRange = 300;
      var radarFocal = 6;
      var width = radarRange * Math.tan(radarFocal * (Math.PI / 180)) / 2;
      body.lineTo(radarRange, -width);
      body.lineTo(radarRange, width);
      body.lineTo(0, 3);
      return body;
    }
  }, {
    key: '_createLabel',
    value: function _createLabel() {
      var labelStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 12,
        fill: 0x00ff00
      });
      var label = new PIXI.Text("", labelStyle);
      label.anchor.set(0.5, 0.5);
      label.x = 0;
      label.y = -40;
      return label;
    }
  }, {
    key: '_createHudBackground',
    value: function _createHudBackground() {
      var statusBarBg = new PIXI.Graphics();
      statusBarBg.beginFill(0x000000, 1);
      statusBarBg.lineStyle(1, 0xffff00, 0.8);
      statusBarBg.drawRect(-26, -3, 52, 6);
      statusBarBg.y = -30;
      return statusBarBg;
    }
  }, {
    key: '_createEnergyBar',
    value: function _createEnergyBar() {
      var energyBar = new PIXI.Graphics();
      energyBar.beginFill(0x00ff00, 1);
      energyBar.drawRect(0, -2, 50, 4);
      energyBar.x = -25;
      energyBar.y = -30;
      return energyBar;
    }
  }]);

  return DebugTankView;
}(_AbstractPixiTankView3.default);

exports.default = DebugTankView;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPixiRenderer2 = __webpack_require__(7);

var _AbstractPixiRenderer3 = _interopRequireDefault(_AbstractPixiRenderer2);

var _BWBattlefieldView = __webpack_require__(41);

var _BWBattlefieldView2 = _interopRequireDefault(_BWBattlefieldView);

var _BWClockView = __webpack_require__(42);

var _BWClockView2 = _interopRequireDefault(_BWClockView);

var _BWBulletView = __webpack_require__(43);

var _BWBulletView2 = _interopRequireDefault(_BWBulletView);

var _BWTankView = __webpack_require__(44);

var _BWTankView2 = _interopRequireDefault(_BWTankView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BWRenderer = function (_AbstractPixiRenderer) {
  _inherits(BWRenderer, _AbstractPixiRenderer);

  function BWRenderer() {
    _classCallCheck(this, BWRenderer);

    var _this = _possibleConstructorReturn(this, (BWRenderer.__proto__ || Object.getPrototypeOf(BWRenderer)).call(this, 'bw'));

    _this._bigBoomAnim = [];
    _this._smallBoomAnim = [];
    _this._shakeTimer = 0;
    return _this;
  }

  _createClass(BWRenderer, [{
    key: "onAssetsLoaded",
    value: function onAssetsLoaded() {
      for (var i = 0; i <= 9; i++) {
        this._bigBoomAnim.push(PIXI.Texture.fromFrame('big_boom_00' + i));
        this._smallBoomAnim.push(PIXI.Texture.fromFrame('small_boom_00' + i));
      }
    }
  }, {
    key: "initBatlefield",
    value: function initBatlefield(battlefield) {
      _get(BWRenderer.prototype.__proto__ || Object.getPrototypeOf(BWRenderer.prototype), "initBatlefield", this).call(this, battlefield);
    }
  }, {
    key: "renderTank",
    value: function renderTank(tank, events) {
      _get(BWRenderer.prototype.__proto__ || Object.getPrototypeOf(BWRenderer.prototype), "renderTank", this).call(this, tank, events);
      if (tank.energy == 0) {
        this._shakeTimer = 10;
        this._addExplosion(tank.x, tank.y, this._bigBoomAnim);
      }
    }
  }, {
    key: "renderBullet",
    value: function renderBullet(bullet, events) {
      _get(BWRenderer.prototype.__proto__ || Object.getPrototypeOf(BWRenderer.prototype), "renderBullet", this).call(this, bullet, events);
      if (bullet.exploded) {
        this._addExplosion(bullet.x, bullet.y, this._smallBoomAnim);
      }
    }
  }, {
    key: "postRender",
    value: function postRender() {
      _get(BWRenderer.prototype.__proto__ || Object.getPrototypeOf(BWRenderer.prototype), "postRender", this).call(this);
      if (this._shakeTimer > 0) {
        this._shakeTimer--;
        this.masterContainer.x = Math.random() * 10 - 5 - this.offsetX;
        this.masterContainer.y = Math.random() * 10 - 5 - this.offsetY;
      } else {
        this.masterContainer.x = -this.offsetX;
        this.masterContainer.y = -this.offsetY;
      }
    }
  }, {
    key: "_createBattlefieldView",
    value: function _createBattlefieldView(battlefield) {
      return new _BWBattlefieldView2.default(battlefield);
    }
  }, {
    key: "_createClockView",
    value: function _createClockView(clock) {
      return new _BWClockView2.default(clock);
    }
  }, {
    key: "_createBulletView",
    value: function _createBulletView(bullet) {
      return new _BWBulletView2.default(bullet);
    }
  }, {
    key: "_createTankView",
    value: function _createTankView(tank) {
      return new _BWTankView2.default(tank);
    }
  }, {
    key: "_addExplosion",
    value: function _addExplosion(x, y, type) {
      var anim = new PIXI.extras.AnimatedSprite(type);
      anim.anchor.set(0.5);
      this.masterContainer.addChild(anim);
      anim.x = x;
      anim.y = y;
      anim.loop = false;
      anim.onComplete = function () {
        this.stop();
        this.parent.removeChild(this);
      };
      anim.play();
    }
  }]);

  return BWRenderer;
}(_AbstractPixiRenderer3.default);

exports.default = BWRenderer;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPixiView2 = __webpack_require__(1);

var _AbstractPixiView3 = _interopRequireDefault(_AbstractPixiView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BWBattlefieldView = function (_AbstractPixiView) {
  _inherits(BWBattlefieldView, _AbstractPixiView);

  function BWBattlefieldView() {
    _classCallCheck(this, BWBattlefieldView);

    return _possibleConstructorReturn(this, (BWBattlefieldView.__proto__ || Object.getPrototypeOf(BWBattlefieldView)).apply(this, arguments));
  }

  _createClass(BWBattlefieldView, [{
    key: '_create',
    value: function _create(container) {
      var background = PIXI.Sprite.fromFrame('battlefield');
      container.addChild(background);
    }
  }, {
    key: 'update',
    value: function update(events) {}
  }]);

  return BWBattlefieldView;
}(_AbstractPixiView3.default);

exports.default = BWBattlefieldView;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPixiView2 = __webpack_require__(1);

var _AbstractPixiView3 = _interopRequireDefault(_AbstractPixiView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BWClockView = function (_AbstractPixiView) {
  _inherits(BWClockView, _AbstractPixiView);

  function BWClockView(model) {
    _classCallCheck(this, BWClockView);

    return _possibleConstructorReturn(this, (BWClockView.__proto__ || Object.getPrototypeOf(BWClockView)).call(this, model));
  }

  _createClass(BWClockView, [{
    key: '_create',
    value: function _create(container) {
      var labelStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 15,
        fill: '#000000'
      });

      this._label = new PIXI.Text("clock", labelStyle);
      this._label.x = 10;
      this._label.y = 600 - 20;
      container.addChild(this._label);
    }
  }, {
    key: 'update',
    value: function update(events) {
      this._label.text = this.model.text;
    }
  }]);

  return BWClockView;
}(_AbstractPixiView3.default);

exports.default = BWClockView;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPixiBulletView = __webpack_require__(8);

var _AbstractPixiBulletView2 = _interopRequireDefault(_AbstractPixiBulletView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BWBulletView = function (_AbstractPixiBulletVi) {
  _inherits(BWBulletView, _AbstractPixiBulletVi);

  function BWBulletView(model) {
    _classCallCheck(this, BWBulletView);

    return _possibleConstructorReturn(this, (BWBulletView.__proto__ || Object.getPrototypeOf(BWBulletView)).call(this, model));
  }

  _createClass(BWBulletView, [{
    key: '_create',
    value: function _create(container) {
      var bullet = PIXI.Sprite.fromFrame('bullet');
      bullet.anchor.set(0.5);
      container.addChild(bullet);
    }
  }]);

  return BWBulletView;
}(_AbstractPixiBulletView2.default);

exports.default = BWBulletView;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPixiTankView2 = __webpack_require__(4);

var _AbstractPixiTankView3 = _interopRequireDefault(_AbstractPixiTankView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BWTankView = function (_AbstractPixiTankView) {
  _inherits(BWTankView, _AbstractPixiTankView);

  function BWTankView(model) {
    _classCallCheck(this, BWTankView);

    return _possibleConstructorReturn(this, (BWTankView.__proto__ || Object.getPrototypeOf(BWTankView)).call(this, model));
  }

  _createClass(BWTankView, [{
    key: 'update',
    value: function update(events) {
      _get(BWTankView.prototype.__proto__ || Object.getPrototypeOf(BWTankView.prototype), 'update', this).call(this, events);
      this._shoot.alpha = this.model.isShooting ? 1 : this._shoot.alpha * 0.7;
    }
  }, {
    key: '_createBody',
    value: function _createBody() {
      var body = PIXI.Sprite.fromFrame('tank_body');
      body.anchor.set(0.5);
      return body;
    }
  }, {
    key: '_createGun',
    value: function _createGun() {
      var gunContainer = new PIXI.Container();

      var tankGun = PIXI.Sprite.fromFrame('tank_gun');
      tankGun.anchor.set(0.3, 0.5);
      gunContainer.addChild(tankGun);

      this._shoot = PIXI.Sprite.fromFrame('tank_shoot');
      this._shoot.anchor.set(-1.2, 0.5);
      this._shoot.alpha = 0;
      gunContainer.addChild(this._shoot);

      return gunContainer;
    }
  }, {
    key: '_createRadar',
    value: function _createRadar() {
      var tankRadar = PIXI.Sprite.fromFrame('tank_radar');
      tankRadar.anchor.set(0.5);
      return tankRadar;
    }
  }, {
    key: '_createLabel',
    value: function _createLabel() {
      var labelStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 12,
        fill: 0x000000
      });
      var label = new PIXI.Text("", labelStyle);
      label.anchor.set(0.5, 0.5);
      label.x = 0;
      label.y = -40;
      return label;
    }
  }, {
    key: '_createHudBackground',
    value: function _createHudBackground() {
      var statusBarBg = new PIXI.Graphics();
      statusBarBg.beginFill(0x000000, 1);
      statusBarBg.drawRect(-26, -3, 52, 6);
      statusBarBg.y = -30;
      return statusBarBg;
    }
  }, {
    key: '_createEnergyBar',
    value: function _createEnergyBar() {
      var energyBar = new PIXI.Graphics();
      energyBar.beginFill(0xff0000, 1);
      energyBar.drawRect(0, -2, 50, 4);
      energyBar.x = -25;
      energyBar.y = -30;
      return energyBar;
    }
  }]);

  return BWTankView;
}(_AbstractPixiTankView3.default);

exports.default = BWTankView;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPixiRenderer2 = __webpack_require__(7);

var _AbstractPixiRenderer3 = _interopRequireDefault(_AbstractPixiRenderer2);

var _BrodyBattlefieldView = __webpack_require__(46);

var _BrodyBattlefieldView2 = _interopRequireDefault(_BrodyBattlefieldView);

var _BrodyClockView = __webpack_require__(47);

var _BrodyClockView2 = _interopRequireDefault(_BrodyClockView);

var _BrodyBulletView = __webpack_require__(48);

var _BrodyBulletView2 = _interopRequireDefault(_BrodyBulletView);

var _BrodyTankView = __webpack_require__(49);

var _BrodyTankView2 = _interopRequireDefault(_BrodyTankView);

var _BrodySettings = __webpack_require__(50);

var _BrodySettings2 = _interopRequireDefault(_BrodySettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrodyRenderer = function (_AbstractPixiRenderer) {
  _inherits(BrodyRenderer, _AbstractPixiRenderer);

  function BrodyRenderer() {
    _classCallCheck(this, BrodyRenderer);

    var _this = _possibleConstructorReturn(this, (BrodyRenderer.__proto__ || Object.getPrototypeOf(BrodyRenderer)).call(this, 'brody'));

    _this._bigBoomAnim = [];
    _this._shakeTimer = 0;
    _this._particleContainer = null;
    _this._particleList = [];
    _this._explosionList = [];
    _this._settings = new _BrodySettings2.default();
    _this._masterContainer.addChild(_this._bulletContainer);
    _this._frameTimer = 0;
    _this._frameCounter = 0;
    _this._fpsInterval = null;
    _this._fps = 30;
    return _this;
  }

  _createClass(BrodyRenderer, [{
    key: "onAssetsLoaded",
    value: function onAssetsLoaded() {
      var i = void 0;
      for (i = 0; i <= 22; i++) {
        this._bigBoomAnim.push(PIXI.Texture.fromFrame('big_boom_0' + (i < 10 ? "0" + i : i)));
      }
    }
  }, {
    key: "initBatlefield",
    value: function initBatlefield(battlefield) {
      _get(BrodyRenderer.prototype.__proto__ || Object.getPrototypeOf(BrodyRenderer.prototype), "initBatlefield", this).call(this, battlefield);
      this.battlefieldView.configure(this._settings);
      this._particleContainer = new PIXI.particles.ParticleContainer(1000, {
        position: true,
        rotation: true,
        alpha: true
      });
      this._masterContainer.addChild(this._particleContainer);
      this._masterContainer.addChild(this._hudContainer);

      var self = this;
      this._fpsInterval = setInterval(function () {
        self._fps = self._frameCounter;
        self._frameCounter = 0;
      }, 1000);
    }
  }, {
    key: "renderTank",
    value: function renderTank(tank, events) {
      _get(BrodyRenderer.prototype.__proto__ || Object.getPrototypeOf(BrodyRenderer.prototype), "renderTank", this).call(this, tank, events);

      var i = void 0;
      for (i in events) {
        if (events[i].type == 'destroy') {
          this._shakeTimer = 10;
          this._addTankExplosion(tank);
          break;
        }
      }

      var directionCorrection = tank.throttle > 0 ? 180 : 0;
      var dirtAngle = (tank.angle + directionCorrection) * (Math.PI / 180);
      if (tank.speed > 1) {
        var corner1X = tank.x + 20 * Math.cos(dirtAngle - Math.PI / 4) + 7 * Math.cos(dirtAngle);
        var corner1Y = tank.y + 20 * Math.sin(dirtAngle - Math.PI / 4) + 7 * Math.sin(dirtAngle);
        var corner2X = tank.x + 20 * Math.cos(dirtAngle + Math.PI / 4) + 7 * Math.cos(dirtAngle);
        var corner2Y = tank.y + 20 * Math.sin(dirtAngle + Math.PI / 4) + 7 * Math.sin(dirtAngle);

        if (Math.random() < this.speedMultiplier) {
          this._addDirt(corner1X, corner1Y);
          this._addDirt(corner2X, corner2Y);
        }
      }
    }
  }, {
    key: "renderBullet",
    value: function renderBullet(bullet, events) {
      _get(BrodyRenderer.prototype.__proto__ || Object.getPrototypeOf(BrodyRenderer.prototype), "renderBullet", this).call(this, bullet, events);
      var view = this.getBulletView(bullet.id);
      view.configure(this._settings);
      if (bullet.exploded) {
        this._addBulletExplosion(bullet);
        this.battlefieldView.addBulletHole(bullet.x, bullet.y, bullet.power);
      }
    }
  }, {
    key: "preRender",
    value: function preRender() {
      _get(BrodyRenderer.prototype.__proto__ || Object.getPrototypeOf(BrodyRenderer.prototype), "preRender", this).call(this);
      var particle = void 0;
      var particleCount = 0;
      var i = void 0;
      for (i = this._particleList.length - 1; i >= 0; i--) {
        particle = this._particleList[i];
        if (!particle) {
          continue;
        }

        particle.x += this.speedMultiplier * particle.speed * particle.rotation * Math.cos(particle.rotation);
        particle.y += this.speedMultiplier * particle.speed * particle.rotation * Math.sin(particle.rotation);
        particle.alpha = Math.max(0, particle.alpha - this.speedMultiplier * particle.alphaSpeed);

        particle.lifetime -= this.speedMultiplier;
        if (particle.lifetime <= 0 || particleCount > this._settings.particleLimit) {
          particle.parent.removeChild(particle);
          this._particleList[i] = null;
        } else {
          particleCount++;
        }
      }
      for (i = 0; i < this._explosionList.length; i++) {
        if (!this._explosionList[i]) continue;
        this._explosionList[i].alpha = this._explosionList[i].alpha - 0.12 * this.speedMultiplier;
        if (this._explosionList[i].alpha < 0.01) {
          this._explosionList[i].parent.removeChild(this._explosionList[i]);
          this._explosionList[i] = null;
        }
      }
    }
  }, {
    key: "postRender",
    value: function postRender() {
      this._frameTimer++;
      this._frameCounter++;
      if (this._frameTimer % this._settings.dropFrames == 0) {
        _get(BrodyRenderer.prototype.__proto__ || Object.getPrototypeOf(BrodyRenderer.prototype), "postRender", this).call(this);
      }
      if (this._shakeTimer > 0) {
        this._shakeTimer--;
        this.masterContainer.x = Math.random() * 10 - 5 - this.offsetX;
        this.masterContainer.y = Math.random() * 10 - 5 - this.offsetY;
        this._battlefieldView.view.x = Math.random() * 10 - 5;
        this._battlefieldView.view.y = Math.random() * 10 - 5;
      } else {
        this.masterContainer.x = -this.offsetX;
        this.masterContainer.y = -this.offsetY;
        this._battlefieldView.view.x = 0;
        this._battlefieldView.view.y = 0;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this._fpsInterval) {
        clearInterval(this._fpsInterval);
      }
    }
  }, {
    key: "_getSpritesheetUrls",
    value: function _getSpritesheetUrls(rendererName, rendererScale) {
      var resolution = rendererScale == 2 ? "retina@2x" : "web";
      if (rendererScale >= 2) {
        return ["img/spritesheets/" + rendererName + "/retina@2x/jsbattle_0.json", "img/spritesheets/" + rendererName + "/retina@2x/jsbattle_1.json"];
      } else {
        return ["img/spritesheets/" + rendererName + "/web/jsbattle.json"];
      }
    }
  }, {
    key: "_addTankExplosion",
    value: function _addTankExplosion(tank) {
      this._addExplosion(tank.x, tank.y, this._bigBoomAnim);
      this.battlefieldView.addCrater(tank.x, tank.y);
      this._addSparks(tank.x, tank.y, 300);
    }
  }, {
    key: "_addBulletExplosion",
    value: function _addBulletExplosion(bullet) {
      this._addGlow(bullet.x, bullet.y, 0.3 + 0.6 * bullet.power);
      var sparks = 5 + 40 * bullet.power;
      this._addSparks(bullet.x, bullet.y, sparks);
    }
  }, {
    key: "_createBattlefieldView",
    value: function _createBattlefieldView(battlefield) {
      return new _BrodyBattlefieldView2.default(battlefield);
    }
  }, {
    key: "_createClockView",
    value: function _createClockView(clock) {
      return new _BrodyClockView2.default(clock);
    }
  }, {
    key: "_createBulletView",
    value: function _createBulletView(bullet) {
      return new _BrodyBulletView2.default(bullet);
    }
  }, {
    key: "_createTankView",
    value: function _createTankView(tank) {
      return new _BrodyTankView2.default(tank);
    }
  }, {
    key: "_addExplosion",
    value: function _addExplosion(x, y, type) {
      this._addGlow(x, y, 5);

      var anim = new PIXI.extras.AnimatedSprite(type);
      anim.animationSpeed = this.speedMultiplier;
      anim.anchor.set(0.5);
      this.masterContainer.addChild(anim);
      anim.x = x;
      anim.y = y;
      anim.loop = false;
      anim.blendMode = PIXI.BLEND_MODES.ADD;
      anim.onComplete = function () {
        this.stop();
        this.parent.removeChild(this);
      };
      anim.play();
    }
  }, {
    key: "_addGlow",
    value: function _addGlow(x, y, scale) {
      if (!this._settings.showGlow) return;
      var glow = PIXI.Sprite.fromFrame('glow');
      glow.anchor.set(0.5);
      glow.scale.x = glow.scale.y = scale;
      glow.alpha = 0.4;
      glow.blendMode = PIXI.BLEND_MODES.ADD;
      glow.x = x;
      glow.y = y;
      this.masterContainer.addChild(glow);
      this._explosionList.push(glow);
    }
  }, {
    key: "_addSparks",
    value: function _addSparks(x, y, amount) {
      amount = Math.ceil(amount * this._settings.quality);
      for (var i = 0; i < amount; i++) {
        var particle = PIXI.Sprite.fromFrame('spark');
        particle.x = x;
        particle.y = y;
        particle.alphaSpeed = 0;
        particle.anchor.set(0.5);
        particle.speed = 1 + Math.random() * 2;
        particle.rotation = Math.random() * 2 * Math.PI;
        particle.lifetime = 5 + Math.random() * 5;
        this._particleContainer.addChild(particle);
        this._particleList.push(particle);
      }
    }
  }, {
    key: "_addDirt",
    value: function _addDirt(x, y) {
      if (!this._settings.showDirt) return;
      for (var i = 0; i < 5; i++) {
        var index = Math.floor(Math.random() * 3);
        var particle = PIXI.Sprite.fromFrame('dirt_' + index);
        particle.x = x + Math.random() * 4 - 2;
        particle.y = y + Math.random() * 4 - 2;
        particle.anchor.set(0.5);
        particle.speed = 0;
        particle.alphaSpeed = 0.02 + Math.random() * 0.02;
        particle.rotation = 0;
        particle.alpha = 0.1 + 0.4 * Math.random();
        particle.lifetime = 25;
        particle.scale.x = particle.scale.y = 0.5 + 2 * Math.random();
        this._particleContainer.addChild(particle);
        this._particleList.push(particle);
      }
    }
  }, {
    key: "quality",
    get: function get() {
      return this._settings.quality;
    },
    set: function set(v) {
      this._settings.quality = v;
    }
  }]);

  return BrodyRenderer;
}(_AbstractPixiRenderer3.default);

exports.default = BrodyRenderer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPixiView2 = __webpack_require__(1);

var _AbstractPixiView3 = _interopRequireDefault(_AbstractPixiView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrodyBattlefieldView = function (_AbstractPixiView) {
  _inherits(BrodyBattlefieldView, _AbstractPixiView);

  function BrodyBattlefieldView(model) {
    _classCallCheck(this, BrodyBattlefieldView);

    var _this = _possibleConstructorReturn(this, (BrodyBattlefieldView.__proto__ || Object.getPrototypeOf(BrodyBattlefieldView)).call(this, model));

    _this._holeList = [];
    _this._settings = null;
    return _this;
  }

  _createClass(BrodyBattlefieldView, [{
    key: 'configure',
    value: function configure(settings) {
      this._settings = settings;
    }
  }, {
    key: '_create',
    value: function _create(container) {
      var background = PIXI.Sprite.fromFrame('battlefield');
      container.addChild(background);

      var groundMask = new PIXI.Graphics();
      groundMask.beginFill(0x0000ff, 1);
      groundMask.moveTo(25, 25);
      groundMask.lineTo(900 - 25, 25);
      groundMask.lineTo(900 - 25, 600 - 25);
      groundMask.lineTo(90, 600 - 25);
      groundMask.lineTo(90, 600 - 35);
      groundMask.lineTo(25, 600 - 35);
      groundMask.lineTo(25, 25);
      groundMask.endFill();

      this._craterContainer = new PIXI.Container();
      this._craterContainer.mask = groundMask;
      container.addChild(this._craterContainer);
      container.addChild(groundMask);

      var wallMask = new PIXI.Graphics();
      wallMask.beginFill(0x0000ff, 0.4);
      wallMask.moveTo(15, 15);
      wallMask.lineTo(900 - 15, 15);
      wallMask.lineTo(900 - 15, 600 - 15);
      wallMask.lineTo(80, 600 - 15);
      wallMask.lineTo(80, 600 - 25);
      wallMask.lineTo(15, 600 - 25);
      wallMask.lineTo(15, 15);
      wallMask.lineTo(25, 25);
      wallMask.lineTo(25, 600 - 25);
      wallMask.lineTo(80, 600 - 25);
      wallMask.lineTo(80, 600 - 25);
      wallMask.lineTo(900 - 25, 600 - 25);
      wallMask.lineTo(900 - 25, 25);
      wallMask.lineTo(25, 25);
      wallMask.endFill();
      this._holesContainer = new PIXI.Container();
      this._holesContainer.mask = wallMask;
      container.addChild(this._holesContainer);
      container.addChild(wallMask);
    }
  }, {
    key: 'addCrater',
    value: function addCrater(x, y) {
      var crater = PIXI.Sprite.fromFrame('crater');
      crater.anchor.set(0.5);
      crater.x = x - this.model.offsetX;
      crater.y = y - this.model.offsetY;
      crater.blendMode = PIXI.BLEND_MODES.MULTIPLY;
      crater.alpha = 0.8;
      this._craterContainer.addChild(crater);
    }
  }, {
    key: 'update',
    value: function update() {
      _get(BrodyBattlefieldView.prototype.__proto__ || Object.getPrototypeOf(BrodyBattlefieldView.prototype), 'update', this).call(this);
      this._holesContainer.visible = this._settings.skratchLimit > 0;
      this._craterContainer.visible = this._settings.showCraters;
    }
  }, {
    key: 'addBulletHole',
    value: function addBulletHole(x, y, power) {
      var rotation = 0;
      if (Math.abs(y - this.model.maxY) < 10) {
        y = this.model.maxY + 3 + Math.random() * 3;
      } else if (Math.abs(y - this.model.minY) < 10) {
        y = this.model.minY - 3 - Math.random() * 3;
      } else if (Math.abs(x - this.model.maxX) < 10) {
        x = this.model.maxX + 3 + Math.random() * 3;
        rotation = Math.PI / 2;
      } else if (Math.abs(x - this.model.minX) < 10) {
        x = this.model.minX - 3 - Math.random() * 3;
        rotation = Math.PI / 2;
      } else {
        return;
      }

      var hole = PIXI.Sprite.fromFrame('hole');
      hole.anchor.set(0.5);
      hole.x = x - this.model.offsetX;
      hole.y = y - this.model.offsetY;
      hole.rotation = rotation;
      hole.scale.x = hole.scale.y = 0.7 + 0.5 * power;
      this._holesContainer.addChild(hole);
      this._holeList.push(hole);
      var limit = this._settings ? this._settings.skratchLimit : 20;
      while (this._holeList.length > limit) {
        hole = this._holeList.shift();
        hole.parent.removeChild(hole);
      }
    }
  }]);

  return BrodyBattlefieldView;
}(_AbstractPixiView3.default);

exports.default = BrodyBattlefieldView;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPixiView2 = __webpack_require__(1);

var _AbstractPixiView3 = _interopRequireDefault(_AbstractPixiView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrodyClockView = function (_AbstractPixiView) {
  _inherits(BrodyClockView, _AbstractPixiView);

  function BrodyClockView(model) {
    _classCallCheck(this, BrodyClockView);

    return _possibleConstructorReturn(this, (BrodyClockView.__proto__ || Object.getPrototypeOf(BrodyClockView)).call(this, model));
  }

  _createClass(BrodyClockView, [{
    key: '_create',
    value: function _create(container) {
      var labelStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 15,
        fill: '#000000'
      });

      this._label = new PIXI.Text("clock", labelStyle);
      this._label.x = 10;
      this._label.y = 600 - 20;
      container.addChild(this._label);
    }
  }, {
    key: 'update',
    value: function update(events) {
      this._label.text = this.model.text;
    }
  }]);

  return BrodyClockView;
}(_AbstractPixiView3.default);

exports.default = BrodyClockView;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPixiBulletView = __webpack_require__(8);

var _AbstractPixiBulletView2 = _interopRequireDefault(_AbstractPixiBulletView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrodyBulletView = function (_AbstractPixiBulletVi) {
  _inherits(BrodyBulletView, _AbstractPixiBulletVi);

  function BrodyBulletView(model, settings) {
    _classCallCheck(this, BrodyBulletView);

    return _possibleConstructorReturn(this, (BrodyBulletView.__proto__ || Object.getPrototypeOf(BrodyBulletView)).call(this, model));
  }

  _createClass(BrodyBulletView, [{
    key: 'configure',
    value: function configure(settings) {
      this._settings = settings;
    }
  }, {
    key: 'update',
    value: function update(events) {
      _get(BrodyBulletView.prototype.__proto__ || Object.getPrototypeOf(BrodyBulletView.prototype), 'update', this).call(this, events);
      this._glow.visible = this._settings && this._settings.showGlow;
    }
  }, {
    key: '_create',
    value: function _create(container) {
      var bullet = PIXI.Sprite.fromFrame('bullet');
      bullet.anchor.set(0.5);
      var glow = PIXI.Sprite.fromFrame('glow');
      glow.anchor.set(0.5);
      glow.blendMode = PIXI.BLEND_MODES.ADD;
      glow.alpha = 0.1;
      this._glow = glow;
      container.addChild(glow);
      container.addChild(bullet);
    }
  }]);

  return BrodyBulletView;
}(_AbstractPixiBulletView2.default);

exports.default = BrodyBulletView;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals PIXI */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPixiTankView2 = __webpack_require__(4);

var _AbstractPixiTankView3 = _interopRequireDefault(_AbstractPixiTankView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrodyTankView = function (_AbstractPixiTankView) {
  _inherits(BrodyTankView, _AbstractPixiTankView);

  function BrodyTankView(model) {
    _classCallCheck(this, BrodyTankView);

    var _this = _possibleConstructorReturn(this, (BrodyTankView.__proto__ || Object.getPrototypeOf(BrodyTankView)).call(this, model));

    _this._lightTimer = 0;
    return _this;
  }

  _createClass(BrodyTankView, [{
    key: 'update',
    value: function update(events) {
      _get(BrodyTankView.prototype.__proto__ || Object.getPrototypeOf(BrodyTankView.prototype), 'update', this).call(this, events);
      this._shoot.alpha = this._shoot.alpha * 0.8;
      this._tankGun.x = this._tankGun.x * 0.8;
      this.radar.rotation = (-this.model.gunAngle + this._model.radarAngle) * (Math.PI / 180);

      this._lightTimer = this.model.enemySpot ? this._lightTimer + 1 : 0;

      this._light.alpha = -Math.cos(this._lightTimer * 0.25) * 0.5 + 0.5;
    }
  }, {
    key: '_onShoot',
    value: function _onShoot(event) {
      _get(BrodyTankView.prototype.__proto__ || Object.getPrototypeOf(BrodyTankView.prototype), '_onShoot', this).call(this, event);
      this._tankGun.x = -1 - 3 * event.bullet.power;
      this._shoot.alpha = 1;
    }
  }, {
    key: '_create',
    value: function _create(container) {
      _get(BrodyTankView.prototype.__proto__ || Object.getPrototypeOf(BrodyTankView.prototype), '_create', this).call(this, container);
      this._tankGun.addChild(this.radar);
    }
  }, {
    key: '_createBody',
    value: function _createBody() {
      var body = PIXI.Sprite.fromFrame('tank_body_' + this.model.skin);
      body.anchor.set(0.3, 0.5);
      return body;
    }
  }, {
    key: '_createGun',
    value: function _createGun() {
      var gunContainer = new PIXI.Container();

      var tankGun = PIXI.Sprite.fromFrame('tank_gun_' + this.model.skin);
      tankGun.anchor.set(0.3, 0.5);
      gunContainer.addChild(tankGun);
      this._tankGun = tankGun;

      this._shoot = PIXI.Sprite.fromFrame('tank_shoot');
      this._shoot.anchor.set(0.3, 0.5);
      this._shoot.alpha = 0;

      this._light = PIXI.Sprite.fromFrame('tank_light');
      this._light.anchor.set(0.3, 0.5);
      this._light.alpha = 0;

      gunContainer.addChild(this._shoot);
      gunContainer.addChild(this._light);

      return gunContainer;
    }
  }, {
    key: '_createRadar',
    value: function _createRadar() {
      var tankRadar = PIXI.Sprite.fromFrame('tank_radar_' + this.model.skin);
      tankRadar.anchor.set(0.2, 0.5);
      tankRadar.x = -5;
      return tankRadar;
    }
  }, {
    key: '_createLabel',
    value: function _createLabel() {
      var labelStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 10,
        stroke: 0x000000,
        strokeThickness: 2,
        fill: 0xffffbb
      });
      var label = new PIXI.Text("", labelStyle);
      label.anchor.set(0.5, 0.5);
      label.x = 0;
      label.y = -40;
      return label;
    }
  }, {
    key: '_createHudBackground',
    value: function _createHudBackground() {
      var statusBarBg = new PIXI.Graphics();
      statusBarBg.beginFill(0x000000, 1);
      statusBarBg.drawRect(-26, -3, 52, 6);
      statusBarBg.y = -30;
      return statusBarBg;
    }
  }, {
    key: '_createEnergyBar',
    value: function _createEnergyBar() {
      var energyBar = new PIXI.Graphics();
      energyBar.beginFill(0xffff99, 1);
      energyBar.drawRect(0, -2, 50, 4);
      energyBar.x = -25;
      energyBar.y = -30;
      return energyBar;
    }
  }]);

  return BrodyTankView;
}(_AbstractPixiTankView3.default);

exports.default = BrodyTankView;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BrodySettings = function () {
  function BrodySettings(model) {
    _classCallCheck(this, BrodySettings);

    this._particleLimit = 1000;
    this._skratchLimit = 100;
    this._showDirt = true;
    this._showGlow = true;
    this._showCraters = true;
    this._dropFrames = 1;
    this._quality = 1;
    this.quality = this._quality;
  }

  _createClass(BrodySettings, [{
    key: 'dropFrames',
    get: function get() {
      return this._dropFrames;
    }
  }, {
    key: 'particleLimit',
    get: function get() {
      return this._particleLimit;
    }
  }, {
    key: 'skratchLimit',
    get: function get() {
      return this._skratchLimit;
    }
  }, {
    key: 'showDirt',
    get: function get() {
      return this._showDirt;
    }
  }, {
    key: 'showGlow',
    get: function get() {
      return this._showGlow;
    }
  }, {
    key: 'showCraters',
    get: function get() {
      return this._showCraters;
    }
  }, {
    key: 'quality',
    get: function get() {
      return this._quality;
    },
    set: function set(v) {
      v = Math.min(1, Math.max(0, v));
      this._quality = v;
      this._particleLimit = Math.round(1000 * v * v);
      this._skratchLimit = Math.round(100 * v);
      this._showDirt = v > 0.2;
      this._showGlow = v > 0.5;
      this._showCraters = v > 0.1;
      if (v > 0.3) {
        this._dropFrames = 1;
      } else if (v > 0.2) {
        this._dropFrames = 2;
      } else if (v > 0.1) {
        this._dropFrames = 3;
      } else {
        this._dropFrames = 4;
      }
      this._quality = v;
    }
  }]);

  return BrodySettings;
}();

exports.default = BrodySettings;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Renderer2 = __webpack_require__(6);

var _Renderer3 = _interopRequireDefault(_Renderer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VoidRenderer = function (_Renderer) {
  _inherits(VoidRenderer, _Renderer);

  function VoidRenderer() {
    _classCallCheck(this, VoidRenderer);

    return _possibleConstructorReturn(this, (VoidRenderer.__proto__ || Object.getPrototypeOf(VoidRenderer)).apply(this, arguments));
  }

  _createClass(VoidRenderer, [{
    key: "renderTank",
    value: function renderTank(tank, events) {}
  }, {
    key: "renderBullet",
    value: function renderBullet(bullet, events) {}
  }, {
    key: "loadAssets",
    value: function loadAssets(done) {
      done();
    }
  }, {
    key: "init",
    value: function init() {}
  }]);

  return VoidRenderer;
}(_Renderer3.default);

exports.default = VoidRenderer;

/***/ })
/******/ ]);
//# sourceMappingURL=jsbattle.js.map