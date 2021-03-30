// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.successOrfalse3 = exports.successOrfalse2 = exports.draw = exports.userWin = exports.comWin = exports.fail3 = exports.fail2 = exports.success3 = exports.success2 = exports.error = exports.user = exports.com = exports.start = exports.remainCount = exports.count30 = exports.count20 = exports.count10 = exports.userSCORE3 = exports.userSCORE2 = exports.comSCORE2 = exports.comSCORE3 = void 0;
var CountButtons = document.querySelectorAll('#countBtn');
var ShowCount = document.querySelector('#countShow');
var startBtn = document.querySelector('#startBtn');
var message = document.querySelector('#message');
var resultMessage = document.querySelector('#resultMessage');
var scoreCom = document.querySelector('.score-com');
var scoreUser = document.querySelector('.score-user');
var comShootBtn = document.querySelector('#comShootBtn');
var userShootBtn2 = document.querySelector('#userShootBtn2');
var userShootBtn3 = document.querySelector('#userShootBtn3'); // 액션명 생성

var COM_SCORE3 = 'com/SCORE3';
var COM_SCORE2 = 'com/SCORE2';
var USER_SCORE2 = 'user/SCORE2';
var USER_SCORE3 = 'user/SCORE3';
var COUNT10 = 'count/COUNT10';
var COUNT20 = 'count/COUNT20';
var COUNT30 = 'count/COUNT30';
var REMAIN_COUNT = 'count/REMAIN_COUNT';
var SUCCESS_OR_FALSE2 = 'success/SUCCESS_OR_FALSE2';
var SUCCESS_OR_FALSE3 = 'success/SUCCESS_OR_FALSE3';
var START = 'message/START';
var COM = 'message/COM';
var USER = 'message/USER';
var ERROR = 'message/ERROR';
var SUCCESS2 = 'resultMessage/SUCCESS2';
var SUCCESS3 = 'resultMessage/SUCCESS3';
var FAIL2 = 'resultMessage/FAIL2';
var FAIL3 = 'resultMessage/FAIL3'; // 액션정의함수 생성

var comSCORE3 = function comSCORE3() {
  return {
    type: COM_SCORE3
  };
};

exports.comSCORE3 = comSCORE3;

var comSCORE2 = function comSCORE2() {
  return {
    type: COM_SCORE2
  };
};

exports.comSCORE2 = comSCORE2;

var userSCORE2 = function userSCORE2() {
  return {
    type: USER_SCORE2
  };
};

exports.userSCORE2 = userSCORE2;

var userSCORE3 = function userSCORE3() {
  return {
    type: USER_SCORE3
  };
};

exports.userSCORE3 = userSCORE3;

var count10 = function count10() {
  return {
    type: COUNT10,
    selectedCount: 10,
    currentCount: 10
  };
};

exports.count10 = count10;

var count20 = function count20() {
  return {
    type: COUNT20,
    selectedCount: 20,
    currentCount: 20
  };
};

exports.count20 = count20;

var count30 = function count30() {
  return {
    type: COUNT30,
    selectedCount: 30,
    currentCount: 30
  };
};

exports.count30 = count30;

var remainCount = function remainCount() {
  return {
    type: REMAIN_COUNT
  };
};

exports.remainCount = remainCount;

var start = function start(initialCount) {
  return {
    type: START,
    text: 'com 먼저 시작합니다.',
    turn: 'com',
    currentCount: initialCount
  };
};

exports.start = start;

var com = function com() {
  return {
    type: COM,
    text: 'com 차례 입니다.',
    turn: 'com'
  };
};

exports.com = com;

var user = function user() {
  return {
    type: USER,
    text: 'user 님 차례입니다.',
    turn: 'user'
  };
};

exports.user = user;

var error = function error() {
  return {
    type: ERROR,
    text: '게임 카운트를 먼저 선택해주세요!'
  };
};

exports.error = error;

var success2 = function success2(target) {
  return {
    type: SUCCESS2,
    text: "".concat(target, ", 2\uC810\uC29B \uC131\uACF5!!")
  };
};

exports.success2 = success2;

var success3 = function success3(target) {
  return {
    type: SUCCESS3,
    text: "".concat(target, ", 3\uC810\uC29B \uC131\uACF5!!!!")
  };
};

exports.success3 = success3;

var fail2 = function fail2(target) {
  return {
    type: FAIL2,
    text: "".concat(target, ",2\uC810\uC29B \uC2E4\uD328...")
  };
};

exports.fail2 = fail2;

var fail3 = function fail3(target) {
  return {
    type: FAIL3,
    text: "".concat(target, ", 3\uC810\uC29B \uC2E4\uD328...")
  };
};

exports.fail3 = fail3;

var comWin = function comWin() {
  return {
    type: COM_WIN,
    text: 'com이 승리하였습니다!'
  };
};

exports.comWin = comWin;

var userWin = function userWin() {
  return {
    type: USER_WIN,
    text: '사용자 님이 승리하였습니다!!'
  };
};

exports.userWin = userWin;

var draw = function draw() {
  return {
    type: DRAW,
    text: '무승부입니다.'
  };
};

exports.draw = draw;

var successOrfalse2 = function successOrfalse2() {
  return {
    type: SUCCESS_OR_FALSE2,
    probability: Number(Math.random().toFixed(2))
  };
};

exports.successOrfalse2 = successOrfalse2;

var successOrfalse3 = function successOrfalse3() {
  return {
    type: SUCCESS_OR_FALSE3,
    probability: Number(Math.random().toFixed(2))
  };
}; //초기값 생성


exports.successOrfalse3 = successOrfalse3;
var initialState = {
  userScore: 0,
  comScore: 0,
  selected: false,
  selectedCount: null,
  currentCount: null,
  turn: null,
  resultText: '',
  text: '상단에 카운트를 설정하신 후 Start 버튼을 눌러주세요',
  ShootType: 0,
  probability: 0
}; //리듀서 함수 생성

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;

  switch (action.type) {
    case COM_SCORE2:
      newState = Object.assign({}, state, {
        comScore: state.comScore + 2
      });
      break;

    case COM_SCORE3:
      newState = Object.assign({}, state, {
        comScore: state.comScore + 3
      });
      break;

    case USER_SCORE2:
      newState = Object.assign({}, state, {
        userScore: state.userScore + 2
      });
      break;

    case USER_SCORE3:
      newState = Object.assign({}, state, {
        userScore: state.userScore + 3
      });
      break;

    case COUNT10:
      newState = Object.assign({}, state, {
        selected: true,
        selectedCount: action.selectedCount,
        currentCount: action.currentCount
      });
      break;

    case COUNT20:
      newState = Object.assign({}, state, {
        selected: true,
        selectedCount: action.selectedCount,
        currentCount: action.currentCount
      });
      break;

    case COUNT30:
      newState = Object.assign({}, state, {
        selected: true,
        selectedCount: action.selectedCount,
        currentCount: action.currentCount
      });
      break;

    case REMAIN_COUNT:
      newState = Object.assign({}, state, {
        currentCount: state.currentCount - 1
      });
      break;

    case START:
      newState = Object.assign({}, state, {
        text: action.text,
        currentCount: state.selectedCount,
        turn: action.turn
      });
      break;

    case COM:
      newState = Object.assign({}, state, {
        text: action.text,
        turn: action.turn
      });
      break;

    case USER:
      newState = Object.assign({}, state, {
        text: action.text,
        turn: action.turn
      });
      break;

    case ERROR:
      newState = Object.assign({}, state, {
        text: action.text
      });
      break;

    case SUCCESS2:
      newState = Object.assign({}, state, {
        resultText: action.text
      });
      break;

    case SUCCESS3:
      newState = Object.assign({}, state, {
        resultText: action.text
      });
      break;

    case FAIL2:
      // return {...state,text : action.text};
      newState = Object.assign({}, state, {
        resultText: action.text
      });
      break;

    case FAIL3:
      newState = Object.assign({}, state, {
        resultText: action.text
      });
      break;

    case SUCCESS_OR_FALSE2:
      newState = Object.assign({}, state, {
        probability: action.probability
      });
      break;

    case SUCCESS_OR_FALSE3:
      newState = Object.assign({}, state, {
        probability: action.probability
      });
      break;

    default:
      return state;
  }

  return newState;
}

;
var store = createStore(reducer, composeWithDevTools());

var compare = function compare() {
  var state = store.getState();

  if (state.comScore > state.userScore) {
    message.textContent = 'com 승리!';
  } else if (state.comScore < state.userScore) {
    message.textContent = '유저 승리!';
  } else {
    message.textContent = '무승부';
  }

  ;
};

var render = function render() {
  var state = store.getState();

  if (state.currentCount > 0) {
    ShowCount.textContent = state.currentCount;
    message.textContent = state.text;
    scoreCom.textContent = state.comScore;
    scoreUser.textContent = state.userScore;
    resultMessage.textContent = state.resultText;

    if (state.turn === 'com') {
      userShootBtn2.classList.add('off');
      userShootBtn3.classList.add('off');
      comShootBtn.classList.remove('off');
    }

    if (state.turn === 'user') {
      comShootBtn.classList.add('off');
      userShootBtn2.classList.remove('off');
      userShootBtn3.classList.remove('off');
    }
  } else if (state.currentCount === 0) {
    ShowCount.textContent = state.currentCount;
    message.textContent = state.text;
    userShootBtn2.classList.add('off');
    userShootBtn3.classList.add('off');
    compare();
  } else {
    message.textContent = state.text;
    comShootBtn.classList.add('off');
    userShootBtn2.classList.add('off');
    userShootBtn3.classList.add('off');
  }
};

render();
store.subscribe(render);

CountButtons[0].onclick = function () {
  resultMessage.style.visibility = "hidden";
  store.dispatch(count10());
};

CountButtons[1].onclick = function () {
  resultMessage.style.visibility = "hidden";
  store.dispatch(count20());
};

CountButtons[2].onclick = function () {
  resultMessage.style.visibility = "hidden";
  store.dispatch(count30());
};

startBtn.onclick = function () {
  var state = store.getState();
  var initialCount = state.selectedCount;
  state.selected ? store.dispatch(start(initialCount)) : store.dispatch(error());
};

comShootBtn.onclick = function (event) {
  var state = store.getState();
  var TARGET = state.turn;

  if (state.currentCount === 0 || TARGET === 'user') {
    event.preventDefault();
  } else {
    resultMessage.style.visibility = "visible";
    var Probability = Number(Math.random().toFixed(2));

    if (Probability <= 0.75) {
      store.dispatch(successOrfalse2());

      if (state.probability <= 0.85) {
        store.dispatch(success2(TARGET));
        store.dispatch(comSCORE2());
      } else {
        store.dispatch(fail2(TARGET));
      }
    } else {
      store.dispatch(successOrfalse3());

      if (state.probability <= 0.45) {
        store.dispatch(success3(TARGET));
        store.dispatch(comSCORE3());
      } else {
        store.dispatch(fail3(TARGET));
      }
    }

    store.dispatch(user());
    store.dispatch(remainCount());
  }
};

userShootBtn2.onclick = function (event) {
  var state = store.getState();
  var TARGET = state.turn;

  if (state.currentCount === 0 || TARGET === 'com') {
    event.preventDefault();
  } else {
    resultMessage.style.visibility = "visible";
    store.dispatch(successOrfalse2());

    if (state.probability <= 0.85) {
      store.dispatch(success2(TARGET));
      store.dispatch(userSCORE2());
    } else {
      store.dispatch(fail2(TARGET));
    }

    store.dispatch(com());
    store.dispatch(remainCount());
  }
};

userShootBtn3.onclick = function (event) {
  var state = store.getState();
  var TARGET = state.turn;

  if (state.currentCount === 0 || TARGET === 'com') {
    event.preventDefault();
  } else {
    resultMessage.style.visibility = "visible";
    store.dispatch(successOrfalse3());

    if (state.probability <= 0.45) {
      store.dispatch(success3(TARGET));
      store.dispatch(userSCORE3());
    } else {
      store.dispatch(fail3(TARGET));
    }

    store.dispatch(com());
    store.dispatch(remainCount());
  }
};

var _default = store;
exports.default = _default;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53721" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/basketball-game__github.e31bb0bc.js.map