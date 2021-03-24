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
})({"node_modules/symbol-observable/es/ponyfill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = symbolObservablePonyfill;

function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      result = Symbol('observable');
      Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}

;
},{}],"node_modules/symbol-observable/es/index.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ponyfill = _interopRequireDefault(require("./ponyfill.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill.default)(root);
var _default = result;
exports.default = _default;
},{"./ponyfill.js":"node_modules/symbol-observable/es/ponyfill.js"}],"node_modules/redux/es/redux.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMiddleware = applyMiddleware;
exports.bindActionCreators = bindActionCreators;
exports.combineReducers = combineReducers;
exports.compose = compose;
exports.createStore = createStore;
exports.__DO_NOT_USE__ActionTypes = void 0;

var _symbolObservable = _interopRequireDefault(require("symbol-observable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

exports.__DO_NOT_USE__ActionTypes = ActionTypes;

function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[_symbolObservable.default] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable.default] = observable, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */


function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if ("development" !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if ("development" !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if ("development" !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}
},{"symbol-observable":"node_modules/symbol-observable/es/index.js"}],"node_modules/redux-devtools-extension/index.js":[function(require,module,exports) {
'use strict';

var compose = require('redux').compose;

exports.__esModule = true;
exports.composeWithDevTools =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length === 0) return undefined;
        if (typeof arguments[0] === 'object') return compose;
        return compose.apply(null, arguments);
      };

exports.devToolsEnhancer =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__
    : function () {
        return function (noop) {
          return noop;
        };
      };

},{"redux":"node_modules/redux/es/redux.js"}],"modules/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.successOrfalse3 = exports.successOrfalse2 = exports.fail3 = exports.fail2 = exports.success3 = exports.success2 = exports.error = exports.user = exports.com = exports.start = exports.remainCount = exports.count30 = exports.count20 = exports.count10 = exports.userSCORE3 = exports.userSCORE2 = exports.comSCORE2 = exports.comSCORE3 = void 0;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var CountButtons = document.querySelectorAll('#countBtn');
var ShowCount = document.querySelector('#countShow');
var startBtn = document.querySelector('#startBtn');
var message = document.querySelector('#message');
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
var SUCCESS2 = 'message/SUCCESS2';
var SUCCESS3 = 'message/SUCCESS3';
var FAIL2 = 'message/FAIL2';
var FAIL3 = 'message/FAIL3'; // 액션정의함수 생성

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
    count: 10
  };
};

exports.count10 = count10;

var count20 = function count20() {
  return {
    type: COUNT20,
    count: 20
  };
};

exports.count20 = count20;

var count30 = function count30() {
  return {
    type: COUNT30,
    count: 30
  };
};

exports.count30 = count30;

var remainCount = function remainCount() {
  return {
    type: REMAIN_COUNT
  };
};

exports.remainCount = remainCount;

var start = function start() {
  return {
    type: START,
    text: 'com 먼저 시작합니다.',
    turn: 'com'
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
    text: 'user 님 차례입니다',
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

var success2 = function success2() {
  return {
    type: SUCCESS2,
    text: '2점슛 성공!!'
  };
};

exports.success2 = success2;

var success3 = function success3() {
  return {
    type: SUCCESS3,
    text: '3점슛 성공!!!!'
  };
};

exports.success3 = success3;

var fail2 = function fail2() {
  return {
    type: FAIL2,
    text: '2점슛 실패...'
  };
};

exports.fail2 = fail2;

var fail3 = function fail3() {
  return {
    type: FAIL3,
    text: '3점슛 실패...'
  };
};

exports.fail3 = fail3;

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
  count: 0,
  turn: null,
  text: '상단에 카운트를 설정하신 후 Start 버튼을 눌러주세요',
  ShootType: 0,
  probability: 0
}; //리듀서 함수 생성

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  // console.log(action.type);
  var newState;

  switch (action.type) {
    case COM_SCORE2:
      // return {...state, 
      //         comScore: state.comScore + 2,
      //         };
      newState = Object.assign({}, state, {
        comScore: state.comScore + 2
      });
      break;

    case COM_SCORE3:
      // return { ...state,
      //         comScore: state.comScore + 3,
      //         };
      newState = Object.assign({}, state, {
        comScore: state.comScore + 3
      });
      break;

    case USER_SCORE2:
      // return { ...state,
      //         userScore: state.userScore + 2,
      //         };
      newState = Object.assign({}, state, {
        userScore: state.userScore + 2
      });
      break;

    case USER_SCORE3:
      // return { ...state,
      //         userScore: state.userScore + 3,
      //         };
      newState = Object.assign({}, state, {
        userScore: state.userScore + 3
      });
      break;

    case COUNT10:
      // return {...state,selected: true, count: action.count};
      newState = Object.assign({}, state, {
        selected: true,
        count: action.count
      });
      break;

    case COUNT20:
      // return {...state,selected: true, count: action.count};
      newState = Object.assign({}, state, {
        selected: true,
        count: action.count
      });
      break;

    case COUNT30:
      // return {...state,selected: true, count: action.count};
      newState = Object.assign({}, state, {
        selected: true,
        count: action.count
      });
      break;

    case REMAIN_COUNT:
      newState = Object.assign({}, state, {
        count: state.count - 1
      });
      break;

    case START:
      // return {...state,text : action.text};
      newState = Object.assign({}, state, {
        text: action.text,
        turn: action.turn
      });
      break;

    case COM:
      // return {...state,text : action.text};
      newState = Object.assign({}, state, {
        text: action.text,
        turn: action.turn
      });
      break;

    case USER:
      // return {...state,text : action.text};
      newState = Object.assign({}, state, {
        text: action.text,
        turn: action.turn
      });
      break;

    case ERROR:
      // return {...state,text : action.text};
      newState = Object.assign({}, state, {
        text: action.text
      });
      break;

    case SUCCESS2:
      // return {...state,text : action.text};
      newState = Object.assign({}, state, {
        text: action.text
      });
      break;

    case SUCCESS3:
      // return {...state,text : action.text};
      newState = Object.assign({}, state, {
        text: action.text
      });
      break;

    case FAIL2:
      // return {...state,text : action.text};
      newState = Object.assign({}, state, {
        text: action.text
      });
      break;

    case FAIL3:
      // return {...state,text : action.text};
      newState = Object.assign({}, state, {
        text: action.text
      });
      break;

    case SUCCESS_OR_FALSE2:
      // return {...state,text : action.text};
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
var store = (0, _redux.createStore)(reducer, (0, _reduxDevtoolsExtension.composeWithDevTools)());

var setTurn = function setTurn() {
  var state = store.getState();

  if (state.count !== 0) {
    if (state.turn === 'com') {
      userShootBtn2.classList.add('off');
      userShootBtn3.classList.add('off');
      comShootBtn.classList.remove('off');
    } else if (state.turn === 'user') {
      comShootBtn.classList.add('off');
      userShootBtn2.classList.remove('on');
      userShootBtn3.classList.remove('on');
    } else {
      message.textContent = state.text;
    }
  }
};

setTurn();
store.subscribe(setTurn);

var render = function render() {
  var state = store.getState();
  ShowCount.textContent = state.count;
  console.log('여기', state.turn === 'user');
  message.textContent = state.text;
  scoreCom.textContent = state.comScore;
  scoreUser.textContent = state.userScore;

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
};

render();
store.subscribe(render);

CountButtons[0].onclick = function () {
  return store.dispatch(count10());
};

CountButtons[1].onclick = function () {
  return store.dispatch(count20());
};

CountButtons[2].onclick = function () {
  return store.dispatch(count30());
};

startBtn.onclick = function () {
  var state = store.getState();
  state.selected ? store.dispatch(start()) : store.dispatch(error());
};

comShootBtn.onclick = function () {
  var state = store.getState();
  var Probability = Number(Math.random().toFixed(2));
  console.log('Probability:', Probability);

  if (Probability <= 0.75) {
    console.log('2점 슛');
    store.dispatch(successOrfalse2());
    console.log(state.probability);

    if (state.probability > 0.25) {
      store.dispatch(success2());
      store.dispatch(comSCORE2());
    } else {
      store.dispatch(fail2());
    }
  } else {
    console.log('3점 슛');
    store.dispatch(successOrfalse3());

    if (state.probability <= 0.35) {
      store.dispatch(success3());
      store.dispatch(comSCORE3());
    } else {
      store.dispatch(fail3());
    }
  }

  store.dispatch(user());
  store.dispatch(remainCount());
};

userShootBtn2.onclick = function () {
  var state = store.getState();
  console.log('2점 슛');
  store.dispatch(successOrfalse2());

  if (state.probability > 0.25) {
    store.dispatch(success2());
    store.dispatch(userSCORE2());
  } else {
    store.dispatch(fail2());
  }

  store.dispatch(com());
  store.dispatch(remainCount());
};

userShootBtn3.onclick = function () {
  var state = store.getState();
  store.dispatch(successOrfalse3());

  if (state.probability <= 0.35) {
    store.dispatch(success3());
    store.dispatch(userSCORE3());
  } else {
    store.dispatch(fail3());
  }

  store.dispatch(com());
  store.dispatch(remainCount());
};

var _default = store;
exports.default = _default;
},{"redux":"node_modules/redux/es/redux.js","redux-devtools-extension":"node_modules/redux-devtools-extension/index.js"}],"modules/score.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.userSCORE3 = exports.userSCORE2 = exports.comSCORE3 = exports.comSCORE2 = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 액션명 생성
var COM_SCORE2 = 'com/SCORE2';
var COM_SCORE3 = 'com/SCORE3';
var USER_SCORE2 = 'user/SCORE2';
var USER_SCORE3 = 'user/SCORE3'; // 액션정의함수 생성

var comSCORE2 = function comSCORE2() {
  return {
    type: 'score/COM_SCORE2'
  };
};

exports.comSCORE2 = comSCORE2;

var comSCORE3 = function comSCORE3() {
  return {
    type: 'score/COM_SCORE3'
  };
};

exports.comSCORE3 = comSCORE3;

var userSCORE2 = function userSCORE2() {
  return {
    type: 'score/USER_SCORE2'
  };
};

exports.userSCORE2 = userSCORE2;

var userSCORE3 = function userSCORE3() {
  return {
    type: 'score/USER_SCORE3'
  };
}; //초기값 생성


exports.userSCORE3 = userSCORE3;
var initialState = {
  userScore: 0,
  comScore: 0
}; //리듀서 함수 생성

function score() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case COM_SCORE2:
      return _objectSpread(_objectSpread({}, state), {}, {
        comScore: state.comScore + 2
      });

    case COM_SCORE3:
      return _objectSpread(_objectSpread({}, state), {}, {
        comScore: state.comScore + 3
      });

    case USER_SCORE2:
      return _objectSpread(_objectSpread({}, state), {}, {
        userScore: state.userScore + 2
      });

    case USER_SCORE3:
      return _objectSpread(_objectSpread({}, state), {}, {
        userScore: state.userScore + 3
      });

    default:
      return state;
  }
}

;
var _default = score;
exports.default = _default;
},{}],"modules/count.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.count30 = exports.count20 = exports.count10 = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//액션명 생성
var COUNT10 = 'count/COUNT10';
var COUNT20 = 'count/COUNT20';
var COUNT30 = 'count/COUNT30'; //액션정의함수 생성

var count10 = function count10() {
  return {
    type: COUNT10,
    count: 10
  };
};

exports.count10 = count10;

var count20 = function count20() {
  return {
    type: COUNT20,
    count: 20
  };
};

exports.count20 = count20;

var count30 = function count30() {
  return {
    type: COUNT30,
    count: 30
  };
}; //초기값 생성


exports.count30 = count30;
var initialState = {
  selected: false,
  count: 0
}; //리듀서 함수 생성

function count() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case COUNT10:
      return _objectSpread(_objectSpread({}, state), {}, {
        selected: true,
        count: action.count
      });

    case COUNT20:
      return _objectSpread(_objectSpread({}, state), {}, {
        selected: true,
        count: action.count
      });

    case COUNT30:
      return _objectSpread(_objectSpread({}, state), {}, {
        selected: true,
        count: action.count
      });

    default:
      return state;
  }
}

var _default = count;
exports.default = _default;
},{}],"modules/turn.js":[function(require,module,exports) {
// //액션명 생성
// const COM = 'turn/COM';
// const USER = 'turn/USER';
// //액션정의함수 생성
// export const comTurn = () => ({type: COM, turn: 'com'});
// export const userTurn = () => ({type: USER, turn: 'user'});
// //초기값 생성
// const initialState = {turn : null};
// //리듀서 함수 생성
// function setTurn(state=initialState, action) {
//     switch (action.type) {
//         case COM:
//             return {...state, turn: 'com'};
//         case USER:
//             return {...state,turn: 'user'};
//         default:
//             return state;
//         }
// }
// export default setTurn;
},{}],"modules/message.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fail3 = exports.fail2 = exports.success3 = exports.success2 = exports.error = exports.user = exports.com = exports.start = void 0;
//액션명  생성
var INIT = 'message/INIT';
var START = 'message/START';
var COM = 'message/COM';
var USER = 'message/USER';
var ERROR = 'message/ERROR';
var SUCCESS2 = 'message/SUCCESS2';
var SUCCESS3 = 'message/SUCCESS3';
var FAIL2 = 'message/FAIL2';
var FAIL3 = 'message/FAIL3'; //액션정의함수 생성
// export const init = () => ({
//     type: INIT,
//     text:'상단에 슛 횟수를 정하신 후 Start 버튼을 눌러주세요' 
//     });

var start = function start() {
  return {
    type: START,
    text: 'com 먼저 시작합니다.'
  };
};

exports.start = start;

var com = function com() {
  return {
    type: COM,
    text: 'com 차례 입니다.'
  };
};

exports.com = com;

var user = function user() {
  return {
    type: USER,
    text: '사용자 님 차례입니다'
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

var success2 = function success2() {
  return {
    type: SUCCESS2,
    text: '2점슛 성공!!'
  };
};

exports.success2 = success2;

var success3 = function success3() {
  return {
    type: SUCCESS3,
    text: '3점슛 성공!!!!'
  };
};

exports.success3 = success3;

var fail2 = function fail2() {
  return {
    type: FAIL2,
    text: '2점슛 실패...'
  };
};

exports.fail2 = fail2;

var fail3 = function fail3() {
  return {
    type: FAIL3,
    text: '3점슛 실패...'
  };
}; //초기값 생성


exports.fail3 = fail3;
var initialState = {
  text: '상단에 슛 횟수를 정하신 후 Start 버튼을 눌러주세요'
}; //리듀서 함수 생성

function setMessage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case START:
      return {
        text: action.text
      };

    case COM:
      return {
        text: action.text
      };

    case USER:
      return {
        text: action.text
      };

    case ERROR:
      return {
        text: action.text
      };

    case SUCCESS2:
      return {
        text: action.text
      };

    case SUCCESS3:
      return {
        text: action.text
      };

    case FAIL2:
      return {
        text: action.text
      };

    case FAIL3:
      return {
        text: action.text
      };

    default:
      return state;
  }
}

;
var _default = setMessage;
exports.default = _default;
},{}],"modules/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _score = _interopRequireDefault(require("./score"));

var _count = _interopRequireDefault(require("./count"));

var _turn = _interopRequireDefault(require("./turn"));

var _message = _interopRequireDefault(require("./message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  score: _score.default,
  count: _count.default,
  setTurn: _turn.default,
  setMessage: _message.default
});
var _default = rootReducer;
exports.default = _default;
},{"redux":"node_modules/redux/es/redux.js","./score":"modules/score.js","./count":"modules/count.js","./turn":"modules/turn.js","./message":"modules/message.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _index = _interopRequireDefault(require("./modules/index"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_index.default, (0, _reduxDevtoolsExtension.composeWithDevTools)());
var _default = store;
exports.default = _default;
},{"redux":"node_modules/redux/es/redux.js","./modules/index":"modules/index.js","redux-devtools-extension":"node_modules/redux-devtools-extension/index.js"}],"js/shootProbability.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shootType = exports.shoot3 = exports.shoot2 = void 0;

var _index = _interopRequireDefault(require("../index"));

var _score = require("../modules/score");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

//com 슛
//(1) 슛 종류 결정 확률
// - 2점 슛 던지기 (75%) | 3점 슛 던지기 (25%)
// (2) 슛 종류별 성공 확률
// - 2점 슛 성공 확률 (75%) | 3점 슛 성공 확률(35%)
var state = _index.default.getState(); //2점슛 


var shoot2 = function shoot2(event) {
  var ShootProbability = Number(Math.random().toFixed(2));
  var player = event.currentTarget.name;

  if (ShootProbability >= 75) {
    //플레이어를 구분하는 삼항연산자
    player === 'user' ? _index.default.dispatch(_score.userSCORE2) : _index.default.dispatch(_score.comSCORE2);
  }

  state = (_readOnlyError("state"), state.count.count - 1);
  console.log('2점슛');
}; //3점슛 


exports.shoot2 = shoot2;

var shoot3 = function shoot3(event) {
  var ShootProbability = Number(Math.random().toFixed(2));
  var player = event.currentTarget.name;

  if (ShootProbability <= 35) {
    //플레이어를 구분하는 삼항연산자
    player === 'user' ? _index.default.dispatch(_score.userSCORE3) : _index.default.dispatch(_score.comSCORE3);
  }

  ;
  state = (_readOnlyError("state"), state.count.count - 1);
  console.log('3점슛');
};

exports.shoot3 = shoot3;

var shootType = function shootType() {
  //Math.random() : 0이상 1 미만의 무작위 난수 반환
  //toFixed(n) : 반올림하여 n자리 소수점까지 나타냄
  var ShootTypeProbability = Number(Math.random().toFixed(2)); //com 의 슛 종류를 결정하는 삼항연산자.

  ShootTypeProbability >= 0.75 ? shoot2 : shoot3;
}; //user 슛
// 2. user 의 슛 종류 선택에 따른 성공 확률을 정하는 로직 코드
// (1) 슛 종류별 성공 확률
// - 2점 슛 성공 확률 (70%) | 3점 슛 성공 확률(30%)


exports.shootType = shootType;
},{"../index":"index.js","../modules/score":"modules/score.js"}],"js/control.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTurn = void 0;

var _main = _interopRequireDefault(require("../modules/main"));

var _shootProbability = require("./shootProbability");

var _index = require("../modules/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var comShootBtn = document.querySelector('#comShootBtn');
var userShootBtn2 = document.querySelector('#userShootBtn2');
var userShootBtn3 = document.querySelector('#userShootBtn3');
var message = document.querySelector('#message');

var state = _main.default.getState();

var setTurn = function setTurn() {
  console.log('state.count:', state.count);

  if (state.count !== 0) {
    if (state.turn === 'com') {
      userShootBtn2.classList.add('off');
      userShootBtn3.classList.add('off');
      comShootBtn.classList.remove('off');
      message.textContent = state.com;
      comShootBtn.addEventListener('click', _shootProbability.shootType);

      _main.default.dispatch((0, _index.userTurn)());
    } else if (state.turn === 'user') {
      comShootBtn.classList.add('off');
      userShootBtn2.classList.remove('on');
      userShootBtn3.classList.remove('on');
      message.textContent = state.user;
      userShootBtn2.addEventListener('click', _shootProbability.shoot2);
      userShootBtn3.addEventListener('click', _shootProbability.shoot3);

      _main.default.dispatch((0, _index.comTurn)());
    } else {
      message.textContent = state.text;
    }
  }
};

exports.setTurn = setTurn;
setTurn();

_main.default.subscribe(setTurn);
},{"../modules/main":"modules/main.js","./shootProbability":"js/shootProbability.js","../modules/index":"modules/index.js"}],"C:/Users/dlwls/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50534" + '/');

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
},{}]},{},["C:/Users/dlwls/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/control.js"], null)
//# sourceMappingURL=/control.75444832.js.map