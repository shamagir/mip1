
; /* Start:"a:4:{s:4:"full";s:59:"/local/templates/main/assets/bundle.min.js?1654336468922678";s:6:"source";s:42:"/local/templates/main/assets/bundle.min.js";s:3:"min";s:42:"/local/templates/main/assets/bundle.min.js";s:3:"map";s:56:"/local/templates/main/assets/news-detail.a3ab33d1.js.map";}"*/
(function () {
    var $parcel$global =
        typeof globalThis !== 'undefined'
            ? globalThis
            : typeof self !== 'undefined'
                ? self
                : typeof window !== 'undefined'
                    ? window
                    : typeof global !== 'undefined'
                        ? global
                        : {};
    function $parcel$export(e, n, v, s) {
        Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
    }
    function $parcel$exportWildcard(dest, source) {
        Object.keys(source).forEach(function(key) {
            if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
                return;
            }

            Object.defineProperty(dest, key, {
                enumerable: true,
                get: function get() {
                    return source[key];
                }
            });
        });

        return dest;
    }
    function $parcel$interopDefault(a) {
        return a && a.__esModule ? a.default : a;
    }
    var $parcel$modules = {};
    var $parcel$inits = {};

    var parcelRequire = $parcel$global["parcelRequiref383"];
    if (parcelRequire == null) {
        parcelRequire = function(id) {
            if (id in $parcel$modules) {
                return $parcel$modules[id].exports;
            }
            if (id in $parcel$inits) {
                var init = $parcel$inits[id];
                delete $parcel$inits[id];
                var module = {id: id, exports: {}};
                $parcel$modules[id] = module;
                init.call(module.exports, module, module.exports);
                return module.exports;
            }
            var err = new Error("Cannot find module '" + id + "'");
            err.code = 'MODULE_NOT_FOUND';
            throw err;
        };

        parcelRequire.register = function register(id, init) {
            $parcel$inits[id] = init;
        };

        $parcel$global["parcelRequiref383"] = parcelRequire;
    }
    parcelRequire.register("i1q5T", function(module, exports) {

        /** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */ var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Built-in value references. */ var Buffer = moduleExports ? $4cc9d1a3b5f2eac6$exports.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
        /**
         * Creates a clone of  `buffer`.
         *
         * @private
         * @param {Buffer} buffer The buffer to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Buffer} Returns the cloned buffer.
         */ function cloneBuffer(buffer, isDeep) {
            if (isDeep) return buffer.slice();
            var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result);
            return result;
        }
        module.exports = cloneBuffer;

    });
    var $4cc9d1a3b5f2eac6$exports = {};
    var $74bd70d56877049f$exports = {};
    /** Detect free variable `global` from Node.js. */ var $74bd70d56877049f$var$freeGlobal = typeof $parcel$global == 'object' && $parcel$global && $parcel$global.Object === Object && $parcel$global;
    $74bd70d56877049f$exports = $74bd70d56877049f$var$freeGlobal;


    /** Detect free variable `self`. */ var $4cc9d1a3b5f2eac6$var$freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */ var $4cc9d1a3b5f2eac6$var$root = $74bd70d56877049f$exports || $4cc9d1a3b5f2eac6$var$freeSelf || Function('return this')();
    $4cc9d1a3b5f2eac6$exports = $4cc9d1a3b5f2eac6$var$root;


    parcelRequire.register("g6bB1", function(module, exports) {


        var $cLDGk = parcelRequire("cLDGk");
        /** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */ var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Built-in value references. */ var Buffer = moduleExports ? $4cc9d1a3b5f2eac6$exports.Buffer : undefined;
        /* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */ var isBuffer = nativeIsBuffer || $cLDGk;
        module.exports = isBuffer;

    });
    parcelRequire.register("cLDGk", function(module, exports) {
        /**
         * This method returns `false`.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {boolean} Returns `false`.
         * @example
         *
         * _.times(2, _.stubFalse);
         * // => [false, false]
         */ function $94b8a7cb3f972033$var$stubFalse() {
            return false;
        }
        module.exports = $94b8a7cb3f972033$var$stubFalse;

    });


    parcelRequire.register("d6Yw6", function(module, exports) {

        /** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */ var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && $74bd70d56877049f$exports.process;
        /** Used to access faster Node.js helpers. */ var nodeUtil = function() {
            try {
                // Use `util.types` for Node.js 10+.
                var types = freeModule && freeModule.require && freeModule.require('util').types;
                if (types) return types;
                // Legacy `process.binding('util')` for Node.js < 10.
                return freeProcess && freeProcess.binding && freeProcess.binding('util');
            } catch (e) {
            }
        }();
        module.exports = nodeUtil;

    });

    function $eb797b7c0cf090ee$export$2e2bcd8739ae039(self) {
        if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    }

    function $f389dca33e92ce8b$export$2e2bcd8739ae039(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }

    function $d27ee44a68134450$var$_defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function $d27ee44a68134450$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
        if (protoProps) $d27ee44a68134450$var$_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) $d27ee44a68134450$var$_defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function $167db31c658a8beb$export$2e2bcd8739ae039(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }

    function $35a07d0eea0623db$var$getPrototypeOf(o1) {
        $35a07d0eea0623db$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return $35a07d0eea0623db$var$getPrototypeOf(o1);
    }
    function $35a07d0eea0623db$export$2e2bcd8739ae039(o) {
        return $35a07d0eea0623db$var$getPrototypeOf(o);
    }


    function $86fc0fd9174f9edc$export$2e2bcd8739ae039(object, property) {
        while(!Object.prototype.hasOwnProperty.call(object, property)){
            object = $35a07d0eea0623db$export$2e2bcd8739ae039(object);
            if (object === null) break;
        }
        return object;
    }


    function $fdd7a9424d5738ca$var$get(target1, property1, receiver1) {
        if (typeof Reflect !== "undefined" && Reflect.get) $fdd7a9424d5738ca$var$get = Reflect.get;
        else $fdd7a9424d5738ca$var$get = function get(target, property, receiver) {
            var base = $86fc0fd9174f9edc$export$2e2bcd8739ae039(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) return desc.get.call(receiver || target);
            return desc.value;
        };
        return $fdd7a9424d5738ca$var$get(target1, property1, receiver1);
    }
    function $fdd7a9424d5738ca$export$2e2bcd8739ae039(target, property, reciever) {
        return $fdd7a9424d5738ca$var$get(target, property, reciever);
    }

    function $6e43e3a72c7f8940$var$setPrototypeOf(o1, p1) {
        $6e43e3a72c7f8940$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return $6e43e3a72c7f8940$var$setPrototypeOf(o1, p1);
    }
    function $6e43e3a72c7f8940$export$2e2bcd8739ae039(o, p) {
        return $6e43e3a72c7f8940$var$setPrototypeOf(o, p);
    }


    function $c4ea276b874ff1f8$export$2e2bcd8739ae039(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) $6e43e3a72c7f8940$export$2e2bcd8739ae039(subClass, superClass);
    }


    function $eb5371763c65414a$export$2e2bcd8739ae039(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i] != null ? arguments[i] : {
            };
            var ownKeys = Object.keys(source);
            if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
            ownKeys.forEach(function(key) {
                $167db31c658a8beb$export$2e2bcd8739ae039(target, key, source[key]);
            });
        }
        return target;
    }

    function $adbc3fb50d646fb2$export$2e2bcd8739ae039(arr) {
        if (Array.isArray(arr)) return arr;
    }


    function $03a0ddee15970aea$export$2e2bcd8739ae039(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }


    function $5d4235864ee7281f$export$2e2bcd8739ae039() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }


    function $63dda9574375e3f5$export$2e2bcd8739ae039(arr, i) {
        return $adbc3fb50d646fb2$export$2e2bcd8739ae039(arr) || $03a0ddee15970aea$export$2e2bcd8739ae039(arr, i) || $5d4235864ee7281f$export$2e2bcd8739ae039();
    }

    function $5b81a7301329deec$export$2e2bcd8739ae039(arr) {
        if (Array.isArray(arr)) {
            for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
            return arr2;
        }
    }



    function $69655b35af4dc7cb$export$2e2bcd8739ae039() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }


    function $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(arr) {
        return $5b81a7301329deec$export$2e2bcd8739ae039(arr) || $03a0ddee15970aea$export$2e2bcd8739ae039(arr) || $69655b35af4dc7cb$export$2e2bcd8739ae039();
    }

    function $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(obj) {
        return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
    }

    function $b63834352b2a7fcc$var$isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            }));
            return true;
        } catch (e) {
            return false;
        }
    }
    function $b63834352b2a7fcc$var$construct(Parent1, args1, Class1) {
        if ($b63834352b2a7fcc$var$isNativeReflectConstruct()) $b63834352b2a7fcc$var$construct = Reflect.construct;
        else $b63834352b2a7fcc$var$construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
        return $b63834352b2a7fcc$var$construct.apply(null, arguments);
    }
    function $b63834352b2a7fcc$export$2e2bcd8739ae039(Parent, args, Class) {
        return $b63834352b2a7fcc$var$construct.apply(null, arguments);
    }


    function $3f7d758adcb291b6$export$2e2bcd8739ae039(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }




    function $f270b75bf34ef256$var$wrapNativeSuper(Class1) {
        var _cache = typeof Map === "function" ? new Map() : undefined;
        $f270b75bf34ef256$var$wrapNativeSuper = function wrapNativeSuper(Class) {
            if (Class === null || !$3f7d758adcb291b6$export$2e2bcd8739ae039(Class)) return Class;
            if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
            }
            function Wrapper() {
                return $b63834352b2a7fcc$export$2e2bcd8739ae039(Class, arguments, $35a07d0eea0623db$export$2e2bcd8739ae039(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return $6e43e3a72c7f8940$export$2e2bcd8739ae039(Wrapper, Class);
        };
        return $f270b75bf34ef256$var$wrapNativeSuper(Class1);
    }
    function $f270b75bf34ef256$export$2e2bcd8739ae039(Class) {
        return $f270b75bf34ef256$var$wrapNativeSuper(Class);
    }

    function $0dca8e4d33a2de12$export$2e2bcd8739ae039() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
            return true;
        } catch (e) {
            return false;
        }
    }





    function $2ac4fbc039202355$export$2e2bcd8739ae039(self, call) {
        if (call && ($d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(call) === "object" || typeof call === "function")) return call;
        return $eb797b7c0cf090ee$export$2e2bcd8739ae039(self);
    }


    function $110337f557ebf7b5$export$2e2bcd8739ae039(Derived) {
        var hasNativeReflectConstruct = $0dca8e4d33a2de12$export$2e2bcd8739ae039();
        return function _createSuperInternal() {
            var Super = $35a07d0eea0623db$export$2e2bcd8739ae039(Derived), result;
            if (hasNativeReflectConstruct) {
                var NewTarget = $35a07d0eea0623db$export$2e2bcd8739ae039(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else result = Super.apply(this, arguments);
            return $2ac4fbc039202355$export$2e2bcd8739ae039(this, result);
        };
    }



    var $874b1e9ab930605c$exports = {};

    $parcel$export($874b1e9ab930605c$exports, "popperGenerator", function () { return $586933ad0e37e311$export$ed5e13716264f202; });
    $parcel$export($874b1e9ab930605c$exports, "detectOverflow", function () { return $f98a947fbf04c363$export$2e2bcd8739ae039; });
    $parcel$export($874b1e9ab930605c$exports, "createPopperBase", function () { return $586933ad0e37e311$export$8f7491d57c8f97a9; });
    $parcel$export($874b1e9ab930605c$exports, "createPopper", function () { return $db68ddeb41e504b7$export$8f7491d57c8f97a9; });
    $parcel$export($874b1e9ab930605c$exports, "createPopperLite", function () { return $eb5d5ebf4de658ee$export$8f7491d57c8f97a9; });
    var $cb619642add61ce7$exports = {};

    $parcel$export($cb619642add61ce7$exports, "top", function () { return $cb619642add61ce7$export$1e95b668f3b82d; });
    $parcel$export($cb619642add61ce7$exports, "bottom", function () { return $cb619642add61ce7$export$40e543e69a8b3fbb; });
    $parcel$export($cb619642add61ce7$exports, "right", function () { return $cb619642add61ce7$export$79ffe56a765070d2; });
    $parcel$export($cb619642add61ce7$exports, "left", function () { return $cb619642add61ce7$export$eabcd2c8791e7bf4; });
    $parcel$export($cb619642add61ce7$exports, "auto", function () { return $cb619642add61ce7$export$dfb5619354ba860; });
    $parcel$export($cb619642add61ce7$exports, "basePlacements", function () { return $cb619642add61ce7$export$aec2ce47c367b8c3; });
    $parcel$export($cb619642add61ce7$exports, "start", function () { return $cb619642add61ce7$export$b3571188c770cc5a; });
    $parcel$export($cb619642add61ce7$exports, "end", function () { return $cb619642add61ce7$export$bd5df0f255a350f8; });
    $parcel$export($cb619642add61ce7$exports, "clippingParents", function () { return $cb619642add61ce7$export$390fd549c5303b4d; });
    $parcel$export($cb619642add61ce7$exports, "viewport", function () { return $cb619642add61ce7$export$d7b7311ec04a3e8f; });
    $parcel$export($cb619642add61ce7$exports, "popper", function () { return $cb619642add61ce7$export$ae5ab1c730825774; });
    $parcel$export($cb619642add61ce7$exports, "reference", function () { return $cb619642add61ce7$export$ca50aac9f3ba507f; });
    $parcel$export($cb619642add61ce7$exports, "variationPlacements", function () { return $cb619642add61ce7$export$368f9a87e87fa4e1; });
    $parcel$export($cb619642add61ce7$exports, "placements", function () { return $cb619642add61ce7$export$803cd8101b6c182b; });
    $parcel$export($cb619642add61ce7$exports, "beforeRead", function () { return $cb619642add61ce7$export$421679a7c3d56e; });
    $parcel$export($cb619642add61ce7$exports, "read", function () { return $cb619642add61ce7$export$aafa59e2e03f2942; });
    $parcel$export($cb619642add61ce7$exports, "afterRead", function () { return $cb619642add61ce7$export$6964f6c886723980; });
    $parcel$export($cb619642add61ce7$exports, "beforeMain", function () { return $cb619642add61ce7$export$c65e99957a05207c; });
    $parcel$export($cb619642add61ce7$exports, "main", function () { return $cb619642add61ce7$export$f22da7240b7add18; });
    $parcel$export($cb619642add61ce7$exports, "afterMain", function () { return $cb619642add61ce7$export$bab79516f2d662fe; });
    $parcel$export($cb619642add61ce7$exports, "beforeWrite", function () { return $cb619642add61ce7$export$8d4d2d70e7d46032; });
    $parcel$export($cb619642add61ce7$exports, "write", function () { return $cb619642add61ce7$export$68d8715fc104d294; });
    $parcel$export($cb619642add61ce7$exports, "afterWrite", function () { return $cb619642add61ce7$export$70a6e5159acce2e6; });
    $parcel$export($cb619642add61ce7$exports, "modifierPhases", function () { return $cb619642add61ce7$export$d087d3878fdf71d5; });
    var $cb619642add61ce7$export$1e95b668f3b82d = 'top';
    var $cb619642add61ce7$export$40e543e69a8b3fbb = 'bottom';
    var $cb619642add61ce7$export$79ffe56a765070d2 = 'right';
    var $cb619642add61ce7$export$eabcd2c8791e7bf4 = 'left';
    var $cb619642add61ce7$export$dfb5619354ba860 = 'auto';
    var $cb619642add61ce7$export$aec2ce47c367b8c3 = [
        $cb619642add61ce7$export$1e95b668f3b82d,
        $cb619642add61ce7$export$40e543e69a8b3fbb,
        $cb619642add61ce7$export$79ffe56a765070d2,
        $cb619642add61ce7$export$eabcd2c8791e7bf4
    ];
    var $cb619642add61ce7$export$b3571188c770cc5a = 'start';
    var $cb619642add61ce7$export$bd5df0f255a350f8 = 'end';
    var $cb619642add61ce7$export$390fd549c5303b4d = 'clippingParents';
    var $cb619642add61ce7$export$d7b7311ec04a3e8f = 'viewport';
    var $cb619642add61ce7$export$ae5ab1c730825774 = 'popper';
    var $cb619642add61ce7$export$ca50aac9f3ba507f = 'reference';
    var $cb619642add61ce7$export$368f9a87e87fa4e1 = /*#__PURE__*/ $cb619642add61ce7$export$aec2ce47c367b8c3.reduce(function(acc, placement) {
        return acc.concat([
            placement + "-" + $cb619642add61ce7$export$b3571188c770cc5a,
            placement + "-" + $cb619642add61ce7$export$bd5df0f255a350f8
        ]);
    }, []);
    var $cb619642add61ce7$export$803cd8101b6c182b = /*#__PURE__*/ [].concat($cb619642add61ce7$export$aec2ce47c367b8c3, [
        $cb619642add61ce7$export$dfb5619354ba860
    ]).reduce(function(acc, placement) {
        return acc.concat([
            placement,
            placement + "-" + $cb619642add61ce7$export$b3571188c770cc5a,
            placement + "-" + $cb619642add61ce7$export$bd5df0f255a350f8
        ]);
    }, []); // modifiers that need to read the DOM
    var $cb619642add61ce7$export$421679a7c3d56e = 'beforeRead';
    var $cb619642add61ce7$export$aafa59e2e03f2942 = 'read';
    var $cb619642add61ce7$export$6964f6c886723980 = 'afterRead'; // pure-logic modifiers
    var $cb619642add61ce7$export$c65e99957a05207c = 'beforeMain';
    var $cb619642add61ce7$export$f22da7240b7add18 = 'main';
    var $cb619642add61ce7$export$bab79516f2d662fe = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
    var $cb619642add61ce7$export$8d4d2d70e7d46032 = 'beforeWrite';
    var $cb619642add61ce7$export$68d8715fc104d294 = 'write';
    var $cb619642add61ce7$export$70a6e5159acce2e6 = 'afterWrite';
    var $cb619642add61ce7$export$d087d3878fdf71d5 = [
        $cb619642add61ce7$export$421679a7c3d56e,
        $cb619642add61ce7$export$aafa59e2e03f2942,
        $cb619642add61ce7$export$6964f6c886723980,
        $cb619642add61ce7$export$c65e99957a05207c,
        $cb619642add61ce7$export$f22da7240b7add18,
        $cb619642add61ce7$export$bab79516f2d662fe,
        $cb619642add61ce7$export$8d4d2d70e7d46032,
        $cb619642add61ce7$export$68d8715fc104d294,
        $cb619642add61ce7$export$70a6e5159acce2e6
    ];


    var $45192bc6b8b18d08$exports = {};

    $parcel$export($45192bc6b8b18d08$exports, "applyStyles", function () { return $4e32f60d28c1a80f$export$2e2bcd8739ae039; });
    $parcel$export($45192bc6b8b18d08$exports, "arrow", function () { return $979b39f17df02a5f$export$2e2bcd8739ae039; });
    $parcel$export($45192bc6b8b18d08$exports, "computeStyles", function () { return $b352969f44dea693$export$2e2bcd8739ae039; });
    $parcel$export($45192bc6b8b18d08$exports, "eventListeners", function () { return $fc95b761c471c0ed$export$2e2bcd8739ae039; });
    $parcel$export($45192bc6b8b18d08$exports, "flip", function () { return $0b9319f2df8d232f$export$2e2bcd8739ae039; });
    $parcel$export($45192bc6b8b18d08$exports, "hide", function () { return $f3127d7c2baa19ae$export$2e2bcd8739ae039; });
    $parcel$export($45192bc6b8b18d08$exports, "offset", function () { return $593639f08893501e$export$2e2bcd8739ae039; });
    $parcel$export($45192bc6b8b18d08$exports, "popperOffsets", function () { return $19da8b3efb31630f$export$2e2bcd8739ae039; });
    $parcel$export($45192bc6b8b18d08$exports, "preventOverflow", function () { return $0140e936bb017a23$export$2e2bcd8739ae039; });
    function $cc684c6c11bc324c$export$2e2bcd8739ae039(element) {
        return element ? (element.nodeName || '').toLowerCase() : null;
    }


    function $154abcbb349ffeaf$export$2e2bcd8739ae039(node) {
        if (node == null) return window;
        if (node.toString() !== '[object Window]') {
            var ownerDocument = node.ownerDocument;
            return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
    }


    function $1b83999ad0d1027c$export$45a5e7f76e0caa8d(node) {
        var OwnElement = $154abcbb349ffeaf$export$2e2bcd8739ae039(node).Element;
        return node instanceof OwnElement || node instanceof Element;
    }
    function $1b83999ad0d1027c$export$1b3bfaa9684536aa(node) {
        var OwnElement = $154abcbb349ffeaf$export$2e2bcd8739ae039(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
    }
    function $1b83999ad0d1027c$export$af51f0f06c0f328a(node) {
        // IE 11 has no ShadowRoot
        if (typeof ShadowRoot === 'undefined') return false;
        var OwnElement = $154abcbb349ffeaf$export$2e2bcd8739ae039(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
    }


// and applies them to the HTMLElements such as popper and arrow
    function $4e32f60d28c1a80f$var$applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name1) {
            var style = state.styles[name1] || {
            };
            var attributes = state.attributes[name1] || {
            };
            var element = state.elements[name1]; // arrow is optional + virtual elements
            if (!$1b83999ad0d1027c$export$1b3bfaa9684536aa(element) || !$cc684c6c11bc324c$export$2e2bcd8739ae039(element)) return;
            // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe[cannot-write]
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(name) {
                var value = attributes[name];
                if (value === false) element.removeAttribute(name);
                else element.setAttribute(name, value === true ? '' : value);
            });
        });
    }
    function $4e32f60d28c1a80f$var$effect(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
            popper: {
                position: state.options.strategy,
                left: '0',
                top: '0',
                margin: '0'
            },
            arrow: {
                position: 'absolute'
            },
            reference: {
            }
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
        return function() {
            Object.keys(state.elements).forEach(function(name) {
                var element = state.elements[name];
                var attributes = state.attributes[name] || {
                };
                var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
                var style1 = styleProperties.reduce(function(style, property) {
                    style[property] = '';
                    return style;
                }, {
                }); // arrow is optional + virtual elements
                if (!$1b83999ad0d1027c$export$1b3bfaa9684536aa(element) || !$cc684c6c11bc324c$export$2e2bcd8739ae039(element)) return;
                Object.assign(element.style, style1);
                Object.keys(attributes).forEach(function(attribute) {
                    element.removeAttribute(attribute);
                });
            });
        };
    } // eslint-disable-next-line import/no-unused-modules
    var $4e32f60d28c1a80f$export$2e2bcd8739ae039 = {
        name: 'applyStyles',
        enabled: true,
        phase: 'write',
        fn: $4e32f60d28c1a80f$var$applyStyles,
        effect: $4e32f60d28c1a80f$var$effect,
        requires: [
            'computeStyles'
        ]
    };



    function $2294e7e3a2caeb6d$export$2e2bcd8739ae039(placement) {
        return placement.split('-')[0];
    }



    var $108da022fc925250$export$8960430cfd85939f = Math.max;
    var $108da022fc925250$export$96ec731ed4dcb222 = Math.min;
    var $108da022fc925250$export$2077e0241d6afd3c = Math.round;


    function $39453d2adcb0ceaf$export$2e2bcd8739ae039(element, includeScale) {
        if (includeScale === void 0) includeScale = false;
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if ($1b83999ad0d1027c$export$1b3bfaa9684536aa(element) && includeScale) {
            var offsetHeight = element.offsetHeight;
            var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
            // Fallback to 1 in case both values are `0`
            if (offsetWidth > 0) scaleX = $108da022fc925250$export$2077e0241d6afd3c(rect.width) / offsetWidth || 1;
            if (offsetHeight > 0) scaleY = $108da022fc925250$export$2077e0241d6afd3c(rect.height) / offsetHeight || 1;
        }
        return {
            width: rect.width / scaleX,
            height: rect.height / scaleY,
            top: rect.top / scaleY,
            right: rect.right / scaleX,
            bottom: rect.bottom / scaleY,
            left: rect.left / scaleX,
            x: rect.left / scaleX,
            y: rect.top / scaleY
        };
    }


    function $0df8c991b2a49c69$export$2e2bcd8739ae039(element) {
        var clientRect = $39453d2adcb0ceaf$export$2e2bcd8739ae039(element); // Use the clientRect sizes if it's not been transformed.
        // Fixes https://github.com/popperjs/popper-core/issues/1223
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
        if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
        return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: width,
            height: height
        };
    }



    function $9af66544df9f4bef$export$2e2bcd8739ae039(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
        if (parent.contains(child)) return true;
        else if (rootNode && $1b83999ad0d1027c$export$af51f0f06c0f328a(rootNode)) {
            var next = child;
            do {
                if (next && parent.isSameNode(next)) return true;
                // $FlowFixMe[prop-missing]: need a better way to handle this...
                next = next.parentNode || next.host;
            }while (next)
        } // Give up, the result is false
        return false;
    }





    function $8e5bcd40a868c1cd$export$2e2bcd8739ae039(element) {
        return $154abcbb349ffeaf$export$2e2bcd8739ae039(element).getComputedStyle(element);
    }




    function $6350d3aafb770851$export$2e2bcd8739ae039(element) {
        return [
            'table',
            'td',
            'th'
        ].indexOf($cc684c6c11bc324c$export$2e2bcd8739ae039(element)) >= 0;
    }




    function $8851d96506b99043$export$2e2bcd8739ae039(element) {
        // $FlowFixMe[incompatible-return]: assume body is always available
        return (($1b83999ad0d1027c$export$45a5e7f76e0caa8d(element) ? element.ownerDocument : element.document) || window.document).documentElement;
    }



    function $92c1e888a958b791$export$2e2bcd8739ae039(element) {
        if ($cc684c6c11bc324c$export$2e2bcd8739ae039(element) === 'html') return element;
        return(// $FlowFixMe[incompatible-return]
            // $FlowFixMe[prop-missing]
            element.assignedSlot || element.parentNode || ($1b83999ad0d1027c$export$af51f0f06c0f328a(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
            $8851d96506b99043$export$2e2bcd8739ae039(element) // fallback
        );
    }


    function $774b5c687ffd7d14$var$getTrueOffsetParent(element) {
        if (!$1b83999ad0d1027c$export$1b3bfaa9684536aa(element) || $8e5bcd40a868c1cd$export$2e2bcd8739ae039(element).position === 'fixed') return null;
        return element.offsetParent;
    } // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
    function $774b5c687ffd7d14$var$getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
        var isIE = navigator.userAgent.indexOf('Trident') !== -1;
        if (isIE && $1b83999ad0d1027c$export$1b3bfaa9684536aa(element)) {
            // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
            var elementCss = $8e5bcd40a868c1cd$export$2e2bcd8739ae039(element);
            if (elementCss.position === 'fixed') return null;
        }
        var currentNode = $92c1e888a958b791$export$2e2bcd8739ae039(element);
        while($1b83999ad0d1027c$export$1b3bfaa9684536aa(currentNode) && [
            'html',
            'body'
        ].indexOf($cc684c6c11bc324c$export$2e2bcd8739ae039(currentNode)) < 0){
            var css = $8e5bcd40a868c1cd$export$2e2bcd8739ae039(currentNode); // This is non-exhaustive but covers the most common CSS properties that
            // create a containing block.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
            if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
                'transform',
                'perspective'
            ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
            else currentNode = currentNode.parentNode;
        }
        return null;
    } // Gets the closest ancestor positioned element. Handles some edge cases,
    function $774b5c687ffd7d14$export$2e2bcd8739ae039(element) {
        var window = $154abcbb349ffeaf$export$2e2bcd8739ae039(element);
        var offsetParent = $774b5c687ffd7d14$var$getTrueOffsetParent(element);
        while(offsetParent && $6350d3aafb770851$export$2e2bcd8739ae039(offsetParent) && $8e5bcd40a868c1cd$export$2e2bcd8739ae039(offsetParent).position === 'static')offsetParent = $774b5c687ffd7d14$var$getTrueOffsetParent(offsetParent);
        if (offsetParent && ($cc684c6c11bc324c$export$2e2bcd8739ae039(offsetParent) === 'html' || $cc684c6c11bc324c$export$2e2bcd8739ae039(offsetParent) === 'body' && $8e5bcd40a868c1cd$export$2e2bcd8739ae039(offsetParent).position === 'static')) return window;
        return offsetParent || $774b5c687ffd7d14$var$getContainingBlock(element) || window;
    }


    function $3736b7abcc05fe6c$export$2e2bcd8739ae039(placement) {
        return [
            'top',
            'bottom'
        ].indexOf(placement) >= 0 ? 'x' : 'y';
    }



    function $da778adcf4ed021e$export$f28d906d67a997f3(min, value, max) {
        return $108da022fc925250$export$8960430cfd85939f(min, $108da022fc925250$export$96ec731ed4dcb222(value, max));
    }
    function $da778adcf4ed021e$export$86c8af6d3ef0b4a(min, value, max) {
        var v = $da778adcf4ed021e$export$f28d906d67a997f3(min, value, max);
        return v > max ? max : v;
    }


    function $d92e2444bd892e95$export$2e2bcd8739ae039() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }


    function $99a83aa38671e896$export$2e2bcd8739ae039(paddingObject) {
        return Object.assign({
        }, $d92e2444bd892e95$export$2e2bcd8739ae039(), paddingObject);
    }


    function $508f3b09516f221a$export$2e2bcd8739ae039(value, keys) {
        return keys.reduce(function(hashMap, key) {
            hashMap[key] = value;
            return hashMap;
        }, {
        });
    }




    var $979b39f17df02a5f$var$toPaddingObject = function toPaddingObject(padding, state) {
        padding = typeof padding === 'function' ? padding(Object.assign({
        }, state.rects, {
            placement: state.placement
        })) : padding;
        return $99a83aa38671e896$export$2e2bcd8739ae039(typeof padding !== 'number' ? padding : $508f3b09516f221a$export$2e2bcd8739ae039(padding, $cb619642add61ce7$export$aec2ce47c367b8c3));
    };
    function $979b39f17df02a5f$var$arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets = state.modifiersData.popperOffsets;
        var basePlacement = $2294e7e3a2caeb6d$export$2e2bcd8739ae039(state.placement);
        var axis = $3736b7abcc05fe6c$export$2e2bcd8739ae039(basePlacement);
        var isVertical = [
            $cb619642add61ce7$export$eabcd2c8791e7bf4,
            $cb619642add61ce7$export$79ffe56a765070d2
        ].indexOf(basePlacement) >= 0;
        var len = isVertical ? 'height' : 'width';
        if (!arrowElement || !popperOffsets) return;
        var paddingObject = $979b39f17df02a5f$var$toPaddingObject(options.padding, state);
        var arrowRect = $0df8c991b2a49c69$export$2e2bcd8739ae039(arrowElement);
        var minProp = axis === 'y' ? $cb619642add61ce7$export$1e95b668f3b82d : $cb619642add61ce7$export$eabcd2c8791e7bf4;
        var maxProp = axis === 'y' ? $cb619642add61ce7$export$40e543e69a8b3fbb : $cb619642add61ce7$export$79ffe56a765070d2;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
        var startDiff = popperOffsets[axis] - state.rects.reference[axis];
        var arrowOffsetParent = $774b5c687ffd7d14$export$2e2bcd8739ae039(arrowElement);
        var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
        // outside of the popper bounds
        var min = paddingObject[minProp];
        var max = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset = $da778adcf4ed021e$export$f28d906d67a997f3(min, center, max); // Prevents breaking syntax highlighting...
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {
        }, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
    }
    function $979b39f17df02a5f$var$effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
        if (arrowElement == null) return;
        // CSS selector
        if (typeof arrowElement === 'string') {
            arrowElement = state.elements.popper.querySelector(arrowElement);
            if (!arrowElement) return;
        }
        if (!$9af66544df9f4bef$export$2e2bcd8739ae039(state.elements.popper, arrowElement)) return;
        state.elements.arrow = arrowElement;
    } // eslint-disable-next-line import/no-unused-modules
    var $979b39f17df02a5f$export$2e2bcd8739ae039 = {
        name: 'arrow',
        enabled: true,
        phase: 'main',
        fn: $979b39f17df02a5f$var$arrow,
        effect: $979b39f17df02a5f$var$effect,
        requires: [
            'popperOffsets'
        ],
        requiresIfExists: [
            'preventOverflow'
        ]
    };








    function $f5d3b67b21324e52$export$2e2bcd8739ae039(placement) {
        return placement.split('-')[1];
    }



    var $b352969f44dea693$var$unsetSides = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto'
    }; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
    function $b352969f44dea693$var$roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
            x: $108da022fc925250$export$2077e0241d6afd3c(x * dpr) / dpr || 0,
            y: $108da022fc925250$export$2077e0241d6afd3c(y * dpr) / dpr || 0
        };
    }
    function $b352969f44dea693$export$378fa78a8fea596f(_ref2) {
        var _Object$assign2;
        var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
        var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
            x: x,
            y: y
        }) : {
            x: x,
            y: y
        };
        x = _ref3.x;
        y = _ref3.y;
        var hasX = offsets.hasOwnProperty('x');
        var hasY = offsets.hasOwnProperty('y');
        var sideX = $cb619642add61ce7$export$eabcd2c8791e7bf4;
        var sideY = $cb619642add61ce7$export$1e95b668f3b82d;
        var win = window;
        if (adaptive) {
            var offsetParent = $774b5c687ffd7d14$export$2e2bcd8739ae039(popper);
            var heightProp = 'clientHeight';
            var widthProp = 'clientWidth';
            if (offsetParent === $154abcbb349ffeaf$export$2e2bcd8739ae039(popper)) {
                offsetParent = $8851d96506b99043$export$2e2bcd8739ae039(popper);
                if ($8e5bcd40a868c1cd$export$2e2bcd8739ae039(offsetParent).position !== 'static' && position === 'absolute') {
                    heightProp = 'scrollHeight';
                    widthProp = 'scrollWidth';
                }
            } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
            if (placement === $cb619642add61ce7$export$1e95b668f3b82d || (placement === $cb619642add61ce7$export$eabcd2c8791e7bf4 || placement === $cb619642add61ce7$export$79ffe56a765070d2) && variation === $cb619642add61ce7$export$bd5df0f255a350f8) {
                sideY = $cb619642add61ce7$export$40e543e69a8b3fbb;
                var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
                y -= offsetY - popperRect.height;
                y *= gpuAcceleration ? 1 : -1;
            }
            if (placement === $cb619642add61ce7$export$eabcd2c8791e7bf4 || (placement === $cb619642add61ce7$export$1e95b668f3b82d || placement === $cb619642add61ce7$export$40e543e69a8b3fbb) && variation === $cb619642add61ce7$export$bd5df0f255a350f8) {
                sideX = $cb619642add61ce7$export$79ffe56a765070d2;
                var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
                x -= offsetX - popperRect.width;
                x *= gpuAcceleration ? 1 : -1;
            }
        }
        var commonStyles = Object.assign({
            position: position
        }, adaptive && $b352969f44dea693$var$unsetSides);
        var _ref4 = roundOffsets === true ? $b352969f44dea693$var$roundOffsetsByDPR({
            x: x,
            y: y
        }) : {
            x: x,
            y: y
        };
        x = _ref4.x;
        y = _ref4.y;
        if (gpuAcceleration) {
            var _Object$assign;
            return Object.assign({
            }, commonStyles, (_Object$assign = {
            }, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({
        }, commonStyles, (_Object$assign2 = {
        }, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
    }
    function $b352969f44dea693$var$computeStyles(_ref5) {
        var state = _ref5.state, options = _ref5.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        var transitionProperty, property;
        var commonStyles = {
            placement: $2294e7e3a2caeb6d$export$2e2bcd8739ae039(state.placement),
            variation: $f5d3b67b21324e52$export$2e2bcd8739ae039(state.placement),
            popper: state.elements.popper,
            popperRect: state.rects.popper,
            gpuAcceleration: gpuAcceleration,
            isFixed: state.options.strategy === 'fixed'
        };
        if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({
        }, state.styles.popper, $b352969f44dea693$export$378fa78a8fea596f(Object.assign({
        }, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive: adaptive,
            roundOffsets: roundOffsets
        })));
        if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({
        }, state.styles.arrow, $b352969f44dea693$export$378fa78a8fea596f(Object.assign({
        }, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: 'absolute',
            adaptive: false,
            roundOffsets: roundOffsets
        })));
        state.attributes.popper = Object.assign({
        }, state.attributes.popper, {
            'data-popper-placement': state.placement
        });
    } // eslint-disable-next-line import/no-unused-modules
    var $b352969f44dea693$export$2e2bcd8739ae039 = {
        name: 'computeStyles',
        enabled: true,
        phase: 'beforeWrite',
        fn: $b352969f44dea693$var$computeStyles,
        data: {
        }
    };



    var $fc95b761c471c0ed$var$passive = {
        passive: true
    };
    function $fc95b761c471c0ed$var$effect(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window = $154abcbb349ffeaf$export$2e2bcd8739ae039(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener('scroll', instance.update, $fc95b761c471c0ed$var$passive);
        });
        if (resize) window.addEventListener('resize', instance.update, $fc95b761c471c0ed$var$passive);
        return function() {
            if (scroll) scrollParents.forEach(function(scrollParent) {
                scrollParent.removeEventListener('scroll', instance.update, $fc95b761c471c0ed$var$passive);
            });
            if (resize) window.removeEventListener('resize', instance.update, $fc95b761c471c0ed$var$passive);
        };
    } // eslint-disable-next-line import/no-unused-modules
    var $fc95b761c471c0ed$export$2e2bcd8739ae039 = {
        name: 'eventListeners',
        enabled: true,
        phase: 'write',
        fn: function fn() {
        },
        effect: $fc95b761c471c0ed$var$effect,
        data: {
        }
    };


    var $2738f0a323807998$var$hash = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom'
    };
    function $2738f0a323807998$export$2e2bcd8739ae039(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
            return $2738f0a323807998$var$hash[matched];
        });
    }



    var $3672d13187afccde$var$hash = {
        start: 'end',
        end: 'start'
    };
    function $3672d13187afccde$export$2e2bcd8739ae039(placement) {
        return placement.replace(/start|end/g, function(matched) {
            return $3672d13187afccde$var$hash[matched];
        });
    }








    function $c5eca87ef902a877$export$2e2bcd8739ae039(node) {
        var win = $154abcbb349ffeaf$export$2e2bcd8739ae039(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop
        };
    }


    function $61a1d444b89688d2$export$2e2bcd8739ae039(element) {
        // If <html> has a CSS width greater than the viewport, then this will be
        // incorrect for RTL.
        // Popper 1 is broken in this case and never had a bug report so let's assume
        // it's not an issue. I don't think anyone ever specifies width on <html>
        // anyway.
        // Browsers where the left scrollbar doesn't cause an issue report `0` for
        // this (e.g. Edge 2019, IE11, Safari)
        return $39453d2adcb0ceaf$export$2e2bcd8739ae039($8851d96506b99043$export$2e2bcd8739ae039(element)).left + $c5eca87ef902a877$export$2e2bcd8739ae039(element).scrollLeft;
    }


    function $193beda70a78a26b$export$2e2bcd8739ae039(element) {
        var win = $154abcbb349ffeaf$export$2e2bcd8739ae039(element);
        var html = $8851d96506b99043$export$2e2bcd8739ae039(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
        // can be obscured underneath it.
        // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
        // if it isn't open, so if this isn't available, the popper will be detected
        // to overflow the bottom of the screen too early.
        if (visualViewport) {
            width = visualViewport.width;
            height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
            // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
            // errors due to floating point numbers, so we need to check precision.
            // Safari returns a number <= 0, usually < -1 when pinch-zoomed
            // Feature detection fails in mobile emulation mode in Chrome.
            // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
            // 0.001
            // Fallback here: "Not Safari" userAgent
            if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                x = visualViewport.offsetLeft;
                y = visualViewport.offsetTop;
            }
        }
        return {
            width: width,
            height: height,
            x: x + $61a1d444b89688d2$export$2e2bcd8739ae039(element),
            y: y
        };
    }







    function $ffb52b07164bffc3$export$2e2bcd8739ae039(element) {
        var _element$ownerDocumen;
        var html = $8851d96506b99043$export$2e2bcd8739ae039(element);
        var winScroll = $c5eca87ef902a877$export$2e2bcd8739ae039(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = $108da022fc925250$export$8960430cfd85939f(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = $108da022fc925250$export$8960430cfd85939f(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + $61a1d444b89688d2$export$2e2bcd8739ae039(element);
        var y = -winScroll.scrollTop;
        if ($8e5bcd40a868c1cd$export$2e2bcd8739ae039(body || html).direction === 'rtl') x += $108da022fc925250$export$8960430cfd85939f(html.clientWidth, body ? body.clientWidth : 0) - width;
        return {
            width: width,
            height: height,
            x: x,
            y: y
        };
    }




    function $fad4486617fb942d$export$2e2bcd8739ae039(element) {
        // Firefox wants us to check `-x` and `-y` variations as well
        var _getComputedStyle = $8e5bcd40a868c1cd$export$2e2bcd8739ae039(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }




    function $863e0af702ff298d$export$2e2bcd8739ae039(node) {
        if ([
            'html',
            'body',
            '#document'
        ].indexOf($cc684c6c11bc324c$export$2e2bcd8739ae039(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
            return node.ownerDocument.body;
        if ($1b83999ad0d1027c$export$1b3bfaa9684536aa(node) && $fad4486617fb942d$export$2e2bcd8739ae039(node)) return node;
        return $863e0af702ff298d$export$2e2bcd8739ae039($92c1e888a958b791$export$2e2bcd8739ae039(node));
    }





    function $b87dd92d6dc8eb04$export$2e2bcd8739ae039(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) list = [];
        var scrollParent = $863e0af702ff298d$export$2e2bcd8739ae039(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = $154abcbb349ffeaf$export$2e2bcd8739ae039(scrollParent);
        var target = isBody ? [
            win
        ].concat(win.visualViewport || [], $fad4486617fb942d$export$2e2bcd8739ae039(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : updatedList.concat($b87dd92d6dc8eb04$export$2e2bcd8739ae039($92c1e888a958b791$export$2e2bcd8739ae039(target)));
    }










    function $00664479f2a2035d$export$2e2bcd8739ae039(rect) {
        return Object.assign({
        }, rect, {
            left: rect.x,
            top: rect.y,
            right: rect.x + rect.width,
            bottom: rect.y + rect.height
        });
    }



    function $a3a7d1b51fb07ead$var$getInnerBoundingClientRect(element) {
        var rect = $39453d2adcb0ceaf$export$2e2bcd8739ae039(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
    }
    function $a3a7d1b51fb07ead$var$getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === $cb619642add61ce7$export$d7b7311ec04a3e8f ? $00664479f2a2035d$export$2e2bcd8739ae039($193beda70a78a26b$export$2e2bcd8739ae039(element)) : $1b83999ad0d1027c$export$45a5e7f76e0caa8d(clippingParent) ? $a3a7d1b51fb07ead$var$getInnerBoundingClientRect(clippingParent) : $00664479f2a2035d$export$2e2bcd8739ae039($ffb52b07164bffc3$export$2e2bcd8739ae039($8851d96506b99043$export$2e2bcd8739ae039(element)));
    } // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
    function $a3a7d1b51fb07ead$var$getClippingParents(element) {
        var clippingParents = $b87dd92d6dc8eb04$export$2e2bcd8739ae039($92c1e888a958b791$export$2e2bcd8739ae039(element));
        var canEscapeClipping = [
            'absolute',
            'fixed'
        ].indexOf($8e5bcd40a868c1cd$export$2e2bcd8739ae039(element).position) >= 0;
        var clipperElement = canEscapeClipping && $1b83999ad0d1027c$export$1b3bfaa9684536aa(element) ? $774b5c687ffd7d14$export$2e2bcd8739ae039(element) : element;
        if (!$1b83999ad0d1027c$export$45a5e7f76e0caa8d(clipperElement)) return [];
        // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
        return clippingParents.filter(function(clippingParent) {
            return $1b83999ad0d1027c$export$45a5e7f76e0caa8d(clippingParent) && $9af66544df9f4bef$export$2e2bcd8739ae039(clippingParent, clipperElement) && $cc684c6c11bc324c$export$2e2bcd8739ae039(clippingParent) !== 'body';
        });
    } // Gets the maximum area that the element is visible in due to any number of
    function $a3a7d1b51fb07ead$export$2e2bcd8739ae039(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === 'clippingParents' ? $a3a7d1b51fb07ead$var$getClippingParents(element) : [].concat(boundary);
        var clippingParents = [].concat(mainClippingParents, [
            rootBoundary
        ]);
        var firstClippingParent = clippingParents[0];
        var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
            var rect = $a3a7d1b51fb07ead$var$getClientRectFromMixedType(element, clippingParent);
            accRect.top = $108da022fc925250$export$8960430cfd85939f(rect.top, accRect.top);
            accRect.right = $108da022fc925250$export$96ec731ed4dcb222(rect.right, accRect.right);
            accRect.bottom = $108da022fc925250$export$96ec731ed4dcb222(rect.bottom, accRect.bottom);
            accRect.left = $108da022fc925250$export$8960430cfd85939f(rect.left, accRect.left);
            return accRect;
        }, $a3a7d1b51fb07ead$var$getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
    }








    function $390bb8a02d008211$export$2e2bcd8739ae039(_ref) {
        var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? $2294e7e3a2caeb6d$export$2e2bcd8739ae039(placement) : null;
        var variation = placement ? $f5d3b67b21324e52$export$2e2bcd8739ae039(placement) : null;
        var commonX = reference.x + reference.width / 2 - element.width / 2;
        var commonY = reference.y + reference.height / 2 - element.height / 2;
        var offsets;
        switch(basePlacement){
            case $cb619642add61ce7$export$1e95b668f3b82d:
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;
            case $cb619642add61ce7$export$40e543e69a8b3fbb:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;
            case $cb619642add61ce7$export$79ffe56a765070d2:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;
            case $cb619642add61ce7$export$eabcd2c8791e7bf4:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;
            default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                };
        }
        var mainAxis = basePlacement ? $3736b7abcc05fe6c$export$2e2bcd8739ae039(basePlacement) : null;
        if (mainAxis != null) {
            var len = mainAxis === 'y' ? 'height' : 'width';
            switch(variation){
                case $cb619642add61ce7$export$b3571188c770cc5a:
                    offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                    break;
                case $cb619642add61ce7$export$bd5df0f255a350f8:
                    offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                    break;
                default:
            }
        }
        return offsets;
    }







    function $f98a947fbf04c363$export$2e2bcd8739ae039(state, options) {
        if (options === void 0) options = {
        };
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? $cb619642add61ce7$export$390fd549c5303b4d : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? $cb619642add61ce7$export$d7b7311ec04a3e8f : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? $cb619642add61ce7$export$ae5ab1c730825774 : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = $99a83aa38671e896$export$2e2bcd8739ae039(typeof padding !== 'number' ? padding : $508f3b09516f221a$export$2e2bcd8739ae039(padding, $cb619642add61ce7$export$aec2ce47c367b8c3));
        var altContext = elementContext === $cb619642add61ce7$export$ae5ab1c730825774 ? $cb619642add61ce7$export$ca50aac9f3ba507f : $cb619642add61ce7$export$ae5ab1c730825774;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = $a3a7d1b51fb07ead$export$2e2bcd8739ae039($1b83999ad0d1027c$export$45a5e7f76e0caa8d(element) ? element : element.contextElement || $8851d96506b99043$export$2e2bcd8739ae039(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = $39453d2adcb0ceaf$export$2e2bcd8739ae039(state.elements.reference);
        var popperOffsets = $390bb8a02d008211$export$2e2bcd8739ae039({
            reference: referenceClientRect,
            element: popperRect,
            strategy: 'absolute',
            placement: placement
        });
        var popperClientRect = $00664479f2a2035d$export$2e2bcd8739ae039(Object.assign({
        }, popperRect, popperOffsets));
        var elementClientRect = elementContext === $cb619642add61ce7$export$ae5ab1c730825774 ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
        // 0 or negative = within the clipping rect
        var overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
        if (elementContext === $cb619642add61ce7$export$ae5ab1c730825774 && offsetData) {
            var offset = offsetData[placement];
            Object.keys(overflowOffsets).forEach(function(key) {
                var multiply = [
                    $cb619642add61ce7$export$79ffe56a765070d2,
                    $cb619642add61ce7$export$40e543e69a8b3fbb
                ].indexOf(key) >= 0 ? 1 : -1;
                var axis = [
                    $cb619642add61ce7$export$1e95b668f3b82d,
                    $cb619642add61ce7$export$40e543e69a8b3fbb
                ].indexOf(key) >= 0 ? 'y' : 'x';
                overflowOffsets[key] += offset[axis] * multiply;
            });
        }
        return overflowOffsets;
    }






    function $a4edd210a333cea6$export$2e2bcd8739ae039(state, options) {
        if (options === void 0) options = {
        };
        var _options = options, placement1 = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? $cb619642add61ce7$export$803cd8101b6c182b : _options$allowedAutoP;
        var variation = $f5d3b67b21324e52$export$2e2bcd8739ae039(placement1);
        var placements = variation ? flipVariations ? $cb619642add61ce7$export$368f9a87e87fa4e1 : $cb619642add61ce7$export$368f9a87e87fa4e1.filter(function(placement) {
            return $f5d3b67b21324e52$export$2e2bcd8739ae039(placement) === variation;
        }) : $cb619642add61ce7$export$aec2ce47c367b8c3;
        var allowedPlacements = placements.filter(function(placement) {
            return allowedAutoPlacements.indexOf(placement) >= 0;
        });
        if (allowedPlacements.length === 0) allowedPlacements = placements;
        // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
        var overflows = allowedPlacements.reduce(function(acc, placement) {
            acc[placement] = $f98a947fbf04c363$export$2e2bcd8739ae039(state, {
                placement: placement,
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding
            })[$2294e7e3a2caeb6d$export$2e2bcd8739ae039(placement)];
            return acc;
        }, {
        });
        return Object.keys(overflows).sort(function(a, b) {
            return overflows[a] - overflows[b];
        });
    }




    function $0b9319f2df8d232f$var$getExpandedFallbackPlacements(placement) {
        if ($2294e7e3a2caeb6d$export$2e2bcd8739ae039(placement) === $cb619642add61ce7$export$dfb5619354ba860) return [];
        var oppositePlacement = $2738f0a323807998$export$2e2bcd8739ae039(placement);
        return [
            $3672d13187afccde$export$2e2bcd8739ae039(placement),
            oppositePlacement,
            $3672d13187afccde$export$2e2bcd8739ae039(oppositePlacement)
        ];
    }
    function $0b9319f2df8d232f$var$flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) return;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = $2294e7e3a2caeb6d$export$2e2bcd8739ae039(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
            $2738f0a323807998$export$2e2bcd8739ae039(preferredPlacement)
        ] : $0b9319f2df8d232f$var$getExpandedFallbackPlacements(preferredPlacement));
        var placements = [
            preferredPlacement
        ].concat(fallbackPlacements).reduce(function(acc, placement) {
            return acc.concat($2294e7e3a2caeb6d$export$2e2bcd8739ae039(placement) === $cb619642add61ce7$export$dfb5619354ba860 ? $a4edd210a333cea6$export$2e2bcd8739ae039(state, {
                placement: placement,
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding,
                flipVariations: flipVariations,
                allowedAutoPlacements: allowedAutoPlacements
            }) : placement);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements[0];
        for(var i = 0; i < placements.length; i++){
            var placement1 = placements[i];
            var _basePlacement = $2294e7e3a2caeb6d$export$2e2bcd8739ae039(placement1);
            var isStartVariation = $f5d3b67b21324e52$export$2e2bcd8739ae039(placement1) === $cb619642add61ce7$export$b3571188c770cc5a;
            var isVertical = [
                $cb619642add61ce7$export$1e95b668f3b82d,
                $cb619642add61ce7$export$40e543e69a8b3fbb
            ].indexOf(_basePlacement) >= 0;
            var len = isVertical ? 'width' : 'height';
            var overflow = $f98a947fbf04c363$export$2e2bcd8739ae039(state, {
                placement: placement1,
                boundary: boundary,
                rootBoundary: rootBoundary,
                altBoundary: altBoundary,
                padding: padding
            });
            var mainVariationSide = isVertical ? isStartVariation ? $cb619642add61ce7$export$79ffe56a765070d2 : $cb619642add61ce7$export$eabcd2c8791e7bf4 : isStartVariation ? $cb619642add61ce7$export$40e543e69a8b3fbb : $cb619642add61ce7$export$1e95b668f3b82d;
            if (referenceRect[len] > popperRect[len]) mainVariationSide = $2738f0a323807998$export$2e2bcd8739ae039(mainVariationSide);
            var altVariationSide = $2738f0a323807998$export$2e2bcd8739ae039(mainVariationSide);
            var checks = [];
            if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
            if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
            if (checks.every(function(check) {
                return check;
            })) {
                firstFittingPlacement = placement1;
                makeFallbackChecks = false;
                break;
            }
            checksMap.set(placement1, checks);
        }
        if (makeFallbackChecks) {
            // `2` may be desired in some cases – research later
            var numberOfChecks = flipVariations ? 3 : 1;
            var _loop = function _loop(_i) {
                var fittingPlacement = placements.find(function(placement) {
                    var checks = checksMap.get(placement);
                    if (checks) return checks.slice(0, _i).every(function(check) {
                        return check;
                    });
                });
                if (fittingPlacement) {
                    firstFittingPlacement = fittingPlacement;
                    return "break";
                }
            };
            for(var _i1 = numberOfChecks; _i1 > 0; _i1--){
                var _ret = _loop(_i1);
                if (_ret === "break") break;
            }
        }
        if (state.placement !== firstFittingPlacement) {
            state.modifiersData[name]._skip = true;
            state.placement = firstFittingPlacement;
            state.reset = true;
        }
    } // eslint-disable-next-line import/no-unused-modules
    var $0b9319f2df8d232f$export$2e2bcd8739ae039 = {
        name: 'flip',
        enabled: true,
        phase: 'main',
        fn: $0b9319f2df8d232f$var$flip,
        requiresIfExists: [
            'offset'
        ],
        data: {
            _skip: false
        }
    };




    function $f3127d7c2baa19ae$var$getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) preventedOffsets = {
            x: 0,
            y: 0
        };
        return {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x
        };
    }
    function $f3127d7c2baa19ae$var$isAnySideFullyClipped(overflow) {
        return [
            $cb619642add61ce7$export$1e95b668f3b82d,
            $cb619642add61ce7$export$79ffe56a765070d2,
            $cb619642add61ce7$export$40e543e69a8b3fbb,
            $cb619642add61ce7$export$eabcd2c8791e7bf4
        ].some(function(side) {
            return overflow[side] >= 0;
        });
    }
    function $f3127d7c2baa19ae$var$hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = $f98a947fbf04c363$export$2e2bcd8739ae039(state, {
            elementContext: 'reference'
        });
        var popperAltOverflow = $f98a947fbf04c363$export$2e2bcd8739ae039(state, {
            altBoundary: true
        });
        var referenceClippingOffsets = $f3127d7c2baa19ae$var$getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = $f3127d7c2baa19ae$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = $f3127d7c2baa19ae$var$isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = $f3127d7c2baa19ae$var$isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
            referenceClippingOffsets: referenceClippingOffsets,
            popperEscapeOffsets: popperEscapeOffsets,
            isReferenceHidden: isReferenceHidden,
            hasPopperEscaped: hasPopperEscaped
        };
        state.attributes.popper = Object.assign({
        }, state.attributes.popper, {
            'data-popper-reference-hidden': isReferenceHidden,
            'data-popper-escaped': hasPopperEscaped
        });
    } // eslint-disable-next-line import/no-unused-modules
    var $f3127d7c2baa19ae$export$2e2bcd8739ae039 = {
        name: 'hide',
        enabled: true,
        phase: 'main',
        requiresIfExists: [
            'preventOverflow'
        ],
        fn: $f3127d7c2baa19ae$var$hide
    };




    function $593639f08893501e$export$7fa02d8595b015ed(placement, rects, offset) {
        var basePlacement = $2294e7e3a2caeb6d$export$2e2bcd8739ae039(placement);
        var invertDistance = [
            $cb619642add61ce7$export$eabcd2c8791e7bf4,
            $cb619642add61ce7$export$1e95b668f3b82d
        ].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset === 'function' ? offset(Object.assign({
        }, rects, {
            placement: placement
        })) : offset, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [
            $cb619642add61ce7$export$eabcd2c8791e7bf4,
            $cb619642add61ce7$export$79ffe56a765070d2
        ].indexOf(basePlacement) >= 0 ? {
            x: distance,
            y: skidding
        } : {
            x: skidding,
            y: distance
        };
    }
    function $593639f08893501e$var$offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset = _options$offset === void 0 ? [
            0,
            0
        ] : _options$offset;
        var data = $cb619642add61ce7$export$803cd8101b6c182b.reduce(function(acc, placement) {
            acc[placement] = $593639f08893501e$export$7fa02d8595b015ed(placement, state.rects, offset);
            return acc;
        }, {
        });
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
            state.modifiersData.popperOffsets.x += x;
            state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules
    var $593639f08893501e$export$2e2bcd8739ae039 = {
        name: 'offset',
        enabled: true,
        phase: 'main',
        requires: [
            'popperOffsets'
        ],
        fn: $593639f08893501e$var$offset
    };



    function $19da8b3efb31630f$var$popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        // Offsets are the actual position the popper needs to have to be
        // properly positioned near its reference element
        // This is the most basic placement, and will be adjusted by
        // the modifiers in the next step
        state.modifiersData[name] = $390bb8a02d008211$export$2e2bcd8739ae039({
            reference: state.rects.reference,
            element: state.rects.popper,
            strategy: 'absolute',
            placement: state.placement
        });
    } // eslint-disable-next-line import/no-unused-modules
    var $19da8b3efb31630f$export$2e2bcd8739ae039 = {
        name: 'popperOffsets',
        enabled: true,
        phase: 'read',
        fn: $19da8b3efb31630f$var$popperOffsets,
        data: {
        }
    };





    function $3cb8ffb14a02e201$export$2e2bcd8739ae039(axis) {
        return axis === 'x' ? 'y' : 'x';
    }









    function $0140e936bb017a23$var$preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = $f98a947fbf04c363$export$2e2bcd8739ae039(state, {
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            altBoundary: altBoundary
        });
        var basePlacement = $2294e7e3a2caeb6d$export$2e2bcd8739ae039(state.placement);
        var variation = $f5d3b67b21324e52$export$2e2bcd8739ae039(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = $3736b7abcc05fe6c$export$2e2bcd8739ae039(basePlacement);
        var altAxis = $3cb8ffb14a02e201$export$2e2bcd8739ae039(mainAxis);
        var popperOffsets = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({
        }, state.rects, {
            placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
            mainAxis: tetherOffsetValue,
            altAxis: tetherOffsetValue
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
            x: 0,
            y: 0
        };
        if (!popperOffsets) return;
        if (checkMainAxis) {
            var _offsetModifierState$;
            var mainSide = mainAxis === 'y' ? $cb619642add61ce7$export$1e95b668f3b82d : $cb619642add61ce7$export$eabcd2c8791e7bf4;
            var altSide = mainAxis === 'y' ? $cb619642add61ce7$export$40e543e69a8b3fbb : $cb619642add61ce7$export$79ffe56a765070d2;
            var len = mainAxis === 'y' ? 'height' : 'width';
            var offset = popperOffsets[mainAxis];
            var min = offset + overflow[mainSide];
            var max = offset - overflow[altSide];
            var additive = tether ? -popperRect[len] / 2 : 0;
            var minLen = variation === $cb619642add61ce7$export$b3571188c770cc5a ? referenceRect[len] : popperRect[len];
            var maxLen = variation === $cb619642add61ce7$export$b3571188c770cc5a ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
            // outside the reference bounds
            var arrowElement = state.elements.arrow;
            var arrowRect = tether && arrowElement ? $0df8c991b2a49c69$export$2e2bcd8739ae039(arrowElement) : {
                width: 0,
                height: 0
            };
            var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : $d92e2444bd892e95$export$2e2bcd8739ae039();
            var arrowPaddingMin = arrowPaddingObject[mainSide];
            var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
            // to include its full size in the calculation. If the reference is small
            // and near the edge of a boundary, the popper can overflow even if the
            // reference is not overflowing as well (e.g. virtual elements with no
            // width or height)
            var arrowLen = $da778adcf4ed021e$export$f28d906d67a997f3(0, referenceRect[len], arrowRect[len]);
            var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
            var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
            var arrowOffsetParent = state.elements.arrow && $774b5c687ffd7d14$export$2e2bcd8739ae039(state.elements.arrow);
            var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
            var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
            var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
            var tetherMax = offset + maxOffset - offsetModifierValue;
            var preventedOffset = $da778adcf4ed021e$export$f28d906d67a997f3(tether ? $108da022fc925250$export$96ec731ed4dcb222(min, tetherMin) : min, offset, tether ? $108da022fc925250$export$8960430cfd85939f(max, tetherMax) : max);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
        }
        if (checkAltAxis) {
            var _offsetModifierState$2;
            var _mainSide = mainAxis === 'x' ? $cb619642add61ce7$export$1e95b668f3b82d : $cb619642add61ce7$export$eabcd2c8791e7bf4;
            var _altSide = mainAxis === 'x' ? $cb619642add61ce7$export$40e543e69a8b3fbb : $cb619642add61ce7$export$79ffe56a765070d2;
            var _offset = popperOffsets[altAxis];
            var _len = altAxis === 'y' ? 'height' : 'width';
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var isOriginSide = [
                $cb619642add61ce7$export$1e95b668f3b82d,
                $cb619642add61ce7$export$eabcd2c8791e7bf4
            ].indexOf(basePlacement) !== -1;
            var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
            var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
            var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
            var _preventedOffset = tether && isOriginSide ? $da778adcf4ed021e$export$86c8af6d3ef0b4a(_tetherMin, _offset, _tetherMax) : $da778adcf4ed021e$export$f28d906d67a997f3(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules
    var $0140e936bb017a23$export$2e2bcd8739ae039 = {
        name: 'preventOverflow',
        enabled: true,
        phase: 'main',
        fn: $0140e936bb017a23$var$preventOverflow,
        requiresIfExists: [
            'offset'
        ]
    };








    function $b30017e18253eb7f$export$2e2bcd8739ae039(element) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }


    function $8670e3444f4baaab$export$2e2bcd8739ae039(node) {
        if (node === $154abcbb349ffeaf$export$2e2bcd8739ae039(node) || !$1b83999ad0d1027c$export$1b3bfaa9684536aa(node)) return $c5eca87ef902a877$export$2e2bcd8739ae039(node);
        else return $b30017e18253eb7f$export$2e2bcd8739ae039(node);
    }








    function $ab993dc5adef754b$var$isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = $108da022fc925250$export$2077e0241d6afd3c(rect.width) / element.offsetWidth || 1;
        var scaleY = $108da022fc925250$export$2077e0241d6afd3c(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
    } // Returns the composite rect of an element relative to its offsetParent.
    function $ab993dc5adef754b$export$2e2bcd8739ae039(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) isFixed = false;
        var isOffsetParentAnElement = $1b83999ad0d1027c$export$1b3bfaa9684536aa(offsetParent);
        var offsetParentIsScaled = $1b83999ad0d1027c$export$1b3bfaa9684536aa(offsetParent) && $ab993dc5adef754b$var$isElementScaled(offsetParent);
        var documentElement = $8851d96506b99043$export$2e2bcd8739ae039(offsetParent);
        var rect = $39453d2adcb0ceaf$export$2e2bcd8739ae039(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
            scrollLeft: 0,
            scrollTop: 0
        };
        var offsets = {
            x: 0,
            y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
            if ($cc684c6c11bc324c$export$2e2bcd8739ae039(offsetParent) !== 'body' || $fad4486617fb942d$export$2e2bcd8739ae039(documentElement)) scroll = $8670e3444f4baaab$export$2e2bcd8739ae039(offsetParent);
            if ($1b83999ad0d1027c$export$1b3bfaa9684536aa(offsetParent)) {
                offsets = $39453d2adcb0ceaf$export$2e2bcd8739ae039(offsetParent, true);
                offsets.x += offsetParent.clientLeft;
                offsets.y += offsetParent.clientTop;
            } else if (documentElement) offsets.x = $61a1d444b89688d2$export$2e2bcd8739ae039(documentElement);
        }
        return {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height
        };
    }







    function $2358023eb2a7669c$var$order(modifiers) {
        var map = new Map();
        var visited = new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
            map.set(modifier.name, modifier);
        }); // On visiting object, check for its dependencies and visit them recursively
        function sort(modifier) {
            visited.add(modifier.name);
            var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
            requires.forEach(function(dep) {
                if (!visited.has(dep)) {
                    var depModifier = map.get(dep);
                    if (depModifier) sort(depModifier);
                }
            });
            result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
            if (!visited.has(modifier.name)) // check for visited object
                sort(modifier);
        });
        return result;
    }
    function $2358023eb2a7669c$export$2e2bcd8739ae039(modifiers) {
        // order based on dependencies
        var orderedModifiers = $2358023eb2a7669c$var$order(modifiers); // order based on phase
        return $cb619642add61ce7$export$d087d3878fdf71d5.reduce(function(acc, phase) {
            return acc.concat(orderedModifiers.filter(function(modifier) {
                return modifier.phase === phase;
            }));
        }, []);
    }


    function $ed27e1b5bc017872$export$2e2bcd8739ae039(fn) {
        var pending;
        return function() {
            if (!pending) pending = new Promise(function(resolve) {
                Promise.resolve().then(function() {
                    pending = undefined;
                    resolve(fn());
                });
            });
            return pending;
        };
    }





    function $c04f1666a6a5c366$export$2e2bcd8739ae039(modifiers) {
        var merged1 = modifiers.reduce(function(merged, current) {
            var existing = merged[current.name];
            merged[current.name] = existing ? Object.assign({
            }, existing, current, {
                options: Object.assign({
                }, existing.options, current.options),
                data: Object.assign({
                }, existing.data, current.data)
            }) : current;
            return merged;
        }, {
        }); // IE11 does not support Object.values
        return Object.keys(merged1).map(function(key) {
            return merged1[key];
        });
    }





    var $586933ad0e37e311$var$INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
    var $586933ad0e37e311$var$INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
    var $586933ad0e37e311$var$DEFAULT_OPTIONS = {
        placement: 'bottom',
        modifiers: [],
        strategy: 'absolute'
    };
    function $586933ad0e37e311$var$areValidElements() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return !args.some(function(element) {
            return !(element && typeof element.getBoundingClientRect === 'function');
        });
    }
    function $586933ad0e37e311$export$ed5e13716264f202(generatorOptions) {
        if (generatorOptions === void 0) generatorOptions = {
        };
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? $586933ad0e37e311$var$DEFAULT_OPTIONS : _generatorOptions$def2;
        return function $586933ad0e37e311$export$8f7491d57c8f97a9(reference1, popper1, options1) {
            var runModifierEffects = // update cycle runs. They will be executed in the same order as the update
                // cycle. This is useful when a modifier adds some persistent data that
                // other modifiers need to use, but the modifier is run after the dependent
                // one.
                function runModifierEffects() {
                    state1.orderedModifiers.forEach(function(_ref3) {
                        var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {
                        } : _ref3$options, effect = _ref3.effect;
                        if (typeof effect === 'function') {
                            var cleanupFn = effect({
                                state: state1,
                                name: name,
                                instance: instance,
                                options: options
                            });
                            var noopFn = function noopFn() {
                            };
                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    });
                };
            var cleanupModifierEffects = function cleanupModifierEffects() {
                effectCleanupFns.forEach(function(fn) {
                    return fn();
                });
                effectCleanupFns = [];
            };
            if (options1 === void 0) options1 = defaultOptions;
            var state1 = {
                placement: 'bottom',
                orderedModifiers: [],
                options: Object.assign({
                }, $586933ad0e37e311$var$DEFAULT_OPTIONS, defaultOptions),
                modifiersData: {
                },
                elements: {
                    reference: reference1,
                    popper: popper1
                },
                attributes: {
                },
                styles: {
                }
            };
            var effectCleanupFns = [];
            var isDestroyed = false;
            var instance = {
                state: state1,
                setOptions: function setOptions(setOptionsAction) {
                    var options = typeof setOptionsAction === 'function' ? setOptionsAction(state1.options) : setOptionsAction;
                    cleanupModifierEffects();
                    state1.options = Object.assign({
                    }, defaultOptions, state1.options, options);
                    state1.scrollParents = {
                        reference: $1b83999ad0d1027c$export$45a5e7f76e0caa8d(reference1) ? $b87dd92d6dc8eb04$export$2e2bcd8739ae039(reference1) : reference1.contextElement ? $b87dd92d6dc8eb04$export$2e2bcd8739ae039(reference1.contextElement) : [],
                        popper: $b87dd92d6dc8eb04$export$2e2bcd8739ae039(popper1)
                    }; // Orders the modifiers based on their dependencies and `phase`
                    // properties
                    var orderedModifiers = $2358023eb2a7669c$export$2e2bcd8739ae039($c04f1666a6a5c366$export$2e2bcd8739ae039([].concat(defaultModifiers, state1.options.modifiers))); // Strip out disabled modifiers
                    state1.orderedModifiers = orderedModifiers.filter(function(m) {
                        return m.enabled;
                    }); // Validate the provided modifiers so that the consumer will get warned
                    var modifiers, _ref, name, flipModifier, _ref2, name1, _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, margin;
                    runModifierEffects();
                    return instance.update();
                },
                // Sync update – it will always be executed, even if not necessary. This
                // is useful for low frequency updates where sync behavior simplifies the
                // logic.
                // For high frequency updates (e.g. `resize` and `scroll` events), always
                // prefer the async Popper#update method
                forceUpdate: function forceUpdate() {
                    if (isDestroyed) return;
                    var _state$elements = state1.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                    // anymore
                    if (!$586933ad0e37e311$var$areValidElements(reference, popper)) return;
                    // Store the reference and popper rects to be read by modifiers
                    state1.rects = {
                        reference: $ab993dc5adef754b$export$2e2bcd8739ae039(reference, $774b5c687ffd7d14$export$2e2bcd8739ae039(popper), state1.options.strategy === 'fixed'),
                        popper: $0df8c991b2a49c69$export$2e2bcd8739ae039(popper)
                    }; // Modifiers have the ability to reset the current update cycle. The
                    // most common use case for this is the `flip` modifier changing the
                    // placement, which then needs to re-run all the modifiers, because the
                    // logic was previously ran for the previous placement and is therefore
                    // stale/incorrect
                    state1.reset = false;
                    state1.placement = state1.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                    // is filled with the initial data specified by the modifier. This means
                    // it doesn't persist and is fresh on each update.
                    // To ensure persistent data, use `${name}#persistent`
                    state1.orderedModifiers.forEach(function(modifier) {
                        return state1.modifiersData[modifier.name] = Object.assign({
                        }, modifier.data);
                    });
                    var __debug_loops__ = 0;
                    for(var index = 0; index < state1.orderedModifiers.length; index++){
                        if (state1.reset === true) {
                            state1.reset = false;
                            index = -1;
                            continue;
                        }
                        var _state$orderedModifie = state1.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {
                        } : _state$orderedModifie2, name = _state$orderedModifie.name;
                        if (typeof fn === 'function') state1 = fn({
                            state: state1,
                            options: _options,
                            name: name,
                            instance: instance
                        }) || state1;
                    }
                },
                // Async and optimistically optimized update – it will not be executed if
                // not necessary (debounced to run at most once-per-tick)
                update: $ed27e1b5bc017872$export$2e2bcd8739ae039(function() {
                    return new Promise(function(resolve) {
                        instance.forceUpdate();
                        resolve(state1);
                    });
                }),
                destroy: function destroy() {
                    cleanupModifierEffects();
                    isDestroyed = true;
                }
            };
            if (!$586933ad0e37e311$var$areValidElements(reference1, popper1)) return instance;
            instance.setOptions(options1).then(function(state) {
                if (!isDestroyed && options1.onFirstUpdate) options1.onFirstUpdate(state);
            }); // Modifiers have the ability to execute arbitrary code before the first
            return instance;
        };
    }
    var $586933ad0e37e311$export$8f7491d57c8f97a9 = /*#__PURE__*/ $586933ad0e37e311$export$ed5e13716264f202(); // eslint-disable-next-line import/no-unused-modules














    var $db68ddeb41e504b7$export$d34966752335dd47 = [
        $fc95b761c471c0ed$export$2e2bcd8739ae039,
        $19da8b3efb31630f$export$2e2bcd8739ae039,
        $b352969f44dea693$export$2e2bcd8739ae039,
        $4e32f60d28c1a80f$export$2e2bcd8739ae039,
        $593639f08893501e$export$2e2bcd8739ae039,
        $0b9319f2df8d232f$export$2e2bcd8739ae039,
        $0140e936bb017a23$export$2e2bcd8739ae039,
        $979b39f17df02a5f$export$2e2bcd8739ae039,
        $f3127d7c2baa19ae$export$2e2bcd8739ae039
    ];
    var $db68ddeb41e504b7$export$8f7491d57c8f97a9 = /*#__PURE__*/ $586933ad0e37e311$export$ed5e13716264f202({
        defaultModifiers: $db68ddeb41e504b7$export$d34966752335dd47
    }); // eslint-disable-next-line import/no-unused-modules







    var $eb5d5ebf4de658ee$export$d34966752335dd47 = [
        $fc95b761c471c0ed$export$2e2bcd8739ae039,
        $19da8b3efb31630f$export$2e2bcd8739ae039,
        $b352969f44dea693$export$2e2bcd8739ae039,
        $4e32f60d28c1a80f$export$2e2bcd8739ae039
    ];
    var $eb5d5ebf4de658ee$export$8f7491d57c8f97a9 = /*#__PURE__*/ $586933ad0e37e311$export$ed5e13716264f202({
        defaultModifiers: $eb5d5ebf4de658ee$export$d34966752335dd47
    }); // eslint-disable-next-line import/no-unused-modules


    $parcel$exportWildcard($874b1e9ab930605c$exports, $cb619642add61ce7$exports);
    $parcel$exportWildcard($874b1e9ab930605c$exports, $45192bc6b8b18d08$exports);


    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/index.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$MAX_UID = 1000000;
    var $c6e33395c98f6914$var$MILLISECONDS_MULTIPLIER = 1000;
    var $c6e33395c98f6914$var$TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)
    var $c6e33395c98f6914$var$toType = function(obj) {
        if (obj === null || obj === undefined) return "".concat(obj);
        return ({
        }).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    };
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$getUID = function(prefix) {
        do prefix += Math.floor(Math.random() * $c6e33395c98f6914$var$MAX_UID);
        while (document.getElementById(prefix))
        return prefix;
    };
    var $c6e33395c98f6914$var$getSelector = function(element) {
        var selector = element.getAttribute('data-bs-target');
        if (!selector || selector === '#') {
            var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
            // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
            // `document.querySelector` will rightfully complain it is invalid.
            // See https://github.com/twbs/bootstrap/issues/32273
            if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) return null;
            // Just in case some CMS puts out a full URL with the anchor appended
            if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) hrefAttr = "#".concat(hrefAttr.split('#')[1]);
            selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
        }
        return selector;
    };
    var $c6e33395c98f6914$var$getSelectorFromElement = function(element) {
        var selector = $c6e33395c98f6914$var$getSelector(element);
        if (selector) return document.querySelector(selector) ? selector : null;
        return null;
    };
    var $c6e33395c98f6914$var$getElementFromSelector = function(element) {
        var selector = $c6e33395c98f6914$var$getSelector(element);
        return selector ? document.querySelector(selector) : null;
    };
    var $c6e33395c98f6914$var$getTransitionDurationFromElement = function(element) {
        if (!element) return 0;
        // Get transition-duration of the element
        var ref = window.getComputedStyle(element), transitionDuration = ref.transitionDuration, transitionDelay = ref.transitionDelay;
        var floatTransitionDuration = Number.parseFloat(transitionDuration);
        var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
        if (!floatTransitionDuration && !floatTransitionDelay) return 0;
        // If multiple durations are defined, take the first
        transitionDuration = transitionDuration.split(',')[0];
        transitionDelay = transitionDelay.split(',')[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * $c6e33395c98f6914$var$MILLISECONDS_MULTIPLIER;
    };
    var $c6e33395c98f6914$var$triggerTransitionEnd = function(element) {
        element.dispatchEvent(new Event($c6e33395c98f6914$var$TRANSITION_END));
    };
    var $c6e33395c98f6914$var$isElement = function(obj) {
        if (!obj || typeof obj !== 'object') return false;
        if (typeof obj.jquery !== 'undefined') obj = obj[0];
        return typeof obj.nodeType !== 'undefined';
    };
    var $c6e33395c98f6914$var$getElement = function(obj) {
        if ($c6e33395c98f6914$var$isElement(obj)) // it's a jQuery object or a node element
            return obj.jquery ? obj[0] : obj;
        if (typeof obj === 'string' && obj.length > 0) return document.querySelector(obj);
        return null;
    };
    var $c6e33395c98f6914$var$typeCheckConfig = function(componentName, config, configTypes) {
        Object.keys(configTypes).forEach(function(property) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && $c6e33395c98f6914$var$isElement(value) ? 'element' : $c6e33395c98f6914$var$toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError("".concat(componentName.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
        });
    };
    var $c6e33395c98f6914$var$isVisible = function(element) {
        if (!$c6e33395c98f6914$var$isElement(element) || element.getClientRects().length === 0) return false;
        return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    };
    var $c6e33395c98f6914$var$isDisabled = function(element) {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
        if (element.classList.contains('disabled')) return true;
        if (typeof element.disabled !== 'undefined') return element.disabled;
        return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
    };
    var $c6e33395c98f6914$var$findShadowRoot = function(element) {
        if (!document.documentElement.attachShadow) return null;
        // Can find the shadow root otherwise it'll return the document
        if (typeof element.getRootNode === 'function') {
            var root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) return element;
        // when we don't find a shadow root
        if (!element.parentNode) return null;
        return $c6e33395c98f6914$var$findShadowRoot(element.parentNode);
    };
    var $c6e33395c98f6914$var$noop = function() {
    };
    /**
     * Trick to restart an element's animation
     *
     * @param {HTMLElement} element
     * @return void
     *
     * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
     */ var $c6e33395c98f6914$var$reflow = function(element) {
        // eslint-disable-next-line no-unused-expressions
        element.offsetHeight;
    };
    var $c6e33395c98f6914$var$getjQuery = function() {
        var jQuery = window.jQuery;
        if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) return jQuery;
        return null;
    };
    var $c6e33395c98f6914$var$DOMContentLoadedCallbacks = [];
    var $c6e33395c98f6914$var$onDOMContentLoaded = function(callback1) {
        if (document.readyState === 'loading') {
            // add listener on the first call when the document is in loading state
            if (!$c6e33395c98f6914$var$DOMContentLoadedCallbacks.length) document.addEventListener('DOMContentLoaded', function() {
                $c6e33395c98f6914$var$DOMContentLoadedCallbacks.forEach(function(callback) {
                    return callback();
                });
            });
            $c6e33395c98f6914$var$DOMContentLoadedCallbacks.push(callback1);
        } else callback1();
    };
    var $c6e33395c98f6914$var$isRTL = function() {
        return document.documentElement.dir === 'rtl';
    };
    var $c6e33395c98f6914$var$defineJQueryPlugin = function(plugin) {
        $c6e33395c98f6914$var$onDOMContentLoaded(function() {
            var $ = $c6e33395c98f6914$var$getjQuery();
            /* istanbul ignore if */ if ($) {
                var name = plugin.NAME;
                var JQUERY_NO_CONFLICT = $.fn[name];
                $.fn[name] = plugin.jQueryInterface;
                $.fn[name].Constructor = plugin;
                $.fn[name].noConflict = function() {
                    $.fn[name] = JQUERY_NO_CONFLICT;
                    return plugin.jQueryInterface;
                };
            }
        });
    };
    var $c6e33395c98f6914$var$execute = function(callback) {
        if (typeof callback === 'function') callback();
    };
    var $c6e33395c98f6914$var$executeAfterTransition = function(callback, transitionElement) {
        var waitForTransition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        if (!waitForTransition) {
            $c6e33395c98f6914$var$execute(callback);
            return;
        }
        var durationPadding = 5;
        var emulatedDuration = $c6e33395c98f6914$var$getTransitionDurationFromElement(transitionElement) + durationPadding;
        var called = false;
        var handler = function(param) {
            var target = param.target;
            if (target !== transitionElement) return;
            called = true;
            transitionElement.removeEventListener($c6e33395c98f6914$var$TRANSITION_END, handler);
            $c6e33395c98f6914$var$execute(callback);
        };
        transitionElement.addEventListener($c6e33395c98f6914$var$TRANSITION_END, handler);
        setTimeout(function() {
            if (!called) $c6e33395c98f6914$var$triggerTransitionEnd(transitionElement);
        }, emulatedDuration);
    };
    /**
     * Return the previous/next element of a list.
     *
     * @param {array} list    The list of elements
     * @param activeElement   The active element
     * @param shouldGetNext   Choose to get next or previous element
     * @param isCycleAllowed
     * @return {Element|elem} The proper element
     */ var $c6e33395c98f6914$var$getNextActiveElement = function(list, activeElement, shouldGetNext, isCycleAllowed) {
        var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed
        if (index === -1) return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
        var listLength = list.length;
        index += shouldGetNext ? 1 : -1;
        if (isCycleAllowed) index = (index + listLength) % listLength;
        return list[Math.max(0, Math.min(index, listLength - 1))];
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): dom/event-handler.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$namespaceRegex = /[^.]*(?=\..*)\.|.*/;
    var $c6e33395c98f6914$var$stripNameRegex = /\..*/;
    var $c6e33395c98f6914$var$stripUidRegex = /::\d+$/;
    var $c6e33395c98f6914$var$eventRegistry = {
    }; // Events storage
    var $c6e33395c98f6914$var$uidEvent = 1;
    var $c6e33395c98f6914$var$customEvents = {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout'
    };
    var $c6e33395c98f6914$var$customEventsRegex = /^(mouseenter|mouseleave)/i;
    var $c6e33395c98f6914$var$nativeEvents = new Set([
        'click',
        'dblclick',
        'mouseup',
        'mousedown',
        'contextmenu',
        'mousewheel',
        'DOMMouseScroll',
        'mouseover',
        'mouseout',
        'mousemove',
        'selectstart',
        'selectend',
        'keydown',
        'keypress',
        'keyup',
        'orientationchange',
        'touchstart',
        'touchmove',
        'touchend',
        'touchcancel',
        'pointerdown',
        'pointermove',
        'pointerup',
        'pointerleave',
        'pointercancel',
        'gesturestart',
        'gesturechange',
        'gestureend',
        'focus',
        'blur',
        'change',
        'reset',
        'select',
        'submit',
        'focusin',
        'focusout',
        'load',
        'unload',
        'beforeunload',
        'resize',
        'move',
        'DOMContentLoaded',
        'readystatechange',
        'error',
        'abort',
        'scroll'
    ]);
    /**
     * ------------------------------------------------------------------------
     * Private methods
     * ------------------------------------------------------------------------
     */ function $c6e33395c98f6914$var$getUidEvent(element, uid) {
        return uid && "".concat(uid, "::").concat($c6e33395c98f6914$var$uidEvent++) || element.uidEvent || $c6e33395c98f6914$var$uidEvent++;
    }
    function $c6e33395c98f6914$var$getEvent(element) {
        var uid = $c6e33395c98f6914$var$getUidEvent(element);
        element.uidEvent = uid;
        $c6e33395c98f6914$var$eventRegistry[uid] = $c6e33395c98f6914$var$eventRegistry[uid] || {
        };
        return $c6e33395c98f6914$var$eventRegistry[uid];
    }
    function $c6e33395c98f6914$var$bootstrapHandler(element, fn) {
        return function handler(event) {
            event.delegateTarget = element;
            if (handler.oneOff) $c6e33395c98f6914$var$EventHandler.off(element, event.type, fn);
            return fn.apply(element, [
                event
            ]);
        };
    }
    function $c6e33395c98f6914$var$bootstrapDelegationHandler(element, selector, fn) {
        return function handler(event) {
            var domElements = element.querySelectorAll(selector);
            for(var target = event.target; target && target !== this; target = target.parentNode){
                for(var i = domElements.length; i--;)if (domElements[i] === target) {
                    event.delegateTarget = target;
                    if (handler.oneOff) $c6e33395c98f6914$var$EventHandler.off(element, event.type, selector, fn);
                    return fn.apply(target, [
                        event
                    ]);
                }
            } // To please ESLint
            return null;
        };
    }
    function $c6e33395c98f6914$var$findHandler(events, handler) {
        var delegationSelector = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        var uidEventList = Object.keys(events);
        for(var i = 0, len = uidEventList.length; i < len; i++){
            var event = events[uidEventList[i]];
            if (event.originalHandler === handler && event.delegationSelector === delegationSelector) return event;
        }
        return null;
    }
    function $c6e33395c98f6914$var$normalizeParams(originalTypeEvent, handler, delegationFn) {
        var delegation = typeof handler === 'string';
        var originalHandler = delegation ? delegationFn : handler;
        var typeEvent = $c6e33395c98f6914$var$getTypeEvent(originalTypeEvent);
        var isNative = $c6e33395c98f6914$var$nativeEvents.has(typeEvent);
        if (!isNative) typeEvent = originalTypeEvent;
        return [
            delegation,
            originalHandler,
            typeEvent
        ];
    }
    function $c6e33395c98f6914$var$addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
        if (typeof originalTypeEvent !== 'string' || !element) return;
        if (!handler) {
            handler = delegationFn;
            delegationFn = null;
        } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
        // this prevents the handler from being dispatched the same way as mouseover or mouseout does
        if ($c6e33395c98f6914$var$customEventsRegex.test(originalTypeEvent)) {
            var wrapFn = function(fn) {
                return function wrapFn(event) {
                    if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
                };
            };
            if (delegationFn) delegationFn = wrapFn(delegationFn);
            else handler = wrapFn(handler);
        }
        var ref = $63dda9574375e3f5$export$2e2bcd8739ae039($c6e33395c98f6914$var$normalizeParams(originalTypeEvent, handler, delegationFn), 3), delegation = ref[0], originalHandler = ref[1], typeEvent = ref[2];
        var events = $c6e33395c98f6914$var$getEvent(element);
        var handlers = events[typeEvent] || (events[typeEvent] = {
        });
        var previousFn = $c6e33395c98f6914$var$findHandler(handlers, originalHandler, delegation ? handler : null);
        if (previousFn) {
            previousFn.oneOff = previousFn.oneOff && oneOff;
            return;
        }
        var uid = $c6e33395c98f6914$var$getUidEvent(originalHandler, originalTypeEvent.replace($c6e33395c98f6914$var$namespaceRegex, ''));
        var fn1 = delegation ? $c6e33395c98f6914$var$bootstrapDelegationHandler(element, handler, delegationFn) : $c6e33395c98f6914$var$bootstrapHandler(element, handler);
        fn1.delegationSelector = delegation ? handler : null;
        fn1.originalHandler = originalHandler;
        fn1.oneOff = oneOff;
        fn1.uidEvent = uid;
        handlers[uid] = fn1;
        element.addEventListener(typeEvent, fn1, delegation);
    }
    function $c6e33395c98f6914$var$removeHandler(element, events, typeEvent, handler, delegationSelector) {
        var fn = $c6e33395c98f6914$var$findHandler(events[typeEvent], handler, delegationSelector);
        if (!fn) return;
        element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
        delete events[typeEvent][fn.uidEvent];
    }
    function $c6e33395c98f6914$var$removeNamespacedHandlers(element, events, typeEvent, namespace) {
        var storeElementEvent = events[typeEvent] || {
        };
        Object.keys(storeElementEvent).forEach(function(handlerKey) {
            if (handlerKey.includes(namespace)) {
                var event = storeElementEvent[handlerKey];
                $c6e33395c98f6914$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
        });
    }
    function $c6e33395c98f6914$var$getTypeEvent(event) {
        // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
        event = event.replace($c6e33395c98f6914$var$stripNameRegex, '');
        return $c6e33395c98f6914$var$customEvents[event] || event;
    }
    var $c6e33395c98f6914$var$EventHandler = {
        on: function(element, event, handler, delegationFn) {
            $c6e33395c98f6914$var$addHandler(element, event, handler, delegationFn, false);
        },
        one: function(element, event, handler, delegationFn) {
            $c6e33395c98f6914$var$addHandler(element, event, handler, delegationFn, true);
        },
        off: function(element, originalTypeEvent, handler, delegationFn) {
            if (typeof originalTypeEvent !== 'string' || !element) return;
            var ref = $63dda9574375e3f5$export$2e2bcd8739ae039($c6e33395c98f6914$var$normalizeParams(originalTypeEvent, handler, delegationFn), 3), delegation = ref[0], originalHandler = ref[1], typeEvent = ref[2];
            var inNamespace = typeEvent !== originalTypeEvent;
            var events = $c6e33395c98f6914$var$getEvent(element);
            var isNamespace = originalTypeEvent.startsWith('.');
            if (typeof originalHandler !== 'undefined') {
                // Simplest case: handler is passed, remove that listener ONLY.
                if (!events || !events[typeEvent]) return;
                $c6e33395c98f6914$var$removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
                return;
            }
            if (isNamespace) Object.keys(events).forEach(function(elementEvent) {
                $c6e33395c98f6914$var$removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            });
            var storeElementEvent = events[typeEvent] || {
            };
            Object.keys(storeElementEvent).forEach(function(keyHandlers) {
                var handlerKey = keyHandlers.replace($c6e33395c98f6914$var$stripUidRegex, '');
                if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                    var event = storeElementEvent[keyHandlers];
                    $c6e33395c98f6914$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
                }
            });
        },
        trigger: function(element, event, args) {
            if (typeof event !== 'string' || !element) return null;
            var $ = $c6e33395c98f6914$var$getjQuery();
            var typeEvent = $c6e33395c98f6914$var$getTypeEvent(event);
            var inNamespace = event !== typeEvent;
            var isNative = $c6e33395c98f6914$var$nativeEvents.has(typeEvent);
            var jQueryEvent;
            var bubbles = true;
            var nativeDispatch = true;
            var defaultPrevented = false;
            var evt = null;
            if (inNamespace && $) {
                jQueryEvent = $.Event(event, args);
                $(element).trigger(jQueryEvent);
                bubbles = !jQueryEvent.isPropagationStopped();
                nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
                defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            if (isNative) {
                evt = document.createEvent('HTMLEvents');
                evt.initEvent(typeEvent, bubbles, true);
            } else evt = new CustomEvent(event, {
                bubbles: bubbles,
                cancelable: true
            });
            // merge custom information in our event
            if (typeof args !== 'undefined') Object.keys(args).forEach(function(key) {
                Object.defineProperty(evt, key, {
                    get: function() {
                        return args[key];
                    }
                });
            });
            if (defaultPrevented) evt.preventDefault();
            if (nativeDispatch) element.dispatchEvent(evt);
            if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') jQueryEvent.preventDefault();
            return evt;
        }
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): dom/data.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$elementMap = new Map();
    var $c6e33395c98f6914$var$Data = {
        set: function(element, key, instance) {
            if (!$c6e33395c98f6914$var$elementMap.has(element)) $c6e33395c98f6914$var$elementMap.set(element, new Map());
            var instanceMap = $c6e33395c98f6914$var$elementMap.get(element); // make it clear we only want one instance per element
            // can be removed later when multiple key/instances are fine to be used
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
                // eslint-disable-next-line no-console
                console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
                return;
            }
            instanceMap.set(key, instance);
        },
        get: function(element, key) {
            if ($c6e33395c98f6914$var$elementMap.has(element)) return $c6e33395c98f6914$var$elementMap.get(element).get(key) || null;
            return null;
        },
        remove: function(element, key) {
            if (!$c6e33395c98f6914$var$elementMap.has(element)) return;
            var instanceMap = $c6e33395c98f6914$var$elementMap.get(element);
            instanceMap["delete"](key); // free up element references if there are no instances left for an element
            if (instanceMap.size === 0) $c6e33395c98f6914$var$elementMap["delete"](element);
        }
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): base-component.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$VERSION = '5.1.3';
    var $c6e33395c98f6914$var$BaseComponent = /*#__PURE__*/ function() {
        "use strict";
        function $c6e33395c98f6914$var$BaseComponent(element) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$var$BaseComponent);
            element = $c6e33395c98f6914$var$getElement(element);
            if (!element) return;
            this._element = element;
            $c6e33395c98f6914$var$Data.set(this._element, this.constructor.DATA_KEY, this);
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$var$BaseComponent, [
            {
                key: "dispose",
                value: function dispose() {
                    var _this = this;
                    $c6e33395c98f6914$var$Data.remove(this._element, this.constructor.DATA_KEY);
                    $c6e33395c98f6914$var$EventHandler.off(this._element, this.constructor.EVENT_KEY);
                    Object.getOwnPropertyNames(this).forEach(function(propertyName) {
                        _this[propertyName] = null;
                    });
                }
            },
            {
                key: "_queueCallback",
                value: function _queueCallback(callback, element) {
                    var isAnimated = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                    $c6e33395c98f6914$var$executeAfterTransition(callback, element, isAnimated);
                }
            }
        ], [
            {
                key: "getInstance",
                value: /** Static */ function getInstance(element) {
                    return $c6e33395c98f6914$var$Data.get($c6e33395c98f6914$var$getElement(element), this.DATA_KEY);
                }
            },
            {
                key: "getOrCreateInstance",
                value: function getOrCreateInstance(element) {
                    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    };
                    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
                }
            },
            {
                key: "VERSION",
                get: function get() {
                    return $c6e33395c98f6914$var$VERSION;
                }
            },
            {
                key: "NAME",
                get: function get() {
                    throw new Error('You have to implement the static method "NAME", for each component!');
                }
            },
            {
                key: "DATA_KEY",
                get: function get() {
                    return "bs.".concat(this.NAME);
                }
            },
            {
                key: "EVENT_KEY",
                get: function get() {
                    return ".".concat(this.DATA_KEY);
                }
            }
        ]);
        return $c6e33395c98f6914$var$BaseComponent;
    }();
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/component-functions.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$enableDismissTrigger = function(component) {
        var method = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'hide';
        var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
        var name = component.NAME;
        $c6e33395c98f6914$var$EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function(event) {
            if ([
                'A',
                'AREA'
            ].includes(this.tagName)) event.preventDefault();
            if ($c6e33395c98f6914$var$isDisabled(this)) return;
            var target = $c6e33395c98f6914$var$getElementFromSelector(this) || this.closest(".".concat(name));
            var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
            instance[method]();
        });
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): alert.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$d = 'alert';
    var $c6e33395c98f6914$var$DATA_KEY$c = 'bs.alert';
    var $c6e33395c98f6914$var$EVENT_KEY$c = ".".concat($c6e33395c98f6914$var$DATA_KEY$c);
    var $c6e33395c98f6914$var$EVENT_CLOSE = "close".concat($c6e33395c98f6914$var$EVENT_KEY$c);
    var $c6e33395c98f6914$var$EVENT_CLOSED = "closed".concat($c6e33395c98f6914$var$EVENT_KEY$c);
    var $c6e33395c98f6914$var$CLASS_NAME_FADE$5 = 'fade';
    var $c6e33395c98f6914$var$CLASS_NAME_SHOW$8 = 'show';
    var $c6e33395c98f6914$export$caec2af78bcc877f = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$caec2af78bcc877f, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$caec2af78bcc877f);
        function $c6e33395c98f6914$export$caec2af78bcc877f() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$caec2af78bcc877f);
            return _super.apply(this, arguments);
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$caec2af78bcc877f, [
            {
                key: "close",
                value: function close() {
                    var _this = this;
                    var closeEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_CLOSE);
                    if (closeEvent.defaultPrevented) return;
                    this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW$8);
                    var isAnimated = this._element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_FADE$5);
                    this._queueCallback(function() {
                        return _this._destroyElement();
                    }, this._element, isAnimated);
                } // Private
            },
            {
                key: "_destroyElement",
                value: function _destroyElement() {
                    this._element.remove();
                    $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_CLOSED);
                    this.dispose();
                } // Static
            }
        ], [
            {
                key: "NAME",
                get: // Getters
                    function get() {
                        return $c6e33395c98f6914$var$NAME$d;
                    } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$caec2af78bcc877f.getOrCreateInstance(this);
                        if (typeof config !== 'string') return;
                        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config](this);
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$caec2af78bcc877f;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$enableDismissTrigger($c6e33395c98f6914$export$caec2af78bcc877f, 'close');
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Alert to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$caec2af78bcc877f);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): button.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$c = 'button';
    var $c6e33395c98f6914$var$DATA_KEY$b = 'bs.button';
    var $c6e33395c98f6914$var$EVENT_KEY$b = ".".concat($c6e33395c98f6914$var$DATA_KEY$b);
    var $c6e33395c98f6914$var$DATA_API_KEY$7 = '.data-api';
    var $c6e33395c98f6914$var$CLASS_NAME_ACTIVE$3 = 'active';
    var $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
    var $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$6 = "click".concat($c6e33395c98f6914$var$EVENT_KEY$b).concat($c6e33395c98f6914$var$DATA_API_KEY$7);
    var $c6e33395c98f6914$export$353f5b6fc5456de1 = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$353f5b6fc5456de1, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$353f5b6fc5456de1);
        function $c6e33395c98f6914$export$353f5b6fc5456de1() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$353f5b6fc5456de1);
            return _super.apply(this, arguments);
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$353f5b6fc5456de1, [
            {
                key: "toggle",
                value: function toggle() {
                    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
                    this._element.setAttribute('aria-pressed', this._element.classList.toggle($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$3));
                } // Static
            }
        ], [
            {
                key: "NAME",
                get: // Getters
                    function get() {
                        return $c6e33395c98f6914$var$NAME$c;
                    } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$353f5b6fc5456de1.getOrCreateInstance(this);
                        if (config === 'toggle') data[config]();
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$353f5b6fc5456de1;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$6, $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$5, function(event) {
        event.preventDefault();
        var button = event.target.closest($c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$5);
        var data = $c6e33395c98f6914$export$353f5b6fc5456de1.getOrCreateInstance(button);
        data.toggle();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Button to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$353f5b6fc5456de1);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): dom/manipulator.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ function $c6e33395c98f6914$var$normalizeData(val) {
        if (val === 'true') return true;
        if (val === 'false') return false;
        if (val === Number(val).toString()) return Number(val);
        if (val === '' || val === 'null') return null;
        return val;
    }
    function $c6e33395c98f6914$var$normalizeDataKey(key) {
        return key.replace(/[A-Z]/g, function(chr) {
            return "-".concat(chr.toLowerCase());
        });
    }
    var $c6e33395c98f6914$var$Manipulator = {
        setDataAttribute: function(element, key, value) {
            element.setAttribute("data-bs-".concat($c6e33395c98f6914$var$normalizeDataKey(key)), value);
        },
        removeDataAttribute: function(element, key) {
            element.removeAttribute("data-bs-".concat($c6e33395c98f6914$var$normalizeDataKey(key)));
        },
        getDataAttributes: function(element) {
            if (!element) return {
            };
            var attributes = {
            };
            Object.keys(element.dataset).filter(function(key) {
                return key.startsWith('bs');
            }).forEach(function(key) {
                var pureKey = key.replace(/^bs/, '');
                pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
                attributes[pureKey] = $c6e33395c98f6914$var$normalizeData(element.dataset[key]);
            });
            return attributes;
        },
        getDataAttribute: function(element, key) {
            return $c6e33395c98f6914$var$normalizeData(element.getAttribute("data-bs-".concat($c6e33395c98f6914$var$normalizeDataKey(key))));
        },
        offset: function(element) {
            var rect = element.getBoundingClientRect();
            return {
                top: rect.top + window.pageYOffset,
                left: rect.left + window.pageXOffset
            };
        },
        position: function(element) {
            return {
                top: element.offsetTop,
                left: element.offsetLeft
            };
        }
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): dom/selector-engine.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NODE_TEXT = 3;
    var $c6e33395c98f6914$var$SelectorEngine = {
        find: function(selector) {
            var element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.documentElement;
            var _instance;
            return (_instance = []).concat.apply(_instance, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(Element.prototype.querySelectorAll.call(element, selector)));
        },
        findOne: function(selector) {
            var element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.documentElement;
            return Element.prototype.querySelector.call(element, selector);
        },
        children: function(element, selector) {
            var _instance;
            return (_instance = []).concat.apply(_instance, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(element.children)).filter(function(child) {
                return child.matches(selector);
            });
        },
        parents: function(element, selector) {
            var parents = [];
            var ancestor = element.parentNode;
            while(ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== $c6e33395c98f6914$var$NODE_TEXT){
                if (ancestor.matches(selector)) parents.push(ancestor);
                ancestor = ancestor.parentNode;
            }
            return parents;
        },
        prev: function(element, selector) {
            var previous = element.previousElementSibling;
            while(previous){
                if (previous.matches(selector)) return [
                    previous
                ];
                previous = previous.previousElementSibling;
            }
            return [];
        },
        next: function(element, selector) {
            var next = element.nextElementSibling;
            while(next){
                if (next.matches(selector)) return [
                    next
                ];
                next = next.nextElementSibling;
            }
            return [];
        },
        focusableChildren: function(element) {
            var focusables = [
                'a',
                'button',
                'input',
                'textarea',
                'select',
                'details',
                '[tabindex]',
                '[contenteditable="true"]'
            ].map(function(selector) {
                return "".concat(selector, ":not([tabindex^=\"-\"])");
            }).join(', ');
            return this.find(focusables, element).filter(function(el) {
                return !$c6e33395c98f6914$var$isDisabled(el) && $c6e33395c98f6914$var$isVisible(el);
            });
        }
    };
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): carousel.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$b = 'carousel';
    var $c6e33395c98f6914$var$DATA_KEY$a = 'bs.carousel';
    var $c6e33395c98f6914$var$EVENT_KEY$a = ".".concat($c6e33395c98f6914$var$DATA_KEY$a);
    var $c6e33395c98f6914$var$DATA_API_KEY$6 = '.data-api';
    var $c6e33395c98f6914$var$ARROW_LEFT_KEY = 'ArrowLeft';
    var $c6e33395c98f6914$var$ARROW_RIGHT_KEY = 'ArrowRight';
    var $c6e33395c98f6914$var$TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
    var $c6e33395c98f6914$var$SWIPE_THRESHOLD = 40;
    var $c6e33395c98f6914$var$Default$a = {
        interval: 5000,
        keyboard: true,
        slide: false,
        pause: 'hover',
        wrap: true,
        touch: true
    };
    var $c6e33395c98f6914$var$DefaultType$a = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
        touch: 'boolean'
    };
    var $c6e33395c98f6914$var$ORDER_NEXT = 'next';
    var $c6e33395c98f6914$var$ORDER_PREV = 'prev';
    var $c6e33395c98f6914$var$DIRECTION_LEFT = 'left';
    var $c6e33395c98f6914$var$DIRECTION_RIGHT = 'right';
    var _obj;
    var $c6e33395c98f6914$var$KEY_TO_DIRECTION = (_obj = {
    }, $167db31c658a8beb$export$2e2bcd8739ae039(_obj, $c6e33395c98f6914$var$ARROW_LEFT_KEY, $c6e33395c98f6914$var$DIRECTION_RIGHT), $167db31c658a8beb$export$2e2bcd8739ae039(_obj, $c6e33395c98f6914$var$ARROW_RIGHT_KEY, $c6e33395c98f6914$var$DIRECTION_LEFT), _obj);
    var $c6e33395c98f6914$var$EVENT_SLIDE = "slide".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_SLID = "slid".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_KEYDOWN = "keydown".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_MOUSEENTER = "mouseenter".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_MOUSELEAVE = "mouseleave".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_TOUCHSTART = "touchstart".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_TOUCHMOVE = "touchmove".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_TOUCHEND = "touchend".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_POINTERDOWN = "pointerdown".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_POINTERUP = "pointerup".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_DRAG_START = "dragstart".concat($c6e33395c98f6914$var$EVENT_KEY$a);
    var $c6e33395c98f6914$var$EVENT_LOAD_DATA_API$2 = "load".concat($c6e33395c98f6914$var$EVENT_KEY$a).concat($c6e33395c98f6914$var$DATA_API_KEY$6);
    var $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$5 = "click".concat($c6e33395c98f6914$var$EVENT_KEY$a).concat($c6e33395c98f6914$var$DATA_API_KEY$6);
    var $c6e33395c98f6914$var$CLASS_NAME_CAROUSEL = 'carousel';
    var $c6e33395c98f6914$var$CLASS_NAME_ACTIVE$2 = 'active';
    var $c6e33395c98f6914$var$CLASS_NAME_SLIDE = 'slide';
    var $c6e33395c98f6914$var$CLASS_NAME_END = 'carousel-item-end';
    var $c6e33395c98f6914$var$CLASS_NAME_START = 'carousel-item-start';
    var $c6e33395c98f6914$var$CLASS_NAME_NEXT = 'carousel-item-next';
    var $c6e33395c98f6914$var$CLASS_NAME_PREV = 'carousel-item-prev';
    var $c6e33395c98f6914$var$CLASS_NAME_POINTER_EVENT = 'pointer-event';
    var $c6e33395c98f6914$var$SELECTOR_ACTIVE$1 = '.active';
    var $c6e33395c98f6914$var$SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
    var $c6e33395c98f6914$var$SELECTOR_ITEM = '.carousel-item';
    var $c6e33395c98f6914$var$SELECTOR_ITEM_IMG = '.carousel-item img';
    var $c6e33395c98f6914$var$SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
    var $c6e33395c98f6914$var$SELECTOR_INDICATORS = '.carousel-indicators';
    var $c6e33395c98f6914$var$SELECTOR_INDICATOR = '[data-bs-target]';
    var $c6e33395c98f6914$var$SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
    var $c6e33395c98f6914$var$SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
    var $c6e33395c98f6914$var$POINTER_TYPE_TOUCH = 'touch';
    var $c6e33395c98f6914$var$POINTER_TYPE_PEN = 'pen';
    var $c6e33395c98f6914$export$144901db2ea8e967 = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$144901db2ea8e967, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$144901db2ea8e967);
        function $c6e33395c98f6914$export$144901db2ea8e967(element, config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$144901db2ea8e967);
            var _this;
            _this = _super.call(this, element);
            _this._items = null;
            _this._interval = null;
            _this._activeElement = null;
            _this._isPaused = false;
            _this._isSliding = false;
            _this.touchTimeout = null;
            _this.touchStartX = 0;
            _this.touchDeltaX = 0;
            _this._config = _this._getConfig(config);
            _this._indicatorsElement = $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_INDICATORS, _this._element);
            _this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
            _this._pointerEvent = Boolean(window.PointerEvent);
            _this._addEventListeners();
            return _this;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$144901db2ea8e967, [
            {
                key: "next",
                value: function next() {
                    this._slide($c6e33395c98f6914$var$ORDER_NEXT);
                }
            },
            {
                key: "nextWhenVisible",
                value: function nextWhenVisible() {
                    // Don't call next when the page isn't visible
                    // or the carousel or its parent isn't visible
                    if (!document.hidden && $c6e33395c98f6914$var$isVisible(this._element)) this.next();
                }
            },
            {
                key: "prev",
                value: function prev() {
                    this._slide($c6e33395c98f6914$var$ORDER_PREV);
                }
            },
            {
                key: "pause",
                value: function pause(event) {
                    if (!event) this._isPaused = true;
                    if ($c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_NEXT_PREV, this._element)) {
                        $c6e33395c98f6914$var$triggerTransitionEnd(this._element);
                        this.cycle(true);
                    }
                    clearInterval(this._interval);
                    this._interval = null;
                }
            },
            {
                key: "cycle",
                value: function cycle(event) {
                    if (!event) this._isPaused = false;
                    if (this._interval) {
                        clearInterval(this._interval);
                        this._interval = null;
                    }
                    if (this._config && this._config.interval && !this._isPaused) {
                        this._updateInterval();
                        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
                    }
                }
            },
            {
                key: "to",
                value: function to(index) {
                    this._activeElement = $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_ACTIVE_ITEM, this._element);
                    var activeIndex = this._getItemIndex(this._activeElement);
                    if (index > this._items.length - 1 || index < 0) return;
                    if (this._isSliding) {
                        var _this = this;
                        $c6e33395c98f6914$var$EventHandler.one(this._element, $c6e33395c98f6914$var$EVENT_SLID, function() {
                            return _this.to(index);
                        });
                        return;
                    }
                    if (activeIndex === index) {
                        this.pause();
                        this.cycle();
                        return;
                    }
                    var order = index > activeIndex ? $c6e33395c98f6914$var$ORDER_NEXT : $c6e33395c98f6914$var$ORDER_PREV;
                    this._slide(order, this._items[index]);
                } // Private
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, $c6e33395c98f6914$var$Default$a, $c6e33395c98f6914$var$Manipulator.getDataAttributes(this._element), typeof config === 'object' ? config : {
                    });
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME$b, config, $c6e33395c98f6914$var$DefaultType$a);
                    return config;
                }
            },
            {
                key: "_handleSwipe",
                value: function _handleSwipe() {
                    var absDeltax = Math.abs(this.touchDeltaX);
                    if (absDeltax <= $c6e33395c98f6914$var$SWIPE_THRESHOLD) return;
                    var direction = absDeltax / this.touchDeltaX;
                    this.touchDeltaX = 0;
                    if (!direction) return;
                    this._slide(direction > 0 ? $c6e33395c98f6914$var$DIRECTION_RIGHT : $c6e33395c98f6914$var$DIRECTION_LEFT);
                }
            },
            {
                key: "_addEventListeners",
                value: function _addEventListeners() {
                    var _this = this;
                    if (this._config.keyboard) $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_KEYDOWN, function(event) {
                        return _this._keydown(event);
                    });
                    if (this._config.pause === 'hover') {
                        var _this1 = this;
                        $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_MOUSEENTER, function(event) {
                            return _this1.pause(event);
                        });
                        $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_MOUSELEAVE, function(event) {
                            return _this1.cycle(event);
                        });
                    }
                    if (this._config.touch && this._touchSupported) this._addTouchEventListeners();
                }
            },
            {
                key: "_addTouchEventListeners",
                value: function _addTouchEventListeners() {
                    var _this = this;
                    var hasPointerPenTouch = function(event) {
                        return _this._pointerEvent && (event.pointerType === $c6e33395c98f6914$var$POINTER_TYPE_PEN || event.pointerType === $c6e33395c98f6914$var$POINTER_TYPE_TOUCH);
                    };
                    var start = function(event) {
                        if (hasPointerPenTouch(event)) _this.touchStartX = event.clientX;
                        else if (!_this._pointerEvent) _this.touchStartX = event.touches[0].clientX;
                    };
                    var move = function(event) {
                        // ensure swiping with one touch and not pinching
                        _this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this.touchStartX;
                    };
                    var end = function(event1) {
                        if (hasPointerPenTouch(event1)) _this.touchDeltaX = event1.clientX - _this.touchStartX;
                        _this._handleSwipe();
                        if (_this._config.pause === 'hover') {
                            var _this2 = _this;
                            // If it's a touch-enabled device, mouseenter/leave are fired as
                            // part of the mouse compatibility events on first tap - the carousel
                            // would stop cycling until user tapped out of it;
                            // here, we listen for touchend, explicitly pause the carousel
                            // (as if it's the second time we tap on it, mouseenter compat event
                            // is NOT fired) and after a timeout (to allow for mouse compatibility
                            // events to fire) we explicitly restart cycling
                            _this.pause();
                            if (_this.touchTimeout) clearTimeout(_this.touchTimeout);
                            _this.touchTimeout = setTimeout(function(event) {
                                return _this2.cycle(event);
                            }, $c6e33395c98f6914$var$TOUCHEVENT_COMPAT_WAIT + _this._config.interval);
                        }
                    };
                    $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_ITEM_IMG, this._element).forEach(function(itemImg) {
                        $c6e33395c98f6914$var$EventHandler.on(itemImg, $c6e33395c98f6914$var$EVENT_DRAG_START, function(event) {
                            return event.preventDefault();
                        });
                    });
                    if (this._pointerEvent) {
                        $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_POINTERDOWN, function(event) {
                            return start(event);
                        });
                        $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_POINTERUP, function(event) {
                            return end(event);
                        });
                        this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_POINTER_EVENT);
                    } else {
                        $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_TOUCHSTART, function(event) {
                            return start(event);
                        });
                        $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_TOUCHMOVE, function(event) {
                            return move(event);
                        });
                        $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_TOUCHEND, function(event) {
                            return end(event);
                        });
                    }
                }
            },
            {
                key: "_keydown",
                value: function _keydown(event) {
                    if (/input|textarea/i.test(event.target.tagName)) return;
                    var direction = $c6e33395c98f6914$var$KEY_TO_DIRECTION[event.key];
                    if (direction) {
                        event.preventDefault();
                        this._slide(direction);
                    }
                }
            },
            {
                key: "_getItemIndex",
                value: function _getItemIndex(element) {
                    this._items = element && element.parentNode ? $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_ITEM, element.parentNode) : [];
                    return this._items.indexOf(element);
                }
            },
            {
                key: "_getItemByOrder",
                value: function _getItemByOrder(order, activeElement) {
                    var isNext = order === $c6e33395c98f6914$var$ORDER_NEXT;
                    return $c6e33395c98f6914$var$getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
                }
            },
            {
                key: "_triggerSlideEvent",
                value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
                    var targetIndex = this._getItemIndex(relatedTarget);
                    var fromIndex = this._getItemIndex($c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_ACTIVE_ITEM, this._element));
                    return $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_SLIDE, {
                        relatedTarget: relatedTarget,
                        direction: eventDirectionName,
                        from: fromIndex,
                        to: targetIndex
                    });
                }
            },
            {
                key: "_setActiveIndicatorElement",
                value: function _setActiveIndicatorElement(element) {
                    if (this._indicatorsElement) {
                        var activeIndicator = $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_ACTIVE$1, this._indicatorsElement);
                        activeIndicator.classList.remove($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$2);
                        activeIndicator.removeAttribute('aria-current');
                        var indicators = $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_INDICATOR, this._indicatorsElement);
                        for(var i = 0; i < indicators.length; i++)if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
                            indicators[i].classList.add($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$2);
                            indicators[i].setAttribute('aria-current', 'true');
                            break;
                        }
                    }
                }
            },
            {
                key: "_updateInterval",
                value: function _updateInterval() {
                    var element = this._activeElement || $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_ACTIVE_ITEM, this._element);
                    if (!element) return;
                    var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
                    if (elementInterval) {
                        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                        this._config.interval = elementInterval;
                    } else this._config.interval = this._config.defaultInterval || this._config.interval;
                }
            },
            {
                key: "_slide",
                value: function _slide(directionOrOrder, element) {
                    var _this = this;
                    var order = this._directionToOrder(directionOrOrder);
                    var activeElement = $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_ACTIVE_ITEM, this._element);
                    var activeElementIndex = this._getItemIndex(activeElement);
                    var nextElement = element || this._getItemByOrder(order, activeElement);
                    var nextElementIndex = this._getItemIndex(nextElement);
                    var isCycling = Boolean(this._interval);
                    var isNext = order === $c6e33395c98f6914$var$ORDER_NEXT;
                    var directionalClassName = isNext ? $c6e33395c98f6914$var$CLASS_NAME_START : $c6e33395c98f6914$var$CLASS_NAME_END;
                    var orderClassName = isNext ? $c6e33395c98f6914$var$CLASS_NAME_NEXT : $c6e33395c98f6914$var$CLASS_NAME_PREV;
                    var eventDirectionName = this._orderToDirection(order);
                    if (nextElement && nextElement.classList.contains($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$2)) {
                        this._isSliding = false;
                        return;
                    }
                    if (this._isSliding) return;
                    var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
                    if (slideEvent.defaultPrevented) return;
                    if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
                        return;
                    this._isSliding = true;
                    if (isCycling) this.pause();
                    this._setActiveIndicatorElement(nextElement);
                    this._activeElement = nextElement;
                    var triggerSlidEvent = function() {
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_SLID, {
                            relatedTarget: nextElement,
                            direction: eventDirectionName,
                            from: activeElementIndex,
                            to: nextElementIndex
                        });
                    };
                    if (this._element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_SLIDE)) {
                        var _this3 = this;
                        nextElement.classList.add(orderClassName);
                        $c6e33395c98f6914$var$reflow(nextElement);
                        activeElement.classList.add(directionalClassName);
                        nextElement.classList.add(directionalClassName);
                        var completeCallBack = function() {
                            nextElement.classList.remove(directionalClassName, orderClassName);
                            nextElement.classList.add($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$2);
                            activeElement.classList.remove($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                            _this3._isSliding = false;
                            setTimeout(triggerSlidEvent, 0);
                        };
                        this._queueCallback(completeCallBack, activeElement, true);
                    } else {
                        activeElement.classList.remove($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$2);
                        nextElement.classList.add($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$2);
                        this._isSliding = false;
                        triggerSlidEvent();
                    }
                    if (isCycling) this.cycle();
                }
            },
            {
                key: "_directionToOrder",
                value: function _directionToOrder(direction) {
                    if (![
                        $c6e33395c98f6914$var$DIRECTION_RIGHT,
                        $c6e33395c98f6914$var$DIRECTION_LEFT
                    ].includes(direction)) return direction;
                    if ($c6e33395c98f6914$var$isRTL()) return direction === $c6e33395c98f6914$var$DIRECTION_LEFT ? $c6e33395c98f6914$var$ORDER_PREV : $c6e33395c98f6914$var$ORDER_NEXT;
                    return direction === $c6e33395c98f6914$var$DIRECTION_LEFT ? $c6e33395c98f6914$var$ORDER_NEXT : $c6e33395c98f6914$var$ORDER_PREV;
                }
            },
            {
                key: "_orderToDirection",
                value: function _orderToDirection(order) {
                    if (![
                        $c6e33395c98f6914$var$ORDER_NEXT,
                        $c6e33395c98f6914$var$ORDER_PREV
                    ].includes(order)) return order;
                    if ($c6e33395c98f6914$var$isRTL()) return order === $c6e33395c98f6914$var$ORDER_PREV ? $c6e33395c98f6914$var$DIRECTION_LEFT : $c6e33395c98f6914$var$DIRECTION_RIGHT;
                    return order === $c6e33395c98f6914$var$ORDER_PREV ? $c6e33395c98f6914$var$DIRECTION_RIGHT : $c6e33395c98f6914$var$DIRECTION_LEFT;
                } // Static
            }
        ], [
            {
                key: "Default",
                get: function get() {
                    return $c6e33395c98f6914$var$Default$a;
                }
            },
            {
                key: "NAME",
                get: function get() {
                    return $c6e33395c98f6914$var$NAME$b;
                } // Public
            },
            {
                key: "carouselInterface",
                value: function carouselInterface(element, config) {
                    var data = $c6e33395c98f6914$export$144901db2ea8e967.getOrCreateInstance(element, config);
                    var _config = data._config;
                    if (typeof config === 'object') _config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, _config, config);
                    var action = typeof config === 'string' ? config : _config.slide;
                    if (typeof config === 'number') data.to(config);
                    else if (typeof action === 'string') {
                        if (typeof data[action] === 'undefined') throw new TypeError("No method named \"".concat(action, "\""));
                        data[action]();
                    } else if (_config.interval && _config.ride) {
                        data.pause();
                        data.cycle();
                    }
                }
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        $c6e33395c98f6914$export$144901db2ea8e967.carouselInterface(this, config);
                    });
                }
            },
            {
                key: "dataApiClickHandler",
                value: function dataApiClickHandler(event) {
                    var target = $c6e33395c98f6914$var$getElementFromSelector(this);
                    if (!target || !target.classList.contains($c6e33395c98f6914$var$CLASS_NAME_CAROUSEL)) return;
                    var config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, $c6e33395c98f6914$var$Manipulator.getDataAttributes(target), $c6e33395c98f6914$var$Manipulator.getDataAttributes(this));
                    var slideIndex = this.getAttribute('data-bs-slide-to');
                    if (slideIndex) config.interval = false;
                    $c6e33395c98f6914$export$144901db2ea8e967.carouselInterface(target, config);
                    if (slideIndex) $c6e33395c98f6914$export$144901db2ea8e967.getInstance(target).to(slideIndex);
                    event.preventDefault();
                }
            }
        ]);
        return $c6e33395c98f6914$export$144901db2ea8e967;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$5, $c6e33395c98f6914$var$SELECTOR_DATA_SLIDE, $c6e33395c98f6914$export$144901db2ea8e967.dataApiClickHandler);
    $c6e33395c98f6914$var$EventHandler.on(window, $c6e33395c98f6914$var$EVENT_LOAD_DATA_API$2, function() {
        var carousels = $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_DATA_RIDE);
        for(var i = 0, len = carousels.length; i < len; i++)$c6e33395c98f6914$export$144901db2ea8e967.carouselInterface(carousels[i], $c6e33395c98f6914$export$144901db2ea8e967.getInstance(carousels[i]));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Carousel to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$144901db2ea8e967);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): collapse.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$a = 'collapse';
    var $c6e33395c98f6914$var$DATA_KEY$9 = 'bs.collapse';
    var $c6e33395c98f6914$var$EVENT_KEY$9 = ".".concat($c6e33395c98f6914$var$DATA_KEY$9);
    var $c6e33395c98f6914$var$DATA_API_KEY$5 = '.data-api';
    var $c6e33395c98f6914$var$Default$9 = {
        toggle: true,
        parent: null
    };
    var $c6e33395c98f6914$var$DefaultType$9 = {
        toggle: 'boolean',
        parent: '(null|element)'
    };
    var $c6e33395c98f6914$var$EVENT_SHOW$5 = "show".concat($c6e33395c98f6914$var$EVENT_KEY$9);
    var $c6e33395c98f6914$var$EVENT_SHOWN$5 = "shown".concat($c6e33395c98f6914$var$EVENT_KEY$9);
    var $c6e33395c98f6914$var$EVENT_HIDE$5 = "hide".concat($c6e33395c98f6914$var$EVENT_KEY$9);
    var $c6e33395c98f6914$var$EVENT_HIDDEN$5 = "hidden".concat($c6e33395c98f6914$var$EVENT_KEY$9);
    var $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$4 = "click".concat($c6e33395c98f6914$var$EVENT_KEY$9).concat($c6e33395c98f6914$var$DATA_API_KEY$5);
    var $c6e33395c98f6914$var$CLASS_NAME_SHOW$7 = 'show';
    var $c6e33395c98f6914$var$CLASS_NAME_COLLAPSE = 'collapse';
    var $c6e33395c98f6914$var$CLASS_NAME_COLLAPSING = 'collapsing';
    var $c6e33395c98f6914$var$CLASS_NAME_COLLAPSED = 'collapsed';
    var $c6e33395c98f6914$var$CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat($c6e33395c98f6914$var$CLASS_NAME_COLLAPSE, " .").concat($c6e33395c98f6914$var$CLASS_NAME_COLLAPSE);
    var $c6e33395c98f6914$var$CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
    var $c6e33395c98f6914$var$WIDTH = 'width';
    var $c6e33395c98f6914$var$HEIGHT = 'height';
    var $c6e33395c98f6914$var$SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
    var $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
    var $c6e33395c98f6914$export$78768a9af065a7b = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$78768a9af065a7b, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$78768a9af065a7b);
        function $c6e33395c98f6914$export$78768a9af065a7b(element, config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$78768a9af065a7b);
            var _this;
            _this = _super.call(this, element);
            _this._isTransitioning = false;
            _this._config = _this._getConfig(config);
            _this._triggerArray = [];
            var toggleList = $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$4);
            for(var i = 0, len = toggleList.length; i < len; i++){
                var elem = toggleList[i];
                var selector = $c6e33395c98f6914$var$getSelectorFromElement(elem);
                var filterElement = $c6e33395c98f6914$var$SelectorEngine.find(selector).filter(function(foundElem) {
                    return foundElem === _this._element;
                });
                if (selector !== null && filterElement.length) {
                    _this._selector = selector;
                    _this._triggerArray.push(elem);
                }
            }
            _this._initializeChildren();
            if (!_this._config.parent) _this._addAriaAndCollapsedClass(_this._triggerArray, _this._isShown());
            if (_this._config.toggle) _this.toggle();
            return _this;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$78768a9af065a7b, [
            {
                key: "toggle",
                value: function toggle() {
                    if (this._isShown()) this.hide();
                    else this.show();
                }
            },
            {
                key: "show",
                value: function show() {
                    var _this = this;
                    if (this._isTransitioning || this._isShown()) return;
                    var actives = [];
                    var activesData;
                    if (this._config.parent) {
                        var children = $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
                        actives = $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_ACTIVES, this._config.parent).filter(function(elem) {
                            return !children.includes(elem);
                        }); // remove children if greater depth
                    }
                    var container = $c6e33395c98f6914$var$SelectorEngine.findOne(this._selector);
                    if (actives.length) {
                        var tempActiveData = actives.find(function(elem) {
                            return container !== elem;
                        });
                        activesData = tempActiveData ? $c6e33395c98f6914$export$78768a9af065a7b.getInstance(tempActiveData) : null;
                        if (activesData && activesData._isTransitioning) return;
                    }
                    var startEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_SHOW$5);
                    if (startEvent.defaultPrevented) return;
                    actives.forEach(function(elemActive) {
                        if (container !== elemActive) $c6e33395c98f6914$export$78768a9af065a7b.getOrCreateInstance(elemActive, {
                            toggle: false
                        }).hide();
                        if (!activesData) $c6e33395c98f6914$var$Data.set(elemActive, $c6e33395c98f6914$var$DATA_KEY$9, null);
                    });
                    var dimension = this._getDimension();
                    this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_COLLAPSE);
                    this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_COLLAPSING);
                    this._element.style[dimension] = 0;
                    this._addAriaAndCollapsedClass(this._triggerArray, true);
                    this._isTransitioning = true;
                    var complete = function() {
                        _this._isTransitioning = false;
                        _this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_COLLAPSING);
                        _this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_COLLAPSE, $c6e33395c98f6914$var$CLASS_NAME_SHOW$7);
                        _this._element.style[dimension] = '';
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_SHOWN$5);
                    };
                    var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                    var scrollSize = "scroll".concat(capitalizedDimension);
                    this._queueCallback(complete, this._element, true);
                    this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
                }
            },
            {
                key: "hide",
                value: function hide() {
                    var _this = this;
                    if (this._isTransitioning || !this._isShown()) return;
                    var startEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_HIDE$5);
                    if (startEvent.defaultPrevented) return;
                    var dimension = this._getDimension();
                    this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
                    $c6e33395c98f6914$var$reflow(this._element);
                    this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_COLLAPSING);
                    this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_COLLAPSE, $c6e33395c98f6914$var$CLASS_NAME_SHOW$7);
                    var triggerArrayLength = this._triggerArray.length;
                    for(var i = 0; i < triggerArrayLength; i++){
                        var trigger = this._triggerArray[i];
                        var elem = $c6e33395c98f6914$var$getElementFromSelector(trigger);
                        if (elem && !this._isShown(elem)) this._addAriaAndCollapsedClass([
                            trigger
                        ], false);
                    }
                    this._isTransitioning = true;
                    var complete = function() {
                        _this._isTransitioning = false;
                        _this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_COLLAPSING);
                        _this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_COLLAPSE);
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_HIDDEN$5);
                    };
                    this._element.style[dimension] = '';
                    this._queueCallback(complete, this._element, true);
                }
            },
            {
                key: "_isShown",
                value: function _isShown() {
                    var element = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._element;
                    return element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_SHOW$7);
                } // Private
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, $c6e33395c98f6914$var$Default$9, $c6e33395c98f6914$var$Manipulator.getDataAttributes(this._element), config);
                    config.toggle = Boolean(config.toggle); // Coerce string values
                    config.parent = $c6e33395c98f6914$var$getElement(config.parent);
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME$a, config, $c6e33395c98f6914$var$DefaultType$9);
                    return config;
                }
            },
            {
                key: "_getDimension",
                value: function _getDimension() {
                    return this._element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_HORIZONTAL) ? $c6e33395c98f6914$var$WIDTH : $c6e33395c98f6914$var$HEIGHT;
                }
            },
            {
                key: "_initializeChildren",
                value: function _initializeChildren() {
                    var _this = this;
                    if (!this._config.parent) return;
                    var children = $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
                    $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function(elem) {
                        return !children.includes(elem);
                    }).forEach(function(element) {
                        var selected = $c6e33395c98f6914$var$getElementFromSelector(element);
                        if (selected) _this._addAriaAndCollapsedClass([
                            element
                        ], _this._isShown(selected));
                    });
                }
            },
            {
                key: "_addAriaAndCollapsedClass",
                value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
                    if (!triggerArray.length) return;
                    triggerArray.forEach(function(elem) {
                        if (isOpen) elem.classList.remove($c6e33395c98f6914$var$CLASS_NAME_COLLAPSED);
                        else elem.classList.add($c6e33395c98f6914$var$CLASS_NAME_COLLAPSED);
                        elem.setAttribute('aria-expanded', isOpen);
                    });
                } // Static
            }
        ], [
            {
                key: "Default",
                get: function get() {
                    return $c6e33395c98f6914$var$Default$9;
                }
            },
            {
                key: "NAME",
                get: function get() {
                    return $c6e33395c98f6914$var$NAME$a;
                } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var _config = {
                        };
                        if (typeof config === 'string' && /show|hide/.test(config)) _config.toggle = false;
                        var data = $c6e33395c98f6914$export$78768a9af065a7b.getOrCreateInstance(this, _config);
                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                            data[config]();
                        }
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$78768a9af065a7b;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$4, $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$4, function(event) {
        // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
        if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') event.preventDefault();
        var selector = $c6e33395c98f6914$var$getSelectorFromElement(this);
        var selectorElements = $c6e33395c98f6914$var$SelectorEngine.find(selector);
        selectorElements.forEach(function(element) {
            $c6e33395c98f6914$export$78768a9af065a7b.getOrCreateInstance(element, {
                toggle: false
            }).toggle();
        });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Collapse to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$78768a9af065a7b);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): dropdown.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$9 = 'dropdown';
    var $c6e33395c98f6914$var$DATA_KEY$8 = 'bs.dropdown';
    var $c6e33395c98f6914$var$EVENT_KEY$8 = ".".concat($c6e33395c98f6914$var$DATA_KEY$8);
    var $c6e33395c98f6914$var$DATA_API_KEY$4 = '.data-api';
    var $c6e33395c98f6914$var$ESCAPE_KEY$2 = 'Escape';
    var $c6e33395c98f6914$var$SPACE_KEY = 'Space';
    var $c6e33395c98f6914$var$TAB_KEY$1 = 'Tab';
    var $c6e33395c98f6914$var$ARROW_UP_KEY = 'ArrowUp';
    var $c6e33395c98f6914$var$ARROW_DOWN_KEY = 'ArrowDown';
    var $c6e33395c98f6914$var$RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
    var $c6e33395c98f6914$var$REGEXP_KEYDOWN = new RegExp("".concat($c6e33395c98f6914$var$ARROW_UP_KEY, "|").concat($c6e33395c98f6914$var$ARROW_DOWN_KEY, "|").concat($c6e33395c98f6914$var$ESCAPE_KEY$2));
    var $c6e33395c98f6914$var$EVENT_HIDE$4 = "hide".concat($c6e33395c98f6914$var$EVENT_KEY$8);
    var $c6e33395c98f6914$var$EVENT_HIDDEN$4 = "hidden".concat($c6e33395c98f6914$var$EVENT_KEY$8);
    var $c6e33395c98f6914$var$EVENT_SHOW$4 = "show".concat($c6e33395c98f6914$var$EVENT_KEY$8);
    var $c6e33395c98f6914$var$EVENT_SHOWN$4 = "shown".concat($c6e33395c98f6914$var$EVENT_KEY$8);
    var $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$3 = "click".concat($c6e33395c98f6914$var$EVENT_KEY$8).concat($c6e33395c98f6914$var$DATA_API_KEY$4);
    var $c6e33395c98f6914$var$EVENT_KEYDOWN_DATA_API = "keydown".concat($c6e33395c98f6914$var$EVENT_KEY$8).concat($c6e33395c98f6914$var$DATA_API_KEY$4);
    var $c6e33395c98f6914$var$EVENT_KEYUP_DATA_API = "keyup".concat($c6e33395c98f6914$var$EVENT_KEY$8).concat($c6e33395c98f6914$var$DATA_API_KEY$4);
    var $c6e33395c98f6914$var$CLASS_NAME_SHOW$6 = 'show';
    var $c6e33395c98f6914$var$CLASS_NAME_DROPUP = 'dropup';
    var $c6e33395c98f6914$var$CLASS_NAME_DROPEND = 'dropend';
    var $c6e33395c98f6914$var$CLASS_NAME_DROPSTART = 'dropstart';
    var $c6e33395c98f6914$var$CLASS_NAME_NAVBAR = 'navbar';
    var $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
    var $c6e33395c98f6914$var$SELECTOR_MENU = '.dropdown-menu';
    var $c6e33395c98f6914$var$SELECTOR_NAVBAR_NAV = '.navbar-nav';
    var $c6e33395c98f6914$var$SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
    var $c6e33395c98f6914$var$PLACEMENT_TOP = $c6e33395c98f6914$var$isRTL() ? 'top-end' : 'top-start';
    var $c6e33395c98f6914$var$PLACEMENT_TOPEND = $c6e33395c98f6914$var$isRTL() ? 'top-start' : 'top-end';
    var $c6e33395c98f6914$var$PLACEMENT_BOTTOM = $c6e33395c98f6914$var$isRTL() ? 'bottom-end' : 'bottom-start';
    var $c6e33395c98f6914$var$PLACEMENT_BOTTOMEND = $c6e33395c98f6914$var$isRTL() ? 'bottom-start' : 'bottom-end';
    var $c6e33395c98f6914$var$PLACEMENT_RIGHT = $c6e33395c98f6914$var$isRTL() ? 'left-start' : 'right-start';
    var $c6e33395c98f6914$var$PLACEMENT_LEFT = $c6e33395c98f6914$var$isRTL() ? 'right-start' : 'left-start';
    var $c6e33395c98f6914$var$Default$8 = {
        offset: [
            0,
            2
        ],
        boundary: 'clippingParents',
        reference: 'toggle',
        display: 'dynamic',
        popperConfig: null,
        autoClose: true
    };
    var $c6e33395c98f6914$var$DefaultType$8 = {
        offset: '(array|string|function)',
        boundary: '(string|element)',
        reference: '(string|element|object)',
        display: 'string',
        popperConfig: '(null|object|function)',
        autoClose: '(boolean|string)'
    };
    var $c6e33395c98f6914$export$931cbfb6bfb85fc = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$931cbfb6bfb85fc, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$931cbfb6bfb85fc);
        function $c6e33395c98f6914$export$931cbfb6bfb85fc(element, config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$931cbfb6bfb85fc);
            var _this;
            _this = _super.call(this, element);
            _this._popper = null;
            _this._config = _this._getConfig(config);
            _this._menu = _this._getMenuElement();
            _this._inNavbar = _this._detectNavbar();
            return _this;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$931cbfb6bfb85fc, [
            {
                key: "toggle",
                value: function toggle() {
                    return this._isShown() ? this.hide() : this.show();
                }
            },
            {
                key: "show",
                value: function show() {
                    var _instance;
                    if ($c6e33395c98f6914$var$isDisabled(this._element) || this._isShown(this._menu)) return;
                    var relatedTarget = {
                        relatedTarget: this._element
                    };
                    var showEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_SHOW$4, relatedTarget);
                    if (showEvent.defaultPrevented) return;
                    var parent = $c6e33395c98f6914$export$931cbfb6bfb85fc.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar
                    if (this._inNavbar) $c6e33395c98f6914$var$Manipulator.setDataAttribute(this._menu, 'popper', 'none');
                    else this._createPopper(parent);
                    // If this is a touch-enabled device we add extra
                    // empty mouseover listeners to the body's immediate children;
                    // only needed because of broken event delegation on iOS
                    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                    if ('ontouchstart' in document.documentElement && !parent.closest($c6e33395c98f6914$var$SELECTOR_NAVBAR_NAV)) (_instance = []).concat.apply(_instance, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(document.body.children)).forEach(function(elem) {
                        return $c6e33395c98f6914$var$EventHandler.on(elem, 'mouseover', $c6e33395c98f6914$var$noop);
                    });
                    this._element.focus();
                    this._element.setAttribute('aria-expanded', true);
                    this._menu.classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOW$6);
                    this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOW$6);
                    $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_SHOWN$4, relatedTarget);
                }
            },
            {
                key: "hide",
                value: function hide() {
                    if ($c6e33395c98f6914$var$isDisabled(this._element) || !this._isShown(this._menu)) return;
                    var relatedTarget = {
                        relatedTarget: this._element
                    };
                    this._completeHide(relatedTarget);
                }
            },
            {
                key: "dispose",
                value: function dispose() {
                    if (this._popper) this._popper.destroy();
                    $fdd7a9424d5738ca$export$2e2bcd8739ae039($35a07d0eea0623db$export$2e2bcd8739ae039($c6e33395c98f6914$export$931cbfb6bfb85fc.prototype), "dispose", this).call(this);
                }
            },
            {
                key: "update",
                value: function update() {
                    this._inNavbar = this._detectNavbar();
                    if (this._popper) this._popper.update();
                } // Private
            },
            {
                key: "_completeHide",
                value: function _completeHide(relatedTarget) {
                    var _instance;
                    var hideEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_HIDE$4, relatedTarget);
                    if (hideEvent.defaultPrevented) return;
                    // If this is a touch-enabled device we remove the extra
                    // empty mouseover listeners we added for iOS support
                    if ('ontouchstart' in document.documentElement) (_instance = []).concat.apply(_instance, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(document.body.children)).forEach(function(elem) {
                        return $c6e33395c98f6914$var$EventHandler.off(elem, 'mouseover', $c6e33395c98f6914$var$noop);
                    });
                    if (this._popper) this._popper.destroy();
                    this._menu.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW$6);
                    this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW$6);
                    this._element.setAttribute('aria-expanded', 'false');
                    $c6e33395c98f6914$var$Manipulator.removeDataAttribute(this._menu, 'popper');
                    $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_HIDDEN$4, relatedTarget);
                }
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, this.constructor.Default, $c6e33395c98f6914$var$Manipulator.getDataAttributes(this._element), config);
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME$9, config, this.constructor.DefaultType);
                    if (typeof config.reference === 'object' && !$c6e33395c98f6914$var$isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') // Popper virtual elements require a getBoundingClientRect method
                        throw new TypeError("".concat($c6e33395c98f6914$var$NAME$9.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
                    return config;
                }
            },
            {
                key: "_createPopper",
                value: function _createPopper(parent) {
                    if (typeof $874b1e9ab930605c$exports === 'undefined') throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
                    var referenceElement = this._element;
                    if (this._config.reference === 'parent') referenceElement = parent;
                    else if ($c6e33395c98f6914$var$isElement(this._config.reference)) referenceElement = $c6e33395c98f6914$var$getElement(this._config.reference);
                    else if (typeof this._config.reference === 'object') referenceElement = this._config.reference;
                    var popperConfig = this._getPopperConfig();
                    var isDisplayStatic = popperConfig.modifiers.find(function(modifier) {
                        return modifier.name === 'applyStyles' && modifier.enabled === false;
                    });
                    this._popper = $874b1e9ab930605c$exports.createPopper(referenceElement, this._menu, popperConfig);
                    if (isDisplayStatic) $c6e33395c98f6914$var$Manipulator.setDataAttribute(this._menu, 'popper', 'static');
                }
            },
            {
                key: "_isShown",
                value: function _isShown() {
                    var element = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._element;
                    return element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_SHOW$6);
                }
            },
            {
                key: "_getMenuElement",
                value: function _getMenuElement() {
                    return $c6e33395c98f6914$var$SelectorEngine.next(this._element, $c6e33395c98f6914$var$SELECTOR_MENU)[0];
                }
            },
            {
                key: "_getPlacement",
                value: function _getPlacement() {
                    var parentDropdown = this._element.parentNode;
                    if (parentDropdown.classList.contains($c6e33395c98f6914$var$CLASS_NAME_DROPEND)) return $c6e33395c98f6914$var$PLACEMENT_RIGHT;
                    if (parentDropdown.classList.contains($c6e33395c98f6914$var$CLASS_NAME_DROPSTART)) return $c6e33395c98f6914$var$PLACEMENT_LEFT;
                    // We need to trim the value because custom properties can also include spaces
                    var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
                    if (parentDropdown.classList.contains($c6e33395c98f6914$var$CLASS_NAME_DROPUP)) return isEnd ? $c6e33395c98f6914$var$PLACEMENT_TOPEND : $c6e33395c98f6914$var$PLACEMENT_TOP;
                    return isEnd ? $c6e33395c98f6914$var$PLACEMENT_BOTTOMEND : $c6e33395c98f6914$var$PLACEMENT_BOTTOM;
                }
            },
            {
                key: "_detectNavbar",
                value: function _detectNavbar() {
                    return this._element.closest(".".concat($c6e33395c98f6914$var$CLASS_NAME_NAVBAR)) !== null;
                }
            },
            {
                key: "_getOffset",
                value: function _getOffset() {
                    var _this = this;
                    var offset = this._config.offset;
                    if (typeof offset === 'string') return offset.split(',').map(function(val) {
                        return Number.parseInt(val, 10);
                    });
                    if (typeof offset === 'function') return function(popperData) {
                        return offset(popperData, _this._element);
                    };
                    return offset;
                }
            },
            {
                key: "_getPopperConfig",
                value: function _getPopperConfig() {
                    var defaultBsPopperConfig = {
                        placement: this._getPlacement(),
                        modifiers: [
                            {
                                name: 'preventOverflow',
                                options: {
                                    boundary: this._config.boundary
                                }
                            },
                            {
                                name: 'offset',
                                options: {
                                    offset: this._getOffset()
                                }
                            }
                        ]
                    }; // Disable Popper if we have a static display
                    if (this._config.display === 'static') defaultBsPopperConfig.modifiers = [
                        {
                            name: 'applyStyles',
                            enabled: false
                        }
                    ];
                    return $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, defaultBsPopperConfig, typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
                }
            },
            {
                key: "_selectMenuItem",
                value: function _selectMenuItem(param) {
                    var key = param.key, target = param.target;
                    var items = $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_VISIBLE_ITEMS, this._menu).filter($c6e33395c98f6914$var$isVisible);
                    if (!items.length) return;
                    // if target isn't included in items (e.g. when expanding the dropdown)
                    // allow cycling to get the last item in case key equals ARROW_UP_KEY
                    $c6e33395c98f6914$var$getNextActiveElement(items, target, key === $c6e33395c98f6914$var$ARROW_DOWN_KEY, !items.includes(target)).focus();
                } // Static
            }
        ], [
            {
                key: "Default",
                get: function get() {
                    return $c6e33395c98f6914$var$Default$8;
                }
            },
            {
                key: "DefaultType",
                get: function get() {
                    return $c6e33395c98f6914$var$DefaultType$8;
                }
            },
            {
                key: "NAME",
                get: function get() {
                    return $c6e33395c98f6914$var$NAME$9;
                } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$931cbfb6bfb85fc.getOrCreateInstance(this, config);
                        if (typeof config !== 'string') return;
                        if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config]();
                    });
                }
            },
            {
                key: "clearMenus",
                value: function clearMenus(event) {
                    if (event && (event.button === $c6e33395c98f6914$var$RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== $c6e33395c98f6914$var$TAB_KEY$1)) return;
                    var toggles = $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$3);
                    for(var i = 0, len = toggles.length; i < len; i++){
                        var context = $c6e33395c98f6914$export$931cbfb6bfb85fc.getInstance(toggles[i]);
                        if (!context || context._config.autoClose === false) continue;
                        if (!context._isShown()) continue;
                        var relatedTarget = {
                            relatedTarget: context._element
                        };
                        if (event) {
                            var composedPath = event.composedPath();
                            var isMenuTarget = composedPath.includes(context._menu);
                            if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) continue;
                            // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
                            if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === $c6e33395c98f6914$var$TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
                            if (event.type === 'click') relatedTarget.clickEvent = event;
                        }
                        context._completeHide(relatedTarget);
                    }
                }
            },
            {
                key: "getParentFromElement",
                value: function getParentFromElement(element) {
                    return $c6e33395c98f6914$var$getElementFromSelector(element) || element.parentNode;
                }
            },
            {
                key: "dataApiKeydownHandler",
                value: function dataApiKeydownHandler(event) {
                    // If not input/textarea:
                    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
                    // If input/textarea:
                    //  - If space key => not a dropdown command
                    //  - If key is other than escape
                    //    - If key is not up or down => not a dropdown command
                    //    - If trigger inside the menu => not a dropdown command
                    if (/input|textarea/i.test(event.target.tagName) ? event.key === $c6e33395c98f6914$var$SPACE_KEY || event.key !== $c6e33395c98f6914$var$ESCAPE_KEY$2 && (event.key !== $c6e33395c98f6914$var$ARROW_DOWN_KEY && event.key !== $c6e33395c98f6914$var$ARROW_UP_KEY || event.target.closest($c6e33395c98f6914$var$SELECTOR_MENU)) : !$c6e33395c98f6914$var$REGEXP_KEYDOWN.test(event.key)) return;
                    var isActive = this.classList.contains($c6e33395c98f6914$var$CLASS_NAME_SHOW$6);
                    if (!isActive && event.key === $c6e33395c98f6914$var$ESCAPE_KEY$2) return;
                    event.preventDefault();
                    event.stopPropagation();
                    if ($c6e33395c98f6914$var$isDisabled(this)) return;
                    var getToggleButton = this.matches($c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$3) ? this : $c6e33395c98f6914$var$SelectorEngine.prev(this, $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$3)[0];
                    var instance = $c6e33395c98f6914$export$931cbfb6bfb85fc.getOrCreateInstance(getToggleButton);
                    if (event.key === $c6e33395c98f6914$var$ESCAPE_KEY$2) {
                        instance.hide();
                        return;
                    }
                    if (event.key === $c6e33395c98f6914$var$ARROW_UP_KEY || event.key === $c6e33395c98f6914$var$ARROW_DOWN_KEY) {
                        if (!isActive) instance.show();
                        instance._selectMenuItem(event);
                        return;
                    }
                    if (!isActive || event.key === $c6e33395c98f6914$var$SPACE_KEY) $c6e33395c98f6914$export$931cbfb6bfb85fc.clearMenus();
                }
            }
        ]);
        return $c6e33395c98f6914$export$931cbfb6bfb85fc;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_KEYDOWN_DATA_API, $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$3, $c6e33395c98f6914$export$931cbfb6bfb85fc.dataApiKeydownHandler);
    $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_KEYDOWN_DATA_API, $c6e33395c98f6914$var$SELECTOR_MENU, $c6e33395c98f6914$export$931cbfb6bfb85fc.dataApiKeydownHandler);
    $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$3, $c6e33395c98f6914$export$931cbfb6bfb85fc.clearMenus);
    $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_KEYUP_DATA_API, $c6e33395c98f6914$export$931cbfb6bfb85fc.clearMenus);
    $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$3, $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$3, function(event) {
        event.preventDefault();
        $c6e33395c98f6914$export$931cbfb6bfb85fc.getOrCreateInstance(this).toggle();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Dropdown to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$931cbfb6bfb85fc);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/scrollBar.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
    var $c6e33395c98f6914$var$SELECTOR_STICKY_CONTENT = '.sticky-top';
    var $c6e33395c98f6914$var$ScrollBarHelper = /*#__PURE__*/ function() {
        "use strict";
        function $c6e33395c98f6914$var$ScrollBarHelper() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$var$ScrollBarHelper);
            this._element = document.body;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$var$ScrollBarHelper, [
            {
                key: "getWidth",
                value: function getWidth() {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
                    var documentWidth = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - documentWidth);
                }
            },
            {
                key: "hide",
                value: function hide() {
                    var width = this.getWidth();
                    this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width
                    this._setElementAttributes(this._element, 'paddingRight', function(calculatedValue) {
                        return calculatedValue + width;
                    }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
                    this._setElementAttributes($c6e33395c98f6914$var$SELECTOR_FIXED_CONTENT, 'paddingRight', function(calculatedValue) {
                        return calculatedValue + width;
                    });
                    this._setElementAttributes($c6e33395c98f6914$var$SELECTOR_STICKY_CONTENT, 'marginRight', function(calculatedValue) {
                        return calculatedValue - width;
                    });
                }
            },
            {
                key: "_disableOverFlow",
                value: function _disableOverFlow() {
                    this._saveInitialAttribute(this._element, 'overflow');
                    this._element.style.overflow = 'hidden';
                }
            },
            {
                key: "_setElementAttributes",
                value: function _setElementAttributes(selector, styleProp, callback) {
                    var _this = this;
                    var scrollbarWidth = this.getWidth();
                    var manipulationCallBack = function(element) {
                        if (element !== _this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
                        _this._saveInitialAttribute(element, styleProp);
                        var calculatedValue = window.getComputedStyle(element)[styleProp];
                        element.style[styleProp] = "".concat(callback(Number.parseFloat(calculatedValue)), "px");
                    };
                    this._applyManipulationCallback(selector, manipulationCallBack);
                }
            },
            {
                key: "reset",
                value: function reset() {
                    this._resetElementAttributes(this._element, 'overflow');
                    this._resetElementAttributes(this._element, 'paddingRight');
                    this._resetElementAttributes($c6e33395c98f6914$var$SELECTOR_FIXED_CONTENT, 'paddingRight');
                    this._resetElementAttributes($c6e33395c98f6914$var$SELECTOR_STICKY_CONTENT, 'marginRight');
                }
            },
            {
                key: "_saveInitialAttribute",
                value: function _saveInitialAttribute(element, styleProp) {
                    var actualValue = element.style[styleProp];
                    if (actualValue) $c6e33395c98f6914$var$Manipulator.setDataAttribute(element, styleProp, actualValue);
                }
            },
            {
                key: "_resetElementAttributes",
                value: function _resetElementAttributes(selector, styleProp) {
                    var manipulationCallBack = function(element) {
                        var value = $c6e33395c98f6914$var$Manipulator.getDataAttribute(element, styleProp);
                        if (typeof value === 'undefined') element.style.removeProperty(styleProp);
                        else {
                            $c6e33395c98f6914$var$Manipulator.removeDataAttribute(element, styleProp);
                            element.style[styleProp] = value;
                        }
                    };
                    this._applyManipulationCallback(selector, manipulationCallBack);
                }
            },
            {
                key: "_applyManipulationCallback",
                value: function _applyManipulationCallback(selector, callBack) {
                    if ($c6e33395c98f6914$var$isElement(selector)) callBack(selector);
                    else $c6e33395c98f6914$var$SelectorEngine.find(selector, this._element).forEach(callBack);
                }
            },
            {
                key: "isOverflowing",
                value: function isOverflowing() {
                    return this.getWidth() > 0;
                }
            }
        ]);
        return $c6e33395c98f6914$var$ScrollBarHelper;
    }();
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/backdrop.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$Default$7 = {
        className: 'modal-backdrop',
        isVisible: true,
        // if false, we use the backdrop helper without adding any element to the dom
        isAnimated: false,
        rootElement: 'body',
        // give the choice to place backdrop under different elements
        clickCallback: null
    };
    var $c6e33395c98f6914$var$DefaultType$7 = {
        className: 'string',
        isVisible: 'boolean',
        isAnimated: 'boolean',
        rootElement: '(element|string)',
        clickCallback: '(function|null)'
    };
    var $c6e33395c98f6914$var$NAME$8 = 'backdrop';
    var $c6e33395c98f6914$var$CLASS_NAME_FADE$4 = 'fade';
    var $c6e33395c98f6914$var$CLASS_NAME_SHOW$5 = 'show';
    var $c6e33395c98f6914$var$EVENT_MOUSEDOWN = "mousedown.bs.".concat($c6e33395c98f6914$var$NAME$8);
    var $c6e33395c98f6914$var$Backdrop = /*#__PURE__*/ function() {
        "use strict";
        function $c6e33395c98f6914$var$Backdrop(config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$var$Backdrop);
            this._config = this._getConfig(config);
            this._isAppended = false;
            this._element = null;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$var$Backdrop, [
            {
                key: "show",
                value: function show(callback) {
                    if (!this._config.isVisible) {
                        $c6e33395c98f6914$var$execute(callback);
                        return;
                    }
                    this._append();
                    if (this._config.isAnimated) $c6e33395c98f6914$var$reflow(this._getElement());
                    this._getElement().classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOW$5);
                    this._emulateAnimation(function() {
                        $c6e33395c98f6914$var$execute(callback);
                    });
                }
            },
            {
                key: "hide",
                value: function hide(callback) {
                    var _this = this;
                    if (!this._config.isVisible) {
                        $c6e33395c98f6914$var$execute(callback);
                        return;
                    }
                    this._getElement().classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW$5);
                    this._emulateAnimation(function() {
                        _this.dispose();
                        $c6e33395c98f6914$var$execute(callback);
                    });
                } // Private
            },
            {
                key: "_getElement",
                value: function _getElement() {
                    if (!this._element) {
                        var backdrop = document.createElement('div');
                        backdrop.className = this._config.className;
                        if (this._config.isAnimated) backdrop.classList.add($c6e33395c98f6914$var$CLASS_NAME_FADE$4);
                        this._element = backdrop;
                    }
                    return this._element;
                }
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, $c6e33395c98f6914$var$Default$7, typeof config === 'object' ? config : {
                    }); // use getElement() with the default "body" to get a fresh Element on each instantiation
                    config.rootElement = $c6e33395c98f6914$var$getElement(config.rootElement);
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME$8, config, $c6e33395c98f6914$var$DefaultType$7);
                    return config;
                }
            },
            {
                key: "_append",
                value: function _append() {
                    var _this = this;
                    if (this._isAppended) return;
                    this._config.rootElement.append(this._getElement());
                    $c6e33395c98f6914$var$EventHandler.on(this._getElement(), $c6e33395c98f6914$var$EVENT_MOUSEDOWN, function() {
                        $c6e33395c98f6914$var$execute(_this._config.clickCallback);
                    });
                    this._isAppended = true;
                }
            },
            {
                key: "dispose",
                value: function dispose() {
                    if (!this._isAppended) return;
                    $c6e33395c98f6914$var$EventHandler.off(this._element, $c6e33395c98f6914$var$EVENT_MOUSEDOWN);
                    this._element.remove();
                    this._isAppended = false;
                }
            },
            {
                key: "_emulateAnimation",
                value: function _emulateAnimation(callback) {
                    $c6e33395c98f6914$var$executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
                }
            }
        ]);
        return $c6e33395c98f6914$var$Backdrop;
    }();
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/focustrap.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$Default$6 = {
        trapElement: null,
        // The element to trap focus inside of
        autofocus: true
    };
    var $c6e33395c98f6914$var$DefaultType$6 = {
        trapElement: 'element',
        autofocus: 'boolean'
    };
    var $c6e33395c98f6914$var$NAME$7 = 'focustrap';
    var $c6e33395c98f6914$var$DATA_KEY$7 = 'bs.focustrap';
    var $c6e33395c98f6914$var$EVENT_KEY$7 = ".".concat($c6e33395c98f6914$var$DATA_KEY$7);
    var $c6e33395c98f6914$var$EVENT_FOCUSIN$1 = "focusin".concat($c6e33395c98f6914$var$EVENT_KEY$7);
    var $c6e33395c98f6914$var$EVENT_KEYDOWN_TAB = "keydown.tab".concat($c6e33395c98f6914$var$EVENT_KEY$7);
    var $c6e33395c98f6914$var$TAB_KEY = 'Tab';
    var $c6e33395c98f6914$var$TAB_NAV_FORWARD = 'forward';
    var $c6e33395c98f6914$var$TAB_NAV_BACKWARD = 'backward';
    var $c6e33395c98f6914$var$FocusTrap = /*#__PURE__*/ function() {
        "use strict";
        function $c6e33395c98f6914$var$FocusTrap(config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$var$FocusTrap);
            this._config = this._getConfig(config);
            this._isActive = false;
            this._lastTabNavDirection = null;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$var$FocusTrap, [
            {
                key: "activate",
                value: function activate() {
                    var _this = this;
                    var __config = this._config, trapElement = __config.trapElement, autofocus = __config.autofocus;
                    if (this._isActive) return;
                    if (autofocus) trapElement.focus();
                    $c6e33395c98f6914$var$EventHandler.off(document, $c6e33395c98f6914$var$EVENT_KEY$7); // guard against infinite focus loop
                    $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_FOCUSIN$1, function(event) {
                        return _this._handleFocusin(event);
                    });
                    $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_KEYDOWN_TAB, function(event) {
                        return _this._handleKeydown(event);
                    });
                    this._isActive = true;
                }
            },
            {
                key: "deactivate",
                value: function deactivate() {
                    if (!this._isActive) return;
                    this._isActive = false;
                    $c6e33395c98f6914$var$EventHandler.off(document, $c6e33395c98f6914$var$EVENT_KEY$7);
                } // Private
            },
            {
                key: "_handleFocusin",
                value: function _handleFocusin(event) {
                    var target = event.target;
                    var trapElement = this._config.trapElement;
                    if (target === document || target === trapElement || trapElement.contains(target)) return;
                    var elements = $c6e33395c98f6914$var$SelectorEngine.focusableChildren(trapElement);
                    if (elements.length === 0) trapElement.focus();
                    else if (this._lastTabNavDirection === $c6e33395c98f6914$var$TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
                    else elements[0].focus();
                }
            },
            {
                key: "_handleKeydown",
                value: function _handleKeydown(event) {
                    if (event.key !== $c6e33395c98f6914$var$TAB_KEY) return;
                    this._lastTabNavDirection = event.shiftKey ? $c6e33395c98f6914$var$TAB_NAV_BACKWARD : $c6e33395c98f6914$var$TAB_NAV_FORWARD;
                }
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, $c6e33395c98f6914$var$Default$6, typeof config === 'object' ? config : {
                    });
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME$7, config, $c6e33395c98f6914$var$DefaultType$6);
                    return config;
                }
            }
        ]);
        return $c6e33395c98f6914$var$FocusTrap;
    }();
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): modal.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$6 = 'modal';
    var $c6e33395c98f6914$var$DATA_KEY$6 = 'bs.modal';
    var $c6e33395c98f6914$var$EVENT_KEY$6 = ".".concat($c6e33395c98f6914$var$DATA_KEY$6);
    var $c6e33395c98f6914$var$DATA_API_KEY$3 = '.data-api';
    var $c6e33395c98f6914$var$ESCAPE_KEY$1 = 'Escape';
    var $c6e33395c98f6914$var$Default$5 = {
        backdrop: true,
        keyboard: true,
        focus: true
    };
    var $c6e33395c98f6914$var$DefaultType$5 = {
        backdrop: '(boolean|string)',
        keyboard: 'boolean',
        focus: 'boolean'
    };
    var $c6e33395c98f6914$var$EVENT_HIDE$3 = "hide".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_HIDE_PREVENTED = "hidePrevented".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_HIDDEN$3 = "hidden".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_SHOW$3 = "show".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_SHOWN$3 = "shown".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_RESIZE = "resize".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_CLICK_DISMISS = "click.dismiss".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat($c6e33395c98f6914$var$EVENT_KEY$6);
    var $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$2 = "click".concat($c6e33395c98f6914$var$EVENT_KEY$6).concat($c6e33395c98f6914$var$DATA_API_KEY$3);
    var $c6e33395c98f6914$var$CLASS_NAME_OPEN = 'modal-open';
    var $c6e33395c98f6914$var$CLASS_NAME_FADE$3 = 'fade';
    var $c6e33395c98f6914$var$CLASS_NAME_SHOW$4 = 'show';
    var $c6e33395c98f6914$var$CLASS_NAME_STATIC = 'modal-static';
    var $c6e33395c98f6914$var$OPEN_SELECTOR$1 = '.modal.show';
    var $c6e33395c98f6914$var$SELECTOR_DIALOG = '.modal-dialog';
    var $c6e33395c98f6914$var$SELECTOR_MODAL_BODY = '.modal-body';
    var $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
    var $c6e33395c98f6914$export$2b77a92f1a5ad772 = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$2b77a92f1a5ad772, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$2b77a92f1a5ad772);
        function $c6e33395c98f6914$export$2b77a92f1a5ad772(element, config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$2b77a92f1a5ad772);
            var _this;
            _this = _super.call(this, element);
            _this._config = _this._getConfig(config);
            _this._dialog = $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_DIALOG, _this._element);
            _this._backdrop = _this._initializeBackDrop();
            _this._focustrap = _this._initializeFocusTrap();
            _this._isShown = false;
            _this._ignoreBackdropClick = false;
            _this._isTransitioning = false;
            _this._scrollBar = new $c6e33395c98f6914$var$ScrollBarHelper();
            return _this;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$2b77a92f1a5ad772, [
            {
                key: "toggle",
                value: function toggle(relatedTarget) {
                    return this._isShown ? this.hide() : this.show(relatedTarget);
                }
            },
            {
                key: "show",
                value: function show(relatedTarget) {
                    var _this = this;
                    if (this._isShown || this._isTransitioning) return;
                    var showEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_SHOW$3, {
                        relatedTarget: relatedTarget
                    });
                    if (showEvent.defaultPrevented) return;
                    this._isShown = true;
                    if (this._isAnimated()) this._isTransitioning = true;
                    this._scrollBar.hide();
                    document.body.classList.add($c6e33395c98f6914$var$CLASS_NAME_OPEN);
                    this._adjustDialog();
                    this._setEscapeEvent();
                    this._setResizeEvent();
                    $c6e33395c98f6914$var$EventHandler.on(this._dialog, $c6e33395c98f6914$var$EVENT_MOUSEDOWN_DISMISS, function() {
                        var _this4 = _this;
                        $c6e33395c98f6914$var$EventHandler.one(_this._element, $c6e33395c98f6914$var$EVENT_MOUSEUP_DISMISS, function(event) {
                            if (event.target === _this4._element) _this4._ignoreBackdropClick = true;
                        });
                    });
                    this._showBackdrop(function() {
                        return _this._showElement(relatedTarget);
                    });
                }
            },
            {
                key: "hide",
                value: function hide() {
                    var _this = this;
                    if (!this._isShown || this._isTransitioning) return;
                    var hideEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_HIDE$3);
                    if (hideEvent.defaultPrevented) return;
                    this._isShown = false;
                    var isAnimated = this._isAnimated();
                    if (isAnimated) this._isTransitioning = true;
                    this._setEscapeEvent();
                    this._setResizeEvent();
                    this._focustrap.deactivate();
                    this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW$4);
                    $c6e33395c98f6914$var$EventHandler.off(this._element, $c6e33395c98f6914$var$EVENT_CLICK_DISMISS);
                    $c6e33395c98f6914$var$EventHandler.off(this._dialog, $c6e33395c98f6914$var$EVENT_MOUSEDOWN_DISMISS);
                    this._queueCallback(function() {
                        return _this._hideModal();
                    }, this._element, isAnimated);
                }
            },
            {
                key: "dispose",
                value: function dispose() {
                    [
                        window,
                        this._dialog
                    ].forEach(function(htmlElement) {
                        return $c6e33395c98f6914$var$EventHandler.off(htmlElement, $c6e33395c98f6914$var$EVENT_KEY$6);
                    });
                    this._backdrop.dispose();
                    this._focustrap.deactivate();
                    $fdd7a9424d5738ca$export$2e2bcd8739ae039($35a07d0eea0623db$export$2e2bcd8739ae039($c6e33395c98f6914$export$2b77a92f1a5ad772.prototype), "dispose", this).call(this);
                }
            },
            {
                key: "handleUpdate",
                value: function handleUpdate() {
                    this._adjustDialog();
                } // Private
            },
            {
                key: "_initializeBackDrop",
                value: function _initializeBackDrop() {
                    return new $c6e33395c98f6914$var$Backdrop({
                        isVisible: Boolean(this._config.backdrop),
                        // 'static' option will be translated to true, and booleans will keep their value
                        isAnimated: this._isAnimated()
                    });
                }
            },
            {
                key: "_initializeFocusTrap",
                value: function _initializeFocusTrap() {
                    return new $c6e33395c98f6914$var$FocusTrap({
                        trapElement: this._element
                    });
                }
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, $c6e33395c98f6914$var$Default$5, $c6e33395c98f6914$var$Manipulator.getDataAttributes(this._element), typeof config === 'object' ? config : {
                    });
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME$6, config, $c6e33395c98f6914$var$DefaultType$5);
                    return config;
                }
            },
            {
                key: "_showElement",
                value: function _showElement(relatedTarget) {
                    var _this = this;
                    var isAnimated = this._isAnimated();
                    var modalBody = $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_MODAL_BODY, this._dialog);
                    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) // Don't move modal's DOM position
                        document.body.append(this._element);
                    this._element.style.display = 'block';
                    this._element.removeAttribute('aria-hidden');
                    this._element.setAttribute('aria-modal', true);
                    this._element.setAttribute('role', 'dialog');
                    this._element.scrollTop = 0;
                    if (modalBody) modalBody.scrollTop = 0;
                    if (isAnimated) $c6e33395c98f6914$var$reflow(this._element);
                    this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOW$4);
                    var transitionComplete = function() {
                        if (_this._config.focus) _this._focustrap.activate();
                        _this._isTransitioning = false;
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_SHOWN$3, {
                            relatedTarget: relatedTarget
                        });
                    };
                    this._queueCallback(transitionComplete, this._dialog, isAnimated);
                }
            },
            {
                key: "_setEscapeEvent",
                value: function _setEscapeEvent() {
                    var _this = this;
                    if (this._isShown) $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_KEYDOWN_DISMISS$1, function(event) {
                        if (_this._config.keyboard && event.key === $c6e33395c98f6914$var$ESCAPE_KEY$1) {
                            event.preventDefault();
                            _this.hide();
                        } else if (!_this._config.keyboard && event.key === $c6e33395c98f6914$var$ESCAPE_KEY$1) _this._triggerBackdropTransition();
                    });
                    else $c6e33395c98f6914$var$EventHandler.off(this._element, $c6e33395c98f6914$var$EVENT_KEYDOWN_DISMISS$1);
                }
            },
            {
                key: "_setResizeEvent",
                value: function _setResizeEvent() {
                    var _this = this;
                    if (this._isShown) $c6e33395c98f6914$var$EventHandler.on(window, $c6e33395c98f6914$var$EVENT_RESIZE, function() {
                        return _this._adjustDialog();
                    });
                    else $c6e33395c98f6914$var$EventHandler.off(window, $c6e33395c98f6914$var$EVENT_RESIZE);
                }
            },
            {
                key: "_hideModal",
                value: function _hideModal() {
                    var _this = this;
                    this._element.style.display = 'none';
                    this._element.setAttribute('aria-hidden', true);
                    this._element.removeAttribute('aria-modal');
                    this._element.removeAttribute('role');
                    this._isTransitioning = false;
                    this._backdrop.hide(function() {
                        document.body.classList.remove($c6e33395c98f6914$var$CLASS_NAME_OPEN);
                        _this._resetAdjustments();
                        _this._scrollBar.reset();
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_HIDDEN$3);
                    });
                }
            },
            {
                key: "_showBackdrop",
                value: function _showBackdrop(callback) {
                    var _this = this;
                    $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_CLICK_DISMISS, function(event) {
                        if (_this._ignoreBackdropClick) {
                            _this._ignoreBackdropClick = false;
                            return;
                        }
                        if (event.target !== event.currentTarget) return;
                        if (_this._config.backdrop === true) _this.hide();
                        else if (_this._config.backdrop === 'static') _this._triggerBackdropTransition();
                    });
                    this._backdrop.show(callback);
                }
            },
            {
                key: "_isAnimated",
                value: function _isAnimated() {
                    return this._element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_FADE$3);
                }
            },
            {
                key: "_triggerBackdropTransition",
                value: function _triggerBackdropTransition() {
                    var _this = this;
                    var hideEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_HIDE_PREVENTED);
                    if (hideEvent.defaultPrevented) return;
                    var __element = this._element, classList = __element.classList, scrollHeight = __element.scrollHeight, style = __element.style;
                    var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed
                    if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains($c6e33395c98f6914$var$CLASS_NAME_STATIC)) return;
                    if (!isModalOverflowing) style.overflowY = 'hidden';
                    classList.add($c6e33395c98f6914$var$CLASS_NAME_STATIC);
                    this._queueCallback(function() {
                        classList.remove($c6e33395c98f6914$var$CLASS_NAME_STATIC);
                        if (!isModalOverflowing) _this._queueCallback(function() {
                            style.overflowY = '';
                        }, _this._dialog);
                    }, this._dialog);
                    this._element.focus();
                } // ----------------------------------------------------------------------
            },
            {
                // the following methods are used to handle overflowing modals
                // ----------------------------------------------------------------------
                key: "_adjustDialog",
                value: function _adjustDialog() {
                    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                    var scrollbarWidth = this._scrollBar.getWidth();
                    var isBodyOverflowing = scrollbarWidth > 0;
                    if (!isBodyOverflowing && isModalOverflowing && !$c6e33395c98f6914$var$isRTL() || isBodyOverflowing && !isModalOverflowing && $c6e33395c98f6914$var$isRTL()) this._element.style.paddingLeft = "".concat(scrollbarWidth, "px");
                    if (isBodyOverflowing && !isModalOverflowing && !$c6e33395c98f6914$var$isRTL() || !isBodyOverflowing && isModalOverflowing && $c6e33395c98f6914$var$isRTL()) this._element.style.paddingRight = "".concat(scrollbarWidth, "px");
                }
            },
            {
                key: "_resetAdjustments",
                value: function _resetAdjustments() {
                    this._element.style.paddingLeft = '';
                    this._element.style.paddingRight = '';
                } // Static
            }
        ], [
            {
                key: "Default",
                get: function get() {
                    return $c6e33395c98f6914$var$Default$5;
                }
            },
            {
                key: "NAME",
                get: function get() {
                    return $c6e33395c98f6914$var$NAME$6;
                } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config, relatedTarget) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$2b77a92f1a5ad772.getOrCreateInstance(this, config);
                        if (typeof config !== 'string') return;
                        if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config](relatedTarget);
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$2b77a92f1a5ad772;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$2, $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$2, function(event) {
        var _this = this;
        var target = $c6e33395c98f6914$var$getElementFromSelector(this);
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        $c6e33395c98f6914$var$EventHandler.one(target, $c6e33395c98f6914$var$EVENT_SHOW$3, function(showEvent) {
            var _this5 = _this;
            if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
                return;
            $c6e33395c98f6914$var$EventHandler.one(target, $c6e33395c98f6914$var$EVENT_HIDDEN$3, function() {
                if ($c6e33395c98f6914$var$isVisible(_this5)) _this5.focus();
            });
        }); // avoid conflict when clicking moddal toggler while another one is open
        var allReadyOpen = $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$OPEN_SELECTOR$1);
        if (allReadyOpen) $c6e33395c98f6914$export$2b77a92f1a5ad772.getInstance(allReadyOpen).hide();
        var data = $c6e33395c98f6914$export$2b77a92f1a5ad772.getOrCreateInstance(target);
        data.toggle(this);
    });
    $c6e33395c98f6914$var$enableDismissTrigger($c6e33395c98f6914$export$2b77a92f1a5ad772);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Modal to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$2b77a92f1a5ad772);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): offcanvas.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$5 = 'offcanvas';
    var $c6e33395c98f6914$var$DATA_KEY$5 = 'bs.offcanvas';
    var $c6e33395c98f6914$var$EVENT_KEY$5 = ".".concat($c6e33395c98f6914$var$DATA_KEY$5);
    var $c6e33395c98f6914$var$DATA_API_KEY$2 = '.data-api';
    var $c6e33395c98f6914$var$EVENT_LOAD_DATA_API$1 = "load".concat($c6e33395c98f6914$var$EVENT_KEY$5).concat($c6e33395c98f6914$var$DATA_API_KEY$2);
    var $c6e33395c98f6914$var$ESCAPE_KEY = 'Escape';
    var $c6e33395c98f6914$var$Default$4 = {
        backdrop: true,
        keyboard: true,
        scroll: false
    };
    var $c6e33395c98f6914$var$DefaultType$4 = {
        backdrop: 'boolean',
        keyboard: 'boolean',
        scroll: 'boolean'
    };
    var $c6e33395c98f6914$var$CLASS_NAME_SHOW$3 = 'show';
    var $c6e33395c98f6914$var$CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
    var $c6e33395c98f6914$var$OPEN_SELECTOR = '.offcanvas.show';
    var $c6e33395c98f6914$var$EVENT_SHOW$2 = "show".concat($c6e33395c98f6914$var$EVENT_KEY$5);
    var $c6e33395c98f6914$var$EVENT_SHOWN$2 = "shown".concat($c6e33395c98f6914$var$EVENT_KEY$5);
    var $c6e33395c98f6914$var$EVENT_HIDE$2 = "hide".concat($c6e33395c98f6914$var$EVENT_KEY$5);
    var $c6e33395c98f6914$var$EVENT_HIDDEN$2 = "hidden".concat($c6e33395c98f6914$var$EVENT_KEY$5);
    var $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$1 = "click".concat($c6e33395c98f6914$var$EVENT_KEY$5).concat($c6e33395c98f6914$var$DATA_API_KEY$2);
    var $c6e33395c98f6914$var$EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat($c6e33395c98f6914$var$EVENT_KEY$5);
    var $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
    var $c6e33395c98f6914$export$591ca0244c9dfcd4 = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$591ca0244c9dfcd4, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$591ca0244c9dfcd4);
        function $c6e33395c98f6914$export$591ca0244c9dfcd4(element, config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$591ca0244c9dfcd4);
            var _this;
            _this = _super.call(this, element);
            _this._config = _this._getConfig(config);
            _this._isShown = false;
            _this._backdrop = _this._initializeBackDrop();
            _this._focustrap = _this._initializeFocusTrap();
            _this._addEventListeners();
            return _this;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$591ca0244c9dfcd4, [
            {
                key: "toggle",
                value: function toggle(relatedTarget) {
                    return this._isShown ? this.hide() : this.show(relatedTarget);
                }
            },
            {
                key: "show",
                value: function show(relatedTarget) {
                    var _this = this;
                    if (this._isShown) return;
                    var showEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_SHOW$2, {
                        relatedTarget: relatedTarget
                    });
                    if (showEvent.defaultPrevented) return;
                    this._isShown = true;
                    this._element.style.visibility = 'visible';
                    this._backdrop.show();
                    if (!this._config.scroll) new $c6e33395c98f6914$var$ScrollBarHelper().hide();
                    this._element.removeAttribute('aria-hidden');
                    this._element.setAttribute('aria-modal', true);
                    this._element.setAttribute('role', 'dialog');
                    this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOW$3);
                    var completeCallBack = function() {
                        if (!_this._config.scroll) _this._focustrap.activate();
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_SHOWN$2, {
                            relatedTarget: relatedTarget
                        });
                    };
                    this._queueCallback(completeCallBack, this._element, true);
                }
            },
            {
                key: "hide",
                value: function hide() {
                    var _this = this;
                    if (!this._isShown) return;
                    var hideEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_HIDE$2);
                    if (hideEvent.defaultPrevented) return;
                    this._focustrap.deactivate();
                    this._element.blur();
                    this._isShown = false;
                    this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW$3);
                    this._backdrop.hide();
                    var completeCallback = function() {
                        _this._element.setAttribute('aria-hidden', true);
                        _this._element.removeAttribute('aria-modal');
                        _this._element.removeAttribute('role');
                        _this._element.style.visibility = 'hidden';
                        if (!_this._config.scroll) new $c6e33395c98f6914$var$ScrollBarHelper().reset();
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_HIDDEN$2);
                    };
                    this._queueCallback(completeCallback, this._element, true);
                }
            },
            {
                key: "dispose",
                value: function dispose() {
                    this._backdrop.dispose();
                    this._focustrap.deactivate();
                    $fdd7a9424d5738ca$export$2e2bcd8739ae039($35a07d0eea0623db$export$2e2bcd8739ae039($c6e33395c98f6914$export$591ca0244c9dfcd4.prototype), "dispose", this).call(this);
                } // Private
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, $c6e33395c98f6914$var$Default$4, $c6e33395c98f6914$var$Manipulator.getDataAttributes(this._element), typeof config === 'object' ? config : {
                    });
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME$5, config, $c6e33395c98f6914$var$DefaultType$4);
                    return config;
                }
            },
            {
                key: "_initializeBackDrop",
                value: function _initializeBackDrop() {
                    var _this = this;
                    return new $c6e33395c98f6914$var$Backdrop({
                        className: $c6e33395c98f6914$var$CLASS_NAME_BACKDROP,
                        isVisible: this._config.backdrop,
                        isAnimated: true,
                        rootElement: this._element.parentNode,
                        clickCallback: function() {
                            return _this.hide();
                        }
                    });
                }
            },
            {
                key: "_initializeFocusTrap",
                value: function _initializeFocusTrap() {
                    return new $c6e33395c98f6914$var$FocusTrap({
                        trapElement: this._element
                    });
                }
            },
            {
                key: "_addEventListeners",
                value: function _addEventListeners() {
                    var _this = this;
                    $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_KEYDOWN_DISMISS, function(event) {
                        if (_this._config.keyboard && event.key === $c6e33395c98f6914$var$ESCAPE_KEY) _this.hide();
                    });
                } // Static
            }
        ], [
            {
                key: "NAME",
                get: function get() {
                    return $c6e33395c98f6914$var$NAME$5;
                }
            },
            {
                key: "Default",
                get: function get() {
                    return $c6e33395c98f6914$var$Default$4;
                } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$591ca0244c9dfcd4.getOrCreateInstance(this, config);
                        if (typeof config !== 'string') return;
                        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config](this);
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$591ca0244c9dfcd4;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_CLICK_DATA_API$1, $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE$1, function(event) {
        var _this = this;
        var target = $c6e33395c98f6914$var$getElementFromSelector(this);
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        if ($c6e33395c98f6914$var$isDisabled(this)) return;
        $c6e33395c98f6914$var$EventHandler.one(target, $c6e33395c98f6914$var$EVENT_HIDDEN$2, function() {
            // focus on trigger when it is closed
            if ($c6e33395c98f6914$var$isVisible(_this)) _this.focus();
        }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
        var allReadyOpen = $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$OPEN_SELECTOR);
        if (allReadyOpen && allReadyOpen !== target) $c6e33395c98f6914$export$591ca0244c9dfcd4.getInstance(allReadyOpen).hide();
        var data = $c6e33395c98f6914$export$591ca0244c9dfcd4.getOrCreateInstance(target);
        data.toggle(this);
    });
    $c6e33395c98f6914$var$EventHandler.on(window, $c6e33395c98f6914$var$EVENT_LOAD_DATA_API$1, function() {
        return $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$OPEN_SELECTOR).forEach(function(el) {
            return $c6e33395c98f6914$export$591ca0244c9dfcd4.getOrCreateInstance(el).show();
        });
    });
    $c6e33395c98f6914$var$enableDismissTrigger($c6e33395c98f6914$export$591ca0244c9dfcd4);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$591ca0244c9dfcd4);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): util/sanitizer.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$uriAttributes = new Set([
        'background',
        'cite',
        'href',
        'itemtype',
        'longdesc',
        'poster',
        'src',
        'xlink:href'
    ]);
    var $c6e33395c98f6914$var$ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
     */ var $c6e33395c98f6914$var$SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
    /**
     * A pattern that matches safe data URLs. Only matches image, video and audio types.
     *
     * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
     */ var $c6e33395c98f6914$var$DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    var $c6e33395c98f6914$var$allowedAttribute = function(attribute, allowedAttributeList) {
        var attributeName = attribute.nodeName.toLowerCase();
        if (allowedAttributeList.includes(attributeName)) {
            if ($c6e33395c98f6914$var$uriAttributes.has(attributeName)) return Boolean($c6e33395c98f6914$var$SAFE_URL_PATTERN.test(attribute.nodeValue) || $c6e33395c98f6914$var$DATA_URL_PATTERN.test(attribute.nodeValue));
            return true;
        }
        var regExp = allowedAttributeList.filter(function(attributeRegex) {
            return attributeRegex instanceof RegExp;
        }); // Check if a regular expression validates the attribute.
        for(var i = 0, len = regExp.length; i < len; i++){
            if (regExp[i].test(attributeName)) return true;
        }
        return false;
    };
    var $c6e33395c98f6914$var$DefaultAllowlist = {
        // Global attributes allowed on any supplied element below.
        '*': [
            'class',
            'dir',
            'id',
            'lang',
            'role',
            $c6e33395c98f6914$var$ARIA_ATTRIBUTE_PATTERN
        ],
        a: [
            'target',
            'href',
            'title',
            'rel'
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            'src',
            'srcset',
            'alt',
            'title',
            'width',
            'height'
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function $c6e33395c98f6914$var$sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
        var _loop = function(i, len) {
            var _instance;
            var element = elements[i];
            var elementName = element.nodeName.toLowerCase();
            if (!Object.keys(allowList).includes(elementName)) {
                element.remove();
                return "continue";
            }
            var attributeList = (_instance = []).concat.apply(_instance, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(element.attributes));
            var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
            attributeList.forEach(function(attribute) {
                if (!$c6e33395c98f6914$var$allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
            });
        };
        var _instance1;
        if (!unsafeHtml.length) return unsafeHtml;
        if (sanitizeFn && typeof sanitizeFn === 'function') return sanitizeFn(unsafeHtml);
        var domParser = new window.DOMParser();
        var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
        var elements = (_instance1 = []).concat.apply(_instance1, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(createdDocument.body.querySelectorAll('*')));
        for(var i = 0, len = elements.length; i < len; i++){
            var _ret = _loop(i, len);
            if (_ret === "continue") continue;
        }
        return createdDocument.body.innerHTML;
    }
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): tooltip.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$4 = 'tooltip';
    var $c6e33395c98f6914$var$DATA_KEY$4 = 'bs.tooltip';
    var $c6e33395c98f6914$var$EVENT_KEY$4 = ".".concat($c6e33395c98f6914$var$DATA_KEY$4);
    var $c6e33395c98f6914$var$CLASS_PREFIX$1 = 'bs-tooltip';
    var $c6e33395c98f6914$var$DISALLOWED_ATTRIBUTES = new Set([
        'sanitize',
        'allowList',
        'sanitizeFn'
    ]);
    var $c6e33395c98f6914$var$DefaultType$3 = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(array|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacements: 'array',
        boundary: '(string|element)',
        customClass: '(string|function)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        allowList: 'object',
        popperConfig: '(null|object|function)'
    };
    var $c6e33395c98f6914$var$AttachmentMap = {
        AUTO: 'auto',
        TOP: 'top',
        RIGHT: $c6e33395c98f6914$var$isRTL() ? 'left' : 'right',
        BOTTOM: 'bottom',
        LEFT: $c6e33395c98f6914$var$isRTL() ? 'right' : 'left'
    };
    var $c6e33395c98f6914$var$Default$3 = {
        animation: true,
        template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        selector: false,
        placement: 'top',
        offset: [
            0,
            0
        ],
        container: false,
        fallbackPlacements: [
            'top',
            'right',
            'bottom',
            'left'
        ],
        boundary: 'clippingParents',
        customClass: '',
        sanitize: true,
        sanitizeFn: null,
        allowList: $c6e33395c98f6914$var$DefaultAllowlist,
        popperConfig: null
    };
    var $c6e33395c98f6914$var$Event$2 = {
        HIDE: "hide".concat($c6e33395c98f6914$var$EVENT_KEY$4),
        HIDDEN: "hidden".concat($c6e33395c98f6914$var$EVENT_KEY$4),
        SHOW: "show".concat($c6e33395c98f6914$var$EVENT_KEY$4),
        SHOWN: "shown".concat($c6e33395c98f6914$var$EVENT_KEY$4),
        INSERTED: "inserted".concat($c6e33395c98f6914$var$EVENT_KEY$4),
        CLICK: "click".concat($c6e33395c98f6914$var$EVENT_KEY$4),
        FOCUSIN: "focusin".concat($c6e33395c98f6914$var$EVENT_KEY$4),
        FOCUSOUT: "focusout".concat($c6e33395c98f6914$var$EVENT_KEY$4),
        MOUSEENTER: "mouseenter".concat($c6e33395c98f6914$var$EVENT_KEY$4),
        MOUSELEAVE: "mouseleave".concat($c6e33395c98f6914$var$EVENT_KEY$4)
    };
    var $c6e33395c98f6914$var$CLASS_NAME_FADE$2 = 'fade';
    var $c6e33395c98f6914$var$CLASS_NAME_MODAL = 'modal';
    var $c6e33395c98f6914$var$CLASS_NAME_SHOW$2 = 'show';
    var $c6e33395c98f6914$var$HOVER_STATE_SHOW = 'show';
    var $c6e33395c98f6914$var$HOVER_STATE_OUT = 'out';
    var $c6e33395c98f6914$var$SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
    var $c6e33395c98f6914$var$SELECTOR_MODAL = ".".concat($c6e33395c98f6914$var$CLASS_NAME_MODAL);
    var $c6e33395c98f6914$var$EVENT_MODAL_HIDE = 'hide.bs.modal';
    var $c6e33395c98f6914$var$TRIGGER_HOVER = 'hover';
    var $c6e33395c98f6914$var$TRIGGER_FOCUS = 'focus';
    var $c6e33395c98f6914$var$TRIGGER_CLICK = 'click';
    var $c6e33395c98f6914$var$TRIGGER_MANUAL = 'manual';
    var $c6e33395c98f6914$export$28c660c63b792dea = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$28c660c63b792dea, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$28c660c63b792dea);
        function $c6e33395c98f6914$export$28c660c63b792dea(element, config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$28c660c63b792dea);
            var _this;
            if (typeof $874b1e9ab930605c$exports === 'undefined') throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
            _this = _super.call(this, element); // private
            _this._isEnabled = true;
            _this._timeout = 0;
            _this._hoverState = '';
            _this._activeTrigger = {
            };
            _this._popper = null; // Protected
            _this._config = _this._getConfig(config);
            _this.tip = null;
            _this._setListeners();
            return _this;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$28c660c63b792dea, [
            {
                key: "enable",
                value: function enable() {
                    this._isEnabled = true;
                }
            },
            {
                key: "disable",
                value: function disable() {
                    this._isEnabled = false;
                }
            },
            {
                key: "toggleEnabled",
                value: function toggleEnabled() {
                    this._isEnabled = !this._isEnabled;
                }
            },
            {
                key: "toggle",
                value: function toggle(event) {
                    if (!this._isEnabled) return;
                    if (event) {
                        var context = this._initializeOnDelegatedTarget(event);
                        context._activeTrigger.click = !context._activeTrigger.click;
                        if (context._isWithActiveTrigger()) context._enter(null, context);
                        else context._leave(null, context);
                    } else {
                        if (this.getTipElement().classList.contains($c6e33395c98f6914$var$CLASS_NAME_SHOW$2)) {
                            this._leave(null, this);
                            return;
                        }
                        this._enter(null, this);
                    }
                }
            },
            {
                key: "dispose",
                value: function dispose() {
                    clearTimeout(this._timeout);
                    $c6e33395c98f6914$var$EventHandler.off(this._element.closest($c6e33395c98f6914$var$SELECTOR_MODAL), $c6e33395c98f6914$var$EVENT_MODAL_HIDE, this._hideModalHandler);
                    if (this.tip) this.tip.remove();
                    this._disposePopper();
                    $fdd7a9424d5738ca$export$2e2bcd8739ae039($35a07d0eea0623db$export$2e2bcd8739ae039($c6e33395c98f6914$export$28c660c63b792dea.prototype), "dispose", this).call(this);
                }
            },
            {
                key: "show",
                value: function show() {
                    var _this = this;
                    var _classList, _instance;
                    if (this._element.style.display === 'none') throw new Error('Please use show on visible elements');
                    if (!(this.isWithContent() && this._isEnabled)) return;
                    var showEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, this.constructor.Event.SHOW);
                    var shadowRoot = $c6e33395c98f6914$var$findShadowRoot(this._element);
                    var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);
                    if (showEvent.defaultPrevented || !isInTheDom) return;
                    // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
                    // This will be removed later in favor of a `setContent` method
                    if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector($c6e33395c98f6914$var$SELECTOR_TOOLTIP_INNER).innerHTML) {
                        this._disposePopper();
                        this.tip.remove();
                        this.tip = null;
                    }
                    var tip = this.getTipElement();
                    var tipId = $c6e33395c98f6914$var$getUID(this.constructor.NAME);
                    tip.setAttribute('id', tipId);
                    this._element.setAttribute('aria-describedby', tipId);
                    if (this._config.animation) tip.classList.add($c6e33395c98f6914$var$CLASS_NAME_FADE$2);
                    var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
                    var attachment = this._getAttachment(placement);
                    this._addAttachmentClass(attachment);
                    var container = this._config.container;
                    $c6e33395c98f6914$var$Data.set(tip, this.constructor.DATA_KEY, this);
                    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                        container.append(tip);
                        $c6e33395c98f6914$var$EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
                    }
                    if (this._popper) this._popper.update();
                    else this._popper = $874b1e9ab930605c$exports.createPopper(this._element, tip, this._getPopperConfig(attachment));
                    tip.classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOW$2);
                    var customClass = this._resolvePossibleFunction(this._config.customClass);
                    if (customClass) (_classList = tip.classList).add.apply(_classList, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(customClass.split(' ')));
                    // If this is a touch-enabled device we add extra
                    // empty mouseover listeners to the body's immediate children;
                    // only needed because of broken event delegation on iOS
                    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                    if ('ontouchstart' in document.documentElement) (_instance = []).concat.apply(_instance, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(document.body.children)).forEach(function(element) {
                        $c6e33395c98f6914$var$EventHandler.on(element, 'mouseover', $c6e33395c98f6914$var$noop);
                    });
                    var complete = function() {
                        var prevHoverState = _this._hoverState;
                        _this._hoverState = null;
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, _this.constructor.Event.SHOWN);
                        if (prevHoverState === $c6e33395c98f6914$var$HOVER_STATE_OUT) _this._leave(null, _this);
                    };
                    var isAnimated = this.tip.classList.contains($c6e33395c98f6914$var$CLASS_NAME_FADE$2);
                    this._queueCallback(complete, this.tip, isAnimated);
                }
            },
            {
                key: "hide",
                value: function hide() {
                    var _this = this;
                    var _instance;
                    if (!this._popper) return;
                    var tip = this.getTipElement();
                    var complete = function() {
                        if (_this._isWithActiveTrigger()) return;
                        if (_this._hoverState !== $c6e33395c98f6914$var$HOVER_STATE_SHOW) tip.remove();
                        _this._cleanTipClass();
                        _this._element.removeAttribute('aria-describedby');
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, _this.constructor.Event.HIDDEN);
                        _this._disposePopper();
                    };
                    var hideEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, this.constructor.Event.HIDE);
                    if (hideEvent.defaultPrevented) return;
                    tip.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
                    // empty mouseover listeners we added for iOS support
                    if ('ontouchstart' in document.documentElement) (_instance = []).concat.apply(_instance, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(document.body.children)).forEach(function(element) {
                        return $c6e33395c98f6914$var$EventHandler.off(element, 'mouseover', $c6e33395c98f6914$var$noop);
                    });
                    this._activeTrigger[$c6e33395c98f6914$var$TRIGGER_CLICK] = false;
                    this._activeTrigger[$c6e33395c98f6914$var$TRIGGER_FOCUS] = false;
                    this._activeTrigger[$c6e33395c98f6914$var$TRIGGER_HOVER] = false;
                    var isAnimated = this.tip.classList.contains($c6e33395c98f6914$var$CLASS_NAME_FADE$2);
                    this._queueCallback(complete, this.tip, isAnimated);
                    this._hoverState = '';
                }
            },
            {
                key: "update",
                value: function update() {
                    if (this._popper !== null) this._popper.update();
                } // Protected
            },
            {
                key: "isWithContent",
                value: function isWithContent() {
                    return Boolean(this.getTitle());
                }
            },
            {
                key: "getTipElement",
                value: function getTipElement() {
                    if (this.tip) return this.tip;
                    var element = document.createElement('div');
                    element.innerHTML = this._config.template;
                    var tip = element.children[0];
                    this.setContent(tip);
                    tip.classList.remove($c6e33395c98f6914$var$CLASS_NAME_FADE$2, $c6e33395c98f6914$var$CLASS_NAME_SHOW$2);
                    this.tip = tip;
                    return this.tip;
                }
            },
            {
                key: "setContent",
                value: function setContent(tip) {
                    this._sanitizeAndSetContent(tip, this.getTitle(), $c6e33395c98f6914$var$SELECTOR_TOOLTIP_INNER);
                }
            },
            {
                key: "_sanitizeAndSetContent",
                value: function _sanitizeAndSetContent(template, content, selector) {
                    var templateElement = $c6e33395c98f6914$var$SelectorEngine.findOne(selector, template);
                    if (!content && templateElement) {
                        templateElement.remove();
                        return;
                    } // we use append for html objects to maintain js events
                    this.setElementContent(templateElement, content);
                }
            },
            {
                key: "setElementContent",
                value: function setElementContent(element, content) {
                    if (element === null) return;
                    if ($c6e33395c98f6914$var$isElement(content)) {
                        content = $c6e33395c98f6914$var$getElement(content); // content is a DOM node or a jQuery
                        if (this._config.html) {
                            if (content.parentNode !== element) {
                                element.innerHTML = '';
                                element.append(content);
                            }
                        } else element.textContent = content.textContent;
                        return;
                    }
                    if (this._config.html) {
                        if (this._config.sanitize) content = $c6e33395c98f6914$var$sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
                        element.innerHTML = content;
                    } else element.textContent = content;
                }
            },
            {
                key: "getTitle",
                value: function getTitle() {
                    var title = this._element.getAttribute('data-bs-original-title') || this._config.title;
                    return this._resolvePossibleFunction(title);
                }
            },
            {
                key: "updateAttachment",
                value: function updateAttachment(attachment) {
                    if (attachment === 'right') return 'end';
                    if (attachment === 'left') return 'start';
                    return attachment;
                } // Private
            },
            {
                key: "_initializeOnDelegatedTarget",
                value: function _initializeOnDelegatedTarget(event, context) {
                    return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
                }
            },
            {
                key: "_getOffset",
                value: function _getOffset() {
                    var _this = this;
                    var offset = this._config.offset;
                    if (typeof offset === 'string') return offset.split(',').map(function(val) {
                        return Number.parseInt(val, 10);
                    });
                    if (typeof offset === 'function') return function(popperData) {
                        return offset(popperData, _this._element);
                    };
                    return offset;
                }
            },
            {
                key: "_resolvePossibleFunction",
                value: function _resolvePossibleFunction(content) {
                    return typeof content === 'function' ? content.call(this._element) : content;
                }
            },
            {
                key: "_getPopperConfig",
                value: function _getPopperConfig(attachment) {
                    var _this = this;
                    var defaultBsPopperConfig = {
                        placement: attachment,
                        modifiers: [
                            {
                                name: 'flip',
                                options: {
                                    fallbackPlacements: this._config.fallbackPlacements
                                }
                            },
                            {
                                name: 'offset',
                                options: {
                                    offset: this._getOffset()
                                }
                            },
                            {
                                name: 'preventOverflow',
                                options: {
                                    boundary: this._config.boundary
                                }
                            },
                            {
                                name: 'arrow',
                                options: {
                                    element: ".".concat(this.constructor.NAME, "-arrow")
                                }
                            },
                            {
                                name: 'onChange',
                                enabled: true,
                                phase: 'afterWrite',
                                fn: function(data) {
                                    return _this._handlePopperPlacementChange(data);
                                }
                            }
                        ],
                        onFirstUpdate: function(data) {
                            if (data.options.placement !== data.placement) _this._handlePopperPlacementChange(data);
                        }
                    };
                    return $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, defaultBsPopperConfig, typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
                }
            },
            {
                key: "_addAttachmentClass",
                value: function _addAttachmentClass(attachment) {
                    this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(attachment)));
                }
            },
            {
                key: "_getAttachment",
                value: function _getAttachment(placement) {
                    return $c6e33395c98f6914$var$AttachmentMap[placement.toUpperCase()];
                }
            },
            {
                key: "_setListeners",
                value: function _setListeners() {
                    var _this = this;
                    var triggers = this._config.trigger.split(' ');
                    triggers.forEach(function(trigger) {
                        var _this7 = _this;
                        if (trigger === 'click') $c6e33395c98f6914$var$EventHandler.on(_this._element, _this.constructor.Event.CLICK, _this._config.selector, function(event) {
                            return _this7.toggle(event);
                        });
                        else if (trigger !== $c6e33395c98f6914$var$TRIGGER_MANUAL) {
                            var _this6 = _this;
                            var eventIn = trigger === $c6e33395c98f6914$var$TRIGGER_HOVER ? _this.constructor.Event.MOUSEENTER : _this.constructor.Event.FOCUSIN;
                            var eventOut = trigger === $c6e33395c98f6914$var$TRIGGER_HOVER ? _this.constructor.Event.MOUSELEAVE : _this.constructor.Event.FOCUSOUT;
                            $c6e33395c98f6914$var$EventHandler.on(_this._element, eventIn, _this._config.selector, function(event) {
                                return _this6._enter(event);
                            });
                            $c6e33395c98f6914$var$EventHandler.on(_this._element, eventOut, _this._config.selector, function(event) {
                                return _this6._leave(event);
                            });
                        }
                    });
                    this._hideModalHandler = function() {
                        if (_this._element) _this.hide();
                    };
                    $c6e33395c98f6914$var$EventHandler.on(this._element.closest($c6e33395c98f6914$var$SELECTOR_MODAL), $c6e33395c98f6914$var$EVENT_MODAL_HIDE, this._hideModalHandler);
                    if (this._config.selector) this._config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, this._config, {
                        trigger: 'manual',
                        selector: ''
                    });
                    else this._fixTitle();
                }
            },
            {
                key: "_fixTitle",
                value: function _fixTitle() {
                    var title = this._element.getAttribute('title');
                    var originalTitleType = $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(this._element.getAttribute('data-bs-original-title'));
                    if (title || originalTitleType !== 'string') {
                        this._element.setAttribute('data-bs-original-title', title || '');
                        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) this._element.setAttribute('aria-label', title);
                        this._element.setAttribute('title', '');
                    }
                }
            },
            {
                key: "_enter",
                value: function _enter(event, context) {
                    context = this._initializeOnDelegatedTarget(event, context);
                    if (event) context._activeTrigger[event.type === 'focusin' ? $c6e33395c98f6914$var$TRIGGER_FOCUS : $c6e33395c98f6914$var$TRIGGER_HOVER] = true;
                    if (context.getTipElement().classList.contains($c6e33395c98f6914$var$CLASS_NAME_SHOW$2) || context._hoverState === $c6e33395c98f6914$var$HOVER_STATE_SHOW) {
                        context._hoverState = $c6e33395c98f6914$var$HOVER_STATE_SHOW;
                        return;
                    }
                    clearTimeout(context._timeout);
                    context._hoverState = $c6e33395c98f6914$var$HOVER_STATE_SHOW;
                    if (!context._config.delay || !context._config.delay.show) {
                        context.show();
                        return;
                    }
                    context._timeout = setTimeout(function() {
                        if (context._hoverState === $c6e33395c98f6914$var$HOVER_STATE_SHOW) context.show();
                    }, context._config.delay.show);
                }
            },
            {
                key: "_leave",
                value: function _leave(event, context) {
                    context = this._initializeOnDelegatedTarget(event, context);
                    if (event) context._activeTrigger[event.type === 'focusout' ? $c6e33395c98f6914$var$TRIGGER_FOCUS : $c6e33395c98f6914$var$TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                    if (context._isWithActiveTrigger()) return;
                    clearTimeout(context._timeout);
                    context._hoverState = $c6e33395c98f6914$var$HOVER_STATE_OUT;
                    if (!context._config.delay || !context._config.delay.hide) {
                        context.hide();
                        return;
                    }
                    context._timeout = setTimeout(function() {
                        if (context._hoverState === $c6e33395c98f6914$var$HOVER_STATE_OUT) context.hide();
                    }, context._config.delay.hide);
                }
            },
            {
                key: "_isWithActiveTrigger",
                value: function _isWithActiveTrigger() {
                    for(var trigger in this._activeTrigger){
                        if (this._activeTrigger[trigger]) return true;
                    }
                    return false;
                }
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    var dataAttributes = $c6e33395c98f6914$var$Manipulator.getDataAttributes(this._element);
                    Object.keys(dataAttributes).forEach(function(dataAttr) {
                        if ($c6e33395c98f6914$var$DISALLOWED_ATTRIBUTES.has(dataAttr)) delete dataAttributes[dataAttr];
                    });
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {
                    });
                    config.container = config.container === false ? document.body : $c6e33395c98f6914$var$getElement(config.container);
                    if (typeof config.delay === 'number') config.delay = {
                        show: config.delay,
                        hide: config.delay
                    };
                    if (typeof config.title === 'number') config.title = config.title.toString();
                    if (typeof config.content === 'number') config.content = config.content.toString();
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME$4, config, this.constructor.DefaultType);
                    if (config.sanitize) config.template = $c6e33395c98f6914$var$sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
                    return config;
                }
            },
            {
                key: "_getDelegateConfig",
                value: function _getDelegateConfig() {
                    var config = {
                    };
                    for(var key in this._config)if (this.constructor.Default[key] !== this._config[key]) config[key] = this._config[key];
                    // In the future can be replaced with:
                    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
                    // `Object.fromEntries(keysWithDifferentValues)`
                    return config;
                }
            },
            {
                key: "_cleanTipClass",
                value: function _cleanTipClass() {
                    var tip = this.getTipElement();
                    var basicClassPrefixRegex = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), 'g');
                    var tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);
                    if (tabClass !== null && tabClass.length > 0) tabClass.map(function(token) {
                        return token.trim();
                    }).forEach(function(tClass) {
                        return tip.classList.remove(tClass);
                    });
                }
            },
            {
                key: "_getBasicClassPrefix",
                value: function _getBasicClassPrefix() {
                    return $c6e33395c98f6914$var$CLASS_PREFIX$1;
                }
            },
            {
                key: "_handlePopperPlacementChange",
                value: function _handlePopperPlacementChange(popperData) {
                    var state = popperData.state;
                    if (!state) return;
                    this.tip = state.elements.popper;
                    this._cleanTipClass();
                    this._addAttachmentClass(this._getAttachment(state.placement));
                }
            },
            {
                key: "_disposePopper",
                value: function _disposePopper() {
                    if (this._popper) {
                        this._popper.destroy();
                        this._popper = null;
                    }
                } // Static
            }
        ], [
            {
                key: "Default",
                get: function get() {
                    return $c6e33395c98f6914$var$Default$3;
                }
            },
            {
                key: "NAME",
                get: function get() {
                    return $c6e33395c98f6914$var$NAME$4;
                }
            },
            {
                key: "Event",
                get: function get() {
                    return $c6e33395c98f6914$var$Event$2;
                }
            },
            {
                key: "DefaultType",
                get: function get() {
                    return $c6e33395c98f6914$var$DefaultType$3;
                } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$28c660c63b792dea.getOrCreateInstance(this, config);
                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                            data[config]();
                        }
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$28c660c63b792dea;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Tooltip to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$28c660c63b792dea);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): popover.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$3 = 'popover';
    var $c6e33395c98f6914$var$DATA_KEY$3 = 'bs.popover';
    var $c6e33395c98f6914$var$EVENT_KEY$3 = ".".concat($c6e33395c98f6914$var$DATA_KEY$3);
    var $c6e33395c98f6914$var$CLASS_PREFIX = 'bs-popover';
    var $c6e33395c98f6914$var$Default$2 = $eb5371763c65414a$export$2e2bcd8739ae039({
    }, $c6e33395c98f6914$export$28c660c63b792dea.Default, {
        placement: 'right',
        offset: [
            0,
            8
        ],
        trigger: 'click',
        content: '',
        template: "<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>"
    });
    var $c6e33395c98f6914$var$DefaultType$2 = $eb5371763c65414a$export$2e2bcd8739ae039({
    }, $c6e33395c98f6914$export$28c660c63b792dea.DefaultType, {
        content: '(string|element|function)'
    });
    var $c6e33395c98f6914$var$Event$1 = {
        HIDE: "hide".concat($c6e33395c98f6914$var$EVENT_KEY$3),
        HIDDEN: "hidden".concat($c6e33395c98f6914$var$EVENT_KEY$3),
        SHOW: "show".concat($c6e33395c98f6914$var$EVENT_KEY$3),
        SHOWN: "shown".concat($c6e33395c98f6914$var$EVENT_KEY$3),
        INSERTED: "inserted".concat($c6e33395c98f6914$var$EVENT_KEY$3),
        CLICK: "click".concat($c6e33395c98f6914$var$EVENT_KEY$3),
        FOCUSIN: "focusin".concat($c6e33395c98f6914$var$EVENT_KEY$3),
        FOCUSOUT: "focusout".concat($c6e33395c98f6914$var$EVENT_KEY$3),
        MOUSEENTER: "mouseenter".concat($c6e33395c98f6914$var$EVENT_KEY$3),
        MOUSELEAVE: "mouseleave".concat($c6e33395c98f6914$var$EVENT_KEY$3)
    };
    var $c6e33395c98f6914$var$SELECTOR_TITLE = '.popover-header';
    var $c6e33395c98f6914$var$SELECTOR_CONTENT = '.popover-body';
    var $c6e33395c98f6914$export$5b6b19405a83ff9d = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function($c6e33395c98f6914$export$28c660c63b792dea) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$5b6b19405a83ff9d, $c6e33395c98f6914$export$28c660c63b792dea);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$5b6b19405a83ff9d);
        function $c6e33395c98f6914$export$5b6b19405a83ff9d() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$5b6b19405a83ff9d);
            return _super.apply(this, arguments);
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$5b6b19405a83ff9d, [
            {
                key: "isWithContent",
                value: function isWithContent() {
                    return this.getTitle() || this._getContent();
                }
            },
            {
                key: "setContent",
                value: function setContent(tip) {
                    this._sanitizeAndSetContent(tip, this.getTitle(), $c6e33395c98f6914$var$SELECTOR_TITLE);
                    this._sanitizeAndSetContent(tip, this._getContent(), $c6e33395c98f6914$var$SELECTOR_CONTENT);
                } // Private
            },
            {
                key: "_getContent",
                value: function _getContent() {
                    return this._resolvePossibleFunction(this._config.content);
                }
            },
            {
                key: "_getBasicClassPrefix",
                value: function _getBasicClassPrefix() {
                    return $c6e33395c98f6914$var$CLASS_PREFIX;
                } // Static
            }
        ], [
            {
                key: "Default",
                get: // Getters
                    function get() {
                        return $c6e33395c98f6914$var$Default$2;
                    }
            },
            {
                key: "NAME",
                get: function get() {
                    return $c6e33395c98f6914$var$NAME$3;
                }
            },
            {
                key: "Event",
                get: function get() {
                    return $c6e33395c98f6914$var$Event$1;
                }
            },
            {
                key: "DefaultType",
                get: function get() {
                    return $c6e33395c98f6914$var$DefaultType$2;
                } // Overrides
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$5b6b19405a83ff9d.getOrCreateInstance(this, config);
                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                            data[config]();
                        }
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$5b6b19405a83ff9d;
    }($c6e33395c98f6914$export$28c660c63b792dea);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Popover to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$5b6b19405a83ff9d);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): scrollspy.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$2 = 'scrollspy';
    var $c6e33395c98f6914$var$DATA_KEY$2 = 'bs.scrollspy';
    var $c6e33395c98f6914$var$EVENT_KEY$2 = ".".concat($c6e33395c98f6914$var$DATA_KEY$2);
    var $c6e33395c98f6914$var$DATA_API_KEY$1 = '.data-api';
    var $c6e33395c98f6914$var$Default$1 = {
        offset: 10,
        method: 'auto',
        target: ''
    };
    var $c6e33395c98f6914$var$DefaultType$1 = {
        offset: 'number',
        method: 'string',
        target: '(string|element)'
    };
    var $c6e33395c98f6914$var$EVENT_ACTIVATE = "activate".concat($c6e33395c98f6914$var$EVENT_KEY$2);
    var $c6e33395c98f6914$var$EVENT_SCROLL = "scroll".concat($c6e33395c98f6914$var$EVENT_KEY$2);
    var $c6e33395c98f6914$var$EVENT_LOAD_DATA_API = "load".concat($c6e33395c98f6914$var$EVENT_KEY$2).concat($c6e33395c98f6914$var$DATA_API_KEY$1);
    var $c6e33395c98f6914$var$CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
    var $c6e33395c98f6914$var$CLASS_NAME_ACTIVE$1 = 'active';
    var $c6e33395c98f6914$var$SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
    var $c6e33395c98f6914$var$SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
    var $c6e33395c98f6914$var$SELECTOR_NAV_LINKS = '.nav-link';
    var $c6e33395c98f6914$var$SELECTOR_NAV_ITEMS = '.nav-item';
    var $c6e33395c98f6914$var$SELECTOR_LIST_ITEMS = '.list-group-item';
    var $c6e33395c98f6914$var$SELECTOR_LINK_ITEMS = "".concat($c6e33395c98f6914$var$SELECTOR_NAV_LINKS, ", ").concat($c6e33395c98f6914$var$SELECTOR_LIST_ITEMS, ", .").concat($c6e33395c98f6914$var$CLASS_NAME_DROPDOWN_ITEM);
    var $c6e33395c98f6914$var$SELECTOR_DROPDOWN$1 = '.dropdown';
    var $c6e33395c98f6914$var$SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
    var $c6e33395c98f6914$var$METHOD_OFFSET = 'offset';
    var $c6e33395c98f6914$var$METHOD_POSITION = 'position';
    var $c6e33395c98f6914$export$a6472a5298a374be = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$a6472a5298a374be, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$a6472a5298a374be);
        function $c6e33395c98f6914$export$a6472a5298a374be(element, config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$a6472a5298a374be);
            var _this;
            _this = _super.call(this, element);
            _this._scrollElement = _this._element.tagName === 'BODY' ? window : _this._element;
            _this._config = _this._getConfig(config);
            _this._offsets = [];
            _this._targets = [];
            _this._activeTarget = null;
            _this._scrollHeight = 0;
            $c6e33395c98f6914$var$EventHandler.on(_this._scrollElement, $c6e33395c98f6914$var$EVENT_SCROLL, function() {
                return _this._process();
            });
            _this.refresh();
            _this._process();
            return _this;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$a6472a5298a374be, [
            {
                key: "refresh",
                value: function refresh() {
                    var _this = this;
                    var autoMethod = this._scrollElement === this._scrollElement.window ? $c6e33395c98f6914$var$METHOD_OFFSET : $c6e33395c98f6914$var$METHOD_POSITION;
                    var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
                    var offsetBase = offsetMethod === $c6e33395c98f6914$var$METHOD_POSITION ? this._getScrollTop() : 0;
                    this._offsets = [];
                    this._targets = [];
                    this._scrollHeight = this._getScrollHeight();
                    var targets = $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_LINK_ITEMS, this._config.target);
                    targets.map(function(element) {
                        var targetSelector = $c6e33395c98f6914$var$getSelectorFromElement(element);
                        var target = targetSelector ? $c6e33395c98f6914$var$SelectorEngine.findOne(targetSelector) : null;
                        if (target) {
                            var targetBCR = target.getBoundingClientRect();
                            if (targetBCR.width || targetBCR.height) return [
                                $c6e33395c98f6914$var$Manipulator[offsetMethod](target).top + offsetBase,
                                targetSelector
                            ];
                        }
                        return null;
                    }).filter(function(item) {
                        return item;
                    }).sort(function(a, b) {
                        return a[0] - b[0];
                    }).forEach(function(item) {
                        _this._offsets.push(item[0]);
                        _this._targets.push(item[1]);
                    });
                }
            },
            {
                key: "dispose",
                value: function dispose() {
                    $c6e33395c98f6914$var$EventHandler.off(this._scrollElement, $c6e33395c98f6914$var$EVENT_KEY$2);
                    $fdd7a9424d5738ca$export$2e2bcd8739ae039($35a07d0eea0623db$export$2e2bcd8739ae039($c6e33395c98f6914$export$a6472a5298a374be.prototype), "dispose", this).call(this);
                } // Private
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, $c6e33395c98f6914$var$Default$1, $c6e33395c98f6914$var$Manipulator.getDataAttributes(this._element), typeof config === 'object' && config ? config : {
                    });
                    config.target = $c6e33395c98f6914$var$getElement(config.target) || document.documentElement;
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME$2, config, $c6e33395c98f6914$var$DefaultType$1);
                    return config;
                }
            },
            {
                key: "_getScrollTop",
                value: function _getScrollTop() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }
            },
            {
                key: "_getScrollHeight",
                value: function _getScrollHeight() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }
            },
            {
                key: "_getOffsetHeight",
                value: function _getOffsetHeight() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                }
            },
            {
                key: "_process",
                value: function _process() {
                    var scrollTop = this._getScrollTop() + this._config.offset;
                    var scrollHeight = this._getScrollHeight();
                    var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
                    if (this._scrollHeight !== scrollHeight) this.refresh();
                    if (scrollTop >= maxScroll) {
                        var target = this._targets[this._targets.length - 1];
                        if (this._activeTarget !== target) this._activate(target);
                        return;
                    }
                    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                        this._activeTarget = null;
                        this._clear();
                        return;
                    }
                    for(var i = this._offsets.length; i--;){
                        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
                        if (isActiveTarget) this._activate(this._targets[i]);
                    }
                }
            },
            {
                key: "_activate",
                value: function _activate(target) {
                    this._activeTarget = target;
                    this._clear();
                    var queries = $c6e33395c98f6914$var$SELECTOR_LINK_ITEMS.split(',').map(function(selector) {
                        return "".concat(selector, "[data-bs-target=\"").concat(target, "\"],").concat(selector, "[href=\"").concat(target, "\"]");
                    });
                    var link = $c6e33395c98f6914$var$SelectorEngine.findOne(queries.join(','), this._config.target);
                    link.classList.add($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$1);
                    if (link.classList.contains($c6e33395c98f6914$var$CLASS_NAME_DROPDOWN_ITEM)) $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_DROPDOWN_TOGGLE$1, link.closest($c6e33395c98f6914$var$SELECTOR_DROPDOWN$1)).classList.add($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$1);
                    else $c6e33395c98f6914$var$SelectorEngine.parents(link, $c6e33395c98f6914$var$SELECTOR_NAV_LIST_GROUP$1).forEach(function(listGroup) {
                        // Set triggered links parents as active
                        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                        $c6e33395c98f6914$var$SelectorEngine.prev(listGroup, "".concat($c6e33395c98f6914$var$SELECTOR_NAV_LINKS, ", ").concat($c6e33395c98f6914$var$SELECTOR_LIST_ITEMS)).forEach(function(item) {
                            return item.classList.add($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$1);
                        }); // Handle special case when .nav-link is inside .nav-item
                        $c6e33395c98f6914$var$SelectorEngine.prev(listGroup, $c6e33395c98f6914$var$SELECTOR_NAV_ITEMS).forEach(function(navItem) {
                            $c6e33395c98f6914$var$SelectorEngine.children(navItem, $c6e33395c98f6914$var$SELECTOR_NAV_LINKS).forEach(function(item) {
                                return item.classList.add($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$1);
                            });
                        });
                    });
                    $c6e33395c98f6914$var$EventHandler.trigger(this._scrollElement, $c6e33395c98f6914$var$EVENT_ACTIVATE, {
                        relatedTarget: target
                    });
                }
            },
            {
                key: "_clear",
                value: function _clear() {
                    $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_LINK_ITEMS, this._config.target).filter(function(node) {
                        return node.classList.contains($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$1);
                    }).forEach(function(node) {
                        return node.classList.remove($c6e33395c98f6914$var$CLASS_NAME_ACTIVE$1);
                    });
                } // Static
            }
        ], [
            {
                key: "Default",
                get: function get() {
                    return $c6e33395c98f6914$var$Default$1;
                }
            },
            {
                key: "NAME",
                get: function get() {
                    return $c6e33395c98f6914$var$NAME$2;
                } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$a6472a5298a374be.getOrCreateInstance(this, config);
                        if (typeof config !== 'string') return;
                        if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config]();
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$a6472a5298a374be;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$EventHandler.on(window, $c6e33395c98f6914$var$EVENT_LOAD_DATA_API, function() {
        $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_DATA_SPY).forEach(function(spy) {
            return new $c6e33395c98f6914$export$a6472a5298a374be(spy);
        });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .ScrollSpy to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$a6472a5298a374be);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): tab.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME$1 = 'tab';
    var $c6e33395c98f6914$var$DATA_KEY$1 = 'bs.tab';
    var $c6e33395c98f6914$var$EVENT_KEY$1 = ".".concat($c6e33395c98f6914$var$DATA_KEY$1);
    var $c6e33395c98f6914$var$DATA_API_KEY = '.data-api';
    var $c6e33395c98f6914$var$EVENT_HIDE$1 = "hide".concat($c6e33395c98f6914$var$EVENT_KEY$1);
    var $c6e33395c98f6914$var$EVENT_HIDDEN$1 = "hidden".concat($c6e33395c98f6914$var$EVENT_KEY$1);
    var $c6e33395c98f6914$var$EVENT_SHOW$1 = "show".concat($c6e33395c98f6914$var$EVENT_KEY$1);
    var $c6e33395c98f6914$var$EVENT_SHOWN$1 = "shown".concat($c6e33395c98f6914$var$EVENT_KEY$1);
    var $c6e33395c98f6914$var$EVENT_CLICK_DATA_API = "click".concat($c6e33395c98f6914$var$EVENT_KEY$1).concat($c6e33395c98f6914$var$DATA_API_KEY);
    var $c6e33395c98f6914$var$CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
    var $c6e33395c98f6914$var$CLASS_NAME_ACTIVE = 'active';
    var $c6e33395c98f6914$var$CLASS_NAME_FADE$1 = 'fade';
    var $c6e33395c98f6914$var$CLASS_NAME_SHOW$1 = 'show';
    var $c6e33395c98f6914$var$SELECTOR_DROPDOWN = '.dropdown';
    var $c6e33395c98f6914$var$SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
    var $c6e33395c98f6914$var$SELECTOR_ACTIVE = '.active';
    var $c6e33395c98f6914$var$SELECTOR_ACTIVE_UL = ':scope > li > .active';
    var $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
    var $c6e33395c98f6914$var$SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
    var $c6e33395c98f6914$var$SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
    var $c6e33395c98f6914$export$3e41faf802a29e71 = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$3e41faf802a29e71, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$3e41faf802a29e71);
        function $c6e33395c98f6914$export$3e41faf802a29e71() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$3e41faf802a29e71);
            return _super.apply(this, arguments);
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$3e41faf802a29e71, [
            {
                key: "show",
                value: function show() {
                    var _this = this;
                    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_ACTIVE)) return;
                    var previous;
                    var target = $c6e33395c98f6914$var$getElementFromSelector(this._element);
                    var listElement = this._element.closest($c6e33395c98f6914$var$SELECTOR_NAV_LIST_GROUP);
                    if (listElement) {
                        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? $c6e33395c98f6914$var$SELECTOR_ACTIVE_UL : $c6e33395c98f6914$var$SELECTOR_ACTIVE;
                        previous = $c6e33395c98f6914$var$SelectorEngine.find(itemSelector, listElement);
                        previous = previous[previous.length - 1];
                    }
                    var hideEvent = previous ? $c6e33395c98f6914$var$EventHandler.trigger(previous, $c6e33395c98f6914$var$EVENT_HIDE$1, {
                        relatedTarget: this._element
                    }) : null;
                    var showEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_SHOW$1, {
                        relatedTarget: previous
                    });
                    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) return;
                    this._activate(this._element, listElement);
                    var complete = function() {
                        $c6e33395c98f6914$var$EventHandler.trigger(previous, $c6e33395c98f6914$var$EVENT_HIDDEN$1, {
                            relatedTarget: _this._element
                        });
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_SHOWN$1, {
                            relatedTarget: previous
                        });
                    };
                    if (target) this._activate(target, target.parentNode, complete);
                    else complete();
                } // Private
            },
            {
                key: "_activate",
                value: function _activate(element, container, callback) {
                    var _this = this;
                    var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_ACTIVE_UL, container) : $c6e33395c98f6914$var$SelectorEngine.children(container, $c6e33395c98f6914$var$SELECTOR_ACTIVE);
                    var active = activeElements[0];
                    var isTransitioning = callback && active && active.classList.contains($c6e33395c98f6914$var$CLASS_NAME_FADE$1);
                    var complete = function() {
                        return _this._transitionComplete(element, active, callback);
                    };
                    if (active && isTransitioning) {
                        active.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW$1);
                        this._queueCallback(complete, element, true);
                    } else complete();
                }
            },
            {
                key: "_transitionComplete",
                value: function _transitionComplete(element, active, callback) {
                    if (active) {
                        active.classList.remove($c6e33395c98f6914$var$CLASS_NAME_ACTIVE);
                        var dropdownChild = $c6e33395c98f6914$var$SelectorEngine.findOne($c6e33395c98f6914$var$SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
                        if (dropdownChild) dropdownChild.classList.remove($c6e33395c98f6914$var$CLASS_NAME_ACTIVE);
                        if (active.getAttribute('role') === 'tab') active.setAttribute('aria-selected', false);
                    }
                    element.classList.add($c6e33395c98f6914$var$CLASS_NAME_ACTIVE);
                    if (element.getAttribute('role') === 'tab') element.setAttribute('aria-selected', true);
                    $c6e33395c98f6914$var$reflow(element);
                    if (element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_FADE$1)) element.classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOW$1);
                    var parent = element.parentNode;
                    if (parent && parent.nodeName === 'LI') parent = parent.parentNode;
                    if (parent && parent.classList.contains($c6e33395c98f6914$var$CLASS_NAME_DROPDOWN_MENU)) {
                        var dropdownElement = element.closest($c6e33395c98f6914$var$SELECTOR_DROPDOWN);
                        if (dropdownElement) $c6e33395c98f6914$var$SelectorEngine.find($c6e33395c98f6914$var$SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(function(dropdown) {
                            return dropdown.classList.add($c6e33395c98f6914$var$CLASS_NAME_ACTIVE);
                        });
                        element.setAttribute('aria-expanded', true);
                    }
                    if (callback) callback();
                } // Static
            }
        ], [
            {
                key: "NAME",
                get: // Getters
                    function get() {
                        return $c6e33395c98f6914$var$NAME$1;
                    } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$3e41faf802a29e71.getOrCreateInstance(this);
                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                            data[config]();
                        }
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$3e41faf802a29e71;
    }($c6e33395c98f6914$var$BaseComponent);
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */ $c6e33395c98f6914$var$EventHandler.on(document, $c6e33395c98f6914$var$EVENT_CLICK_DATA_API, $c6e33395c98f6914$var$SELECTOR_DATA_TOGGLE, function(event) {
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        if ($c6e33395c98f6914$var$isDisabled(this)) return;
        var data = $c6e33395c98f6914$export$3e41faf802a29e71.getOrCreateInstance(this);
        data.show();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Tab to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$3e41faf802a29e71);
    /**
     * --------------------------------------------------------------------------
     * Bootstrap (v5.1.3): toast.js
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     * --------------------------------------------------------------------------
     */ /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */ var $c6e33395c98f6914$var$NAME = 'toast';
    var $c6e33395c98f6914$var$DATA_KEY = 'bs.toast';
    var $c6e33395c98f6914$var$EVENT_KEY = ".".concat($c6e33395c98f6914$var$DATA_KEY);
    var $c6e33395c98f6914$var$EVENT_MOUSEOVER = "mouseover".concat($c6e33395c98f6914$var$EVENT_KEY);
    var $c6e33395c98f6914$var$EVENT_MOUSEOUT = "mouseout".concat($c6e33395c98f6914$var$EVENT_KEY);
    var $c6e33395c98f6914$var$EVENT_FOCUSIN = "focusin".concat($c6e33395c98f6914$var$EVENT_KEY);
    var $c6e33395c98f6914$var$EVENT_FOCUSOUT = "focusout".concat($c6e33395c98f6914$var$EVENT_KEY);
    var $c6e33395c98f6914$var$EVENT_HIDE = "hide".concat($c6e33395c98f6914$var$EVENT_KEY);
    var $c6e33395c98f6914$var$EVENT_HIDDEN = "hidden".concat($c6e33395c98f6914$var$EVENT_KEY);
    var $c6e33395c98f6914$var$EVENT_SHOW = "show".concat($c6e33395c98f6914$var$EVENT_KEY);
    var $c6e33395c98f6914$var$EVENT_SHOWN = "shown".concat($c6e33395c98f6914$var$EVENT_KEY);
    var $c6e33395c98f6914$var$CLASS_NAME_FADE = 'fade';
    var $c6e33395c98f6914$var$CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
    var $c6e33395c98f6914$var$CLASS_NAME_SHOW = 'show';
    var $c6e33395c98f6914$var$CLASS_NAME_SHOWING = 'showing';
    var $c6e33395c98f6914$var$DefaultType = {
        animation: 'boolean',
        autohide: 'boolean',
        delay: 'number'
    };
    var $c6e33395c98f6914$var$Default = {
        animation: true,
        autohide: true,
        delay: 5000
    };
    var $c6e33395c98f6914$export$8d8dc7d5f743331b = /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */ /*#__PURE__*/ function(BaseComponent) {
        "use strict";
        $c4ea276b874ff1f8$export$2e2bcd8739ae039($c6e33395c98f6914$export$8d8dc7d5f743331b, BaseComponent);
        var _super = $110337f557ebf7b5$export$2e2bcd8739ae039($c6e33395c98f6914$export$8d8dc7d5f743331b);
        function $c6e33395c98f6914$export$8d8dc7d5f743331b(element, config) {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $c6e33395c98f6914$export$8d8dc7d5f743331b);
            var _this;
            _this = _super.call(this, element);
            _this._config = _this._getConfig(config);
            _this._timeout = null;
            _this._hasMouseInteraction = false;
            _this._hasKeyboardInteraction = false;
            _this._setListeners();
            return _this;
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($c6e33395c98f6914$export$8d8dc7d5f743331b, [
            {
                key: "show",
                value: function show() {
                    var _this = this;
                    var showEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_SHOW);
                    if (showEvent.defaultPrevented) return;
                    this._clearTimeout();
                    if (this._config.animation) this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_FADE);
                    var complete = function() {
                        _this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOWING);
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_SHOWN);
                        _this._maybeScheduleHide();
                    };
                    this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_HIDE); // @deprecated
                    $c6e33395c98f6914$var$reflow(this._element);
                    this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOW);
                    this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOWING);
                    this._queueCallback(complete, this._element, this._config.animation);
                }
            },
            {
                key: "hide",
                value: function hide() {
                    var _this = this;
                    if (!this._element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_SHOW)) return;
                    var hideEvent = $c6e33395c98f6914$var$EventHandler.trigger(this._element, $c6e33395c98f6914$var$EVENT_HIDE);
                    if (hideEvent.defaultPrevented) return;
                    var complete = function() {
                        _this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_HIDE); // @deprecated
                        _this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOWING);
                        _this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW);
                        $c6e33395c98f6914$var$EventHandler.trigger(_this._element, $c6e33395c98f6914$var$EVENT_HIDDEN);
                    };
                    this._element.classList.add($c6e33395c98f6914$var$CLASS_NAME_SHOWING);
                    this._queueCallback(complete, this._element, this._config.animation);
                }
            },
            {
                key: "dispose",
                value: function dispose() {
                    this._clearTimeout();
                    if (this._element.classList.contains($c6e33395c98f6914$var$CLASS_NAME_SHOW)) this._element.classList.remove($c6e33395c98f6914$var$CLASS_NAME_SHOW);
                    $fdd7a9424d5738ca$export$2e2bcd8739ae039($35a07d0eea0623db$export$2e2bcd8739ae039($c6e33395c98f6914$export$8d8dc7d5f743331b.prototype), "dispose", this).call(this);
                } // Private
            },
            {
                key: "_getConfig",
                value: function _getConfig(config) {
                    config = $eb5371763c65414a$export$2e2bcd8739ae039({
                    }, $c6e33395c98f6914$var$Default, $c6e33395c98f6914$var$Manipulator.getDataAttributes(this._element), typeof config === 'object' && config ? config : {
                    });
                    $c6e33395c98f6914$var$typeCheckConfig($c6e33395c98f6914$var$NAME, config, this.constructor.DefaultType);
                    return config;
                }
            },
            {
                key: "_maybeScheduleHide",
                value: function _maybeScheduleHide() {
                    var _this = this;
                    if (!this._config.autohide) return;
                    if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
                    this._timeout = setTimeout(function() {
                        _this.hide();
                    }, this._config.delay);
                }
            },
            {
                key: "_onInteraction",
                value: function _onInteraction(event, isInteracting) {
                    switch(event.type){
                        case 'mouseover':
                        case 'mouseout':
                            this._hasMouseInteraction = isInteracting;
                            break;
                        case 'focusin':
                        case 'focusout':
                            this._hasKeyboardInteraction = isInteracting;
                            break;
                    }
                    if (isInteracting) {
                        this._clearTimeout();
                        return;
                    }
                    var nextElement = event.relatedTarget;
                    if (this._element === nextElement || this._element.contains(nextElement)) return;
                    this._maybeScheduleHide();
                }
            },
            {
                key: "_setListeners",
                value: function _setListeners() {
                    var _this = this;
                    $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_MOUSEOVER, function(event) {
                        return _this._onInteraction(event, true);
                    });
                    $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_MOUSEOUT, function(event) {
                        return _this._onInteraction(event, false);
                    });
                    $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_FOCUSIN, function(event) {
                        return _this._onInteraction(event, true);
                    });
                    $c6e33395c98f6914$var$EventHandler.on(this._element, $c6e33395c98f6914$var$EVENT_FOCUSOUT, function(event) {
                        return _this._onInteraction(event, false);
                    });
                }
            },
            {
                key: "_clearTimeout",
                value: function _clearTimeout() {
                    clearTimeout(this._timeout);
                    this._timeout = null;
                } // Static
            }
        ], [
            {
                key: "DefaultType",
                get: function get() {
                    return $c6e33395c98f6914$var$DefaultType;
                }
            },
            {
                key: "Default",
                get: function get() {
                    return $c6e33395c98f6914$var$Default;
                }
            },
            {
                key: "NAME",
                get: function get() {
                    return $c6e33395c98f6914$var$NAME;
                } // Public
            },
            {
                key: "jQueryInterface",
                value: function jQueryInterface(config) {
                    return this.each(function() {
                        var data = $c6e33395c98f6914$export$8d8dc7d5f743331b.getOrCreateInstance(this, config);
                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                            data[config](this);
                        }
                    });
                }
            }
        ]);
        return $c6e33395c98f6914$export$8d8dc7d5f743331b;
    }($c6e33395c98f6914$var$BaseComponent);
    $c6e33395c98f6914$var$enableDismissTrigger($c6e33395c98f6914$export$8d8dc7d5f743331b);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     * add .Toast to jQuery only if jQuery is present
     */ $c6e33395c98f6914$var$defineJQueryPlugin($c6e33395c98f6914$export$8d8dc7d5f743331b);



    var $0f648cb70eeeadb0$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
        "use strict";
        function $0f648cb70eeeadb0$export$2e2bcd8739ae039() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $0f648cb70eeeadb0$export$2e2bcd8739ae039);
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($0f648cb70eeeadb0$export$2e2bcd8739ae039, [
            {
                key: "init",
                value: function init() {
                    var searchLink = document.querySelector('.search-link');
                    var searchForm = document.querySelector('.header__search-form');
                    var toggleForm = function toggleForm() {
                        searchForm.classList.toggle('header__search-form_active');
                    };
                    if (!searchLink) return;
                    searchLink.addEventListener('click', function(e) {
                        e.stopPropagation();
                        toggleForm();
                    });
                    document.addEventListener('click', function(e) {
                        var target = e.target;
                        var isForm = target === searchForm || searchForm.contains(target);
                        var isSearchLink = target === searchLink;
                        var formIsActive = searchForm.classList.contains('header__search-form_active');
                        if (!isForm && !isSearchLink && formIsActive) toggleForm();
                    });
                }
            }
        ]);
        return $0f648cb70eeeadb0$export$2e2bcd8739ae039;
    }();



    var $8ea1419716a41fc2$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
        "use strict";
        function $8ea1419716a41fc2$export$2e2bcd8739ae039() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $8ea1419716a41fc2$export$2e2bcd8739ae039);
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($8ea1419716a41fc2$export$2e2bcd8739ae039, [
            {
                key: "init",
                value: function init() {
                    var menuLink = document.querySelector('.nav-link-parent');
                    var menuMegamenu = document.querySelector('.d-menu');
                    var navLinkIcon = document.querySelector('.nav-link-parent__icon');
                    var toggleMenu = function toggleMenu() {
                        menuMegamenu.classList.toggle('d-menu_active');
                        navLinkIcon.classList.toggle('nav-link-parent__icon_active');
                        document.body.classList.toggle('overflow-hidden');
                    };
                    if (!menuLink) return;
                    menuLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleMenu();
                    });
                    document.addEventListener('click', function(e) {
                        var target = e.target;
                        var isForm = target === menuMegamenu || menuMegamenu.contains(target);
                        var isMenuLink = target === menuLink;
                        var formIsActive = menuMegamenu.classList.contains('d-menu_active');
                        if (!isForm && !isMenuLink && formIsActive) toggleMenu();
                    });
                }
            }
        ]);
        return $8ea1419716a41fc2$export$2e2bcd8739ae039;
    }();



    var $7ebf9bc23af50e2e$exports = {};

    (function(global, factory) {
        typeof $7ebf9bc23af50e2e$exports === 'object' && "object" !== 'undefined' ? $7ebf9bc23af50e2e$exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
    })(undefined, function() {
        'use strict';
        var isObject$1 = /**
         * SSR Window 4.0.2
         * Better handling for window object in SSR environment
         * https://github.com/nolimits4web/ssr-window
         *
         * Copyright 2021, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: December 13, 2021
         */ /* eslint-disable no-param-reassign */ function isObject$1(obj) {
            return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
        };
        var getDocument = function getDocument() {
            var doc = typeof document !== 'undefined' ? document : {
            };
            extend$1(doc, ssrDocument);
            return doc;
        };
        var getWindow = function getWindow() {
            var win = typeof window !== 'undefined' ? window : {
            };
            extend$1(win, ssrWindow);
            return win;
        };
        var makeReactive = /**
         * Dom7 4.0.2
         * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
         * https://framework7.io/docs/dom7.html
         *
         * Copyright 2021, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: December 13, 2021
         */ /* eslint-disable no-proto */ function makeReactive(obj) {
            var proto = obj.__proto__;
            Object.defineProperty(obj, '__proto__', {
                get: function() {
                    return proto;
                },
                set: function(value) {
                    proto.__proto__ = value;
                }
            });
        };
        var arrayFilter = function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        };
        var arrayUnique = function arrayUnique(arr) {
            var uniqueArray = [];
            for(var i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
            return uniqueArray;
        };
        var qsa = function qsa(selector, context) {
            if (typeof selector !== 'string') return [
                selector
            ];
            var a = [];
            var res = context.querySelectorAll(selector);
            for(var i = 0; i < res.length; i += 1)a.push(res[i]);
            return a;
        };
        var $ = function $(selector, context) {
            var window = getWindow();
            var document = getDocument();
            var arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if (typeof selector === 'string') {
                var html = selector.trim();
                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    var toCreate = 'div';
                    if (html.indexOf('<li') === 0) toCreate = 'ul';
                    if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                    if (html.indexOf('<tbody') === 0) toCreate = 'table';
                    if (html.indexOf('<option') === 0) toCreate = 'select';
                    var tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for(var i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
                // arr = qsa(selector, document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector);
            else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        };
        var addClass = function addClass() {
            for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
                classes[_key] = arguments[_key];
            }
            var classNames = arrayFlat(classes.map(function(c) {
                return c.split(' ');
            }));
            this.forEach(function(el) {
                var _classList;
                (_classList = el.classList).add.apply(_classList, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(classNames));
            });
            return this;
        };
        var removeClass = function removeClass() {
            for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
                classes[_key] = arguments[_key];
            }
            var classNames = arrayFlat(classes.map(function(c) {
                return c.split(' ');
            }));
            this.forEach(function(el) {
                var _classList;
                (_classList = el.classList).remove.apply(_classList, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(classNames));
            });
            return this;
        };
        var toggleClass = function toggleClass() {
            for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
                classes[_key] = arguments[_key];
            }
            var classNames = arrayFlat(classes.map(function(c) {
                return c.split(' ');
            }));
            this.forEach(function(el) {
                classNames.forEach(function(className) {
                    el.classList.toggle(className);
                });
            });
        };
        var hasClass = function hasClass() {
            for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
                classes[_key] = arguments[_key];
            }
            var classNames = arrayFlat(classes.map(function(c) {
                return c.split(' ');
            }));
            return arrayFilter(this, function(el) {
                return classNames.filter(function(className) {
                    return el.classList.contains(className);
                }).length > 0;
            }).length > 0;
        };
        var attr = function attr(attrs, value) {
            if (arguments.length === 1 && typeof attrs === 'string') {
                // Get attr
                if (this[0]) return this[0].getAttribute(attrs);
                return undefined;
            } // Set attrs
            for(var i = 0; i < this.length; i += 1){
                if (arguments.length === 2) // String
                    this[i].setAttribute(attrs, value);
                else // Object
                    for(var attrName in attrs){
                        this[i][attrName] = attrs[attrName];
                        this[i].setAttribute(attrName, attrs[attrName]);
                    }
            }
            return this;
        };
        var removeAttr = function removeAttr(attr) {
            for(var i = 0; i < this.length; i += 1)this[i].removeAttribute(attr);
            return this;
        };
        var transform1 = function transform1(transform) {
            for(var i = 0; i < this.length; i += 1)this[i].style.transform = transform;
            return this;
        };
        var transition$1 = function transition$1(duration) {
            for(var i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== 'string' ? "".concat(duration, "ms") : duration;
            return this;
        };
        var on = function on() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _args = $63dda9574375e3f5$export$2e2bcd8739ae039(args, 4), eventType = _args[0], targetSelector = _args[1], listener = _args[2], capture = _args[3];
            if (typeof args[1] === 'function') {
                var ref;
                ref = $63dda9574375e3f5$export$2e2bcd8739ae039(args, 3), eventType = ref[0], listener = ref[1], capture = ref[2], ref;
                targetSelector = undefined;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                var target = e.target;
                if (!target) return;
                var eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if ($(target).is(targetSelector)) listener.apply(target, eventData);
                else {
                    var parents = $(target).parents(); // eslint-disable-line
                    for(var k = 0; k < parents.length; k += 1)if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                var eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            var events = eventType.split(' ');
            var j = void 0;
            for(var i = 0; i < this.length; i += 1){
                var el = this[i];
                if (!targetSelector) for(j = 0; j < events.length; j += 1){
                    var event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {
                    };
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener: listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                }
                else // Live events
                    for(j = 0; j < events.length; j += 1){
                        var event1 = events[j];
                        if (!el.dom7LiveListeners) el.dom7LiveListeners = {
                        };
                        if (!el.dom7LiveListeners[event1]) el.dom7LiveListeners[event1] = [];
                        el.dom7LiveListeners[event1].push({
                            listener: listener,
                            proxyListener: handleLiveEvent
                        });
                        el.addEventListener(event1, handleLiveEvent, capture);
                    }
            }
            return this;
        };
        var off = function off() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _args = $63dda9574375e3f5$export$2e2bcd8739ae039(args, 4), eventType = _args[0], targetSelector = _args[1], listener = _args[2], capture = _args[3];
            if (typeof args[1] === 'function') {
                var ref;
                ref = $63dda9574375e3f5$export$2e2bcd8739ae039(args, 3), eventType = ref[0], listener = ref[1], capture = ref[2], ref;
                targetSelector = undefined;
            }
            if (!capture) capture = false;
            var events = eventType.split(' ');
            for(var i = 0; i < events.length; i += 1){
                var event = events[i];
                for(var j = 0; j < this.length; j += 1){
                    var el = this[j];
                    var handlers = void 0;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event];
                    else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for(var k = handlers.length - 1; k >= 0; k -= 1){
                        var handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        };
        var trigger = function trigger() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var window = getWindow();
            var events = args[0].split(' ');
            var eventData = args[1];
            for(var i = 0; i < events.length; i += 1){
                var event = events[i];
                for(var j = 0; j < this.length; j += 1){
                    var el = this[j];
                    if (window.CustomEvent) {
                        var evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(function(data, dataIndex) {
                            return dataIndex > 0;
                        });
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        };
        var transitionEnd$1 = function transitionEnd$1(callback) {
            var dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off('transitionend', fireCallBack);
            }
            if (callback) dom.on('transitionend', fireCallBack);
            return this;
        };
        var outerWidth = function outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    var styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
                }
                return this[0].offsetWidth;
            }
            return null;
        };
        var outerHeight = function outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    var styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
                }
                return this[0].offsetHeight;
            }
            return null;
        };
        var offset = function offset() {
            if (this.length > 0) {
                var window = getWindow();
                var document = getDocument();
                var el = this[0];
                var box = el.getBoundingClientRect();
                var body = document.body;
                var clientTop = el.clientTop || body.clientTop || 0;
                var clientLeft = el.clientLeft || body.clientLeft || 0;
                var scrollTop = el === window ? window.scrollY : el.scrollTop;
                var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        };
        var styles1 = function styles1() {
            var window = getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {
            };
        };
        var css = function css(props, value) {
            var window = getWindow();
            var i;
            if (arguments.length === 1) {
                if (typeof props === 'string') {
                    // .css('width')
                    if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                } else {
                    // .css({ width: '100px' })
                    for(i = 0; i < this.length; i += 1)for(var prop in props)this[i].style[prop] = props[prop];
                    return this;
                }
            }
            if (arguments.length === 2 && typeof props === 'string') {
                // .css('width', '100px')
                for(i = 0; i < this.length; i += 1)this[i].style[props] = value;
                return this;
            }
            return this;
        };
        var each = function each(callback) {
            if (!callback) return this;
            this.forEach(function(el, index) {
                callback.apply(el, [
                    el,
                    index
                ]);
            });
            return this;
        };
        var filter = function filter(callback) {
            var result = arrayFilter(this, callback);
            return $(result);
        };
        var html1 = function html1(html) {
            if (typeof html === 'undefined') return this[0] ? this[0].innerHTML : null;
            for(var i = 0; i < this.length; i += 1)this[i].innerHTML = html;
            return this;
        };
        var text1 = function text1(text) {
            if (typeof text === 'undefined') return this[0] ? this[0].textContent.trim() : null;
            for(var i = 0; i < this.length; i += 1)this[i].textContent = text;
            return this;
        };
        var is = function is(selector) {
            var window = getWindow();
            var document = getDocument();
            var el = this[0];
            var compareWith;
            var i;
            if (!el || typeof selector === 'undefined') return false;
            if (typeof selector === 'string') {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = $(selector);
                for(i = 0; i < compareWith.length; i += 1){
                    if (compareWith[i] === el) return true;
                }
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [
                    selector
                ] : selector;
                for(i = 0; i < compareWith.length; i += 1){
                    if (compareWith[i] === el) return true;
                }
                return false;
            }
            return false;
        };
        var index1 = function index1() {
            var child = this[0];
            var i;
            if (child) {
                i = 0; // eslint-disable-next-line
                while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
                return i;
            }
            return undefined;
        };
        var eq = function eq(index) {
            if (typeof index === 'undefined') return this;
            var length = this.length;
            if (index > length - 1) return $([]);
            if (index < 0) {
                var returnIndex = length + index;
                if (returnIndex < 0) return $([]);
                return $([
                    this[returnIndex]
                ]);
            }
            return $([
                this[index]
            ]);
        };
        var append = function append() {
            for(var _len = arguments.length, els = new Array(_len), _key = 0; _key < _len; _key++){
                els[_key] = arguments[_key];
            }
            var newChild = void 0;
            var document = getDocument();
            for(var k = 0; k < els.length; k += 1){
                newChild = els[k];
                for(var i = 0; i < this.length; i += 1){
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
                    } else if (newChild instanceof Dom7) for(var j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
                    else this[i].appendChild(newChild);
                }
            }
            return this;
        };
        var prepend = function prepend(newChild) {
            var document = getDocument();
            var i;
            var j;
            for(i = 0; i < this.length; i += 1){
                if (typeof newChild === 'string') {
                    var tempDiv = document.createElement('div');
                    tempDiv.innerHTML = newChild;
                    for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                } else if (newChild instanceof Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                else this[i].insertBefore(newChild, this[i].childNodes[0]);
            }
            return this;
        };
        var next = function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                        this[0].nextElementSibling
                    ]);
                    return $([]);
                }
                if (this[0].nextElementSibling) return $([
                    this[0].nextElementSibling
                ]);
                return $([]);
            }
            return $([]);
        };
        var nextAll = function nextAll(selector) {
            var nextEls = [];
            var el = this[0];
            if (!el) return $([]);
            while(el.nextElementSibling){
                var next = el.nextElementSibling; // eslint-disable-line
                if (selector) {
                    if ($(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return $(nextEls);
        };
        var prev = function prev(selector) {
            if (this.length > 0) {
                var el = this[0];
                if (selector) {
                    if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                        el.previousElementSibling
                    ]);
                    return $([]);
                }
                if (el.previousElementSibling) return $([
                    el.previousElementSibling
                ]);
                return $([]);
            }
            return $([]);
        };
        var prevAll = function prevAll(selector) {
            var prevEls = [];
            var el = this[0];
            if (!el) return $([]);
            while(el.previousElementSibling){
                var prev = el.previousElementSibling; // eslint-disable-line
                if (selector) {
                    if ($(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return $(prevEls);
        };
        var parent = function parent(selector) {
            var parents = []; // eslint-disable-line
            for(var i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
                if (selector) {
                    if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                } else parents.push(this[i].parentNode);
            }
            return $(parents);
        };
        var parents1 = function parents1(selector) {
            var parents = []; // eslint-disable-line
            for(var i = 0; i < this.length; i += 1){
                var parent = this[i].parentNode; // eslint-disable-line
                while(parent){
                    if (selector) {
                        if ($(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return $(parents);
        };
        var closest = function closest(selector) {
            var closest1 = this; // eslint-disable-line
            if (typeof selector === 'undefined') return $([]);
            if (!closest1.is(selector)) closest1 = closest1.parents(selector).eq(0);
            return closest1;
        };
        var find = function find(selector) {
            var foundElements = [];
            for(var i = 0; i < this.length; i += 1){
                var found = this[i].querySelectorAll(selector);
                for(var j = 0; j < found.length; j += 1)foundElements.push(found[j]);
            }
            return $(foundElements);
        };
        var children = function children(selector) {
            var children1 = []; // eslint-disable-line
            for(var i = 0; i < this.length; i += 1){
                var childNodes = this[i].children;
                for(var j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children1.push(childNodes[j]);
            }
            return $(children1);
        };
        var remove = function remove() {
            for(var i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        };
        var deleteProps = function deleteProps(obj) {
            var object = obj;
            Object.keys(object).forEach(function(key) {
                try {
                    object[key] = null;
                } catch (e) {
                }
                try {
                    delete object[key];
                } catch (e1) {
                }
            });
        };
        var nextTick = function nextTick(callback) {
            var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return setTimeout(callback, delay);
        };
        var now = function now() {
            return Date.now();
        };
        var getComputedStyle$1 = function getComputedStyle$1(el) {
            var window = getWindow();
            var style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        };
        var getTranslate = function getTranslate(el) {
            var axis = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'x';
            var window = getWindow();
            var matrix;
            var curTransform;
            var transformMatrix;
            var curStyle = getComputedStyle$1(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) curTransform = curTransform.split(', ').map(function(a) {
                    return a.replace(',', '.');
                }).join(', ');
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
            if (axis === 'x') {
                // Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
                else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
                else curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                // Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
                else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
                else curTransform = parseFloat(matrix[5]);
            }
            return curTransform || 0;
        };
        var isObject = function isObject(o) {
            return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
        };
        var isNode = function isNode(node) {
            // eslint-disable-next-line
            if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        };
        var setCSSProperty = function setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        };
        var animateCSSModeScroll = function animateCSSModeScroll(param) {
            var swiper = param.swiper, targetPosition = param.targetPosition, side = param.side;
            var window = getWindow();
            var startPosition = -swiper.translate;
            var startTime = null;
            var time;
            var duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = 'none';
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            var dir = targetPosition > startPosition ? 'next' : 'prev';
            var isOutOfBound = function(current, target) {
                return dir === 'next' && current >= target || dir === 'prev' && current <= target;
            };
            var animate = function() {
                time = new Date().getTime();
                if (startTime === null) startTime = time;
                var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                var easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
                var currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo($167db31c658a8beb$export$2e2bcd8739ae039({
                }, side, currentPosition));
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = 'hidden';
                    swiper.wrapperEl.style.scrollSnapType = '';
                    setTimeout(function() {
                        swiper.wrapperEl.style.overflow = '';
                        swiper.wrapperEl.scrollTo($167db31c658a8beb$export$2e2bcd8739ae039({
                        }, side, currentPosition));
                    });
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        };
        var calcSupport = function calcSupport() {
            var window = getWindow();
            var document = getDocument();
            return {
                smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
                touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: (function checkPassiveListener() {
                    var supportsPassive = false;
                    try {
                        var opts = Object.defineProperty({
                        }, 'passive', {
                            // eslint-disable-next-line
                            get: function() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener('testPassiveListener', null, opts);
                    } catch (e) {
                    }
                    return supportsPassive;
                })(),
                gestures: (function checkGestures() {
                    return 'ongesturestart' in window;
                })()
            };
        };
        var getSupport = function getSupport() {
            if (!support1) support1 = calcSupport();
            return support1;
        };
        var calcDevice = function calcDevice() {
            var userAgent = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            }).userAgent;
            var support = getSupport();
            var window = getWindow();
            var platform = window.navigator.platform;
            var ua = userAgent || window.navigator.userAgent;
            var device = {
                ios: false,
                android: false
            };
            var screenWidth = window.screen.width;
            var screenHeight = window.screen.height;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            var windows = platform === 'Win32';
            var macos = platform === 'MacIntel'; // iPadOs 13 fix
            var iPadScreens = [
                '1024x1366',
                '1366x1024',
                '834x1194',
                '1194x834',
                '834x1112',
                '1112x834',
                '768x1024',
                '1024x768',
                '820x1180',
                '1180x820',
                '810x1080',
                '1080x810'
            ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf("".concat(screenWidth, "x").concat(screenHeight)) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [
                    0,
                    1,
                    '13_0_0'
                ];
                macos = false;
            } // Android
            if (android && !windows) {
                device.os = 'android';
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = 'ios';
                device.ios = true;
            } // Export object
            return device;
        };
        var getDevice = function getDevice() {
            var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            };
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        };
        var calcBrowser = function calcBrowser() {
            var window = getWindow();
            function isSafari() {
                var ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        };
        var getBrowser = function getBrowser() {
            if (!browser1) browser1 = calcBrowser();
            return browser1;
        };
        var Resize = function Resize(param1) {
            var swiper = param1.swiper, on = param1.on, emit = param1.emit;
            var window = getWindow();
            var observer = null;
            var resizeHandler = function() {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit('beforeResize');
                emit('resize');
            };
            var createObserver = function() {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver(function(entries) {
                    var width = swiper.width, height = swiper.height;
                    var newWidth = width;
                    var newHeight = height;
                    entries.forEach(function(param) {
                        var contentBoxSize = param.contentBoxSize, contentRect = param.contentRect, target = param.target;
                        if (target && target !== swiper.el) return;
                        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                    });
                    if (newWidth !== width || newHeight !== height) resizeHandler();
                });
                observer.observe(swiper.el);
            };
            var removeObserver = function() {
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            var orientationChangeHandler = function() {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit('orientationchange');
            };
            on('init', function() {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
                    createObserver();
                    return;
                }
                window.addEventListener('resize', resizeHandler);
                window.addEventListener('orientationchange', orientationChangeHandler);
            });
            on('destroy', function() {
                removeObserver();
                window.removeEventListener('resize', resizeHandler);
                window.removeEventListener('orientationchange', orientationChangeHandler);
            });
        };
        var Observer = function Observer(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on, emit = param.emit;
            var observers = [];
            var window = getWindow();
            var attach = function(target) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                };
                var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                var observer = new ObserverFunc(function(mutations) {
                    // The observerUpdate event should only be triggered
                    // once despite the number of mutations.  Additional
                    // triggers are redundant and are very costly
                    if (mutations.length === 1) {
                        emit('observerUpdate', mutations[0]);
                        return;
                    }
                    var observerUpdate = function observerUpdate() {
                        emit('observerUpdate', mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
                    else window.setTimeout(observerUpdate, 0);
                });
                observer.observe(target, {
                    attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                    childList: typeof options.childList === 'undefined' ? true : options.childList,
                    characterData: typeof options.characterData === 'undefined' ? true : options.characterData
                });
                observers.push(observer);
            };
            var init = function() {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    var containerParents = swiper.$el.parents();
                    for(var i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
                } // Observe container
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                }); // Observe wrapper
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            var destroy = function() {
                observers.forEach(function(observer) {
                    observer.disconnect();
                });
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on('init', init);
            on('destroy', destroy);
        };
        var updateSize = function updateSize() {
            var swiper = this;
            var width;
            var height;
            var $el = swiper.$el;
            if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) width = swiper.params.width;
            else width = $el[0].clientWidth;
            if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) height = swiper.params.height;
            else height = $el[0].clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            // Subtract paddings
            width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
            height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width: width,
                height: height,
                size: swiper.isHorizontal() ? width : height
            });
        };
        var updateSlides = function updateSlides() {
            var swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                // prettier-ignore
                return ({
                    width: 'height',
                    'margin-top': 'margin-left',
                    'margin-bottom ': 'margin-right',
                    'margin-left': 'margin-top',
                    'margin-right': 'margin-bottom',
                    'padding-left': 'padding-top',
                    'padding-right': 'padding-bottom',
                    marginRight: 'marginBottom'
                })[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            var params = swiper.params;
            var $wrapperEl = swiper.$wrapperEl, swiperSize = swiper.size, rtl = swiper.rtlTranslate, wrongRTL = swiper.wrongRTL;
            var isVirtual = swiper.virtual && params.virtual.enabled;
            var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            var slides = $wrapperEl.children(".".concat(swiper.params.slideClass));
            var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            var snapGrid = [];
            var slidesGrid = [];
            var slidesSizesGrid = [];
            var offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === 'function') offsetBefore = params.slidesOffsetBefore.call(swiper);
            var offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === 'function') offsetAfter = params.slidesOffsetAfter.call(swiper);
            var previousSnapGridLength = swiper.snapGrid.length;
            var previousSlidesGridLength = swiper.slidesGrid.length;
            var spaceBetween = params.spaceBetween;
            var slidePosition = -offsetBefore;
            var prevSlideSize = 0;
            var index = 0;
            if (typeof swiperSize === 'undefined') return;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween; // reset margins
            if (rtl) slides.css({
                marginLeft: '',
                marginBottom: '',
                marginTop: ''
            });
            else slides.css({
                marginRight: '',
                marginBottom: '',
                marginTop: ''
            }); // reset cssMode offsets
            if (params.centeredSlides && params.cssMode) {
                setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
                setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
            }
            var gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            // Calc slides
            var slideSize;
            var shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(function(key) {
                return typeof params.breakpoints[key].slidesPerView !== 'undefined';
            }).length > 0;
            for(var i = 0; i < slidesLength; i += 1){
                slideSize = 0;
                var slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slide.css('display') === 'none') continue; // eslint-disable-line
                if (params.slidesPerView === 'auto') {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel('width')] = "";
                    var slideStyles = getComputedStyle(slide[0]);
                    var currentTransform = slide[0].style.transform;
                    var currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = 'none';
                    if (currentWebKitTransform) slide[0].style.webkitTransform = 'none';
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    else {
                        // eslint-disable-next-line
                        var width = getDirectionPropertyValue(slideStyles, 'width');
                        var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                        var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                        var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                        var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                        var boxSizing = slideStyles.getPropertyValue('box-sizing');
                        if (boxSizing && boxSizing === 'border-box') slideSize = width + marginLeft + marginRight;
                        else {
                            var ref = slide[0], clientWidth = ref.clientWidth, offsetWidth = ref.offsetWidth;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel('width')] = "".concat(slideSize, "px");
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) $wrapperEl.css({
                width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
            });
            if (params.setWrapperSize) $wrapperEl.css($167db31c658a8beb$export$2e2bcd8739ae039({
            }, getDirectionLabel('width'), "".concat(swiper.virtualSize + params.spaceBetween, "px")));
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            // Remove last grid elements depending on width
            if (!params.centeredSlides) {
                var newSlidesGrid = [];
                for(var i1 = 0; i1 < snapGrid.length; i1 += 1){
                    var slidesGridItem = snapGrid[i1];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i1] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (snapGrid.length === 0) snapGrid = [
                0
            ];
            if (params.spaceBetween !== 0) {
                var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
                slides.filter(function(_, slideIndex) {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                }).css($167db31c658a8beb$export$2e2bcd8739ae039({
                }, key, "".concat(spaceBetween, "px")));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                var allSlidesSize = 0;
                slidesSizesGrid.forEach(function(slideSizeValue) {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                });
                allSlidesSize -= params.spaceBetween;
                var maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map(function(snap) {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                });
            }
            if (params.centerInsufficientSlides) {
                var allSlidesSize1 = 0;
                slidesSizesGrid.forEach(function(slideSizeValue) {
                    allSlidesSize1 += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                });
                allSlidesSize1 -= params.spaceBetween;
                if (allSlidesSize1 < swiperSize) {
                    var allSlidesOffset = (swiperSize - allSlidesSize1) / 2;
                    snapGrid.forEach(function(snap, snapIndex) {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    });
                    slidesGrid.forEach(function(snap, snapIndex) {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    });
                }
            }
            Object.assign(swiper, {
                slides: slides,
                snapGrid: snapGrid,
                slidesGrid: slidesGrid,
                slidesSizesGrid: slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', "".concat(-snapGrid[0], "px"));
                setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', "".concat(swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2, "px"));
                var addToSnapGrid = -swiper.snapGrid[0];
                var addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map(function(v) {
                    return v + addToSnapGrid;
                });
                swiper.slidesGrid = swiper.slidesGrid.map(function(v) {
                    return v + addToSlidesGrid;
                });
            }
            if (slidesLength !== previousSlidesLength) swiper.emit('slidesLengthChange');
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit('snapGridLengthChange');
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit('slidesGridLengthChange');
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
        };
        var updateAutoHeight = function updateAutoHeight(speed) {
            var swiper = this;
            var activeSlides = [];
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var newHeight = 0;
            var i;
            if (typeof speed === 'number') swiper.setTransition(speed);
            else if (speed === true) swiper.setTransition(swiper.params.speed);
            var getSlideByIndex = function(index) {
                if (isVirtual) return swiper.slides.filter(function(el) {
                    return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
                })[0];
                return swiper.slides.eq(index)[0];
            }; // Find slides currently in view
            if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
                if (swiper.params.centeredSlides) swiper.visibleSlides.each(function(slide) {
                    activeSlides.push(slide);
                });
                else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
                    var index2 = swiper.activeIndex + i;
                    if (index2 > swiper.slides.length && !isVirtual) break;
                    activeSlides.push(getSlideByIndex(index2));
                }
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            // Find new height from highest slide in view
            for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== 'undefined') {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            // Update Height
            if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', "".concat(newHeight, "px"));
        };
        var updateSlidesOffset = function updateSlidesOffset() {
            var swiper = this;
            var slides = swiper.slides;
            for(var i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        };
        var updateSlidesProgress = function updateSlidesProgress() {
            var translate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this && this.translate || 0;
            var swiper = this;
            var params = swiper.params;
            var slides = swiper.slides, rtl = swiper.rtlTranslate, snapGrid = swiper.snapGrid;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
            var offsetCenter = -translate;
            if (rtl) offsetCenter = translate; // Visible Slides
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for(var i = 0; i < slides.length; i += 1){
                var slide = slides[i];
                var slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                var originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                var slideBefore = -(offsetCenter - slideOffset);
                var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = $(swiper.visibleSlides);
        };
        var updateProgress = function updateProgress(translate) {
            var swiper = this;
            if (typeof translate === 'undefined') {
                var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            var params = swiper.params;
            var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            var progress = swiper.progress, isBeginning = swiper.isBeginning, isEnd = swiper.isEnd;
            var wasBeginning = isBeginning;
            var wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress: progress,
                isBeginning: isBeginning,
                isEnd: isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit('reachBeginning toEdge');
            if (isEnd && !wasEnd) swiper.emit('reachEnd toEdge');
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit('fromEdge');
            swiper.emit('progress', progress);
        };
        var updateSlidesClasses = function updateSlidesClasses() {
            var swiper = this;
            var slides = swiper.slides, params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex, realIndex = swiper.realIndex;
            var isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass("".concat(params.slideActiveClass, " ").concat(params.slideNextClass, " ").concat(params.slidePrevClass, " ").concat(params.slideDuplicateActiveClass, " ").concat(params.slideDuplicateNextClass, " ").concat(params.slideDuplicatePrevClass));
            var activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(activeIndex, "\"]"));
            else activeSlide = slides.eq(activeIndex);
            // Active classes
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) {
                // Duplicate to all looped slides
                if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
                else $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
            } // Next Slide
            var nextSlide = activeSlide.nextAll(".".concat(params.slideClass)).eq(0).addClass(params.slideNextClass);
            if (params.loop && nextSlide.length === 0) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            } // Prev Slide
            var prevSlide = activeSlide.prevAll(".".concat(params.slideClass)).eq(0).addClass(params.slidePrevClass);
            if (params.loop && prevSlide.length === 0) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                // Duplicate to all looped slides
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
                else $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
                else $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        };
        var updateActiveIndex = function updateActiveIndex(newActiveIndex) {
            var swiper = this;
            var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            var slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, params = swiper.params, previousIndex = swiper.activeIndex, previousRealIndex = swiper.realIndex, previousSnapIndex = swiper.snapIndex;
            var activeIndex = newActiveIndex;
            var snapIndex;
            if (typeof activeIndex === 'undefined') {
                for(var i = 0; i < slidesGrid.length; i += 1){
                    if (typeof slidesGrid[i + 1] !== 'undefined') {
                        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                        else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                    } else if (translate >= slidesGrid[i]) activeIndex = i;
                } // Normalize slideIndex
                if (params.normalizeSlideIndex) {
                    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
                }
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
            else {
                var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit('snapIndexChange');
                }
                return;
            } // Get real index
            var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex: snapIndex,
                realIndex: realIndex,
                previousIndex: previousIndex,
                activeIndex: activeIndex
            });
            swiper.emit('activeIndexChange');
            swiper.emit('snapIndexChange');
            if (previousRealIndex !== realIndex) swiper.emit('realIndexChange');
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit('slideChange');
        };
        var updateClickedSlide = function updateClickedSlide(e) {
            var swiper = this;
            var params = swiper.params;
            var slide = $(e).closest(".".concat(params.slideClass))[0];
            var slideFound = false;
            var slideIndex;
            if (slide) {
                for(var i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
                    slideFound = true;
                    slideIndex = i;
                    break;
                }
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
                else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = undefined;
                swiper.clickedIndex = undefined;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        };
        var getSwiperTranslate = function getSwiperTranslate() {
            var axis = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.isHorizontal() ? 'x' : 'y';
            var swiper = this;
            var params = swiper.params, rtl = swiper.rtlTranslate, translate = swiper.translate, $wrapperEl = swiper.$wrapperEl;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            var currentTranslate = getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        };
        var setTranslate = function setTranslate(translate, byController) {
            var swiper = this;
            var rtl = swiper.rtlTranslate, params = swiper.params, $wrapperEl = swiper.$wrapperEl, wrapperEl = swiper.wrapperEl, progress = swiper.progress;
            var x = 0;
            var y = 0;
            var z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate;
            else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
            else if (!params.virtualTranslate) $wrapperEl.transform("translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"));
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
            var newProgress;
            var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0;
            else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit('setTranslate', swiper.translate, byController);
        };
        var minTranslate = function minTranslate() {
            return -this.snapGrid[0];
        };
        var maxTranslate = function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        };
        var translateTo = function translateTo() {
            var translate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, speed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.params.speed, runCallbacks = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, translateBounds = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, internal = arguments.length > 4 ? arguments[4] : void 0;
            var swiper = this;
            var params = swiper.params, wrapperEl = swiper.wrapperEl;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            var minTranslate = swiper.minTranslate();
            var maxTranslate = swiper.maxTranslate();
            var newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
            else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
            else newTranslate = translate; // Update progress
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                var isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
                else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper: swiper,
                            targetPosition: -newTranslate,
                            side: isH ? 'left' : 'top'
                        });
                        return true;
                    }
                    var _obj;
                    wrapperEl.scrollTo((_obj = {
                    }, $167db31c658a8beb$export$2e2bcd8739ae039(_obj, isH ? 'left' : 'top', -newTranslate), $167db31c658a8beb$export$2e2bcd8739ae039(_obj, "behavior", 'smooth'), _obj));
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit('beforeTransitionStart', speed, internal);
                    swiper.emit('transitionEnd');
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit('beforeTransitionStart', speed, internal);
                    swiper.emit('transitionStart');
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit('transitionEnd');
                    };
                    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        };
        var setTransition = function setTransition(duration, byController) {
            var swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit('setTransition', duration, byController);
        };
        var transitionEmit = function transitionEmit(param) {
            var swiper = param.swiper, runCallbacks = param.runCallbacks, direction = param.direction, step = param.step;
            var activeIndex = swiper.activeIndex, previousIndex = swiper.previousIndex;
            var dir = direction;
            if (!dir) {
                if (activeIndex > previousIndex) dir = 'next';
                else if (activeIndex < previousIndex) dir = 'prev';
                else dir = 'reset';
            }
            swiper.emit("transition".concat(step));
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === 'reset') {
                    swiper.emit("slideResetTransition".concat(step));
                    return;
                }
                swiper.emit("slideChangeTransition".concat(step));
                if (dir === 'next') swiper.emit("slideNextTransition".concat(step));
                else swiper.emit("slidePrevTransition".concat(step));
            }
        };
        var transitionStart = function transitionStart() {
            var runCallbacks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, direction = arguments.length > 1 ? arguments[1] : void 0;
            var swiper = this;
            var params = swiper.params;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper: swiper,
                runCallbacks: runCallbacks,
                direction: direction,
                step: 'Start'
            });
        };
        var transitionEnd = function transitionEnd() {
            var runCallbacks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, direction = arguments.length > 1 ? arguments[1] : void 0;
            var swiper = this;
            var params = swiper.params;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper: swiper,
                runCallbacks: runCallbacks,
                direction: direction,
                step: 'End'
            });
        };
        var slideTo = function slideTo() {
            var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, speed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.params.speed, runCallbacks = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, internal = arguments.length > 3 ? arguments[3] : void 0, initial = arguments.length > 4 ? arguments[4] : void 0;
            if (typeof index !== 'number' && typeof index !== 'string') throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(typeof index === "undefined" ? "undefined" : $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(index), "] given."));
            if (typeof index === 'string') {
                /**
                 * The `index` argument converted from `string` to `number`.
                 * @type {number}
                 */ var indexAsNumber = parseInt(index, 10);
                /**
                 * Determines whether the `index` argument is a valid `number`
                 * after being converted from the `string` type.
                 * @type {boolean}
                 */ var isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(index, "] given."));
                // Knowing that the converted `index` is a valid number,
                // we can update the original argument's value.
                index = indexAsNumber;
            }
            var swiper = this;
            var slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            var params = swiper.params, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, previousIndex = swiper.previousIndex, activeIndex = swiper.activeIndex, rtl = swiper.rtlTranslate, wrapperEl = swiper.wrapperEl, enabled = swiper.enabled;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit('beforeSlideChangeStart');
            var translate = -snapGrid[snapIndex]; // Update progress
            swiper.updateProgress(translate); // Normalize slideIndex
            if (params.normalizeSlideIndex) for(var i = 0; i < slidesGrid.length; i += 1){
                var normalizedTranslate = -Math.floor(translate * 100);
                var normalizedGrid = Math.floor(slidesGrid[i] * 100);
                var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
                    else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            // Directions locks
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                    if ((activeIndex || 0) !== slideIndex) return false;
                }
            }
            var direction = void 0;
            if (slideIndex > activeIndex) direction = 'next';
            else if (slideIndex < activeIndex) direction = 'prev';
            else direction = 'reset'; // Update Index
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex); // Update Height
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== 'slide') swiper.setTranslate(translate);
                if (direction !== 'reset') {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                var isH = swiper.isHorizontal();
                var t = rtl ? translate : -translate;
                if (speed === 0) {
                    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = 'none';
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                    if (isVirtual) requestAnimationFrame(function() {
                        swiper.wrapperEl.style.scrollSnapType = '';
                        swiper._swiperImmediateVirtual = false;
                    });
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper: swiper,
                            targetPosition: t,
                            side: isH ? 'left' : 'top'
                        });
                        return true;
                    }
                    var _obj;
                    wrapperEl.scrollTo((_obj = {
                    }, $167db31c658a8beb$export$2e2bcd8739ae039(_obj, isH ? 'left' : 'top', t), $167db31c658a8beb$export$2e2bcd8739ae039(_obj, "behavior", 'smooth'), _obj));
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
            else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        };
        var slideToLoop = function slideToLoop() {
            var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, speed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.params.speed, runCallbacks = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, internal = arguments.length > 3 ? arguments[3] : void 0;
            var swiper = this;
            var newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        };
        var slideNext = /* eslint no-unused-vars: "off" */ function slideNext() {
            var speed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.params.speed, runCallbacks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, internal = arguments.length > 2 ? arguments[2] : void 0;
            var swiper = this;
            var animating = swiper.animating, enabled = swiper.enabled, params = swiper.params;
            if (!enabled) return swiper;
            var perGroup = params.slidesPerGroup;
            if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
            var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix(); // eslint-disable-next-line
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        };
        var slidePrev = /* eslint no-unused-vars: "off" */ function slidePrev() {
            var speed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.params.speed, runCallbacks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, internal = arguments.length > 2 ? arguments[2] : void 0;
            var swiper = this;
            var params = swiper.params, animating = swiper.animating, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix(); // eslint-disable-next-line
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            var translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            var normalizedTranslate = normalize(translate);
            var normalizedSnapGrid = snapGrid.map(function(val) {
                return normalize(val);
            });
            var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === 'undefined' && params.cssMode) {
                var prevSnapIndex;
                snapGrid.forEach(function(snap, snapIndex) {
                    if (normalizedTranslate >= snap) // prevSnap = snap;
                        prevSnapIndex = snapIndex;
                });
                if (typeof prevSnapIndex !== 'undefined') prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            var prevIndex = 0;
            if (typeof prevSnap !== 'undefined') {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        };
        var slideReset = /* eslint no-unused-vars: "off" */ function slideReset() {
            var speed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.params.speed, runCallbacks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, internal = arguments.length > 2 ? arguments[2] : void 0;
            var swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        };
        var slideToClosest = /* eslint no-unused-vars: "off" */ function slideToClosest() {
            var speed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.params.speed, runCallbacks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, internal = arguments.length > 2 ? arguments[2] : void 0, threshold = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5;
            var swiper = this;
            var index = swiper.activeIndex;
            var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                // The current translate is on or after the current snap index, so the choice
                // is between the current index and the one after it.
                var currentSnap = swiper.snapGrid[snapIndex];
                var nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                // The current translate is before the current snap index, so the choice
                // is between the current index and the one before it.
                var prevSnap = swiper.snapGrid[snapIndex - 1];
                var currentSnap1 = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap1 - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        };
        var slideToClickedSlide = function slideToClickedSlide() {
            var swiper = this;
            var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
            var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            var slideToIndex = swiper.clickedIndex;
            var realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
                if (params.centeredSlides) {
                    if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                        swiper.loopFix();
                        slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
                        nextTick(function() {
                            swiper.slideTo(slideToIndex);
                        });
                    } else swiper.slideTo(slideToIndex);
                } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
                    nextTick(function() {
                        swiper.slideTo(slideToIndex);
                    });
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        };
        var loopCreate = function loopCreate() {
            var swiper = this;
            var document = getDocument();
            var params = swiper.params, $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides
            var $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
            var slides = $selector.children(".".concat(params.slideClass));
            if (params.loopFillGroupWithBlank) {
                var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for(var i = 0; i < blankSlidesNum; i += 1){
                        var blankNode = $(document.createElement('div')).addClass("".concat(params.slideClass, " ").concat(params.slideBlankClass));
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(".".concat(params.slideClass));
                }
            }
            if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
            var prependSlides = [];
            var appendSlides = [];
            slides.each(function(el, index) {
                var slide = $(el);
                if (index < swiper.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for(var i2 = 0; i2 < appendSlides.length; i2 += 1)$selector.append($(appendSlides[i2].cloneNode(true)).addClass(params.slideDuplicateClass));
            for(var i3 = prependSlides.length - 1; i3 >= 0; i3 -= 1)$selector.prepend($(prependSlides[i3].cloneNode(true)).addClass(params.slideDuplicateClass));
        };
        var loopFix = function loopFix() {
            var swiper = this;
            swiper.emit('beforeLoopFix');
            var activeIndex = swiper.activeIndex, slides = swiper.slides, loopedSlides = swiper.loopedSlides, allowSlidePrev = swiper.allowSlidePrev, allowSlideNext = swiper.allowSlideNext, snapGrid = swiper.snapGrid, rtl = swiper.rtlTranslate;
            var newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            var snapTranslate = -snapGrid[activeIndex];
            var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - loopedSlides * 3 + activeIndex;
                newIndex += loopedSlides;
                var slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                // Fix For Positive Oversliding
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                var slideChanged1 = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged1 && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit('loopFix');
        };
        var loopDestroy = function loopDestroy() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl, params = swiper.params, slides = swiper.slides;
            $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, ",.").concat(params.slideClass, ".").concat(params.slideBlankClass)).remove();
            slides.removeAttr('data-swiper-slide-index');
        };
        var setGrabCursor = function setGrabCursor(moving) {
            var swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            var el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
            el.style.cursor = 'move';
            el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            el.style.cursor = moving ? 'grabbing' : 'grab';
        };
        var unsetGrabCursor = function unsetGrabCursor() {
            var swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
        };
        var closestElement = function closestElement(selector) {
            var base = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
            function __closestFrom(el) {
                if (!el || el === getDocument() || el === getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                var found = el.closest(selector);
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        };
        var onTouchStart = function onTouchStart(event) {
            var swiper = this;
            var document = getDocument();
            var window = getWindow();
            var data = swiper.touchEventsData;
            var params = swiper.params, touches = swiper.touches, enabled = swiper.enabled;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            var e = event;
            if (e.originalEvent) e = e.originalEvent;
            var $targetEl = $(e.target);
            if (params.touchEventsTarget === 'wrapper') {
                if (!$targetEl.closest(swiper.wrapperEl).length) return;
            }
            data.isTouchEvent = e.type === 'touchstart';
            if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
            if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return; // change target el for shadow root component
            var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = $(event.path[0]);
            var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass);
            var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) {
                if (!$targetEl.closest(params.swipeHandler)[0]) return;
            }
            touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            var startX = touches.currentX;
            var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
            var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === 'prevent') event.preventDefault();
                else return;
            }
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: undefined,
                startMoving: undefined
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = undefined;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($targetEl.is(data.focusableElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            swiper.emit('touchStart', e);
        };
        var onTouchMove = function onTouchMove(event) {
            var document = getDocument();
            var swiper = this;
            var data = swiper.touchEventsData;
            var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, enabled = swiper.enabled;
            if (!enabled) return;
            var e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit('touchMoveOpposite', e);
                return;
            }
            if (data.isTouchEvent && e.type !== 'touchmove') return;
            var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
            var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                // isMoved = true;
                swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
                if (swiper.isVertical()) // Vertical
                {
                    if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                        data.isTouched = false;
                        data.isMoved = false;
                        return;
                    }
                } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            }
            if (data.isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
                    data.isMoved = true;
                    swiper.allowClick = false;
                    return;
                }
            }
            if (data.allowTouchCallbacks) swiper.emit('touchMove', e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            var diffX = touches.currentX - touches.startX;
            var diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;
            if (typeof data.isScrolling === 'undefined') {
                var touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
                else // eslint-disable-next-line
                if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit('touchMoveOpposite', e);
            if (typeof data.startMoving === 'undefined') {
                if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            }
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
                data.allowMomentumBounce = false; // Grab Cursor
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit('sliderFirstMove', e);
            }
            swiper.emit('sliderMove', e);
            data.isMoved = true;
            var diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
            data.currentTranslate = diff + data.startTranslate;
            var disableParentSwiper = true;
            var resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            // Directions locks
            if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            // Threshold
            if (params.threshold > 0) {
                if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                    if (!data.allowThresholdMove) {
                        data.allowThresholdMove = true;
                        touches.startX = touches.currentX;
                        touches.startY = touches.currentY;
                        data.currentTranslate = data.startTranslate;
                        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                        return;
                    }
                } else {
                    data.currentTranslate = data.startTranslate;
                    return;
                }
            }
            if (!params.followFinger || params.cssMode) return; // Update active index in free mode
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            // Update progress
            swiper.updateProgress(data.currentTranslate); // Update translate
            swiper.setTranslate(data.currentTranslate);
        };
        var onTouchEnd = function onTouchEnd(event) {
            var swiper = this;
            var data = swiper.touchEventsData;
            var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, slidesGrid = swiper.slidesGrid, enabled = swiper.enabled;
            if (!enabled) return;
            var e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit('touchEnd', e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            } // Return Grab Cursor
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            // Time diff
            var touchEndTime = now();
            var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
            if (swiper.allowClick) {
                var pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit('tap click', e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit('doubleTap doubleClick', e);
            }
            data.lastClickTime = now();
            nextTick(function() {
                if (!swiper.destroyed) swiper.allowClick = true;
            });
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            var currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
            else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos: currentPos
                });
                return;
            } // Find current slide
            var stopIndex = 0;
            var groupSize = swiper.slidesSizesGrid[0];
            for(var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
                var increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== 'undefined') {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            } // Find current slide size
            var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            var increment1 = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                // Long touches
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === 'next') {
                    if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment1);
                    else swiper.slideTo(stopIndex);
                }
                if (swiper.swipeDirection === 'prev') {
                    if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment1);
                    else swiper.slideTo(stopIndex);
                }
            } else {
                // Short swipes
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === 'next') swiper.slideTo(stopIndex + increment1);
                    if (swiper.swipeDirection === 'prev') swiper.slideTo(stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment1);
                else swiper.slideTo(stopIndex);
            }
        };
        var onResize = function onResize() {
            var swiper = this;
            var params = swiper.params, el = swiper.el;
            if (el && el.offsetWidth === 0) return; // Breakpoints
            if (params.breakpoints) swiper.setBreakpoint();
            // Save locks
            var allowSlideNext = swiper.allowSlideNext, allowSlidePrev = swiper.allowSlidePrev, snapGrid = swiper.snapGrid; // Disable locks on resize
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            // Return locks after resize
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        };
        var onClick = function onClick(e) {
            var swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        var onScroll = function onScroll() {
            var swiper = this;
            var wrapperEl = swiper.wrapperEl, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
            else swiper.translate = -wrapperEl.scrollTop;
            // eslint-disable-next-line
            if (swiper.translate === -0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            var newProgress;
            var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0;
            else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit('setTranslate', swiper.translate, false);
        };
        var dummyEventListener = function dummyEventListener() {
        };
        var attachEvents = function attachEvents() {
            var swiper = this;
            var document = getDocument();
            var params = swiper.params, support = swiper.support;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener('touchstart', dummyEventListener);
                dummyEventAttached = true;
            }
            events1(swiper, 'on');
        };
        var detachEvents = function detachEvents() {
            var swiper = this;
            events1(swiper, 'off');
        };
        var setBreakpoint = function setBreakpoint() {
            var swiper = this;
            var activeIndex = swiper.activeIndex, initialized = swiper.initialized, _loopedSlides = swiper.loopedSlides, loopedSlides = _loopedSlides === void 0 ? 0 : _loopedSlides, params = swiper.params, $el = swiper.$el;
            var breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
            var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
            var breakpointParams = breakpointOnlyParams || swiper.originalParams;
            var wasMultiRow = isGridEnabled(swiper, params);
            var isMultiRow = isGridEnabled(swiper, breakpointParams);
            var wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass("".concat(params.containerModifierClass, "grid ").concat(params.containerModifierClass, "grid-column"));
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass("".concat(params.containerModifierClass, "grid"));
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') $el.addClass("".concat(params.containerModifierClass, "grid-column"));
                swiper.emitContainerClasses();
            }
            var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            extend(swiper.params, breakpointParams);
            var isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable();
            else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit('_beforeBreakpoint', breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit('breakpoint', breakpointParams);
        };
        var getBreakpoint = function getBreakpoint(breakpoints) {
            var base = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'window', containerEl = arguments.length > 2 ? arguments[2] : void 0;
            if (!breakpoints || base === 'container' && !containerEl) return undefined;
            var breakpoint = false;
            var window = getWindow();
            var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
            var points = Object.keys(breakpoints).map(function(point) {
                if (typeof point === 'string' && point.indexOf('@') === 0) {
                    var minRatio = parseFloat(point.substr(1));
                    var value = currentHeight * minRatio;
                    return {
                        value: value,
                        point: point
                    };
                }
                return {
                    value: point,
                    point: point
                };
            });
            points.sort(function(a, b) {
                return parseInt(a.value, 10) - parseInt(b.value, 10);
            });
            for(var i = 0; i < points.length; i += 1){
                var _i = points[i], point1 = _i.point, value1 = _i.value;
                if (base === 'window') {
                    if (window.matchMedia("(min-width: ".concat(value1, "px)")).matches) breakpoint = point1;
                } else if (value1 <= containerEl.clientWidth) breakpoint = point1;
            }
            return breakpoint || 'max';
        };
        var prepareClasses = function prepareClasses(entries, prefix) {
            var resultClasses = [];
            entries.forEach(function(item) {
                if (typeof item === 'object') Object.keys(item).forEach(function(classNames) {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                });
                else if (typeof item === 'string') resultClasses.push(prefix + item);
            });
            return resultClasses;
        };
        var addClasses = function addClasses() {
            var _classNames;
            var swiper = this;
            var classNames = swiper.classNames, params = swiper.params, rtl = swiper.rtl, $el = swiper.$el, device = swiper.device, support = swiper.support; // prettier-ignore
            var suffixes = prepareClasses([
                'initialized',
                params.direction,
                {
                    'pointer-events': !support.touch
                },
                {
                    'free-mode': swiper.params.freeMode && params.freeMode.enabled
                },
                {
                    autoheight: params.autoHeight
                },
                {
                    rtl: rtl
                },
                {
                    grid: params.grid && params.grid.rows > 1
                },
                {
                    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
                },
                {
                    android: device.android
                },
                {
                    ios: device.ios
                },
                {
                    'css-mode': params.cssMode
                },
                {
                    centered: params.cssMode && params.centeredSlides
                }
            ], params.containerModifierClass);
            (_classNames = classNames).push.apply(_classNames, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(suffixes));
            $el.addClass($5fc5c89fea7cc5a5$export$2e2bcd8739ae039(classNames).join(' '));
            swiper.emitContainerClasses();
        };
        var removeClasses = function removeClasses() {
            var swiper = this;
            var $el = swiper.$el, classNames = swiper.classNames;
            $el.removeClass(classNames.join(' '));
            swiper.emitContainerClasses();
        };
        var loadImage = function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            var window = getWindow();
            var image;
            function onReady() {
                if (callback) callback();
            }
            var isPicture = $(imageEl).parent('picture')[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (sizes) image.sizes = sizes;
                    if (srcset) image.srcset = srcset;
                    if (src) image.src = src;
                } else onReady();
            } else // image already loaded...
                onReady();
        };
        var preloadImages = function preloadImages() {
            var swiper = this;
            swiper.imagesToLoad = swiper.$el.find('img');
            function onReady() {
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
                if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit('imagesReady');
                }
            }
            for(var i = 0; i < swiper.imagesToLoad.length; i += 1){
                var imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
            }
        };
        var checkOverflow = function checkOverflow() {
            var swiper = this;
            var wasLocked = swiper.isLocked, params = swiper.params;
            var slidesOffsetBefore = params.slidesOffsetBefore;
            if (slidesOffsetBefore) {
                var lastSlideIndex = swiper.slides.length - 1;
                var lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
        };
        var moduleExtendParams = function moduleExtendParams(params, allModulesParams) {
            return function extendParams() {
                var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                };
                var moduleParamName = Object.keys(obj)[0];
                var moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== 'object' || moduleParams === null) {
                    extend(allModulesParams, obj);
                    return;
                }
                if ([
                    'navigation',
                    'pagination',
                    'scrollbar'
                ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                    extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                extend(allModulesParams, obj);
            };
        };
        var Virtual = function Virtual(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                virtual: {
                    enabled: false,
                    slides: [],
                    cache: true,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: true,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            });
            var cssModeTimeout;
            swiper.virtual = {
                cache: {
                },
                from: undefined,
                to: undefined,
                slides: [],
                offset: 0,
                slidesGrid: []
            };
            function renderSlide(slide, index) {
                var params = swiper.params.virtual;
                if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
                var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"".concat(swiper.params.slideClass, "\" data-swiper-slide-index=\"").concat(index, "\">").concat(slide, "</div>"));
                if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
                if (params.cache) swiper.virtual.cache[index] = $slideEl;
                return $slideEl;
            }
            function update(force) {
                var _params = swiper.params, slidesPerView = _params.slidesPerView, slidesPerGroup = _params.slidesPerGroup, centeredSlides = _params.centeredSlides;
                var _virtual = swiper.params.virtual, addSlidesBefore = _virtual.addSlidesBefore, addSlidesAfter = _virtual.addSlidesAfter;
                var _virtual1 = swiper.virtual, previousFrom = _virtual1.from, previousTo = _virtual1.to, slides = _virtual1.slides, previousSlidesGrid = _virtual1.slidesGrid, previousOffset = _virtual1.offset;
                if (!swiper.params.cssMode) swiper.updateActiveIndex();
                var activeIndex = swiper.activeIndex || 0;
                var offsetProp;
                if (swiper.rtlTranslate) offsetProp = 'right';
                else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
                var slidesAfter;
                var slidesBefore;
                if (centeredSlides) {
                    slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                    slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
                } else {
                    slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                    slidesBefore = slidesPerGroup + addSlidesBefore;
                }
                var from = Math.max((activeIndex || 0) - slidesBefore, 0);
                var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
                var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
                Object.assign(swiper.virtual, {
                    from: from,
                    to: to,
                    offset: offset,
                    slidesGrid: swiper.slidesGrid
                });
                function onRendered() {
                    swiper.updateSlides();
                    swiper.updateProgress();
                    swiper.updateSlidesClasses();
                    if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
                }
                if (previousFrom === from && previousTo === to && !force) {
                    if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, "".concat(offset, "px"));
                    swiper.updateProgress();
                    return;
                }
                if (swiper.params.virtual.renderExternal) {
                    swiper.params.virtual.renderExternal.call(swiper, {
                        offset: offset,
                        from: from,
                        to: to,
                        slides: function getSlides() {
                            var slidesToRender = [];
                            for(var i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                            return slidesToRender;
                        }()
                    });
                    if (swiper.params.virtual.renderExternalUpdate) onRendered();
                    return;
                }
                var prependIndexes = [];
                var appendIndexes = [];
                if (force) swiper.$wrapperEl.find(".".concat(swiper.params.slideClass)).remove();
                else {
                    for(var i5 = previousFrom; i5 <= previousTo; i5 += 1)if (i5 < from || i5 > to) swiper.$wrapperEl.find(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(i5, "\"]")).remove();
                }
                for(var i4 = 0; i4 < slides.length; i4 += 1)if (i4 >= from && i4 <= to) {
                    if (typeof previousTo === 'undefined' || force) appendIndexes.push(i4);
                    else {
                        if (i4 > previousTo) appendIndexes.push(i4);
                        if (i4 < previousFrom) prependIndexes.push(i4);
                    }
                }
                appendIndexes.forEach(function(index) {
                    swiper.$wrapperEl.append(renderSlide(slides[index], index));
                });
                prependIndexes.sort(function(a, b) {
                    return b - a;
                }).forEach(function(index) {
                    swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
                });
                swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, "".concat(offset, "px"));
                onRendered();
            }
            function appendSlide(slides) {
                if (typeof slides === 'object' && 'length' in slides) {
                    for(var i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
                } else swiper.virtual.slides.push(slides);
                update(true);
            }
            function prependSlide(slides) {
                var activeIndex = swiper.activeIndex;
                var newActiveIndex = activeIndex + 1;
                var numberOfNewSlides = 1;
                if (Array.isArray(slides)) {
                    for(var i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                    newActiveIndex = activeIndex + slides.length;
                    numberOfNewSlides = slides.length;
                } else swiper.virtual.slides.unshift(slides);
                if (swiper.params.virtual.cache) {
                    var cache = swiper.virtual.cache;
                    var newCache = {
                    };
                    Object.keys(cache).forEach(function(cachedIndex) {
                        var $cachedEl = cache[cachedIndex];
                        var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
                        if (cachedElIndex) $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
                    });
                    swiper.virtual.cache = newCache;
                }
                update(true);
                swiper.slideTo(newActiveIndex, 0);
            }
            function removeSlide(slidesIndexes) {
                if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
                var activeIndex = swiper.activeIndex;
                if (Array.isArray(slidesIndexes)) for(var i = slidesIndexes.length - 1; i >= 0; i -= 1){
                    swiper.virtual.slides.splice(slidesIndexes[i], 1);
                    if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
                    if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }
                else {
                    swiper.virtual.slides.splice(slidesIndexes, 1);
                    if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
                    if (slidesIndexes < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }
                update(true);
                swiper.slideTo(activeIndex, 0);
            }
            function removeAllSlides() {
                swiper.virtual.slides = [];
                if (swiper.params.virtual.cache) swiper.virtual.cache = {
                };
                update(true);
                swiper.slideTo(0, 0);
            }
            on('beforeInit', function() {
                if (!swiper.params.virtual.enabled) return;
                swiper.virtual.slides = swiper.params.virtual.slides;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
                if (!swiper.params.initialSlide) update();
            });
            on('setTranslate', function() {
                if (!swiper.params.virtual.enabled) return;
                if (swiper.params.cssMode && !swiper._immediateVirtual) {
                    clearTimeout(cssModeTimeout);
                    cssModeTimeout = setTimeout(function() {
                        update();
                    }, 100);
                } else update();
            });
            on('init update resize', function() {
                if (!swiper.params.virtual.enabled) return;
                if (swiper.params.cssMode) setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', "".concat(swiper.virtualSize, "px"));
            });
            Object.assign(swiper.virtual, {
                appendSlide: appendSlide,
                prependSlide: prependSlide,
                removeSlide: removeSlide,
                removeAllSlides: removeAllSlides,
                update: update
            });
        };
        var Keyboard = /* eslint-disable consistent-return */ function Keyboard(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on, emit = param.emit;
            var document = getDocument();
            var window = getWindow();
            swiper.keyboard = {
                enabled: false
            };
            extendParams({
                keyboard: {
                    enabled: false,
                    onlyInViewport: true,
                    pageUpDown: true
                }
            });
            function handle(event) {
                if (!swiper.enabled) return;
                var rtl = swiper.rtlTranslate;
                var e = event;
                if (e.originalEvent) e = e.originalEvent; // jquery fix
                var kc = e.keyCode || e.charCode;
                var pageUpDown = swiper.params.keyboard.pageUpDown;
                var isPageUp = pageUpDown && kc === 33;
                var isPageDown = pageUpDown && kc === 34;
                var isArrowLeft = kc === 37;
                var isArrowRight = kc === 39;
                var isArrowUp = kc === 38;
                var isArrowDown = kc === 40; // Directions locks
                if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
                if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
                if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) return undefined;
                if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                    var inView = false; // Check that swiper should be inside of visible area of window
                    if (swiper.$el.parents(".".concat(swiper.params.slideClass)).length > 0 && swiper.$el.parents(".".concat(swiper.params.slideActiveClass)).length === 0) return undefined;
                    var $el = swiper.$el;
                    var swiperWidth = $el[0].clientWidth;
                    var swiperHeight = $el[0].clientHeight;
                    var windowWidth = window.innerWidth;
                    var windowHeight = window.innerHeight;
                    var swiperOffset = swiper.$el.offset();
                    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                    var swiperCoord = [
                        [
                            swiperOffset.left,
                            swiperOffset.top
                        ],
                        [
                            swiperOffset.left + swiperWidth,
                            swiperOffset.top
                        ],
                        [
                            swiperOffset.left,
                            swiperOffset.top + swiperHeight
                        ],
                        [
                            swiperOffset.left + swiperWidth,
                            swiperOffset.top + swiperHeight
                        ]
                    ];
                    for(var i = 0; i < swiperCoord.length; i += 1){
                        var point = swiperCoord[i];
                        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                            inView = true;
                        }
                    }
                    if (!inView) return undefined;
                }
                if (swiper.isHorizontal()) {
                    if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                        if (e.preventDefault) e.preventDefault();
                        else e.returnValue = false;
                    }
                    if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                    if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
                } else {
                    if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                        if (e.preventDefault) e.preventDefault();
                        else e.returnValue = false;
                    }
                    if (isPageDown || isArrowDown) swiper.slideNext();
                    if (isPageUp || isArrowUp) swiper.slidePrev();
                }
                emit('keyPress', kc);
                return undefined;
            }
            function enable() {
                if (swiper.keyboard.enabled) return;
                $(document).on('keydown', handle);
                swiper.keyboard.enabled = true;
            }
            function disable() {
                if (!swiper.keyboard.enabled) return;
                $(document).off('keydown', handle);
                swiper.keyboard.enabled = false;
            }
            on('init', function() {
                if (swiper.params.keyboard.enabled) enable();
            });
            on('destroy', function() {
                if (swiper.keyboard.enabled) disable();
            });
            Object.assign(swiper.keyboard, {
                enable: enable,
                disable: disable
            });
        };
        var Mousewheel = /* eslint-disable consistent-return */ function Mousewheel(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on, emit = param.emit;
            var window = getWindow();
            extendParams({
                mousewheel: {
                    enabled: false,
                    releaseOnEdges: false,
                    invert: false,
                    forceToAxis: false,
                    sensitivity: 1,
                    eventsTarget: 'container',
                    thresholdDelta: null,
                    thresholdTime: null
                }
            });
            swiper.mousewheel = {
                enabled: false
            };
            var timeout;
            var lastScrollTime = now();
            var lastEventBeforeSnap;
            var recentWheelEvents = [];
            function normalize(e) {
                // Reasonable defaults
                var PIXEL_STEP = 10;
                var LINE_HEIGHT = 40;
                var PAGE_HEIGHT = 800;
                var sX = 0;
                var sY = 0; // spinX, spinY
                var pX = 0;
                var pY = 0; // pixelX, pixelY
                // Legacy
                if ('detail' in e) sY = e.detail;
                if ('wheelDelta' in e) sY = -e.wheelDelta / 120;
                if ('wheelDeltaY' in e) sY = -e.wheelDeltaY / 120;
                if ('wheelDeltaX' in e) sX = -e.wheelDeltaX / 120;
                // side scrolling on FF with DOMMouseScroll
                if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                    sX = sY;
                    sY = 0;
                }
                pX = sX * PIXEL_STEP;
                pY = sY * PIXEL_STEP;
                if ('deltaY' in e) pY = e.deltaY;
                if ('deltaX' in e) pX = e.deltaX;
                if (e.shiftKey && !pX) {
                    // if user scrolls with shift he wants horizontal scroll
                    pX = pY;
                    pY = 0;
                }
                if ((pX || pY) && e.deltaMode) {
                    if (e.deltaMode === 1) {
                        // delta in LINE units
                        pX *= LINE_HEIGHT;
                        pY *= LINE_HEIGHT;
                    } else {
                        // delta in PAGE units
                        pX *= PAGE_HEIGHT;
                        pY *= PAGE_HEIGHT;
                    }
                } // Fall-back if spin cannot be determined
                if (pX && !sX) sX = pX < 1 ? -1 : 1;
                if (pY && !sY) sY = pY < 1 ? -1 : 1;
                return {
                    spinX: sX,
                    spinY: sY,
                    pixelX: pX,
                    pixelY: pY
                };
            }
            function handleMouseEnter() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = true;
            }
            function handleMouseLeave() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = false;
            }
            function animateSlider(newEvent) {
                if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
                    return false;
                if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
                    return false;
                // If the movement is NOT big enough and
                // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
                //   Don't go any further (avoid insignificant scroll movement).
                if (newEvent.delta >= 6 && now() - lastScrollTime < 60) // Return false as a default
                    return true;
                // If user is scrolling towards the end:
                //   If the slider hasn't hit the latest slide or
                //   if the slider is a loop and
                //   if the slider isn't moving right now:
                //     Go to next slide and
                //     emit a scroll event.
                // Else (the user is scrolling towards the beginning) and
                // if the slider hasn't hit the first slide or
                // if the slider is a loop and
                // if the slider isn't moving right now:
                //   Go to prev slide and
                //   emit a scroll event.
                if (newEvent.direction < 0) {
                    if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                        swiper.slideNext();
                        emit('scroll', newEvent.raw);
                    }
                } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                    swiper.slidePrev();
                    emit('scroll', newEvent.raw);
                } // If you got here is because an animation has been triggered so store the current time
                lastScrollTime = new window.Date().getTime(); // Return false as a default
                return false;
            }
            function releaseScroll(newEvent) {
                var params = swiper.params.mousewheel;
                if (newEvent.direction < 0) {
                    if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
                        return true;
                } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
                    return true;
                return false;
            }
            function handle(event) {
                var e = event;
                var disableParentSwiper = true;
                if (!swiper.enabled) return;
                var params = swiper.params.mousewheel;
                if (swiper.params.cssMode) e.preventDefault();
                var target = swiper.$el;
                if (swiper.params.mousewheel.eventsTarget !== 'container') target = $(swiper.params.mousewheel.eventsTarget);
                if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
                if (e.originalEvent) e = e.originalEvent; // jquery fix
                var delta = 0;
                var rtlFactor = swiper.rtlTranslate ? -1 : 1;
                var data = normalize(e);
                if (params.forceToAxis) {
                    if (swiper.isHorizontal()) {
                        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                        else return true;
                    } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
                    else return true;
                } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
                if (delta === 0) return true;
                if (params.invert) delta = -delta; // Get the scroll positions
                var positions = swiper.getTranslate() + delta * params.sensitivity;
                if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
                if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
                //     the disableParentSwiper will be true.
                // When loop is false:
                //     if the scroll positions is not on edge,
                //     then the disableParentSwiper will be true.
                //     if the scroll on edge positions,
                //     then the disableParentSwiper will be false.
                disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
                if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
                if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                    // Register the new event in a variable which stores the relevant data
                    var newEvent = {
                        time: now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta),
                        raw: event
                    }; // Keep the most recent events
                    if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
                    var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
                    //   If direction has changed or
                    //   if the scroll is quicker than the previous one:
                    //     Animate the slider.
                    // Else (this is the first time the wheel is moved):
                    //     Animate the slider.
                    if (prevEvent) {
                        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
                    } else animateSlider(newEvent);
                    // If it's time to release the scroll:
                    //   Return now so you don't hit the preventDefault.
                    if (releaseScroll(newEvent)) return true;
                } else {
                    // Freemode or scrollContainer:
                    // If we recently snapped after a momentum scroll, then ignore wheel events
                    // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                    // or if it's a new scroll (larger delta or inverse sign as last event before
                    // an end-of-momentum snap).
                    var newEvent1 = {
                        time: now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta)
                    };
                    var ignoreWheelEvents = lastEventBeforeSnap && newEvent1.time < lastEventBeforeSnap.time + 500 && newEvent1.delta <= lastEventBeforeSnap.delta && newEvent1.direction === lastEventBeforeSnap.direction;
                    if (!ignoreWheelEvents) {
                        lastEventBeforeSnap = undefined;
                        if (swiper.params.loop) swiper.loopFix();
                        var position = swiper.getTranslate() + delta * params.sensitivity;
                        var wasBeginning = swiper.isBeginning;
                        var wasEnd = swiper.isEnd;
                        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                        swiper.setTransition(0);
                        swiper.setTranslate(position);
                        swiper.updateProgress();
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();
                        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                        if (swiper.params.freeMode.sticky) {
                            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                            // the end of a momentum scroll by storing recent (N=15?) wheel events.
                            // 1. do all N events have decreasing or same (absolute value) delta?
                            // 2. did all N events arrive in the last M (M=500?) msecs?
                            // 3. does the earliest event have an (absolute value) delta that's
                            //    at least P (P=1?) larger than the most recent event's delta?
                            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                            // Snap immediately and ignore remaining wheel events in this scroll.
                            // See comment above for "remaining wheel events in this scroll" determination.
                            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                            clearTimeout(timeout);
                            timeout = undefined;
                            if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                            var prevEvent1 = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                            var firstEvent = recentWheelEvents[0];
                            recentWheelEvents.push(newEvent1);
                            if (prevEvent1 && (newEvent1.delta > prevEvent1.delta || newEvent1.direction !== prevEvent1.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                                recentWheelEvents.splice(0);
                            else if (recentWheelEvents.length >= 15 && newEvent1.time - firstEvent.time < 500 && firstEvent.delta - newEvent1.delta >= 1 && newEvent1.delta <= 6) {
                                // We're at the end of the deceleration of a momentum scroll, so there's no need
                                // to wait for more events. Snap ASAP on the next tick.
                                // Also, because there's some remaining momentum we'll bias the snap in the
                                // direction of the ongoing scroll because it's better UX for the scroll to snap
                                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                                // if it's already scrolled more than 20% in the current direction, keep going.
                                var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                                lastEventBeforeSnap = newEvent1;
                                recentWheelEvents.splice(0);
                                timeout = nextTick(function() {
                                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                                }, 0); // no delay; move on next tick
                            }
                            if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                                // we'll consider a scroll "complete" when there haven't been any wheel events
                                // for 500ms.
                                timeout = nextTick(function() {
                                    var snapToThreshold = 0.5;
                                    lastEventBeforeSnap = newEvent1;
                                    recentWheelEvents.splice(0);
                                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                                }, 500);
                        } // Emit event
                        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay
                        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
                    }
                }
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                return false;
            }
            function events(method) {
                var target = swiper.$el;
                if (swiper.params.mousewheel.eventsTarget !== 'container') target = $(swiper.params.mousewheel.eventsTarget);
                target[method]('mouseenter', handleMouseEnter);
                target[method]('mouseleave', handleMouseLeave);
                target[method]('wheel', handle);
            }
            function enable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.removeEventListener('wheel', handle);
                    return true;
                }
                if (swiper.mousewheel.enabled) return false;
                events('on');
                swiper.mousewheel.enabled = true;
                return true;
            }
            function disable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.addEventListener(event, handle);
                    return true;
                }
                if (!swiper.mousewheel.enabled) return false;
                events('off');
                swiper.mousewheel.enabled = false;
                return true;
            }
            on('init', function() {
                if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
                if (swiper.params.mousewheel.enabled) enable();
            });
            on('destroy', function() {
                if (swiper.params.cssMode) enable();
                if (swiper.mousewheel.enabled) disable();
            });
            Object.assign(swiper.mousewheel, {
                enable: enable,
                disable: disable
            });
        };
        var createElementIfNotDefined = function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            var document = getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach(function(key) {
                if (!params[key] && params.auto === true) {
                    var element = swiper.$el.children(".".concat(checkProps[key]))[0];
                    if (!element) {
                        element = document.createElement('div');
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            });
            return params;
        };
        var Navigation = function Navigation(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on, emit = param.emit;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: 'swiper-button-disabled',
                    hiddenClass: 'swiper-button-hidden',
                    lockClass: 'swiper-button-lock'
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                var $el;
                if (el) {
                    $el = $(el);
                    if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                var params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
                    if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
                }
            }
            function update() {
                // Update Navigation Buttons
                if (swiper.params.loop) return;
                var _navigation = swiper.navigation, $nextEl = _navigation.$nextEl, $prevEl = _navigation.$prevEl;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
            }
            function init() {
                var params = swiper.params.navigation;
                swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: 'swiper-button-next',
                    prevEl: 'swiper-button-prev'
                });
                if (!(params.nextEl || params.prevEl)) return;
                var $nextEl = getEl(params.nextEl);
                var $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on('click', onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on('click', onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl: $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl: $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                var _navigation = swiper.navigation, $nextEl = _navigation.$nextEl, $prevEl = _navigation.$prevEl;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off('click', onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off('click', onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on('init', function() {
                init();
                update();
            });
            on('toEdge fromEdge lock unlock', function() {
                update();
            });
            on('destroy', function() {
                destroy();
            });
            on('enable disable', function() {
                var _navigation = swiper.navigation, $nextEl = _navigation.$nextEl, $prevEl = _navigation.$prevEl;
                if ($nextEl) $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
            });
            on('click', function(_s, e) {
                var _navigation = swiper.navigation, $nextEl = _navigation.$nextEl, $prevEl = _navigation.$prevEl;
                var targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    var isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                    else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit('navigationShow');
                    else emit('navigationHide');
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            });
            Object.assign(swiper.navigation, {
                update: update,
                init: init,
                destroy: destroy
            });
        };
        var classesToSelector = function classesToSelector() {
            var classes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
            return ".".concat(classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
                .replace(/ /g, '.'));
        };
        var Pagination = function Pagination(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on, emit = param.emit;
            var pfx = 'swiper-pagination';
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: 'span',
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: 'bullets',
                    // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(number) {
                        return number;
                    },
                    formatFractionTotal: function(number) {
                        return number;
                    },
                    bulletClass: "".concat(pfx, "-bullet"),
                    bulletActiveClass: "".concat(pfx, "-bullet-active"),
                    modifierClass: "".concat(pfx, "-"),
                    currentClass: "".concat(pfx, "-current"),
                    totalClass: "".concat(pfx, "-total"),
                    hiddenClass: "".concat(pfx, "-hidden"),
                    progressbarFillClass: "".concat(pfx, "-progressbar-fill"),
                    progressbarOppositeClass: "".concat(pfx, "-progressbar-opposite"),
                    clickableClass: "".concat(pfx, "-clickable"),
                    lockClass: "".concat(pfx, "-lock"),
                    horizontalClass: "".concat(pfx, "-horizontal"),
                    verticalClass: "".concat(pfx, "-vertical")
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            var bulletSize;
            var dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
            }
            function setSideBullets($bulletEl, position) {
                var bulletActiveClass = swiper.params.pagination.bulletActiveClass;
                $bulletEl[position]().addClass("".concat(bulletActiveClass, "-").concat(position))[position]().addClass("".concat(bulletActiveClass, "-").concat(position, "-").concat(position));
            }
            function update() {
                // Render || Update Pagination bullets/items
                var rtl = swiper.rtl;
                var params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                var $el = swiper.pagination.$el; // Current/Total
                var current;
                var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
                    if (current > total - 1) current -= total;
                    if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
                } else if (typeof swiper.snapIndex !== 'undefined') current = swiper.snapIndex;
                else current = swiper.activeIndex || 0;
                // Types
                if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    var bullets = swiper.pagination.bullets;
                    var firstIndex;
                    var lastIndex;
                    var midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                        $el.css(swiper.isHorizontal() ? 'width' : 'height', "".concat(bulletSize * (params.dynamicMainBullets + 4), "px"));
                        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                            else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([
                        '',
                        '-next',
                        '-next-next',
                        '-prev',
                        '-prev-prev',
                        '-main'
                    ].map(function(suffix) {
                        return "".concat(params.bulletActiveClass).concat(suffix);
                    }).join(' '));
                    if ($el.length > 1) bullets.each(function(bullet) {
                        var $bullet = $(bullet);
                        var bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass("".concat(params.bulletActiveClass, "-main"));
                            if (bulletIndex === firstIndex) setSideBullets($bullet, 'prev');
                            if (bulletIndex === lastIndex) setSideBullets($bullet, 'next');
                        }
                    });
                    else {
                        var $bullet1 = bullets.eq(current);
                        var bulletIndex1 = $bullet1.index();
                        $bullet1.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            var $firstDisplayedBullet = bullets.eq(firstIndex);
                            var $lastDisplayedBullet = bullets.eq(lastIndex);
                            for(var i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass("".concat(params.bulletActiveClass, "-main"));
                            if (swiper.params.loop) {
                                if (bulletIndex1 >= bullets.length) {
                                    for(var i6 = params.dynamicMainBullets; i6 >= 0; i6 -= 1)bullets.eq(bullets.length - i6).addClass("".concat(params.bulletActiveClass, "-main"));
                                    bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass("".concat(params.bulletActiveClass, "-prev"));
                                } else {
                                    setSideBullets($firstDisplayedBullet, 'prev');
                                    setSideBullets($lastDisplayedBullet, 'next');
                                }
                            } else {
                                setSideBullets($firstDisplayedBullet, 'prev');
                                setSideBullets($lastDisplayedBullet, 'next');
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        var bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        var offsetProp = rtl ? 'right' : 'left';
                        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', "".concat(bulletsOffset, "px"));
                    }
                }
                if (params.type === 'fraction') {
                    $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if (params.type === 'progressbar') {
                    var progressbarDirection = void 0;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                    else progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                    var scale = (current + 1) / total;
                    var scaleX = 1;
                    var scaleY = 1;
                    if (progressbarDirection === 'horizontal') scaleX = scale;
                    else scaleY = scale;
                    $el.find(classesToSelector(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")")).transition(swiper.params.speed);
                }
                if (params.type === 'custom' && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit('paginationRender', $el[0]);
                } else emit('paginationUpdate', $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
            function render() {
                // Render Container
                var params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                var $el = swiper.pagination.$el;
                var paginationHTML = '';
                if (params.type === 'bullets') {
                    var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for(var i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    else paginationHTML += "<".concat(params.bulletElement, " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
                }
                if (params.type === 'fraction') {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                    else paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
                    $el.html(paginationHTML);
                }
                if (params.type === 'progressbar') {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                    else paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
                    $el.html(paginationHTML);
                }
                if (params.type !== 'custom') emit('paginationRender', swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: 'swiper-pagination'
                });
                var params = swiper.params.pagination;
                if (!params.el) return;
                var $el = $(params.el);
                if ($el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
                    $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
                    if ($el.length > 1) $el = $el.filter(function(el) {
                        if ($(el).parents('.swiper')[0] !== swiper.el) return false;
                        return true;
                    });
                }
                if (params.type === 'bullets' && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(params.modifierClass + swiper.params.direction);
                if (params.type === 'bullets' && params.dynamicBullets) {
                    $el.addClass("".concat(params.modifierClass).concat(params.type, "-dynamic"));
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if (params.type === 'progressbar' && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
                    e.preventDefault();
                    var index = $(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                });
                Object.assign(swiper.pagination, {
                    $el: $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                var params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                var $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(params.modifierClass + swiper.params.direction);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off('click', classesToSelector(params.bulletClass));
            }
            on('init', function() {
                init();
                render();
                update();
            });
            on('activeIndexChange', function() {
                if (swiper.params.loop) update();
                else if (typeof swiper.snapIndex === 'undefined') update();
            });
            on('snapIndexChange', function() {
                if (!swiper.params.loop) update();
            });
            on('slidesLengthChange', function() {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            });
            on('snapGridLengthChange', function() {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            });
            on('destroy', function() {
                destroy();
            });
            on('enable disable', function() {
                var $el = swiper.pagination.$el;
                if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
            });
            on('lock unlock', function() {
                update();
            });
            on('click', function(_s, e) {
                var targetEl = e.target;
                var $el = swiper.pagination.$el;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    var isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit('paginationShow');
                    else emit('paginationHide');
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            });
            Object.assign(swiper.pagination, {
                render: render,
                update: update,
                init: init,
                destroy: destroy
            });
        };
        var Scrollbar = function Scrollbar(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on, emit = param.emit;
            var document = getDocument();
            var isTouched = false;
            var timeout = null;
            var dragTimeout = null;
            var dragStartPos;
            var dragSize;
            var trackSize;
            var divider;
            extendParams({
                scrollbar: {
                    el: null,
                    dragSize: 'auto',
                    hide: false,
                    draggable: false,
                    snapOnRelease: true,
                    lockClass: 'swiper-scrollbar-lock',
                    dragClass: 'swiper-scrollbar-drag'
                }
            });
            swiper.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null
            };
            function setTranslate() {
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                var scrollbar = swiper.scrollbar, rtl = swiper.rtlTranslate, progress = swiper.progress;
                var $dragEl = scrollbar.$dragEl, $el = scrollbar.$el;
                var params = swiper.params.scrollbar;
                var newSize = dragSize;
                var newPos = (trackSize - dragSize) * progress;
                if (rtl) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = dragSize - newPos;
                        newPos = 0;
                    } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
                } else if (newPos < 0) {
                    newSize = dragSize + newPos;
                    newPos = 0;
                } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
                if (swiper.isHorizontal()) {
                    $dragEl.transform("translate3d(".concat(newPos, "px, 0, 0)"));
                    $dragEl[0].style.width = "".concat(newSize, "px");
                } else {
                    $dragEl.transform("translate3d(0px, ".concat(newPos, "px, 0)"));
                    $dragEl[0].style.height = "".concat(newSize, "px");
                }
                if (params.hide) {
                    clearTimeout(timeout);
                    $el[0].style.opacity = 1;
                    timeout = setTimeout(function() {
                        $el[0].style.opacity = 0;
                        $el.transition(400);
                    }, 1000);
                }
            }
            function setTransition(duration) {
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                swiper.scrollbar.$dragEl.transition(duration);
            }
            function updateSize() {
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                var scrollbar = swiper.scrollbar;
                var $dragEl = scrollbar.$dragEl, $el = scrollbar.$el;
                $dragEl[0].style.width = '';
                $dragEl[0].style.height = '';
                trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
                divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
                if (swiper.params.scrollbar.dragSize === 'auto') dragSize = trackSize * divider;
                else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
                if (swiper.isHorizontal()) $dragEl[0].style.width = "".concat(dragSize, "px");
                else $dragEl[0].style.height = "".concat(dragSize, "px");
                if (divider >= 1) $el[0].style.display = 'none';
                else $el[0].style.display = '';
                if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
                if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
            }
            function getPointerPosition(e) {
                if (swiper.isHorizontal()) return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
                return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
            }
            function setDragPosition(e) {
                var scrollbar = swiper.scrollbar, rtl = swiper.rtlTranslate;
                var $el = scrollbar.$el;
                var positionRatio;
                positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
                positionRatio = Math.max(Math.min(positionRatio, 1), 0);
                if (rtl) positionRatio = 1 - positionRatio;
                var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
                swiper.updateProgress(position);
                swiper.setTranslate(position);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            function onDragStart(e) {
                var params = swiper.params.scrollbar;
                var scrollbar = swiper.scrollbar, $wrapperEl = swiper.$wrapperEl;
                var $el = scrollbar.$el, $dragEl = scrollbar.$dragEl;
                isTouched = true;
                dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
                e.preventDefault();
                e.stopPropagation();
                $wrapperEl.transition(100);
                $dragEl.transition(100);
                setDragPosition(e);
                clearTimeout(dragTimeout);
                $el.transition(0);
                if (params.hide) $el.css('opacity', 1);
                if (swiper.params.cssMode) swiper.$wrapperEl.css('scroll-snap-type', 'none');
                emit('scrollbarDragStart', e);
            }
            function onDragMove(e) {
                var scrollbar = swiper.scrollbar, $wrapperEl = swiper.$wrapperEl;
                var $el = scrollbar.$el, $dragEl = scrollbar.$dragEl;
                if (!isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                setDragPosition(e);
                $wrapperEl.transition(0);
                $el.transition(0);
                $dragEl.transition(0);
                emit('scrollbarDragMove', e);
            }
            function onDragEnd(e) {
                var params = swiper.params.scrollbar;
                var scrollbar = swiper.scrollbar, $wrapperEl = swiper.$wrapperEl;
                var $el = scrollbar.$el;
                if (!isTouched) return;
                isTouched = false;
                if (swiper.params.cssMode) {
                    swiper.$wrapperEl.css('scroll-snap-type', '');
                    $wrapperEl.transition('');
                }
                if (params.hide) {
                    clearTimeout(dragTimeout);
                    dragTimeout = nextTick(function() {
                        $el.css('opacity', 0);
                        $el.transition(400);
                    }, 1000);
                }
                emit('scrollbarDragEnd', e);
                if (params.snapOnRelease) swiper.slideToClosest();
            }
            function events(method) {
                var scrollbar = swiper.scrollbar, touchEventsTouch = swiper.touchEventsTouch, touchEventsDesktop = swiper.touchEventsDesktop, params = swiper.params, support = swiper.support;
                var $el = scrollbar.$el;
                var target = $el[0];
                var activeListener = support.passiveListener && params.passiveListeners ? {
                    passive: false,
                    capture: false
                } : false;
                var passiveListener = support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (!target) return;
                var eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
                if (!support.touch) {
                    target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
                    document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
                    document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
                } else {
                    target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
                    target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
                    target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
                }
            }
            function enableDraggable() {
                if (!swiper.params.scrollbar.el) return;
                events('on');
            }
            function disableDraggable() {
                if (!swiper.params.scrollbar.el) return;
                events('off');
            }
            function init() {
                var scrollbar = swiper.scrollbar, $swiperEl = swiper.$el;
                swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                    el: 'swiper-scrollbar'
                });
                var params = swiper.params.scrollbar;
                if (!params.el) return;
                var $el = $(params.el);
                if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
                var $dragEl = $el.find(".".concat(swiper.params.scrollbar.dragClass));
                if ($dragEl.length === 0) {
                    $dragEl = $("<div class=\"".concat(swiper.params.scrollbar.dragClass, "\"></div>"));
                    $el.append($dragEl);
                }
                Object.assign(scrollbar, {
                    $el: $el,
                    el: $el[0],
                    $dragEl: $dragEl,
                    dragEl: $dragEl[0]
                });
                if (params.draggable) enableDraggable();
                if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
            }
            function destroy() {
                disableDraggable();
            }
            on('init', function() {
                init();
                updateSize();
                setTranslate();
            });
            on('update resize observerUpdate lock unlock', function() {
                updateSize();
            });
            on('setTranslate', function() {
                setTranslate();
            });
            on('setTransition', function(_s, duration) {
                setTransition(duration);
            });
            on('enable disable', function() {
                var $el = swiper.scrollbar.$el;
                if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
            });
            on('destroy', function() {
                destroy();
            });
            Object.assign(swiper.scrollbar, {
                updateSize: updateSize,
                setTranslate: setTranslate,
                init: init,
                destroy: destroy
            });
        };
        var Parallax = function Parallax(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                parallax: {
                    enabled: false
                }
            });
            var setTransform = function(el, progress) {
                var rtl = swiper.rtl;
                var $el = $(el);
                var rtlFactor = rtl ? -1 : 1;
                var p = $el.attr('data-swiper-parallax') || '0';
                var x = $el.attr('data-swiper-parallax-x');
                var y = $el.attr('data-swiper-parallax-y');
                var scale = $el.attr('data-swiper-parallax-scale');
                var opacity = $el.attr('data-swiper-parallax-opacity');
                if (x || y) {
                    x = x || '0';
                    y = y || '0';
                } else if (swiper.isHorizontal()) {
                    x = p;
                    y = '0';
                } else {
                    y = p;
                    x = '0';
                }
                if (x.indexOf('%') >= 0) x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
                else x = "".concat(x * progress * rtlFactor, "px");
                if (y.indexOf('%') >= 0) y = "".concat(parseInt(y, 10) * progress, "%");
                else y = "".concat(y * progress, "px");
                if (typeof opacity !== 'undefined' && opacity !== null) {
                    var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                    $el[0].style.opacity = currentOpacity;
                }
                if (typeof scale === 'undefined' || scale === null) $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px)"));
                else {
                    var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                    $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px) scale(").concat(currentScale, ")"));
                }
            };
            var setTranslate = function() {
                var $el = swiper.$el, slides = swiper.slides, progress = swiper.progress, snapGrid = swiper.snapGrid;
                $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(el) {
                    setTransform(el, progress);
                });
                slides.each(function(slideEl, slideIndex) {
                    var slideProgress = slideEl.progress;
                    if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                    slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                    $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(el) {
                        setTransform(el, slideProgress);
                    });
                });
            };
            var setTransition = function() {
                var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : swiper.params.speed;
                var $el = swiper.$el;
                $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(parallaxEl) {
                    var $parallaxEl = $(parallaxEl);
                    var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    $parallaxEl.transition(parallaxDuration);
                });
            };
            on('beforeInit', function() {
                if (!swiper.params.parallax.enabled) return;
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            });
            on('init', function() {
                if (!swiper.params.parallax.enabled) return;
                setTranslate();
            });
            on('setTranslate', function() {
                if (!swiper.params.parallax.enabled) return;
                setTranslate();
            });
            on('setTransition', function(_swiper, duration) {
                if (!swiper.params.parallax.enabled) return;
                setTransition(duration);
            });
        };
        var Zoom = function Zoom(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on, emit = param.emit;
            var window = getWindow();
            extendParams({
                zoom: {
                    enabled: false,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: true,
                    containerClass: 'swiper-zoom-container',
                    zoomedSlideClass: 'swiper-slide-zoomed'
                }
            });
            swiper.zoom = {
                enabled: false
            };
            var currentScale = 1;
            var isScaling = false;
            var gesturesEnabled;
            var fakeGestureTouched;
            var fakeGestureMoved;
            var gesture = {
                $slideEl: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                $imageEl: undefined,
                $imageWrapEl: undefined,
                maxRatio: 3
            };
            var image = {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {
                },
                touchesCurrent: {
                }
            };
            var velocity = {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined
            };
            var scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
                get: function() {
                    return scale;
                },
                set: function(value) {
                    if (scale !== value) {
                        var imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                        var slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                        emit('zoomChange', value, imageEl, slideEl);
                    }
                    scale = value;
                }
            });
            function getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2) return 1;
                var x1 = e.targetTouches[0].pageX;
                var y1 = e.targetTouches[0].pageY;
                var x2 = e.targetTouches[1].pageX;
                var y2 = e.targetTouches[1].pageY;
                var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                return distance;
            } // Events
            function onGestureStart(e) {
                var support = swiper.support;
                var params = swiper.params.zoom;
                fakeGestureTouched = false;
                fakeGestureMoved = false;
                if (!support.gestures) {
                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) return;
                    fakeGestureTouched = true;
                    gesture.scaleStart = getDistanceBetweenTouches(e);
                }
                if (!gesture.$slideEl || !gesture.$slideEl.length) {
                    gesture.$slideEl = $(e.target).closest(".".concat(swiper.params.slideClass));
                    if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                    gesture.$imageEl = gesture.$slideEl.find(".".concat(params.containerClass)).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
                    gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
                    gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                    if (gesture.$imageWrapEl.length === 0) {
                        gesture.$imageEl = undefined;
                        return;
                    }
                }
                if (gesture.$imageEl) gesture.$imageEl.transition(0);
                isScaling = true;
            }
            function onGestureChange(e) {
                var support = swiper.support;
                var params = swiper.params.zoom;
                var zoom = swiper.zoom;
                if (!support.gestures) {
                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) return;
                    fakeGestureMoved = true;
                    gesture.scaleMove = getDistanceBetweenTouches(e);
                }
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                    if (e.type === 'gesturechange') onGestureStart(e);
                    return;
                }
                if (support.gestures) zoom.scale = e.scale * currentScale;
                else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
                if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
                if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
                gesture.$imageEl.transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
            }
            function onGestureEnd(e) {
                var device = swiper.device;
                var support = swiper.support;
                var params = swiper.params.zoom;
                var zoom = swiper.zoom;
                if (!support.gestures) {
                    if (!fakeGestureTouched || !fakeGestureMoved) return;
                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) return;
                    fakeGestureTouched = false;
                    fakeGestureMoved = false;
                }
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
                gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
                currentScale = zoom.scale;
                isScaling = false;
                if (zoom.scale === 1) gesture.$slideEl = undefined;
            }
            function onTouchStart(e) {
                var device = swiper.device;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                if (image.isTouched) return;
                if (device.android && e.cancelable) e.preventDefault();
                image.isTouched = true;
                image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            }
            function onTouchMove(e) {
                var zoom = swiper.zoom;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                swiper.allowClick = false;
                if (!image.isTouched || !gesture.$slideEl) return;
                if (!image.isMoved) {
                    image.width = gesture.$imageEl[0].offsetWidth;
                    image.height = gesture.$imageEl[0].offsetHeight;
                    image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                    image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                    gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                    gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                    gesture.$imageWrapEl.transition(0);
                } // Define if we need image drag
                var scaledWidth = image.width * zoom.scale;
                var scaledHeight = image.height * zoom.scale;
                if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
                image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
                image.maxX = -image.minX;
                image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
                image.maxY = -image.minY;
                image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                if (!image.isMoved && !isScaling) {
                    if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                        image.isTouched = false;
                        return;
                    }
                    if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                        image.isTouched = false;
                        return;
                    }
                }
                if (e.cancelable) e.preventDefault();
                e.stopPropagation();
                image.isMoved = true;
                image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
                image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
                if (image.currentX < image.minX) image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
                if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
                if (image.currentY < image.minY) image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
                if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
                // Velocity
                if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
                if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
                if (!velocity.prevTime) velocity.prevTime = Date.now();
                velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
                velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
                if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
                if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
                velocity.prevPositionX = image.touchesCurrent.x;
                velocity.prevPositionY = image.touchesCurrent.y;
                velocity.prevTime = Date.now();
                gesture.$imageWrapEl.transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
            }
            function onTouchEnd() {
                var zoom = swiper.zoom;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                if (!image.isTouched || !image.isMoved) {
                    image.isTouched = false;
                    image.isMoved = false;
                    return;
                }
                image.isTouched = false;
                image.isMoved = false;
                var momentumDurationX = 300;
                var momentumDurationY = 300;
                var momentumDistanceX = velocity.x * momentumDurationX;
                var newPositionX = image.currentX + momentumDistanceX;
                var momentumDistanceY = velocity.y * momentumDurationY;
                var newPositionY = image.currentY + momentumDistanceY; // Fix duration
                if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
                if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
                image.currentX = newPositionX;
                image.currentY = newPositionY; // Define if we need image drag
                var scaledWidth = image.width * zoom.scale;
                var scaledHeight = image.height * zoom.scale;
                image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
                image.maxX = -image.minX;
                image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
                image.maxY = -image.minY;
                image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
                image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
                gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
            }
            function onTransitionEnd() {
                var zoom = swiper.zoom;
                if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                    if (gesture.$imageEl) gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                    if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                    zoom.scale = 1;
                    currentScale = 1;
                    gesture.$slideEl = undefined;
                    gesture.$imageEl = undefined;
                    gesture.$imageWrapEl = undefined;
                }
            }
            function zoomIn(e) {
                var zoom = swiper.zoom;
                var params = swiper.params.zoom;
                if (!gesture.$slideEl) {
                    if (e && e.target) gesture.$slideEl = $(e.target).closest(".".concat(swiper.params.slideClass));
                    if (!gesture.$slideEl) {
                        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(".".concat(swiper.params.slideActiveClass));
                        else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                    }
                    gesture.$imageEl = gesture.$slideEl.find(".".concat(params.containerClass)).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
                    gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
                }
                if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.style.overflow = 'hidden';
                    swiper.wrapperEl.style.touchAction = 'none';
                }
                gesture.$slideEl.addClass("".concat(params.zoomedSlideClass));
                var touchX;
                var touchY;
                var offsetX;
                var offsetY;
                var diffX;
                var diffY;
                var translateX;
                var translateY;
                var imageWidth;
                var imageHeight;
                var scaledWidth;
                var scaledHeight;
                var translateMinX;
                var translateMinY;
                var translateMaxX;
                var translateMaxY;
                var slideWidth;
                var slideHeight;
                if (typeof image.touchesStart.x === 'undefined' && e) {
                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                } else {
                    touchX = image.touchesStart.x;
                    touchY = image.touchesStart.y;
                }
                zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                if (e) {
                    slideWidth = gesture.$slideEl[0].offsetWidth;
                    slideHeight = gesture.$slideEl[0].offsetHeight;
                    offsetX = gesture.$slideEl.offset().left + window.scrollX;
                    offsetY = gesture.$slideEl.offset().top + window.scrollY;
                    diffX = offsetX + slideWidth / 2 - touchX;
                    diffY = offsetY + slideHeight / 2 - touchY;
                    imageWidth = gesture.$imageEl[0].offsetWidth;
                    imageHeight = gesture.$imageEl[0].offsetHeight;
                    scaledWidth = imageWidth * zoom.scale;
                    scaledHeight = imageHeight * zoom.scale;
                    translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                    translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                    translateMaxX = -translateMinX;
                    translateMaxY = -translateMinY;
                    translateX = diffX * zoom.scale;
                    translateY = diffY * zoom.scale;
                    if (translateX < translateMinX) translateX = translateMinX;
                    if (translateX > translateMaxX) translateX = translateMaxX;
                    if (translateY < translateMinY) translateY = translateMinY;
                    if (translateY > translateMaxY) translateY = translateMaxY;
                } else {
                    translateX = 0;
                    translateY = 0;
                }
                gesture.$imageWrapEl.transition(300).transform("translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)"));
                gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
            }
            function zoomOut() {
                var zoom = swiper.zoom;
                var params = swiper.params.zoom;
                if (!gesture.$slideEl) {
                    if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(".".concat(swiper.params.slideActiveClass));
                    else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                    gesture.$imageEl = gesture.$slideEl.find(".".concat(params.containerClass)).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
                    gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
                }
                if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.style.overflow = '';
                    swiper.wrapperEl.style.touchAction = '';
                }
                zoom.scale = 1;
                currentScale = 1;
                gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
                gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
                gesture.$slideEl.removeClass("".concat(params.zoomedSlideClass));
                gesture.$slideEl = undefined;
            } // Toggle Zoom
            function zoomToggle(e) {
                var zoom = swiper.zoom;
                if (zoom.scale && zoom.scale !== 1) // Zoom Out
                    zoomOut();
                else // Zoom In
                    zoomIn(e);
            }
            function getListeners() {
                var support = swiper.support;
                var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                var activeListenerWithCapture = support.passiveListener ? {
                    passive: false,
                    capture: true
                } : true;
                return {
                    passiveListener: passiveListener,
                    activeListenerWithCapture: activeListenerWithCapture
                };
            }
            function getSlideSelector() {
                return ".".concat(swiper.params.slideClass);
            }
            function toggleGestures(method) {
                var passiveListener = getListeners().passiveListener;
                var slideSelector = getSlideSelector();
                swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
                swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
                swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
            }
            function enableGestures() {
                if (gesturesEnabled) return;
                gesturesEnabled = true;
                toggleGestures('on');
            }
            function disableGestures() {
                if (!gesturesEnabled) return;
                gesturesEnabled = false;
                toggleGestures('off');
            } // Attach/Detach Events
            function enable() {
                var zoom = swiper.zoom;
                if (zoom.enabled) return;
                zoom.enabled = true;
                var support = swiper.support;
                var ref = getListeners(), passiveListener = ref.passiveListener, activeListenerWithCapture = ref.activeListenerWithCapture;
                var slideSelector = getSlideSelector(); // Scale image
                if (support.gestures) {
                    swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
                    swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
                } else if (swiper.touchEvents.start === 'touchstart') {
                    swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                    swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                    swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
                    if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                } // Move image
                swiper.$wrapperEl.on(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), onTouchMove, activeListenerWithCapture);
            }
            function disable() {
                var zoom = swiper.zoom;
                if (!zoom.enabled) return;
                var support = swiper.support;
                zoom.enabled = false;
                var ref = getListeners(), passiveListener = ref.passiveListener, activeListenerWithCapture = ref.activeListenerWithCapture;
                var slideSelector = getSlideSelector(); // Scale image
                if (support.gestures) {
                    swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
                    swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
                } else if (swiper.touchEvents.start === 'touchstart') {
                    swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                    swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                    swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
                    if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                } // Move image
                swiper.$wrapperEl.off(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), onTouchMove, activeListenerWithCapture);
            }
            on('init', function() {
                if (swiper.params.zoom.enabled) enable();
            });
            on('destroy', function() {
                disable();
            });
            on('touchStart', function(_s, e) {
                if (!swiper.zoom.enabled) return;
                onTouchStart(e);
            });
            on('touchEnd', function(_s, e) {
                if (!swiper.zoom.enabled) return;
                onTouchEnd();
            });
            on('doubleTap', function(_s, e) {
                if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
            });
            on('transitionEnd', function() {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
            });
            on('slideChange', function() {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
            });
            Object.assign(swiper.zoom, {
                enable: enable,
                disable: disable,
                "in": zoomIn,
                out: zoomOut,
                toggle: zoomToggle
            });
        };
        var Lazy = function Lazy(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on, emit = param.emit;
            extendParams({
                lazy: {
                    checkInView: false,
                    enabled: false,
                    loadPrevNext: false,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: false,
                    scrollingElement: '',
                    elementClass: 'swiper-lazy',
                    loadingClass: 'swiper-lazy-loading',
                    loadedClass: 'swiper-lazy-loaded',
                    preloaderClass: 'swiper-lazy-preloader'
                }
            });
            swiper.lazy = {
            };
            var scrollHandlerAttached = false;
            var initialImageLoaded = false;
            function loadInSlide(index) {
                var loadInDuplicate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var params = swiper.params.lazy;
                if (typeof index === 'undefined') return;
                if (swiper.slides.length === 0) return;
                var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                var $slideEl = isVirtual ? swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")) : swiper.slides.eq(index);
                var $images = $slideEl.find(".".concat(params.elementClass, ":not(.").concat(params.loadedClass, "):not(.").concat(params.loadingClass, ")"));
                if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
                if ($images.length === 0) return;
                $images.each(function(imageEl) {
                    var $imageEl = $(imageEl);
                    $imageEl.addClass(params.loadingClass);
                    var background = $imageEl.attr('data-background');
                    var src = $imageEl.attr('data-src');
                    var srcset = $imageEl.attr('data-srcset');
                    var sizes = $imageEl.attr('data-sizes');
                    var $pictureEl = $imageEl.parent('picture');
                    swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function() {
                        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                        if (background) {
                            $imageEl.css('background-image', "url(\"".concat(background, "\")"));
                            $imageEl.removeAttr('data-background');
                        } else {
                            if (srcset) {
                                $imageEl.attr('srcset', srcset);
                                $imageEl.removeAttr('data-srcset');
                            }
                            if (sizes) {
                                $imageEl.attr('sizes', sizes);
                                $imageEl.removeAttr('data-sizes');
                            }
                            if ($pictureEl.length) $pictureEl.children('source').each(function(sourceEl) {
                                var $source = $(sourceEl);
                                if ($source.attr('data-srcset')) {
                                    $source.attr('srcset', $source.attr('data-srcset'));
                                    $source.removeAttr('data-srcset');
                                }
                            });
                            if (src) {
                                $imageEl.attr('src', src);
                                $imageEl.removeAttr('data-src');
                            }
                        }
                        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                        $slideEl.find(".".concat(params.preloaderClass)).remove();
                        if (swiper.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                                var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(slideOriginalIndex, "\"]:not(.").concat(swiper.params.slideDuplicateClass, ")"));
                                loadInSlide(originalSlide.index(), false);
                            } else {
                                var duplicatedSlide = swiper.$wrapperEl.children(".".concat(swiper.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(slideOriginalIndex, "\"]"));
                                loadInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                        if (swiper.params.autoHeight) swiper.updateAutoHeight();
                    });
                    emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
                });
            }
            function load() {
                var $wrapperEl = swiper.$wrapperEl, swiperParams = swiper.params, slides = swiper.slides, activeIndex = swiper.activeIndex;
                var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
                var params = swiperParams.lazy;
                var slidesPerView = swiperParams.slidesPerView;
                if (slidesPerView === 'auto') slidesPerView = 0;
                function slideExist(index) {
                    if (isVirtual) {
                        if ($wrapperEl.children(".".concat(swiperParams.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")).length) return true;
                    } else if (slides[index]) return true;
                    return false;
                }
                function slideIndex(slideEl) {
                    if (isVirtual) return $(slideEl).attr('data-swiper-slide-index');
                    return $(slideEl).index();
                }
                if (!initialImageLoaded) initialImageLoaded = true;
                if (swiper.params.watchSlidesProgress) $wrapperEl.children(".".concat(swiperParams.slideVisibleClass)).each(function(slideEl) {
                    var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                    loadInSlide(index);
                });
                else if (slidesPerView > 1) {
                    for(var i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
                } else loadInSlide(activeIndex);
                if (params.loadPrevNext) {
                    if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                        var amount = params.loadPrevNextAmount;
                        var spv = slidesPerView;
                        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                        for(var i7 = activeIndex + slidesPerView; i7 < maxIndex; i7 += 1)if (slideExist(i7)) loadInSlide(i7);
                        // Prev Slides
                        for(var i8 = minIndex; i8 < activeIndex; i8 += 1)if (slideExist(i8)) loadInSlide(i8);
                    } else {
                        var nextSlide = $wrapperEl.children(".".concat(swiperParams.slideNextClass));
                        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                        var prevSlide = $wrapperEl.children(".".concat(swiperParams.slidePrevClass));
                        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
                    }
                }
            }
            function checkInViewOnLoad() {
                var window = getWindow();
                if (!swiper || swiper.destroyed) return;
                var $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
                var isWindow = $scrollElement[0] === window;
                var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
                var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
                var swiperOffset = swiper.$el.offset();
                var rtl = swiper.rtlTranslate;
                var inView = false;
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                var swiperCoord = [
                    [
                        swiperOffset.left,
                        swiperOffset.top
                    ],
                    [
                        swiperOffset.left + swiper.width,
                        swiperOffset.top
                    ],
                    [
                        swiperOffset.left,
                        swiperOffset.top + swiper.height
                    ],
                    [
                        swiperOffset.left + swiper.width,
                        swiperOffset.top + swiper.height
                    ]
                ];
                for(var i = 0; i < swiperCoord.length; i += 1){
                    var point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                        inView = true;
                    }
                }
                var passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (inView) {
                    load();
                    $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
                } else if (!scrollHandlerAttached) {
                    scrollHandlerAttached = true;
                    $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
                }
            }
            on('beforeInit', function() {
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
            });
            on('init', function() {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                    else load();
                }
            });
            on('scroll', function() {
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
            });
            on('scrollbarDragMove resize _freeModeNoMomentumRelease', function() {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                    else load();
                }
            });
            on('transitionStart', function() {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                        if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                        else load();
                    }
                }
            });
            on('transitionEnd', function() {
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                    else load();
                }
            });
            on('slideChange', function() {
                var _params = swiper.params, lazy = _params.lazy, cssMode = _params.cssMode, watchSlidesProgress = _params.watchSlidesProgress, touchReleaseOnEdges = _params.touchReleaseOnEdges, resistanceRatio = _params.resistanceRatio;
                if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
            });
            Object.assign(swiper.lazy, {
                load: load,
                loadInSlide: loadInSlide
            });
        };
        var Controller = /* eslint no-bitwise: ["error", { "allow": [">>"] }] */ function Controller(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                controller: {
                    control: undefined,
                    inverse: false,
                    by: 'slide' // or 'container'
                }
            });
            swiper.controller = {
                control: undefined
            };
            function LinearSpline(x, y) {
                var binarySearch = function search() {
                    var maxIndex;
                    var minIndex;
                    var guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while(maxIndex - minIndex > 1){
                            guess = maxIndex + minIndex >> 1;
                            if (array[guess] <= val) minIndex = guess;
                            else maxIndex = guess;
                        }
                        return maxIndex;
                    };
                }();
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.
                var i1;
                var i3;
                this.interpolate = function interpolate(x2) {
                    if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                    return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
                return this;
            } // xxx: for now i will just save one spline function to to
            function getInterpolateFunction(c) {
                if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
            }
            function setTranslate(_t, byController) {
                var controlled = swiper.controller.control;
                var multiplier;
                var controlledTranslate;
                var Swiper = swiper.constructor;
                function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                    if (swiper.params.controller.by === 'slide') {
                        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out
                        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                    }
                    if (!controlledTranslate || swiper.params.controller.by === 'container') {
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                    }
                    if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
                    c.updateProgress(controlledTranslate);
                    c.setTranslate(controlledTranslate, swiper);
                    c.updateActiveIndex();
                    c.updateSlidesClasses();
                }
                if (Array.isArray(controlled)) {
                    for(var i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
                } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
            }
            function setTransition(duration, byController) {
                var Swiper = swiper.constructor;
                var controlled = swiper.controller.control;
                var i;
                function setControlledTransition(c) {
                    c.setTransition(duration, swiper);
                    if (duration !== 0) {
                        c.transitionStart();
                        if (c.params.autoHeight) nextTick(function() {
                            c.updateAutoHeight();
                        });
                        c.$wrapperEl.transitionEnd(function() {
                            if (!controlled) return;
                            if (c.params.loop && swiper.params.controller.by === 'slide') c.loopFix();
                            c.transitionEnd();
                        });
                    }
                }
                if (Array.isArray(controlled)) {
                    for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
                } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
            }
            function removeSpline() {
                if (!swiper.controller.control) return;
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            }
            on('beforeInit', function() {
                swiper.controller.control = swiper.params.controller.control;
            });
            on('update', function() {
                removeSpline();
            });
            on('resize', function() {
                removeSpline();
            });
            on('observerUpdate', function() {
                removeSpline();
            });
            on('setTranslate', function(_s, translate, byController) {
                if (!swiper.controller.control) return;
                swiper.controller.setTranslate(translate, byController);
            });
            on('setTransition', function(_s, duration, byController) {
                if (!swiper.controller.control) return;
                swiper.controller.setTransition(duration, byController);
            });
            Object.assign(swiper.controller, {
                setTranslate: setTranslate,
                setTransition: setTransition
            });
        };
        var A11y = function A11y(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                a11y: {
                    enabled: true,
                    notificationClass: 'swiper-notification',
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    firstSlideMessage: 'This is the first slide',
                    lastSlideMessage: 'This is the last slide',
                    paginationBulletMessage: 'Go to slide {{index}}',
                    slideLabelMessage: '{{index}} / {{slidesLength}}',
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: 'group'
                }
            });
            var liveRegion = null;
            function notify(message) {
                var notification = liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            }
            function getRandomNumber() {
                var size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16;
                var randomChar = function() {
                    return Math.round(16 * Math.random()).toString(16);
                };
                return 'x'.repeat(size).replace(/x/g, randomChar);
            }
            function makeElFocusable($el) {
                $el.attr('tabIndex', '0');
            }
            function makeElNotFocusable($el) {
                $el.attr('tabIndex', '-1');
            }
            function addElRole($el, role) {
                $el.attr('role', role);
            }
            function addElRoleDescription($el, description) {
                $el.attr('aria-roledescription', description);
            }
            function addElControls($el, controls) {
                $el.attr('aria-controls', controls);
            }
            function addElLabel($el, label) {
                $el.attr('aria-label', label);
            }
            function addElId($el, id) {
                $el.attr('id', id);
            }
            function addElLive($el, live) {
                $el.attr('aria-live', live);
            }
            function disableEl($el) {
                $el.attr('aria-disabled', true);
            }
            function enableEl($el) {
                $el.attr('aria-disabled', false);
            }
            function onEnterOrSpaceKey(e) {
                if (e.keyCode !== 13 && e.keyCode !== 32) return;
                var params = swiper.params.a11y;
                var $targetEl = $(e.target);
                if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                    if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
                    if (swiper.isEnd) notify(params.lastSlideMessage);
                    else notify(params.nextSlideMessage);
                }
                if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                    if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
                    if (swiper.isBeginning) notify(params.firstSlideMessage);
                    else notify(params.prevSlideMessage);
                }
                if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) $targetEl[0].click();
            }
            function updateNavigation() {
                if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
                var _navigation = swiper.navigation, $nextEl = _navigation.$nextEl, $prevEl = _navigation.$prevEl;
                if ($prevEl && $prevEl.length > 0) {
                    if (swiper.isBeginning) {
                        disableEl($prevEl);
                        makeElNotFocusable($prevEl);
                    } else {
                        enableEl($prevEl);
                        makeElFocusable($prevEl);
                    }
                }
                if ($nextEl && $nextEl.length > 0) {
                    if (swiper.isEnd) {
                        disableEl($nextEl);
                        makeElNotFocusable($nextEl);
                    } else {
                        enableEl($nextEl);
                        makeElFocusable($nextEl);
                    }
                }
            }
            function hasPagination() {
                return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
            }
            function hasClickablePagination() {
                return hasPagination() && swiper.params.pagination.clickable;
            }
            function updatePagination() {
                var params = swiper.params.a11y;
                if (!hasPagination()) return;
                swiper.pagination.bullets.each(function(bulletEl) {
                    var $bulletEl = $(bulletEl);
                    if (swiper.params.pagination.clickable) {
                        makeElFocusable($bulletEl);
                        if (!swiper.params.pagination.renderBullet) {
                            addElRole($bulletEl, 'button');
                            addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                        }
                    }
                    if ($bulletEl.is(".".concat(swiper.params.pagination.bulletActiveClass))) $bulletEl.attr('aria-current', 'true');
                    else $bulletEl.removeAttr('aria-current');
                });
            }
            var initNavEl = function($el, wrapperId, message) {
                makeElFocusable($el);
                if ($el[0].tagName !== 'BUTTON') {
                    addElRole($el, 'button');
                    $el.on('keydown', onEnterOrSpaceKey);
                }
                addElLabel($el, message);
                addElControls($el, wrapperId);
            };
            function init() {
                var params = swiper.params.a11y;
                swiper.$el.append(liveRegion); // Container
                var $containerEl = swiper.$el;
                if (params.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
                if (params.containerMessage) addElLabel($containerEl, params.containerMessage);
                // Wrapper
                var $wrapperEl = swiper.$wrapperEl;
                var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-".concat(getRandomNumber(16));
                var live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
                addElId($wrapperEl, wrapperId);
                addElLive($wrapperEl, live); // Slide
                if (params.itemRoleDescriptionMessage) addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
                addElRole($(swiper.slides), params.slideRole);
                var slidesLength = swiper.params.loop ? swiper.slides.filter(function(el) {
                    return !el.classList.contains(swiper.params.slideDuplicateClass);
                }).length : swiper.slides.length;
                swiper.slides.each(function(slideEl, index) {
                    var $slideEl = $(slideEl);
                    var slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
                    var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                    addElLabel($slideEl, ariaLabelMessage);
                }); // Navigation
                var $nextEl;
                var $prevEl;
                if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
                if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
                if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params.nextSlideMessage);
                if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params.prevSlideMessage);
                // Pagination
                if (hasClickablePagination()) swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
            }
            function destroy() {
                if (liveRegion && liveRegion.length > 0) liveRegion.remove();
                var $nextEl;
                var $prevEl;
                if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
                if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
                if ($nextEl) $nextEl.off('keydown', onEnterOrSpaceKey);
                if ($prevEl) $prevEl.off('keydown', onEnterOrSpaceKey);
                // Pagination
                if (hasClickablePagination()) swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
            }
            on('beforeInit', function() {
                liveRegion = $("<span class=\"".concat(swiper.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
            });
            on('afterInit', function() {
                if (!swiper.params.a11y.enabled) return;
                init();
                updateNavigation();
            });
            on('toEdge', function() {
                if (!swiper.params.a11y.enabled) return;
                updateNavigation();
            });
            on('fromEdge', function() {
                if (!swiper.params.a11y.enabled) return;
                updateNavigation();
            });
            on('paginationUpdate', function() {
                if (!swiper.params.a11y.enabled) return;
                updatePagination();
            });
            on('destroy', function() {
                if (!swiper.params.a11y.enabled) return;
                destroy();
            });
        };
        var History = function History(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                history: {
                    enabled: false,
                    root: '',
                    replaceState: false,
                    key: 'slides'
                }
            });
            var initialized = false;
            var paths = {
            };
            var slugify = function(text) {
                return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
            };
            var getPathValues = function(urlOverride) {
                var window = getWindow();
                var location;
                if (urlOverride) location = new URL(urlOverride);
                else location = window.location;
                var pathArray = location.pathname.slice(1).split('/').filter(function(part) {
                    return part !== '';
                });
                var total = pathArray.length;
                var key = pathArray[total - 2];
                var value = pathArray[total - 1];
                return {
                    key: key,
                    value: value
                };
            };
            var setHistory = function(key, index) {
                var window = getWindow();
                if (!initialized || !swiper.params.history.enabled) return;
                var location;
                if (swiper.params.url) location = new URL(swiper.params.url);
                else location = window.location;
                var slide = swiper.slides.eq(index);
                var value = slugify(slide.attr('data-history'));
                if (swiper.params.history.root.length > 0) {
                    var root = swiper.params.history.root;
                    if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
                    value = "".concat(root, "/").concat(key, "/").concat(value);
                } else if (!location.pathname.includes(key)) value = "".concat(key, "/").concat(value);
                var currentState = window.history.state;
                if (currentState && currentState.value === value) return;
                if (swiper.params.history.replaceState) window.history.replaceState({
                    value: value
                }, null, value);
                else window.history.pushState({
                    value: value
                }, null, value);
            };
            var scrollToSlide = function(speed, value, runCallbacks) {
                if (value) for(var i = 0, length = swiper.slides.length; i < length; i += 1){
                    var slide = swiper.slides.eq(i);
                    var slideHistory = slugify(slide.attr('data-history'));
                    if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
                else swiper.slideTo(0, speed, runCallbacks);
            };
            var setHistoryPopState = function() {
                paths = getPathValues(swiper.params.url);
                scrollToSlide(swiper.params.speed, swiper.paths.value, false);
            };
            var init = function() {
                var window = getWindow();
                if (!swiper.params.history) return;
                if (!window.history || !window.history.pushState) {
                    swiper.params.history.enabled = false;
                    swiper.params.hashNavigation.enabled = true;
                    return;
                }
                initialized = true;
                paths = getPathValues(swiper.params.url);
                if (!paths.key && !paths.value) return;
                scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
                if (!swiper.params.history.replaceState) window.addEventListener('popstate', setHistoryPopState);
            };
            var destroy = function() {
                var window = getWindow();
                if (!swiper.params.history.replaceState) window.removeEventListener('popstate', setHistoryPopState);
            };
            on('init', function() {
                if (swiper.params.history.enabled) init();
            });
            on('destroy', function() {
                if (swiper.params.history.enabled) destroy();
            });
            on('transitionEnd _freeModeNoMomentumRelease', function() {
                if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
            });
            on('slideChange', function() {
                if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
            });
        };
        var HashNavigation = function HashNavigation(param) {
            var swiper = param.swiper, extendParams = param.extendParams, emit = param.emit, on = param.on;
            var initialized = false;
            var document = getDocument();
            var window = getWindow();
            extendParams({
                hashNavigation: {
                    enabled: false,
                    replaceState: false,
                    watchState: false
                }
            });
            var onHashChange = function() {
                emit('hashChange');
                var newHash = document.location.hash.replace('#', '');
                var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
                if (newHash !== activeSlideHash) {
                    var newIndex = swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-hash=\"").concat(newHash, "\"]")).index();
                    if (typeof newIndex === 'undefined') return;
                    swiper.slideTo(newIndex);
                }
            };
            var setHash = function() {
                if (!initialized || !swiper.params.hashNavigation.enabled) return;
                if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                    window.history.replaceState(null, null, "#".concat(swiper.slides.eq(swiper.activeIndex).attr('data-hash')) || '');
                    emit('hashSet');
                } else {
                    var slide = swiper.slides.eq(swiper.activeIndex);
                    var hash = slide.attr('data-hash') || slide.attr('data-history');
                    document.location.hash = hash || '';
                    emit('hashSet');
                }
            };
            var init = function() {
                if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
                initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (hash) {
                    var speed = 0;
                    for(var i = 0, length = swiper.slides.length; i < length; i += 1){
                        var slide = swiper.slides.eq(i);
                        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            var index = slide.index();
                            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                        }
                    }
                }
                if (swiper.params.hashNavigation.watchState) $(window).on('hashchange', onHashChange);
            };
            var destroy = function() {
                if (swiper.params.hashNavigation.watchState) $(window).off('hashchange', onHashChange);
            };
            on('init', function() {
                if (swiper.params.hashNavigation.enabled) init();
            });
            on('destroy', function() {
                if (swiper.params.hashNavigation.enabled) destroy();
            });
            on('transitionEnd _freeModeNoMomentumRelease', function() {
                if (initialized) setHash();
            });
            on('slideChange', function() {
                if (initialized && swiper.params.cssMode) setHash();
            });
        };
        var Autoplay = /* eslint no-underscore-dangle: "off" */ function Autoplay(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on, emit = param.emit;
            var timeout;
            swiper.autoplay = {
                running: false,
                paused: false
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3000,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            function run() {
                var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                var delay = swiper.params.autoplay.delay;
                if ($activeSlideEl.attr('data-swiper-autoplay')) delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
                clearTimeout(timeout);
                timeout = nextTick(function() {
                    var autoplayResult;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (swiper.params.loop) {
                            swiper.loopFix();
                            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                            emit('autoplay');
                        } else if (!swiper.isBeginning) {
                            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                            emit('autoplay');
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                            emit('autoplay');
                        } else stop();
                    } else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        emit('autoplay');
                    } else stop();
                    if (swiper.params.cssMode && swiper.autoplay.running) run();
                    else if (autoplayResult === false) run();
                }, delay);
            }
            function start() {
                if (typeof timeout !== 'undefined') return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                emit('autoplayStart');
                run();
                return true;
            }
            function stop() {
                if (!swiper.autoplay.running) return false;
                if (typeof timeout === 'undefined') return false;
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = undefined;
                }
                swiper.autoplay.running = false;
                emit('autoplayStop');
                return true;
            }
            function pause(speed) {
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (timeout) clearTimeout(timeout);
                swiper.autoplay.paused = true;
                if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    run();
                } else [
                    'transitionend',
                    'webkitTransitionEnd'
                ].forEach(function(event) {
                    swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                });
            }
            function onVisibilityChange() {
                var document = getDocument();
                if (document.visibilityState === 'hidden' && swiper.autoplay.running) pause();
                if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                    run();
                    swiper.autoplay.paused = false;
                }
            }
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                [
                    'transitionend',
                    'webkitTransitionEnd'
                ].forEach(function(event) {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                });
                swiper.autoplay.paused = false;
                if (!swiper.autoplay.running) stop();
                else run();
            }
            function onMouseEnter() {
                if (swiper.params.autoplay.disableOnInteraction) stop();
                else pause();
                [
                    'transitionend',
                    'webkitTransitionEnd'
                ].forEach(function(event) {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                });
            }
            function onMouseLeave() {
                if (swiper.params.autoplay.disableOnInteraction) return;
                swiper.autoplay.paused = false;
                run();
            }
            function attachMouseEvents() {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on('mouseenter', onMouseEnter);
                    swiper.$el.on('mouseleave', onMouseLeave);
                }
            }
            function detachMouseEvents() {
                swiper.$el.off('mouseenter', onMouseEnter);
                swiper.$el.off('mouseleave', onMouseLeave);
            }
            on('init', function() {
                if (swiper.params.autoplay.enabled) {
                    start();
                    var document = getDocument();
                    document.addEventListener('visibilitychange', onVisibilityChange);
                    attachMouseEvents();
                }
            });
            on('beforeTransitionStart', function(_s, speed, internal) {
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
                    else stop();
                }
            });
            on('sliderFirstMove', function() {
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) stop();
                    else pause();
                }
            });
            on('touchEnd', function() {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
            });
            on('destroy', function() {
                detachMouseEvents();
                if (swiper.autoplay.running) stop();
                var document = getDocument();
                document.removeEventListener('visibilitychange', onVisibilityChange);
            });
            Object.assign(swiper.autoplay, {
                pause: pause,
                run: run,
                start: start,
                stop: stop
            });
        };
        var Thumb = function Thumb(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: true,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: 'swiper-slide-thumb-active',
                    thumbsContainerClass: 'swiper-thumbs'
                }
            });
            var initialized = false;
            var swiperCreated = false;
            swiper.thumbs = {
                swiper: null
            };
            function onThumbClick() {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                var clickedIndex = thumbsSwiper.clickedIndex;
                var clickedSlide = thumbsSwiper.clickedSlide;
                if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
                if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
                var slideToIndex;
                if (thumbsSwiper.params.loop) slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
                else slideToIndex = clickedIndex;
                if (swiper.params.loop) {
                    var currentIndex = swiper.activeIndex;
                    if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                        swiper.loopFix(); // eslint-disable-next-line
                        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                        currentIndex = swiper.activeIndex;
                    }
                    var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
                    var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
                    if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
                    else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
                    else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
                    else slideToIndex = prevIndex;
                }
                swiper.slideTo(slideToIndex);
            }
            function init() {
                var _params = swiper.params, thumbsParams = _params.thumbs;
                if (initialized) return false;
                initialized = true;
                var SwiperClass = swiper.constructor;
                if (thumbsParams.swiper instanceof SwiperClass) {
                    swiper.thumbs.swiper = thumbsParams.swiper;
                    Object.assign(swiper.thumbs.swiper.originalParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    Object.assign(swiper.thumbs.swiper.params, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                } else if (isObject(thumbsParams.swiper)) {
                    var thumbsSwiperParams = Object.assign({
                    }, thumbsParams.swiper);
                    Object.assign(thumbsSwiperParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                    swiperCreated = true;
                }
                swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
                swiper.thumbs.swiper.on('tap', onThumbClick);
                return true;
            }
            function update(initial) {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
                var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
                var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
                if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                    var currentThumbsIndex = thumbsSwiper.activeIndex;
                    var newThumbsIndex;
                    var direction;
                    if (thumbsSwiper.params.loop) {
                        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                            thumbsSwiper.loopFix(); // eslint-disable-next-line
                            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                            currentThumbsIndex = thumbsSwiper.activeIndex;
                        } // Find actual thumbs index to slide to
                        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
                        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
                        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
                        else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
                        else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                        else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                        else newThumbsIndex = prevThumbsIndex;
                        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                    } else {
                        newThumbsIndex = swiper.realIndex;
                        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                    }
                    if (useOffset) newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                    if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                        if (thumbsSwiper.params.centeredSlides) {
                            if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                            else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                    }
                } // Activate thumbs
                var thumbsToActivate = 1;
                var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
                if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
                if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
                thumbsToActivate = Math.floor(thumbsToActivate);
                thumbsSwiper.slides.removeClass(thumbActiveClass);
                if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(var i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(swiper.realIndex + i, "\"]")).addClass(thumbActiveClass);
                else for(var i9 = 0; i9 < thumbsToActivate; i9 += 1)thumbsSwiper.slides.eq(swiper.realIndex + i9).addClass(thumbActiveClass);
            }
            on('beforeInit', function() {
                var thumbs = swiper.params.thumbs;
                if (!thumbs || !thumbs.swiper) return;
                init();
                update(true);
            });
            on('slideChange update resize observerUpdate', function() {
                if (!swiper.thumbs.swiper) return;
                update();
            });
            on('setTransition', function(_s, duration) {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                thumbsSwiper.setTransition(duration);
            });
            on('beforeDestroy', function() {
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                if (swiperCreated && thumbsSwiper) thumbsSwiper.destroy();
            });
            Object.assign(swiper.thumbs, {
                init: init,
                update: update
            });
        };
        var freeMode = function freeMode(param2) {
            var swiper = param2.swiper, extendParams = param2.extendParams, emit = param2.emit, once = param2.once;
            extendParams({
                freeMode: {
                    enabled: false,
                    momentum: true,
                    momentumRatio: 1,
                    momentumBounce: true,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: false,
                    minimumVelocity: 0.02
                }
            });
            function onTouchMove() {
                var data = swiper.touchEventsData, touches = swiper.touches; // Velocity
                if (data.velocities.length === 0) data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime
                });
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                    time: now()
                });
            }
            function onTouchEnd(param) {
                var currentPos = param.currentPos;
                var params = swiper.params, $wrapperEl = swiper.$wrapperEl, rtl = swiper.rtlTranslate, snapGrid = swiper.snapGrid, data = swiper.touchEventsData; // Time diff
                var touchEndTime = now();
                var timeDiff = touchEndTime - data.touchStartTime;
                if (currentPos < -swiper.minTranslate()) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (currentPos > -swiper.maxTranslate()) {
                    if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
                    else swiper.slideTo(swiper.slides.length - 1);
                    return;
                }
                if (params.freeMode.momentum) {
                    if (data.velocities.length > 1) {
                        var lastMoveEvent = data.velocities.pop();
                        var velocityEvent = data.velocities.pop();
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        swiper.velocity = distance / time;
                        swiper.velocity /= 2;
                        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                        // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.
                        if (time > 150 || now() - lastMoveEvent.time > 300) swiper.velocity = 0;
                    } else swiper.velocity = 0;
                    swiper.velocity *= params.freeMode.momentumVelocityRatio;
                    data.velocities.length = 0;
                    var momentumDuration = 1000 * params.freeMode.momentumRatio;
                    var momentumDistance = swiper.velocity * momentumDuration;
                    var newPosition = swiper.translate + momentumDistance;
                    if (rtl) newPosition = -newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                    var needsLoopFix;
                    if (newPosition < swiper.maxTranslate()) {
                        if (params.freeMode.momentumBounce) {
                            if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                            afterBouncePosition = swiper.maxTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else newPosition = swiper.maxTranslate();
                        if (params.loop && params.centeredSlides) needsLoopFix = true;
                    } else if (newPosition > swiper.minTranslate()) {
                        if (params.freeMode.momentumBounce) {
                            if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                            afterBouncePosition = swiper.minTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else newPosition = swiper.minTranslate();
                        if (params.loop && params.centeredSlides) needsLoopFix = true;
                    } else if (params.freeMode.sticky) {
                        var nextSlide;
                        for(var j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') newPosition = snapGrid[nextSlide];
                        else newPosition = snapGrid[nextSlide - 1];
                        newPosition = -newPosition;
                    }
                    if (needsLoopFix) once('transitionEnd', function() {
                        swiper.loopFix();
                    });
                    // Fix duration
                    if (swiper.velocity !== 0) {
                        if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                        else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                        if (params.freeMode.sticky) {
                            // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                            // It's easy to see this when simulating touch with mouse events. To fix this,
                            // limit single-slide swipes to the default slide duration. This also has the
                            // nice side effect of matching slide speed if the user stopped moving before
                            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                            // For faster swipes, also apply limits (albeit higher ones).
                            var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                            if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                            else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                            else momentumDuration = params.speed * 2.5;
                        }
                    } else if (params.freeMode.sticky) {
                        swiper.slideToClosest();
                        return;
                    }
                    if (params.freeMode.momentumBounce && doBounce) {
                        swiper.updateProgress(afterBouncePosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function() {
                            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                            emit('momentumBounce');
                            swiper.setTransition(params.speed);
                            setTimeout(function() {
                                swiper.setTranslate(afterBouncePosition);
                                $wrapperEl.transitionEnd(function() {
                                    if (!swiper || swiper.destroyed) return;
                                    swiper.transitionEnd();
                                });
                            }, 0);
                        });
                    } else if (swiper.velocity) {
                        emit('_freeModeNoMomentumRelease');
                        swiper.updateProgress(newPosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);
                        if (!swiper.animating) {
                            swiper.animating = true;
                            $wrapperEl.transitionEnd(function() {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            });
                        }
                    } else swiper.updateProgress(newPosition);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                } else if (params.freeMode.sticky) {
                    swiper.slideToClosest();
                    return;
                } else if (params.freeMode) emit('_freeModeNoMomentumRelease');
                if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
            }
            Object.assign(swiper, {
                freeMode: {
                    onTouchMove: onTouchMove,
                    onTouchEnd: onTouchEnd
                }
            });
        };
        var Grid = function Grid(param) {
            var swiper = param.swiper, extendParams = param.extendParams;
            extendParams({
                grid: {
                    rows: 1,
                    fill: 'column'
                }
            });
            var slidesNumberEvenToRows;
            var slidesPerRow;
            var numFullColumns;
            var initSlides = function(slidesLength) {
                var slidesPerView = swiper.params.slidesPerView;
                var _grid = swiper.params.grid, rows = _grid.rows, fill = _grid.fill;
                slidesPerRow = slidesNumberEvenToRows / rows;
                numFullColumns = Math.floor(slidesLength / rows);
                if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
                else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
                if (slidesPerView !== 'auto' && fill === 'row') slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
            };
            var updateSlide = function(i, slide, slidesLength, getDirectionLabel) {
                var _params = swiper.params, slidesPerGroup = _params.slidesPerGroup, spaceBetween = _params.spaceBetween;
                var _grid = swiper.params.grid, rows = _grid.rows, fill = _grid.fill; // Set slides order
                var newSlideOrderIndex;
                var column;
                var row;
                if (fill === 'row' && slidesPerGroup > 1) {
                    var groupIndex = Math.floor(i / (slidesPerGroup * rows));
                    var slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
                    var columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
                    row = Math.floor(slideIndexInGroup / columnsInGroup);
                    column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
                    newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
                    slide.css({
                        '-webkit-order': newSlideOrderIndex,
                        order: newSlideOrderIndex
                    });
                } else if (fill === 'column') {
                    column = Math.floor(i / rows);
                    row = i - column * rows;
                    if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                        row += 1;
                        if (row >= rows) {
                            row = 0;
                            column += 1;
                        }
                    }
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - row * slidesPerRow;
                }
                slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && "".concat(spaceBetween, "px") : '');
            };
            var updateWrapperSize = function(slideSize, snapGrid, getDirectionLabel) {
                var _params = swiper.params, spaceBetween = _params.spaceBetween, centeredSlides = _params.centeredSlides, roundLengths = _params.roundLengths;
                var rows = swiper.params.grid.rows;
                swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
                swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
                swiper.$wrapperEl.css($167db31c658a8beb$export$2e2bcd8739ae039({
                }, getDirectionLabel('width'), "".concat(swiper.virtualSize + spaceBetween, "px")));
                if (centeredSlides) {
                    var _snapGrid;
                    snapGrid.splice(0, snapGrid.length);
                    var newSlidesGrid = [];
                    for(var i = 0; i < snapGrid.length; i += 1){
                        var slidesGridItem = snapGrid[i];
                        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                    }
                    (_snapGrid = snapGrid).push.apply(_snapGrid, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(newSlidesGrid));
                }
            };
            swiper.grid = {
                initSlides: initSlides,
                updateSlide: updateSlide,
                updateWrapperSize: updateWrapperSize
            };
        };
        var appendSlide1 = function appendSlide1(slides) {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl, params = swiper.params;
            if (params.loop) swiper.loopDestroy();
            if (typeof slides === 'object' && 'length' in slides) {
                for(var i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
            } else $wrapperEl.append(slides);
            if (params.loop) swiper.loopCreate();
            if (!params.observer) swiper.update();
        };
        var prependSlide1 = function prependSlide1(slides) {
            var swiper = this;
            var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
            if (params.loop) swiper.loopDestroy();
            var newActiveIndex = activeIndex + 1;
            if (typeof slides === 'object' && 'length' in slides) {
                for(var i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
                newActiveIndex = activeIndex + slides.length;
            } else $wrapperEl.prepend(slides);
            if (params.loop) swiper.loopCreate();
            if (!params.observer) swiper.update();
            swiper.slideTo(newActiveIndex, 0, false);
        };
        var addSlide = function addSlide(index, slides) {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl, params = swiper.params, activeIndex = swiper.activeIndex;
            var activeIndexBuffer = activeIndex;
            if (params.loop) {
                activeIndexBuffer -= swiper.loopedSlides;
                swiper.loopDestroy();
                swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
            }
            var baseLength = swiper.slides.length;
            if (index <= 0) {
                swiper.prependSlide(slides);
                return;
            }
            if (index >= baseLength) {
                swiper.appendSlide(slides);
                return;
            }
            var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
            var slidesBuffer = [];
            for(var i = baseLength - 1; i >= index; i -= 1){
                var currentSlide = swiper.slides.eq(i);
                currentSlide.remove();
                slidesBuffer.unshift(currentSlide);
            }
            if (typeof slides === 'object' && 'length' in slides) {
                for(var i10 = 0; i10 < slides.length; i10 += 1)if (slides[i10]) $wrapperEl.append(slides[i10]);
                newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
            } else $wrapperEl.append(slides);
            for(var i11 = 0; i11 < slidesBuffer.length; i11 += 1)$wrapperEl.append(slidesBuffer[i11]);
            if (params.loop) swiper.loopCreate();
            if (!params.observer) swiper.update();
            if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
            else swiper.slideTo(newActiveIndex, 0, false);
        };
        var removeSlide1 = function removeSlide1(slidesIndexes) {
            var swiper = this;
            var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
            var activeIndexBuffer = activeIndex;
            if (params.loop) {
                activeIndexBuffer -= swiper.loopedSlides;
                swiper.loopDestroy();
                swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
            }
            var newActiveIndex = activeIndexBuffer;
            var indexToRemove;
            if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
                for(var i = 0; i < slidesIndexes.length; i += 1){
                    indexToRemove = slidesIndexes[i];
                    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            } else {
                indexToRemove = slidesIndexes;
                if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            if (params.loop) swiper.loopCreate();
            if (!params.observer) swiper.update();
            if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
            else swiper.slideTo(newActiveIndex, 0, false);
        };
        var removeAllSlides1 = function removeAllSlides1() {
            var swiper = this;
            var slidesIndexes = [];
            for(var i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
            swiper.removeSlide(slidesIndexes);
        };
        var Manipulation = function Manipulation(param) {
            var swiper = param.swiper;
            Object.assign(swiper, {
                appendSlide: appendSlide1.bind(swiper),
                prependSlide: prependSlide1.bind(swiper),
                addSlide: addSlide.bind(swiper),
                removeSlide: removeSlide1.bind(swiper),
                removeAllSlides: removeAllSlides1.bind(swiper)
            });
        };
        var effectInit = function effectInit(params) {
            var effect = params.effect, swiper = params.swiper, on = params.on, setTranslate = params.setTranslate, setTransition = params.setTransition, overwriteParams = params.overwriteParams, perspective = params.perspective;
            on('beforeInit', function() {
                if (swiper.params.effect !== effect) return;
                swiper.classNames.push("".concat(swiper.params.containerModifierClass).concat(effect));
                if (perspective && perspective()) swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
                var overwriteParamsResult = overwriteParams ? overwriteParams() : {
                };
                Object.assign(swiper.params, overwriteParamsResult);
                Object.assign(swiper.originalParams, overwriteParamsResult);
            });
            on('setTranslate', function() {
                if (swiper.params.effect !== effect) return;
                setTranslate();
            });
            on('setTransition', function(_s, duration) {
                if (swiper.params.effect !== effect) return;
                setTransition(duration);
            });
        };
        var effectTarget = function effectTarget(effectParams, $slideEl) {
            if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
                'backface-visibility': 'hidden',
                '-webkit-backface-visibility': 'hidden'
            });
            return $slideEl;
        };
        var effectVirtualTransitionEnd = function effectVirtualTransitionEnd(param) {
            var swiper = param.swiper, duration = param.duration, transformEl = param.transformEl, allSlides = param.allSlides;
            var slides = swiper.slides, activeIndex = swiper.activeIndex, $wrapperEl = swiper.$wrapperEl;
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                var $transitionEndTarget;
                if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
                else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
                $transitionEndTarget.transitionEnd(function() {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = [
                        'webkitTransitionEnd',
                        'transitionend'
                    ];
                    for(var i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
                });
            }
        };
        var EffectFade = function EffectFade(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                fadeEffect: {
                    crossFade: false,
                    transformEl: null
                }
            });
            var setTranslate = function() {
                var slides = swiper.slides;
                var params = swiper.params.fadeEffect;
                for(var i = 0; i < slides.length; i += 1){
                    var $slideEl = swiper.slides.eq(i);
                    var offset = $slideEl[0].swiperSlideOffset;
                    var tx = -offset;
                    if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                    var ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                    }
                    var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                    var $targetEl = effectTarget(params, $slideEl);
                    $targetEl.css({
                        opacity: slideOpacity
                    }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
                }
            };
            var setTransition = function(duration) {
                var transformEl = swiper.params.fadeEffect.transformEl;
                var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration);
                effectVirtualTransitionEnd({
                    swiper: swiper,
                    duration: duration,
                    transformEl: transformEl,
                    allSlides: true
                });
            };
            effectInit({
                effect: 'fade',
                swiper: swiper,
                on: on,
                setTranslate: setTranslate,
                setTransition: setTransition,
                overwriteParams: function() {
                    return {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: !swiper.params.cssMode
                    };
                }
            });
        };
        var EffectCube = function EffectCube(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }
            });
            var setTranslate = function() {
                var $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides, swiperWidth = swiper.width, swiperHeight = swiper.height, rtl = swiper.rtlTranslate, swiperSize = swiper.size, browser = swiper.browser;
                var params = swiper.params.cubeEffect;
                var isHorizontal = swiper.isHorizontal();
                var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                var wrapperRotate = 0;
                var $cubeShadowEl;
                if (params.shadow) {
                    if (isHorizontal) {
                        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                        if ($cubeShadowEl.length === 0) {
                            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                            $wrapperEl.append($cubeShadowEl);
                        }
                        $cubeShadowEl.css({
                            height: "".concat(swiperWidth, "px")
                        });
                    } else {
                        $cubeShadowEl = $el.find('.swiper-cube-shadow');
                        if ($cubeShadowEl.length === 0) {
                            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                            $el.append($cubeShadowEl);
                        }
                    }
                }
                for(var i = 0; i < slides.length; i += 1){
                    var $slideEl = slides.eq(i);
                    var slideIndex = i;
                    if (isVirtual) slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                    var slideAngle = slideIndex * 90;
                    var round = Math.floor(slideAngle / 360);
                    if (rtl) {
                        slideAngle = -slideAngle;
                        round = Math.floor(-slideAngle / 360);
                    }
                    var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                    var tx = 0;
                    var ty = 0;
                    var tz = 0;
                    if (slideIndex % 4 === 0) {
                        tx = -round * 4 * swiperSize;
                        tz = 0;
                    } else if ((slideIndex - 1) % 4 === 0) {
                        tx = 0;
                        tz = -round * 4 * swiperSize;
                    } else if ((slideIndex - 2) % 4 === 0) {
                        tx = swiperSize + round * 4 * swiperSize;
                        tz = swiperSize;
                    } else if ((slideIndex - 3) % 4 === 0) {
                        tx = -swiperSize;
                        tz = 3 * swiperSize + swiperSize * 4 * round;
                    }
                    if (rtl) tx = -tx;
                    if (!isHorizontal) {
                        ty = tx;
                        tx = 0;
                    }
                    var transform = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");
                    if (progress <= 1 && progress > -1) {
                        wrapperRotate = slideIndex * 90 + progress * 90;
                        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                    }
                    $slideEl.transform(transform);
                    if (params.slideShadows) {
                        // Set shadows
                        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                        if (shadowBefore.length === 0) {
                            shadowBefore = $("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
                            $slideEl.append(shadowBefore);
                        }
                        if (shadowAfter.length === 0) {
                            shadowAfter = $("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
                            $slideEl.append(shadowAfter);
                        }
                        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }
                }
                $wrapperEl.css({
                    '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
                    'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
                });
                if (params.shadow) {
                    if (isHorizontal) $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
                    else {
                        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                        var scale1 = params.shadowScale;
                        var scale2 = params.shadowScale / multiplier;
                        var offset = params.shadowOffset;
                        $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
                    }
                }
                var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
                $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
            };
            var setTransition = function(duration) {
                var $el = swiper.$el, slides = swiper.slides;
                slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find('.swiper-cube-shadow').transition(duration);
            };
            effectInit({
                effect: 'cube',
                swiper: swiper,
                on: on,
                setTranslate: setTranslate,
                setTransition: setTransition,
                perspective: function() {
                    return true;
                },
                overwriteParams: function() {
                    return {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: false,
                        virtualTranslate: true
                    };
                }
            });
        };
        var createShadow = function createShadow(params, $slideEl, side) {
            var shadowClass = "swiper-slide-shadow".concat(side ? "-".concat(side) : '');
            var $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
            var $shadowEl = $shadowContainer.children(".".concat(shadowClass));
            if (!$shadowEl.length) {
                $shadowEl = $("<div class=\"swiper-slide-shadow".concat(side ? "-".concat(side) : '', "\"></div>"));
                $shadowContainer.append($shadowEl);
            }
            return $shadowEl;
        };
        var EffectFlip = function EffectFlip(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                flipEffect: {
                    slideShadows: true,
                    limitRotation: true,
                    transformEl: null
                }
            });
            var setTranslate = function() {
                var slides = swiper.slides, rtl = swiper.rtlTranslate;
                var params = swiper.params.flipEffect;
                for(var i = 0; i < slides.length; i += 1){
                    var $slideEl = slides.eq(i);
                    var progress = $slideEl[0].progress;
                    if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                    var offset = $slideEl[0].swiperSlideOffset;
                    var rotate = -180 * progress;
                    var rotateY = rotate;
                    var rotateX = 0;
                    var tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                    var ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                        rotateX = -rotateY;
                        rotateY = 0;
                    } else if (rtl) rotateY = -rotateY;
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                    if (params.slideShadows) {
                        // Set shadows
                        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                        if (shadowBefore.length === 0) shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
                        if (shadowAfter.length === 0) shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
                        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }
                    var transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
                    var $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(transform);
                }
            };
            var setTransition = function(duration) {
                var transformEl = swiper.params.flipEffect.transformEl;
                var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                effectVirtualTransitionEnd({
                    swiper: swiper,
                    duration: duration,
                    transformEl: transformEl
                });
            };
            effectInit({
                effect: 'flip',
                swiper: swiper,
                on: on,
                setTranslate: setTranslate,
                setTransition: setTransition,
                perspective: function() {
                    return true;
                },
                overwriteParams: function() {
                    return {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: !swiper.params.cssMode
                    };
                }
            });
        };
        var EffectCoverflow = function EffectCoverflow(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: true,
                    transformEl: null
                }
            });
            var setTranslate = function() {
                var swiperWidth = swiper.width, swiperHeight = swiper.height, slides = swiper.slides, slidesSizesGrid = swiper.slidesSizesGrid;
                var params = swiper.params.coverflowEffect;
                var isHorizontal = swiper.isHorizontal();
                var transform = swiper.translate;
                var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
                var rotate = isHorizontal ? params.rotate : -params.rotate;
                var translate = params.depth; // Each slide offset from center
                for(var i = 0, length = slides.length; i < length; i += 1){
                    var $slideEl = slides.eq(i);
                    var slideSize = slidesSizesGrid[i];
                    var slideOffset = $slideEl[0].swiperSlideOffset;
                    var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
                    var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                    var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
                    var translateZ = -translate * Math.abs(offsetMultiplier);
                    var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
                    if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
                    var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                    var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                    var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
                    if (Math.abs(translateX) < 0.001) translateX = 0;
                    if (Math.abs(translateY) < 0.001) translateY = 0;
                    if (Math.abs(translateZ) < 0.001) translateZ = 0;
                    if (Math.abs(rotateY) < 0.001) rotateY = 0;
                    if (Math.abs(rotateX) < 0.001) rotateX = 0;
                    if (Math.abs(scale) < 0.001) scale = 0;
                    var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg) scale(").concat(scale, ")");
                    var $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(slideTransform);
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                    if (params.slideShadows) {
                        // Set shadows
                        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                        if ($shadowBeforeEl.length === 0) $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
                        if ($shadowAfterEl.length === 0) $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                    }
                }
            };
            var setTransition = function(duration) {
                var transformEl = swiper.params.coverflowEffect.transformEl;
                var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            };
            effectInit({
                effect: 'coverflow',
                swiper: swiper,
                on: on,
                setTranslate: setTranslate,
                setTransition: setTransition,
                perspective: function() {
                    return true;
                },
                overwriteParams: function() {
                    return {
                        watchSlidesProgress: true
                    };
                }
            });
        };
        var EffectCreative = function EffectCreative(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: false,
                    progressMultiplier: 1,
                    perspective: true,
                    prev: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            var getTranslateValue = function(value) {
                if (typeof value === 'string') return value;
                return "".concat(value, "px");
            };
            var setTranslate = function() {
                var _loop = function(i) {
                    var $slideEl = slides.eq(i);
                    var slideProgress = $slideEl[0].progress;
                    var progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
                    var originalProgress = progress;
                    if (!isCenteredSlides) originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
                    var offset = $slideEl[0].swiperSlideOffset;
                    var t = [
                        swiper.params.cssMode ? -offset - swiper.translate : -offset,
                        0,
                        0
                    ];
                    var r = [
                        0,
                        0,
                        0
                    ];
                    var custom = false;
                    if (!swiper.isHorizontal()) {
                        t[1] = t[0];
                        t[0] = 0;
                    }
                    var data = {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        scale: 1,
                        opacity: 1
                    };
                    if (progress < 0) {
                        data = params.next;
                        custom = true;
                    } else if (progress > 0) {
                        data = params.prev;
                        custom = true;
                    } // set translate
                    t.forEach(function(value, index) {
                        t[index] = "calc(".concat(value, "px + (").concat(getTranslateValue(data.translate[index]), " * ").concat(Math.abs(progress * multiplier), "))");
                    }); // set rotates
                    r.forEach(function(value, index) {
                        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
                    });
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                    var translateString = t.join(', ');
                    var rotateString = "rotateX(".concat(r[0], "deg) rotateY(").concat(r[1], "deg) rotateZ(").concat(r[2], "deg)");
                    var scaleString = originalProgress < 0 ? "scale(".concat(1 + (1 - data.scale) * originalProgress * multiplier, ")") : "scale(".concat(1 - (1 - data.scale) * originalProgress * multiplier, ")");
                    var opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                    var transform = "translate3d(".concat(translateString, ") ").concat(rotateString, " ").concat(scaleString); // Set shadows
                    if (custom && data.shadow || !custom) {
                        var $shadowEl = $slideEl.children('.swiper-slide-shadow');
                        if ($shadowEl.length === 0 && data.shadow) $shadowEl = createShadow(params, $slideEl);
                        if ($shadowEl.length) {
                            var shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                            $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                        }
                    }
                    var $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(transform).css({
                        opacity: opacityString
                    });
                    if (data.origin) $targetEl.css('transform-origin', data.origin);
                };
                var slides = swiper.slides, $wrapperEl = swiper.$wrapperEl, slidesSizesGrid = swiper.slidesSizesGrid;
                var params = swiper.params.creativeEffect;
                var multiplier = params.progressMultiplier;
                var isCenteredSlides = swiper.params.centeredSlides;
                if (isCenteredSlides) {
                    var margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                    $wrapperEl.transform("translateX(calc(50% - ".concat(margin, "px))"));
                }
                for(var i = 0; i < slides.length; i += 1)_loop(i);
            };
            var setTransition = function(duration) {
                var transformEl = swiper.params.creativeEffect.transformEl;
                var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
                effectVirtualTransitionEnd({
                    swiper: swiper,
                    duration: duration,
                    transformEl: transformEl,
                    allSlides: true
                });
            };
            effectInit({
                effect: 'creative',
                swiper: swiper,
                on: on,
                setTranslate: setTranslate,
                setTransition: setTransition,
                perspective: function() {
                    return swiper.params.creativeEffect.perspective;
                },
                overwriteParams: function() {
                    return {
                        watchSlidesProgress: true,
                        virtualTranslate: !swiper.params.cssMode
                    };
                }
            });
        };
        var EffectCards = function EffectCards(param) {
            var swiper = param.swiper, extendParams = param.extendParams, on = param.on;
            extendParams({
                cardsEffect: {
                    slideShadows: true,
                    transformEl: null
                }
            });
            var setTranslate = function() {
                var slides = swiper.slides, activeIndex = swiper.activeIndex;
                var params = swiper.params.cardsEffect;
                var _touchEventsData = swiper.touchEventsData, startTranslate = _touchEventsData.startTranslate, isTouched = _touchEventsData.isTouched;
                var currentTranslate = swiper.translate;
                for(var i = 0; i < slides.length; i += 1){
                    var $slideEl = slides.eq(i);
                    var slideProgress = $slideEl[0].progress;
                    var progress = Math.min(Math.max(slideProgress, -4), 4);
                    var offset = $slideEl[0].swiperSlideOffset;
                    if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.$wrapperEl.transform("translateX(".concat(swiper.minTranslate(), "px)"));
                    if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
                    var tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                    var tY = 0;
                    var tZ = -100 * Math.abs(progress);
                    var scale = 1;
                    var rotate = -2 * progress;
                    var tXAdd = 8 - Math.abs(progress) * 0.75;
                    var isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
                    var isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
                    if (isSwipeToNext || isSwipeToPrev) {
                        var subProgress = Math.pow(1 - Math.abs((Math.abs(progress) - 0.5) / 0.5), 0.5);
                        rotate += -28 * progress * subProgress;
                        scale += -0.5 * subProgress;
                        tXAdd += 96 * subProgress;
                        tY = "".concat(-25 * subProgress * Math.abs(progress), "%");
                    }
                    if (progress < 0) // next
                        tX = "calc(".concat(tX, "px + (").concat(tXAdd * Math.abs(progress), "%))");
                    else if (progress > 0) // prev
                        tX = "calc(".concat(tX, "px + (-").concat(tXAdd * Math.abs(progress), "%))");
                    else tX = "".concat(tX, "px");
                    if (!swiper.isHorizontal()) {
                        var prevY = tY;
                        tY = tX;
                        tX = prevY;
                    }
                    var scaleString = progress < 0 ? "".concat(1 + (1 - scale) * progress) : "".concat(1 - (1 - scale) * progress);
                    var transform = "\n        translate3d(".concat(tX, ", ").concat(tY, ", ").concat(tZ, "px)\n        rotateZ(").concat(rotate, "deg)\n        scale(").concat(scaleString, ")\n      ");
                    if (params.slideShadows) {
                        // Set shadows
                        var $shadowEl = $slideEl.find('.swiper-slide-shadow');
                        if ($shadowEl.length === 0) $shadowEl = createShadow(params, $slideEl);
                        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
                    }
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                    var $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(transform);
                }
            };
            var setTransition = function(duration) {
                var transformEl = swiper.params.cardsEffect.transformEl;
                var $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
                effectVirtualTransitionEnd({
                    swiper: swiper,
                    duration: duration,
                    transformEl: transformEl
                });
            };
            effectInit({
                effect: 'cards',
                swiper: swiper,
                on: on,
                setTranslate: setTranslate,
                setTransition: setTransition,
                perspective: function() {
                    return true;
                },
                overwriteParams: function() {
                    return {
                        watchSlidesProgress: true,
                        virtualTranslate: !swiper.params.cssMode
                    };
                }
            });
        };
        function extend$1() {
            var target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            }, src = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            };
            Object.keys(src).forEach(function(key) {
                if (typeof target[key] === 'undefined') target[key] = src[key];
                else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) extend$1(target[key], src[key]);
            });
        }
        var ssrDocument = {
            body: {
            },
            addEventListener: function() {
            },
            removeEventListener: function() {
            },
            activeElement: {
                blur: function() {
                },
                nodeName: ''
            },
            querySelector: function() {
                return null;
            },
            querySelectorAll: function() {
                return [];
            },
            getElementById: function() {
                return null;
            },
            createEvent: function() {
                return {
                    initEvent: function() {
                    }
                };
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {
                    },
                    setAttribute: function() {
                    },
                    getElementsByTagName: function() {
                        return [];
                    }
                };
            },
            createElementNS: function() {
                return {
                };
            },
            importNode: function() {
                return null;
            },
            location: {
                hash: '',
                host: '',
                hostname: '',
                href: '',
                origin: '',
                pathname: '',
                protocol: '',
                search: ''
            }
        };
        var ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ''
            },
            location: {
                hash: '',
                host: '',
                hostname: '',
                href: '',
                origin: '',
                pathname: '',
                protocol: '',
                search: ''
            },
            history: {
                replaceState: function() {
                },
                pushState: function() {
                },
                go: function() {
                },
                back: function() {
                }
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener: function() {
            },
            removeEventListener: function() {
            },
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return '';
                    }
                };
            },
            Image: function() {
            },
            Date: function() {
            },
            screen: {
            },
            setTimeout: function() {
            },
            clearTimeout: function() {
            },
            matchMedia: function() {
                return {
                };
            },
            requestAnimationFrame: function(callback) {
                if (typeof setTimeout === 'undefined') {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame: function(id) {
                if (typeof setTimeout === 'undefined') return;
                clearTimeout(id);
            }
        };
        var Dom7 = /*#__PURE__*/ function(Array) {
            $c4ea276b874ff1f8$export$2e2bcd8739ae039(Dom7, Array);
            var _super = $110337f557ebf7b5$export$2e2bcd8739ae039(Dom7);
            function Dom7(items) {
                $f389dca33e92ce8b$export$2e2bcd8739ae039(this, Dom7);
                var _this;
                _this = _super.call.apply(_super, [
                    this
                ].concat($5fc5c89fea7cc5a5$export$2e2bcd8739ae039(items || [])));
                makeReactive($eb797b7c0cf090ee$export$2e2bcd8739ae039(_this));
                return _this;
            }
            return Dom7;
        }($f270b75bf34ef256$export$2e2bcd8739ae039(Array));
        function arrayFlat() {
            var arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            var res = [];
            arr.forEach(function(el) {
                var _res;
                if (Array.isArray(el)) (_res = res).push.apply(_res, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(arrayFlat(el)));
                else res.push(el);
            });
            return res;
        }
        $.fn = Dom7.prototype; // eslint-disable-next-line
        var Methods = {
            addClass: addClass,
            removeClass: removeClass,
            hasClass: hasClass,
            toggleClass: toggleClass,
            attr: attr,
            removeAttr: removeAttr,
            transform: transform1,
            transition: transition$1,
            on: on,
            off: off,
            trigger: trigger,
            transitionEnd: transitionEnd$1,
            outerWidth: outerWidth,
            outerHeight: outerHeight,
            styles: styles1,
            offset: offset,
            css: css,
            each: each,
            html: html1,
            text: text1,
            is: is,
            index: index1,
            eq: eq,
            append: append,
            prepend: prepend,
            next: next,
            nextAll: nextAll,
            prev: prev,
            prevAll: prevAll,
            parent: parent,
            parents: parents1,
            closest: closest,
            find: find,
            children: children,
            filter: filter,
            remove: remove
        };
        Object.keys(Methods).forEach(function(methodName) {
            Object.defineProperty($.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        });
        function extend() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var to = Object(args[0]);
            var noExtend = [
                '__proto__',
                'constructor',
                'prototype'
            ];
            for(var i = 1; i < args.length; i += 1){
                var nextSource = args[i];
                if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
                    var keysArray = Object.keys(Object(nextSource)).filter(function(key) {
                        return noExtend.indexOf(key) < 0;
                    });
                    for(var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                                if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                                else extend(to[nextKey], nextSource[nextKey]);
                            } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                                to[nextKey] = {
                                };
                                if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                                else extend(to[nextKey], nextSource[nextKey]);
                            } else to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        }
        var support1;
        var deviceCached;
        var browser1;
        /* eslint-disable no-underscore-dangle */ var eventsEmitter = {
            on: function(events, handler, priority) {
                var self = this;
                if (typeof handler !== 'function') return self;
                var method = priority ? 'unshift' : 'push';
                events.split(' ').forEach(function(event) {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                });
                return self;
            },
            once: function(events, handler, priority) {
                var self = this;
                if (typeof handler !== 'function') return self;
                function onceHandler() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny: function(handler, priority) {
                var self = this;
                if (typeof handler !== 'function') return self;
                var method = priority ? 'unshift' : 'push';
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny: function(handler) {
                var self = this;
                if (!self.eventsAnyListeners) return self;
                var index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off: function(events, handler) {
                var self = this;
                if (!self.eventsListeners) return self;
                events.split(' ').forEach(function(event) {
                    if (typeof handler === 'undefined') self.eventsListeners[event] = [];
                    else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(function(eventHandler, index) {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    });
                });
                return self;
            },
            emit: function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var self = this;
                if (!self.eventsListeners) return self;
                var events = void 0;
                var data = void 0;
                var context = void 0;
                if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                var eventsArray = Array.isArray(events) ? events : events.split(' ');
                eventsArray.forEach(function(event) {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach(function(eventHandler) {
                        eventHandler.apply(context, [
                            event
                        ].concat($5fc5c89fea7cc5a5$export$2e2bcd8739ae039(data)));
                    });
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach(function(eventHandler) {
                        eventHandler.apply(context, data);
                    });
                });
                return self;
            }
        };
        var update1 = {
            updateSize: updateSize,
            updateSlides: updateSlides,
            updateAutoHeight: updateAutoHeight,
            updateSlidesOffset: updateSlidesOffset,
            updateSlidesProgress: updateSlidesProgress,
            updateProgress: updateProgress,
            updateSlidesClasses: updateSlidesClasses,
            updateActiveIndex: updateActiveIndex,
            updateClickedSlide: updateClickedSlide
        };
        var translate1 = {
            getTranslate: getSwiperTranslate,
            setTranslate: setTranslate,
            minTranslate: minTranslate,
            maxTranslate: maxTranslate,
            translateTo: translateTo
        };
        var transition = {
            setTransition: setTransition,
            transitionStart: transitionStart,
            transitionEnd: transitionEnd
        };
        var slide1 = {
            slideTo: slideTo,
            slideToLoop: slideToLoop,
            slideNext: slideNext,
            slidePrev: slidePrev,
            slideReset: slideReset,
            slideToClosest: slideToClosest,
            slideToClickedSlide: slideToClickedSlide
        };
        var loop = {
            loopCreate: loopCreate,
            loopFix: loopFix,
            loopDestroy: loopDestroy
        };
        var grabCursor = {
            setGrabCursor: setGrabCursor,
            unsetGrabCursor: unsetGrabCursor
        };
        var dummyEventAttached = false;
        var events1 = function(swiper, method) {
            var document = getDocument();
            var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device = swiper.device, support = swiper.support;
            var capture = !!params.nested;
            var domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
            var swiperMethod = method; // Touch Events
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture: capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            } // Prevent Links Clicks
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]('click', swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]('scroll', swiper.onScroll);
            // Resize handler
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
            else swiper[swiperMethod]('observerUpdate', onResize, true);
        };
        var events$1 = {
            attachEvents: attachEvents,
            detachEvents: detachEvents
        };
        var isGridEnabled = function(swiper, params) {
            return swiper.grid && params.grid && params.grid.rows > 1;
        };
        var breakpoints1 = {
            setBreakpoint: setBreakpoint,
            getBreakpoint: getBreakpoint
        };
        var classes1 = {
            addClasses: addClasses,
            removeClasses: removeClasses
        };
        var images = {
            loadImage: loadImage,
            preloadImages: preloadImages
        };
        var checkOverflow$1 = {
            checkOverflow: checkOverflow
        };
        var defaults = {
            init: true,
            direction: 'horizontal',
            touchEventsTarget: 'wrapper',
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: 'input, select, option, textarea, button, video, label',
            // Overrides
            width: null,
            height: null,
            //
            preventInteractionOnTransition: false,
            // ssr
            userAgent: null,
            url: null,
            // To support iOS's swipe-to-go-back gesture (when being used in-app).
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide',
            // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            // Breakpoints
            breakpoints: undefined,
            breakpointsBase: 'window',
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            // in px
            slidesOffsetAfter: 0,
            // in px
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            // Disable swiper and hide navigation when container not overflow
            watchOverflow: true,
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Progress
            watchSlidesProgress: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            // rewind
            rewind: false,
            // Swiping/no swiping
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            // '.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            noSwipingSelector: null,
            // Passive Listeners
            passiveListeners: true,
            // NS
            containerModifierClass: 'swiper-',
            // NEW
            slideClass: 'swiper-slide',
            slideBlankClass: 'swiper-slide-invisible-blank',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            // Callbacks
            runCallbacksOnInit: true,
            // Internals
            _emitClasses: false
        };
        /* eslint no-param-reassign: "off" */ var prototypes = {
            eventsEmitter: eventsEmitter,
            update: update1,
            translate: translate1,
            transition: transition,
            slide: slide1,
            loop: loop,
            grabCursor: grabCursor,
            events: events$1,
            breakpoints: breakpoints1,
            checkOverflow: checkOverflow$1,
            classes: classes1,
            images: images
        };
        var extendedDefaults = {
        };
        var Swiper1 = /*#__PURE__*/ function() {
            function Swiper1() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _modules;
                $f389dca33e92ce8b$export$2e2bcd8739ae039(this, Swiper1);
                var el = void 0;
                var params = void 0;
                var ref;
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') params = args[0];
                else ref = $63dda9574375e3f5$export$2e2bcd8739ae039(args, 2), el = ref[0], params = ref[1], ref;
                if (!params) params = {
                };
                params = extend({
                }, params);
                if (el && !params.el) params.el = el;
                if (params.el && $(params.el).length > 1) {
                    var swipers = [];
                    $(params.el).each(function(containerEl) {
                        var newParams = extend({
                        }, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper1(newParams));
                    });
                    return swipers;
                } // Swiper Instance
                var swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {
                };
                swiper.eventsAnyListeners = [];
                swiper.modules = $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(swiper.__modules__);
                if (params.modules && Array.isArray(params.modules)) (_modules = swiper.modules).push.apply(_modules, $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(params.modules));
                var allModulesParams = {
                };
                swiper.modules.forEach(function(mod) {
                    mod({
                        swiper: swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }); // Extend defaults with modules params
                var swiperParams = extend({
                }, defaults, allModulesParams); // Extend defaults with passed params
                swiper.params = extend({
                }, swiperParams, extendedDefaults, params);
                swiper.originalParams = extend({
                }, swiper.params);
                swiper.passedParams = extend({
                }, params); // add event listeners
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach(function(eventName) {
                    swiper.on(eventName, swiper.params.on[eventName]);
                });
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                // Save Dom lib
                swiper.$ = $; // Extend Swiper
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el: el,
                    // Classes
                    classNames: [],
                    // Slides
                    slides: $(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    // isDirection
                    isHorizontal: function() {
                        return swiper.params.direction === 'horizontal';
                    },
                    isVertical: function() {
                        return swiper.params.direction === 'vertical';
                    },
                    // Indexes
                    activeIndex: 0,
                    realIndex: 0,
                    //
                    isBeginning: true,
                    isEnd: false,
                    // Props
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    // Locks
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    // Touch Events
                    touchEvents: function touchEvents() {
                        var touch = [
                            'touchstart',
                            'touchmove',
                            'touchend',
                            'touchcancel'
                        ];
                        var desktop = [
                            'pointerdown',
                            'pointermove',
                            'pointerup'
                        ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: undefined,
                        isMoved: undefined,
                        allowTouchCallbacks: undefined,
                        touchStartTime: undefined,
                        isScrolling: undefined,
                        currentTranslate: undefined,
                        startTranslate: undefined,
                        allowThresholdMove: undefined,
                        // Form elements to match
                        focusableElements: swiper.params.focusableElements,
                        // Last click time
                        lastClickTime: now(),
                        clickTimeout: undefined,
                        // Velocities
                        velocities: [],
                        allowMomentumBounce: undefined,
                        isTouchEvent: undefined,
                        startMoving: undefined
                    },
                    // Clicks
                    allowClick: true,
                    // Touches
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    // Images
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit('_swiper'); // Init
                if (swiper.params.init) swiper.init();
                // Return app instance
                return swiper;
            }
            $d27ee44a68134450$export$2e2bcd8739ae039(Swiper1, [
                {
                    key: "enable",
                    value: function enable() {
                        var swiper = this;
                        if (swiper.enabled) return;
                        swiper.enabled = true;
                        if (swiper.params.grabCursor) swiper.setGrabCursor();
                        swiper.emit('enable');
                    }
                },
                {
                    key: "disable",
                    value: function disable() {
                        var swiper = this;
                        if (!swiper.enabled) return;
                        swiper.enabled = false;
                        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                        swiper.emit('disable');
                    }
                },
                {
                    key: "setProgress",
                    value: function setProgress(progress, speed) {
                        var swiper = this;
                        progress = Math.min(Math.max(progress, 0), 1);
                        var min = swiper.minTranslate();
                        var max = swiper.maxTranslate();
                        var current = (max - min) * progress + min;
                        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();
                    }
                },
                {
                    key: "emitContainerClasses",
                    value: function emitContainerClasses() {
                        var swiper = this;
                        if (!swiper.params._emitClasses || !swiper.el) return;
                        var cls = swiper.el.className.split(' ').filter(function(className) {
                            return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
                        });
                        swiper.emit('_containerClasses', cls.join(' '));
                    }
                },
                {
                    key: "getSlideClasses",
                    value: function getSlideClasses(slideEl) {
                        var swiper = this;
                        return slideEl.className.split(' ').filter(function(className) {
                            return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
                        }).join(' ');
                    }
                },
                {
                    key: "emitSlidesClasses",
                    value: function emitSlidesClasses() {
                        var swiper = this;
                        if (!swiper.params._emitClasses || !swiper.el) return;
                        var updates = [];
                        swiper.slides.each(function(slideEl) {
                            var classNames = swiper.getSlideClasses(slideEl);
                            updates.push({
                                slideEl: slideEl,
                                classNames: classNames
                            });
                            swiper.emit('_slideClass', slideEl, classNames);
                        });
                        swiper.emit('_slideClasses', updates);
                    }
                },
                {
                    key: "slidesPerViewDynamic",
                    value: function slidesPerViewDynamic() {
                        var view = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'current', exact = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                        var swiper = this;
                        var params = swiper.params, slides = swiper.slides, slidesGrid = swiper.slidesGrid, slidesSizesGrid = swiper.slidesSizesGrid, swiperSize = swiper.size, activeIndex = swiper.activeIndex;
                        var spv = 1;
                        if (params.centeredSlides) {
                            var slideSize = slides[activeIndex].swiperSlideSize;
                            var breakLoop;
                            for(var i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                                slideSize += slides[i].swiperSlideSize;
                                spv += 1;
                                if (slideSize > swiperSize) breakLoop = true;
                            }
                            for(var i12 = activeIndex - 1; i12 >= 0; i12 -= 1)if (slides[i12] && !breakLoop) {
                                slideSize += slides[i12].swiperSlideSize;
                                spv += 1;
                                if (slideSize > swiperSize) breakLoop = true;
                            }
                        } else {
                            // eslint-disable-next-line
                            if (view === 'current') for(var i13 = activeIndex + 1; i13 < slides.length; i13 += 1){
                                var slideInView = exact ? slidesGrid[i13] + slidesSizesGrid[i13] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i13] - slidesGrid[activeIndex] < swiperSize;
                                if (slideInView) spv += 1;
                            }
                            else // previous
                                for(var i14 = activeIndex - 1; i14 >= 0; i14 -= 1){
                                    var slideInView1 = slidesGrid[activeIndex] - slidesGrid[i14] < swiperSize;
                                    if (slideInView1) spv += 1;
                                }
                        }
                        return spv;
                    }
                },
                {
                    key: "update",
                    value: function update() {
                        var setTranslate = function setTranslate() {
                            var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                            var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                            swiper.setTranslate(newTranslate);
                            swiper.updateActiveIndex();
                            swiper.updateSlidesClasses();
                        };
                        var swiper = this;
                        if (!swiper || swiper.destroyed) return;
                        var snapGrid = swiper.snapGrid, params = swiper.params; // Breakpoints
                        if (params.breakpoints) swiper.setBreakpoint();
                        swiper.updateSize();
                        swiper.updateSlides();
                        swiper.updateProgress();
                        swiper.updateSlidesClasses();
                        var translated;
                        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                            setTranslate();
                            if (swiper.params.autoHeight) swiper.updateAutoHeight();
                        } else {
                            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                            else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                            if (!translated) setTranslate();
                        }
                        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                        swiper.emit('update');
                    }
                },
                {
                    key: "changeDirection",
                    value: function changeDirection(newDirection) {
                        var needUpdate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                        var swiper = this;
                        var currentDirection = swiper.params.direction;
                        if (!newDirection) // eslint-disable-next-line
                            newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
                        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') return swiper;
                        swiper.$el.removeClass("".concat(swiper.params.containerModifierClass).concat(currentDirection)).addClass("".concat(swiper.params.containerModifierClass).concat(newDirection));
                        swiper.emitContainerClasses();
                        swiper.params.direction = newDirection;
                        swiper.slides.each(function(slideEl) {
                            if (newDirection === 'vertical') slideEl.style.width = '';
                            else slideEl.style.height = '';
                        });
                        swiper.emit('changeDirection');
                        if (needUpdate) swiper.update();
                        return swiper;
                    }
                },
                {
                    key: "mount",
                    value: function mount(el) {
                        var swiper = this;
                        if (swiper.mounted) return true; // Find el
                        var $el = $(el || swiper.params.el);
                        el = $el[0];
                        if (!el) return false;
                        el.swiper = swiper;
                        var getWrapperSelector = function() {
                            return ".".concat((swiper.params.wrapperClass || '').trim().split(' ').join('.'));
                        };
                        var getWrapper = function() {
                            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                                var res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                                res.children = function(options) {
                                    return $el.children(options);
                                };
                                return res;
                            }
                            return $el.children(getWrapperSelector());
                        }; // Find Wrapper
                        var $wrapperEl = getWrapper();
                        if ($wrapperEl.length === 0 && swiper.params.createElements) {
                            var document = getDocument();
                            var wrapper = document.createElement('div');
                            $wrapperEl = $(wrapper);
                            wrapper.className = swiper.params.wrapperClass;
                            $el.append(wrapper);
                            $el.children(".".concat(swiper.params.slideClass)).each(function(slideEl) {
                                $wrapperEl.append(slideEl);
                            });
                        }
                        Object.assign(swiper, {
                            $el: $el,
                            el: el,
                            $wrapperEl: $wrapperEl,
                            wrapperEl: $wrapperEl[0],
                            mounted: true,
                            // RTL
                            rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
                            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                            wrongRTL: $wrapperEl.css('display') === '-webkit-box'
                        });
                        return true;
                    }
                },
                {
                    key: "init",
                    value: function init(el) {
                        var swiper = this;
                        if (swiper.initialized) return swiper;
                        var mounted = swiper.mount(el);
                        if (mounted === false) return swiper;
                        swiper.emit('beforeInit'); // Set breakpoint
                        if (swiper.params.breakpoints) swiper.setBreakpoint();
                        // Add Classes
                        swiper.addClasses(); // Create loop
                        if (swiper.params.loop) swiper.loopCreate();
                        // Update size
                        swiper.updateSize(); // Update slides
                        swiper.updateSlides();
                        if (swiper.params.watchOverflow) swiper.checkOverflow();
                        // Set Grab Cursor
                        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                        if (swiper.params.preloadImages) swiper.preloadImages();
                        // Slide To Initial Slide
                        if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
                        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                        // Attach events
                        swiper.attachEvents(); // Init Flag
                        swiper.initialized = true; // Emit
                        swiper.emit('init');
                        swiper.emit('afterInit');
                        return swiper;
                    }
                },
                {
                    key: "destroy",
                    value: function destroy() {
                        var deleteInstance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, cleanStyles = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                        var swiper = this;
                        var params = swiper.params, $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides;
                        if (typeof swiper.params === 'undefined' || swiper.destroyed) return null;
                        swiper.emit('beforeDestroy'); // Init Flag
                        swiper.initialized = false; // Detach events
                        swiper.detachEvents(); // Destroy loop
                        if (params.loop) swiper.loopDestroy();
                        // Cleanup styles
                        if (cleanStyles) {
                            swiper.removeClasses();
                            $el.removeAttr('style');
                            $wrapperEl.removeAttr('style');
                            if (slides && slides.length) slides.removeClass([
                                params.slideVisibleClass,
                                params.slideActiveClass,
                                params.slideNextClass,
                                params.slidePrevClass
                            ].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
                        }
                        swiper.emit('destroy'); // Detach emitter events
                        Object.keys(swiper.eventsListeners).forEach(function(eventName) {
                            swiper.off(eventName);
                        });
                        if (deleteInstance !== false) {
                            swiper.$el[0].swiper = null;
                            deleteProps(swiper);
                        }
                        swiper.destroyed = true;
                        return null;
                    }
                }
            ], [
                {
                    key: "extendDefaults",
                    value: function extendDefaults(newDefaults) {
                        extend(extendedDefaults, newDefaults);
                    }
                },
                {
                    key: "extendedDefaults",
                    get: function get() {
                        return extendedDefaults;
                    }
                },
                {
                    key: "defaults",
                    get: function get() {
                        return defaults;
                    }
                },
                {
                    key: "installModule",
                    value: function installModule(mod) {
                        if (!Swiper1.prototype.__modules__) Swiper1.prototype.__modules__ = [];
                        var modules = Swiper1.prototype.__modules__;
                        if (typeof mod === 'function' && modules.indexOf(mod) < 0) modules.push(mod);
                    }
                },
                {
                    key: "use",
                    value: function use(module) {
                        if (Array.isArray(module)) {
                            module.forEach(function(m) {
                                return Swiper1.installModule(m);
                            });
                            return Swiper1;
                        }
                        Swiper1.installModule(module);
                        return Swiper1;
                    }
                }
            ]);
            return Swiper1;
        }();
        Object.keys(prototypes).forEach(function(prototypeGroup) {
            Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod) {
                Swiper1.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            });
        });
        Swiper1.use([
            Resize,
            Observer
        ]);
        // Swiper Class
        var modules1 = [
            Virtual,
            Keyboard,
            Mousewheel,
            Navigation,
            Pagination,
            Scrollbar,
            Parallax,
            Zoom,
            Lazy,
            Controller,
            A11y,
            History,
            HashNavigation,
            Autoplay,
            Thumb,
            freeMode,
            Grid,
            Manipulation,
            EffectFade,
            EffectCube,
            EffectFlip,
            EffectCoverflow,
            EffectCreative,
            EffectCards
        ];
        Swiper1.use(modules1);
        return Swiper1;
    });



    var $2a55ab157ec035d4$exports = {};
    var $9db4b37be27b88d1$exports = {};
    var $476d87fb57a4b25f$exports = {};
    var $e45302247bdf7bad$exports = {};
    var $f491092ae9543aef$exports = {};
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */ function $f491092ae9543aef$var$listCacheClear() {
        this.__data__ = [];
        this.size = 0;
    }
    $f491092ae9543aef$exports = $f491092ae9543aef$var$listCacheClear;


    var $cdbfe7ec5ca6c2fb$exports = {};
    var $049bef5e2af8e139$exports = {};
    var $1009644c8490c53b$exports = {};
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */ function $1009644c8490c53b$var$eq(value, other) {
        return value === other || value !== value && other !== other;
    }
    $1009644c8490c53b$exports = $1009644c8490c53b$var$eq;


    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */ function $049bef5e2af8e139$var$assocIndexOf(array, key) {
        var length = array.length;
        while(length--){
            if ($1009644c8490c53b$exports(array[length][0], key)) return length;
        }
        return -1;
    }
    $049bef5e2af8e139$exports = $049bef5e2af8e139$var$assocIndexOf;


    /** Used for built-in method references. */ var $cdbfe7ec5ca6c2fb$var$arrayProto = Array.prototype;
    /** Built-in value references. */ var $cdbfe7ec5ca6c2fb$var$splice = $cdbfe7ec5ca6c2fb$var$arrayProto.splice;
    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function $cdbfe7ec5ca6c2fb$var$listCacheDelete(key) {
        var data = this.__data__, index = $049bef5e2af8e139$exports(data, key);
        if (index < 0) return false;
        var lastIndex = data.length - 1;
        if (index == lastIndex) data.pop();
        else $cdbfe7ec5ca6c2fb$var$splice.call(data, index, 1);
        --this.size;
        return true;
    }
    $cdbfe7ec5ca6c2fb$exports = $cdbfe7ec5ca6c2fb$var$listCacheDelete;


    var $40adfa6fc0e41de4$exports = {};

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function $40adfa6fc0e41de4$var$listCacheGet(key) {
        var data = this.__data__, index = $049bef5e2af8e139$exports(data, key);
        return index < 0 ? undefined : data[index][1];
    }
    $40adfa6fc0e41de4$exports = $40adfa6fc0e41de4$var$listCacheGet;


    var $8adb90c152acda79$exports = {};

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function $8adb90c152acda79$var$listCacheHas(key) {
        return $049bef5e2af8e139$exports(this.__data__, key) > -1;
    }
    $8adb90c152acda79$exports = $8adb90c152acda79$var$listCacheHas;


    var $90f16cf9c46cdd80$exports = {};

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */ function $90f16cf9c46cdd80$var$listCacheSet(key, value) {
        var data = this.__data__, index = $049bef5e2af8e139$exports(data, key);
        if (index < 0) {
            ++this.size;
            data.push([
                key,
                value
            ]);
        } else data[index][1] = value;
        return this;
    }
    $90f16cf9c46cdd80$exports = $90f16cf9c46cdd80$var$listCacheSet;


    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function $e45302247bdf7bad$var$ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while(++index < length){
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
// Add methods to `ListCache`.
    $e45302247bdf7bad$var$ListCache.prototype.clear = $f491092ae9543aef$exports;
    $e45302247bdf7bad$var$ListCache.prototype['delete'] = $cdbfe7ec5ca6c2fb$exports;
    $e45302247bdf7bad$var$ListCache.prototype.get = $40adfa6fc0e41de4$exports;
    $e45302247bdf7bad$var$ListCache.prototype.has = $8adb90c152acda79$exports;
    $e45302247bdf7bad$var$ListCache.prototype.set = $90f16cf9c46cdd80$exports;
    $e45302247bdf7bad$exports = $e45302247bdf7bad$var$ListCache;


    var $d49fb4544472046c$exports = {};

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */ function $d49fb4544472046c$var$stackClear() {
        this.__data__ = new $e45302247bdf7bad$exports;
        this.size = 0;
    }
    $d49fb4544472046c$exports = $d49fb4544472046c$var$stackClear;


    var $97f3e9c3cf66b747$exports = {};
    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function $97f3e9c3cf66b747$var$stackDelete(key) {
        var data = this.__data__, result = data['delete'](key);
        this.size = data.size;
        return result;
    }
    $97f3e9c3cf66b747$exports = $97f3e9c3cf66b747$var$stackDelete;


    var $f04eb54312ff73e5$exports = {};
    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function $f04eb54312ff73e5$var$stackGet(key) {
        return this.__data__.get(key);
    }
    $f04eb54312ff73e5$exports = $f04eb54312ff73e5$var$stackGet;


    var $f2aefe127ea978c5$exports = {};
    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function $f2aefe127ea978c5$var$stackHas(key) {
        return this.__data__.has(key);
    }
    $f2aefe127ea978c5$exports = $f2aefe127ea978c5$var$stackHas;


    var $290140d56249165c$exports = {};

    var $b4479eecb3167fe0$exports = {};
    var $72ad8e22c84f89af$exports = {};
    var $5eb6fad0f11297c0$exports = {};
    var $eabedc6731236064$exports = {};
    var $cd5dc4ecc633f739$exports = {};
    var $ad9c4fea8f2ca8bf$exports = {};

    /** Built-in value references. */ var $ad9c4fea8f2ca8bf$var$Symbol = $4cc9d1a3b5f2eac6$exports.Symbol;
    $ad9c4fea8f2ca8bf$exports = $ad9c4fea8f2ca8bf$var$Symbol;


    var $0ee18ff779346390$exports = {};

    /** Used for built-in method references. */ var $0ee18ff779346390$var$objectProto = Object.prototype;
    /** Used to check objects for own properties. */ var $0ee18ff779346390$var$hasOwnProperty = $0ee18ff779346390$var$objectProto.hasOwnProperty;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */ var $0ee18ff779346390$var$nativeObjectToString = $0ee18ff779346390$var$objectProto.toString;
    /** Built-in value references. */ var $0ee18ff779346390$var$symToStringTag = $ad9c4fea8f2ca8bf$exports ? $ad9c4fea8f2ca8bf$exports.toStringTag : undefined;
    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */ function $0ee18ff779346390$var$getRawTag(value) {
        var isOwn = $0ee18ff779346390$var$hasOwnProperty.call(value, $0ee18ff779346390$var$symToStringTag), tag = value[$0ee18ff779346390$var$symToStringTag];
        try {
            value[$0ee18ff779346390$var$symToStringTag] = undefined;
            var unmasked = true;
        } catch (e) {
        }
        var result = $0ee18ff779346390$var$nativeObjectToString.call(value);
        if (unmasked) {
            if (isOwn) value[$0ee18ff779346390$var$symToStringTag] = tag;
            else delete value[$0ee18ff779346390$var$symToStringTag];
        }
        return result;
    }
    $0ee18ff779346390$exports = $0ee18ff779346390$var$getRawTag;


    var $c39383f81bd66517$exports = {};
    /** Used for built-in method references. */ var $c39383f81bd66517$var$objectProto = Object.prototype;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */ var $c39383f81bd66517$var$nativeObjectToString = $c39383f81bd66517$var$objectProto.toString;
    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */ function $c39383f81bd66517$var$objectToString(value) {
        return $c39383f81bd66517$var$nativeObjectToString.call(value);
    }
    $c39383f81bd66517$exports = $c39383f81bd66517$var$objectToString;


    /** `Object#toString` result references. */ var $cd5dc4ecc633f739$var$nullTag = '[object Null]', $cd5dc4ecc633f739$var$undefinedTag = '[object Undefined]';
    /** Built-in value references. */ var $cd5dc4ecc633f739$var$symToStringTag = $ad9c4fea8f2ca8bf$exports ? $ad9c4fea8f2ca8bf$exports.toStringTag : undefined;
    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */ function $cd5dc4ecc633f739$var$baseGetTag(value) {
        if (value == null) return value === undefined ? $cd5dc4ecc633f739$var$undefinedTag : $cd5dc4ecc633f739$var$nullTag;
        return $cd5dc4ecc633f739$var$symToStringTag && $cd5dc4ecc633f739$var$symToStringTag in Object(value) ? $0ee18ff779346390$exports(value) : $c39383f81bd66517$exports(value);
    }
    $cd5dc4ecc633f739$exports = $cd5dc4ecc633f739$var$baseGetTag;


    var $19e322e4e0ae70ea$exports = {};

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */ function $19e322e4e0ae70ea$var$isObject(value) {
        var type = typeof value === "undefined" ? "undefined" : $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(value);
        return value != null && (type == 'object' || type == 'function');
    }
    $19e322e4e0ae70ea$exports = $19e322e4e0ae70ea$var$isObject;


    /** `Object#toString` result references. */ var $eabedc6731236064$var$asyncTag = '[object AsyncFunction]', $eabedc6731236064$var$funcTag = '[object Function]', $eabedc6731236064$var$genTag = '[object GeneratorFunction]', $eabedc6731236064$var$proxyTag = '[object Proxy]';
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */ function $eabedc6731236064$var$isFunction(value) {
        if (!$19e322e4e0ae70ea$exports(value)) return false;
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
        var tag = $cd5dc4ecc633f739$exports(value);
        return tag == $eabedc6731236064$var$funcTag || tag == $eabedc6731236064$var$genTag || tag == $eabedc6731236064$var$asyncTag || tag == $eabedc6731236064$var$proxyTag;
    }
    $eabedc6731236064$exports = $eabedc6731236064$var$isFunction;


    var $5eaec09012e85180$exports = {};
    var $aedbf238030b6dbe$exports = {};

    /** Used to detect overreaching core-js shims. */ var $aedbf238030b6dbe$var$coreJsData = $4cc9d1a3b5f2eac6$exports["__core-js_shared__"];
    $aedbf238030b6dbe$exports = $aedbf238030b6dbe$var$coreJsData;


    /** Used to detect methods masquerading as native. */ var $5eaec09012e85180$var$maskSrcKey = function() {
        var uid = /[^.]+$/.exec($aedbf238030b6dbe$exports && $aedbf238030b6dbe$exports.keys && $aedbf238030b6dbe$exports.keys.IE_PROTO || '');
        return uid ? 'Symbol(src)_1.' + uid : '';
    }();
    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */ function $5eaec09012e85180$var$isMasked(func) {
        return !!$5eaec09012e85180$var$maskSrcKey && $5eaec09012e85180$var$maskSrcKey in func;
    }
    $5eaec09012e85180$exports = $5eaec09012e85180$var$isMasked;



    var $d92854fd469a4494$exports = {};
    /** Used for built-in method references. */ var $d92854fd469a4494$var$funcProto = Function.prototype;
    /** Used to resolve the decompiled source of functions. */ var $d92854fd469a4494$var$funcToString = $d92854fd469a4494$var$funcProto.toString;
    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */ function $d92854fd469a4494$var$toSource(func) {
        if (func != null) {
            try {
                return $d92854fd469a4494$var$funcToString.call(func);
            } catch (e) {
            }
            try {
                return func + '';
            } catch (e1) {
            }
        }
        return '';
    }
    $d92854fd469a4494$exports = $d92854fd469a4494$var$toSource;


    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */ var $5eb6fad0f11297c0$var$reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    /** Used to detect host constructors (Safari). */ var $5eb6fad0f11297c0$var$reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Used for built-in method references. */ var $5eb6fad0f11297c0$var$funcProto = Function.prototype, $5eb6fad0f11297c0$var$objectProto = Object.prototype;
    /** Used to resolve the decompiled source of functions. */ var $5eb6fad0f11297c0$var$funcToString = $5eb6fad0f11297c0$var$funcProto.toString;
    /** Used to check objects for own properties. */ var $5eb6fad0f11297c0$var$hasOwnProperty = $5eb6fad0f11297c0$var$objectProto.hasOwnProperty;
    /** Used to detect if a method is native. */ var $5eb6fad0f11297c0$var$reIsNative = RegExp('^' + $5eb6fad0f11297c0$var$funcToString.call($5eb6fad0f11297c0$var$hasOwnProperty).replace($5eb6fad0f11297c0$var$reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */ function $5eb6fad0f11297c0$var$baseIsNative(value) {
        if (!$19e322e4e0ae70ea$exports(value) || $5eaec09012e85180$exports(value)) return false;
        var pattern = $eabedc6731236064$exports(value) ? $5eb6fad0f11297c0$var$reIsNative : $5eb6fad0f11297c0$var$reIsHostCtor;
        return pattern.test($d92854fd469a4494$exports(value));
    }
    $5eb6fad0f11297c0$exports = $5eb6fad0f11297c0$var$baseIsNative;


    var $1c12deb31f1eab99$exports = {};
    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */ function $1c12deb31f1eab99$var$getValue(object, key) {
        return object == null ? undefined : object[key];
    }
    $1c12deb31f1eab99$exports = $1c12deb31f1eab99$var$getValue;


    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */ function $72ad8e22c84f89af$var$getNative(object, key) {
        var value = $1c12deb31f1eab99$exports(object, key);
        return $5eb6fad0f11297c0$exports(value) ? value : undefined;
    }
    $72ad8e22c84f89af$exports = $72ad8e22c84f89af$var$getNative;



    /* Built-in method references that are verified to be native. */ var $b4479eecb3167fe0$var$Map = $72ad8e22c84f89af$exports($4cc9d1a3b5f2eac6$exports, 'Map');
    $b4479eecb3167fe0$exports = $b4479eecb3167fe0$var$Map;


    var $8de29c44f2d2875b$exports = {};
    var $3bb3af199a35fa1c$exports = {};
    var $c27b58edb30f0c01$exports = {};
    var $dd4d99f4bfa2e370$exports = {};
    var $a1d0b1b501d50352$exports = {};

    /* Built-in method references that are verified to be native. */ var $a1d0b1b501d50352$var$nativeCreate = $72ad8e22c84f89af$exports(Object, 'create');
    $a1d0b1b501d50352$exports = $a1d0b1b501d50352$var$nativeCreate;


    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */ function $dd4d99f4bfa2e370$var$hashClear() {
        this.__data__ = $a1d0b1b501d50352$exports ? $a1d0b1b501d50352$exports(null) : {
        };
        this.size = 0;
    }
    $dd4d99f4bfa2e370$exports = $dd4d99f4bfa2e370$var$hashClear;


    var $1a16e5e9b11a1476$exports = {};
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function $1a16e5e9b11a1476$var$hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
    }
    $1a16e5e9b11a1476$exports = $1a16e5e9b11a1476$var$hashDelete;


    var $37fd3e96b2cf1fec$exports = {};

    /** Used to stand-in for `undefined` hash values. */ var $37fd3e96b2cf1fec$var$HASH_UNDEFINED = '__lodash_hash_undefined__';
    /** Used for built-in method references. */ var $37fd3e96b2cf1fec$var$objectProto = Object.prototype;
    /** Used to check objects for own properties. */ var $37fd3e96b2cf1fec$var$hasOwnProperty = $37fd3e96b2cf1fec$var$objectProto.hasOwnProperty;
    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function $37fd3e96b2cf1fec$var$hashGet(key) {
        var data = this.__data__;
        if ($a1d0b1b501d50352$exports) {
            var result = data[key];
            return result === $37fd3e96b2cf1fec$var$HASH_UNDEFINED ? undefined : result;
        }
        return $37fd3e96b2cf1fec$var$hasOwnProperty.call(data, key) ? data[key] : undefined;
    }
    $37fd3e96b2cf1fec$exports = $37fd3e96b2cf1fec$var$hashGet;


    var $ceecc7e1ab302819$exports = {};

    /** Used for built-in method references. */ var $ceecc7e1ab302819$var$objectProto = Object.prototype;
    /** Used to check objects for own properties. */ var $ceecc7e1ab302819$var$hasOwnProperty = $ceecc7e1ab302819$var$objectProto.hasOwnProperty;
    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function $ceecc7e1ab302819$var$hashHas(key) {
        var data = this.__data__;
        return $a1d0b1b501d50352$exports ? data[key] !== undefined : $ceecc7e1ab302819$var$hasOwnProperty.call(data, key);
    }
    $ceecc7e1ab302819$exports = $ceecc7e1ab302819$var$hashHas;


    var $b18e7801e4f47d2f$exports = {};

    /** Used to stand-in for `undefined` hash values. */ var $b18e7801e4f47d2f$var$HASH_UNDEFINED = '__lodash_hash_undefined__';
    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */ function $b18e7801e4f47d2f$var$hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = $a1d0b1b501d50352$exports && value === undefined ? $b18e7801e4f47d2f$var$HASH_UNDEFINED : value;
        return this;
    }
    $b18e7801e4f47d2f$exports = $b18e7801e4f47d2f$var$hashSet;


    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function $c27b58edb30f0c01$var$Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while(++index < length){
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
// Add methods to `Hash`.
    $c27b58edb30f0c01$var$Hash.prototype.clear = $dd4d99f4bfa2e370$exports;
    $c27b58edb30f0c01$var$Hash.prototype['delete'] = $1a16e5e9b11a1476$exports;
    $c27b58edb30f0c01$var$Hash.prototype.get = $37fd3e96b2cf1fec$exports;
    $c27b58edb30f0c01$var$Hash.prototype.has = $ceecc7e1ab302819$exports;
    $c27b58edb30f0c01$var$Hash.prototype.set = $b18e7801e4f47d2f$exports;
    $c27b58edb30f0c01$exports = $c27b58edb30f0c01$var$Hash;




    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */ function $3bb3af199a35fa1c$var$mapCacheClear() {
        this.size = 0;
        this.__data__ = {
            hash: new $c27b58edb30f0c01$exports,
            map: new ($b4479eecb3167fe0$exports || $e45302247bdf7bad$exports),
            string: new $c27b58edb30f0c01$exports
        };
    }
    $3bb3af199a35fa1c$exports = $3bb3af199a35fa1c$var$mapCacheClear;


    var $47e616c36efacc78$exports = {};
    var $6ff81c217f3a55c1$exports = {};
    var $87415713e18661f6$exports = {};

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */ function $87415713e18661f6$var$isKeyable(value) {
        var type = typeof value === "undefined" ? "undefined" : $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(value);
        return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
    }
    $87415713e18661f6$exports = $87415713e18661f6$var$isKeyable;


    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */ function $6ff81c217f3a55c1$var$getMapData(map, key) {
        var data = map.__data__;
        return $87415713e18661f6$exports(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
    }
    $6ff81c217f3a55c1$exports = $6ff81c217f3a55c1$var$getMapData;


    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */ function $47e616c36efacc78$var$mapCacheDelete(key) {
        var result = $6ff81c217f3a55c1$exports(this, key)['delete'](key);
        this.size -= result ? 1 : 0;
        return result;
    }
    $47e616c36efacc78$exports = $47e616c36efacc78$var$mapCacheDelete;


    var $ce7ddc88671a7a2e$exports = {};

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */ function $ce7ddc88671a7a2e$var$mapCacheGet(key) {
        return $6ff81c217f3a55c1$exports(this, key).get(key);
    }
    $ce7ddc88671a7a2e$exports = $ce7ddc88671a7a2e$var$mapCacheGet;


    var $dfc3f088a5bf8ee9$exports = {};

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */ function $dfc3f088a5bf8ee9$var$mapCacheHas(key) {
        return $6ff81c217f3a55c1$exports(this, key).has(key);
    }
    $dfc3f088a5bf8ee9$exports = $dfc3f088a5bf8ee9$var$mapCacheHas;


    var $2a8e6986935dba09$exports = {};

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */ function $2a8e6986935dba09$var$mapCacheSet(key, value) {
        var data = $6ff81c217f3a55c1$exports(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
    }
    $2a8e6986935dba09$exports = $2a8e6986935dba09$var$mapCacheSet;


    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function $8de29c44f2d2875b$var$MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while(++index < length){
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
// Add methods to `MapCache`.
    $8de29c44f2d2875b$var$MapCache.prototype.clear = $3bb3af199a35fa1c$exports;
    $8de29c44f2d2875b$var$MapCache.prototype['delete'] = $47e616c36efacc78$exports;
    $8de29c44f2d2875b$var$MapCache.prototype.get = $ce7ddc88671a7a2e$exports;
    $8de29c44f2d2875b$var$MapCache.prototype.has = $dfc3f088a5bf8ee9$exports;
    $8de29c44f2d2875b$var$MapCache.prototype.set = $2a8e6986935dba09$exports;
    $8de29c44f2d2875b$exports = $8de29c44f2d2875b$var$MapCache;


    /** Used as the size to enable large array optimizations. */ var $290140d56249165c$var$LARGE_ARRAY_SIZE = 200;
    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */ function $290140d56249165c$var$stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof $e45302247bdf7bad$exports) {
            var pairs = data.__data__;
            if (!$b4479eecb3167fe0$exports || pairs.length < $290140d56249165c$var$LARGE_ARRAY_SIZE - 1) {
                pairs.push([
                    key,
                    value
                ]);
                this.size = ++data.size;
                return this;
            }
            data = this.__data__ = new $8de29c44f2d2875b$exports(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
    }
    $290140d56249165c$exports = $290140d56249165c$var$stackSet;


    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */ function $476d87fb57a4b25f$var$Stack(entries) {
        var data = this.__data__ = new $e45302247bdf7bad$exports(entries);
        this.size = data.size;
    }
// Add methods to `Stack`.
    $476d87fb57a4b25f$var$Stack.prototype.clear = $d49fb4544472046c$exports;
    $476d87fb57a4b25f$var$Stack.prototype['delete'] = $97f3e9c3cf66b747$exports;
    $476d87fb57a4b25f$var$Stack.prototype.get = $f04eb54312ff73e5$exports;
    $476d87fb57a4b25f$var$Stack.prototype.has = $f2aefe127ea978c5$exports;
    $476d87fb57a4b25f$var$Stack.prototype.set = $290140d56249165c$exports;
    $476d87fb57a4b25f$exports = $476d87fb57a4b25f$var$Stack;


    var $3286a8e9b5347ed5$exports = {};
    var $c246e81a012837da$exports = {};
    var $3a2df56561a4419d$exports = {};

    var $3a2df56561a4419d$var$defineProperty = function() {
        try {
            var func = $72ad8e22c84f89af$exports(Object, 'defineProperty');
            func({
            }, '', {
            });
            return func;
        } catch (e) {
        }
    }();
    $3a2df56561a4419d$exports = $3a2df56561a4419d$var$defineProperty;


    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */ function $c246e81a012837da$var$baseAssignValue(object, key, value) {
        if (key == '__proto__' && $3a2df56561a4419d$exports) $3a2df56561a4419d$exports(object, key, {
            configurable: true,
            enumerable: true,
            value: value,
            writable: true
        });
        else object[key] = value;
    }
    $c246e81a012837da$exports = $c246e81a012837da$var$baseAssignValue;



    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */ function $3286a8e9b5347ed5$var$assignMergeValue(object, key, value) {
        if (value !== undefined && !$1009644c8490c53b$exports(object[key], value) || value === undefined && !(key in object)) $c246e81a012837da$exports(object, key, value);
    }
    $3286a8e9b5347ed5$exports = $3286a8e9b5347ed5$var$assignMergeValue;


    var $c4258073a2cfc1de$exports = {};
    var $38aca5425c4c2e9a$exports = {};
    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */ function $38aca5425c4c2e9a$var$createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
            var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
            while(length--){
                var key = props[fromRight ? length : ++index];
                if (iteratee(iterable[key], key, iterable) === false) break;
            }
            return object;
        };
    }
    $38aca5425c4c2e9a$exports = $38aca5425c4c2e9a$var$createBaseFor;


    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */ var $c4258073a2cfc1de$var$baseFor = $38aca5425c4c2e9a$exports();
    $c4258073a2cfc1de$exports = $c4258073a2cfc1de$var$baseFor;


    var $24a65f54b62cf726$exports = {};


    var $i1q5T = parcelRequire("i1q5T");
    var $5a90e63062e86eb2$exports = {};
    var $1e7dd4cc60c8b8c3$exports = {};
    var $15139223bca51f13$exports = {};

    /** Built-in value references. */ var $15139223bca51f13$var$Uint8Array = $4cc9d1a3b5f2eac6$exports.Uint8Array;
    $15139223bca51f13$exports = $15139223bca51f13$var$Uint8Array;


    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */ function $1e7dd4cc60c8b8c3$var$cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new $15139223bca51f13$exports(result).set(new $15139223bca51f13$exports(arrayBuffer));
        return result;
    }
    $1e7dd4cc60c8b8c3$exports = $1e7dd4cc60c8b8c3$var$cloneArrayBuffer;


    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */ function $5a90e63062e86eb2$var$cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? $1e7dd4cc60c8b8c3$exports(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    $5a90e63062e86eb2$exports = $5a90e63062e86eb2$var$cloneTypedArray;


    var $3b6a4e001a40e51f$exports = {};
    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */ function $3b6a4e001a40e51f$var$copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while(++index < length)array[index] = source[index];
        return array;
    }
    $3b6a4e001a40e51f$exports = $3b6a4e001a40e51f$var$copyArray;


    var $498239f0cc7a25e4$exports = {};
    var $c50959eefc624333$exports = {};

    /** Built-in value references. */ var $c50959eefc624333$var$objectCreate = Object.create;
    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */ var $c50959eefc624333$var$baseCreate = function() {
        var object = function object() {
        };
        return function(proto) {
            if (!$19e322e4e0ae70ea$exports(proto)) return {
            };
            if ($c50959eefc624333$var$objectCreate) return $c50959eefc624333$var$objectCreate(proto);
            object.prototype = proto;
            var result = new object;
            object.prototype = undefined;
            return result;
        };
    }();
    $c50959eefc624333$exports = $c50959eefc624333$var$baseCreate;


    var $21e2b2a32550c8bd$exports = {};
    var $fa7a35e041fa81cb$exports = {};
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */ function $fa7a35e041fa81cb$var$overArg(func, transform) {
        return function(arg) {
            return func(transform(arg));
        };
    }
    $fa7a35e041fa81cb$exports = $fa7a35e041fa81cb$var$overArg;


    /** Built-in value references. */ var $21e2b2a32550c8bd$var$getPrototype = $fa7a35e041fa81cb$exports(Object.getPrototypeOf, Object);
    $21e2b2a32550c8bd$exports = $21e2b2a32550c8bd$var$getPrototype;


    var $d5356ba128376ecc$exports = {};
    /** Used for built-in method references. */ var $d5356ba128376ecc$var$objectProto = Object.prototype;
    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */ function $d5356ba128376ecc$var$isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || $d5356ba128376ecc$var$objectProto;
        return value === proto;
    }
    $d5356ba128376ecc$exports = $d5356ba128376ecc$var$isPrototype;


    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */ function $498239f0cc7a25e4$var$initCloneObject(object) {
        return typeof object.constructor == 'function' && !$d5356ba128376ecc$exports(object) ? $c50959eefc624333$exports($21e2b2a32550c8bd$exports(object)) : {
        };
    }
    $498239f0cc7a25e4$exports = $498239f0cc7a25e4$var$initCloneObject;


    var $52d779b965a7e006$exports = {};
    var $6d0e9d219999c0c9$exports = {};

    var $d10d26a566bfcbd1$exports = {};
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */ function $d10d26a566bfcbd1$var$isObjectLike(value) {
        return value != null && typeof value == 'object';
    }
    $d10d26a566bfcbd1$exports = $d10d26a566bfcbd1$var$isObjectLike;


    /** `Object#toString` result references. */ var $6d0e9d219999c0c9$var$argsTag = '[object Arguments]';
    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */ function $6d0e9d219999c0c9$var$baseIsArguments(value) {
        return $d10d26a566bfcbd1$exports(value) && $cd5dc4ecc633f739$exports(value) == $6d0e9d219999c0c9$var$argsTag;
    }
    $6d0e9d219999c0c9$exports = $6d0e9d219999c0c9$var$baseIsArguments;



    /** Used for built-in method references. */ var $52d779b965a7e006$var$objectProto = Object.prototype;
    /** Used to check objects for own properties. */ var $52d779b965a7e006$var$hasOwnProperty = $52d779b965a7e006$var$objectProto.hasOwnProperty;
    /** Built-in value references. */ var $52d779b965a7e006$var$propertyIsEnumerable = $52d779b965a7e006$var$objectProto.propertyIsEnumerable;
    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */ var $52d779b965a7e006$var$isArguments = $6d0e9d219999c0c9$exports(function() {
        return arguments;
    }()) ? $6d0e9d219999c0c9$exports : function $52d779b965a7e006$var$isArguments(value) {
        return $d10d26a566bfcbd1$exports(value) && $52d779b965a7e006$var$hasOwnProperty.call(value, 'callee') && !$52d779b965a7e006$var$propertyIsEnumerable.call(value, 'callee');
    };
    $52d779b965a7e006$exports = $52d779b965a7e006$var$isArguments;


    var $79df2172b9219a01$exports = {};
    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */ var $79df2172b9219a01$var$isArray = Array.isArray;
    $79df2172b9219a01$exports = $79df2172b9219a01$var$isArray;


    var $e8e42d208e9019c3$exports = {};
    var $6bccb9d436b1ba1b$exports = {};

    var $125b73c8e7b0ca42$exports = {};
    /** Used as references for various `Number` constants. */ var $125b73c8e7b0ca42$var$MAX_SAFE_INTEGER = 9007199254740991;
    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */ function $125b73c8e7b0ca42$var$isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= $125b73c8e7b0ca42$var$MAX_SAFE_INTEGER;
    }
    $125b73c8e7b0ca42$exports = $125b73c8e7b0ca42$var$isLength;


    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */ function $6bccb9d436b1ba1b$var$isArrayLike(value) {
        return value != null && $125b73c8e7b0ca42$exports(value.length) && !$eabedc6731236064$exports(value);
    }
    $6bccb9d436b1ba1b$exports = $6bccb9d436b1ba1b$var$isArrayLike;



    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */ function $e8e42d208e9019c3$var$isArrayLikeObject(value) {
        return $d10d26a566bfcbd1$exports(value) && $6bccb9d436b1ba1b$exports(value);
    }
    $e8e42d208e9019c3$exports = $e8e42d208e9019c3$var$isArrayLikeObject;



    var $g6bB1 = parcelRequire("g6bB1");


    var $e1a0d2f941a829b2$exports = {};



    /** `Object#toString` result references. */ var $e1a0d2f941a829b2$var$objectTag = '[object Object]';
    /** Used for built-in method references. */ var $e1a0d2f941a829b2$var$funcProto = Function.prototype, $e1a0d2f941a829b2$var$objectProto = Object.prototype;
    /** Used to resolve the decompiled source of functions. */ var $e1a0d2f941a829b2$var$funcToString = $e1a0d2f941a829b2$var$funcProto.toString;
    /** Used to check objects for own properties. */ var $e1a0d2f941a829b2$var$hasOwnProperty = $e1a0d2f941a829b2$var$objectProto.hasOwnProperty;
    /** Used to infer the `Object` constructor. */ var $e1a0d2f941a829b2$var$objectCtorString = $e1a0d2f941a829b2$var$funcToString.call(Object);
    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */ function $e1a0d2f941a829b2$var$isPlainObject(value) {
        if (!$d10d26a566bfcbd1$exports(value) || $cd5dc4ecc633f739$exports(value) != $e1a0d2f941a829b2$var$objectTag) return false;
        var proto = $21e2b2a32550c8bd$exports(value);
        if (proto === null) return true;
        var Ctor = $e1a0d2f941a829b2$var$hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor == 'function' && Ctor instanceof Ctor && $e1a0d2f941a829b2$var$funcToString.call(Ctor) == $e1a0d2f941a829b2$var$objectCtorString;
    }
    $e1a0d2f941a829b2$exports = $e1a0d2f941a829b2$var$isPlainObject;


    var $d4bd419c67664b9f$exports = {};
    var $2996db9081328224$exports = {};



    /** `Object#toString` result references. */ var $2996db9081328224$var$argsTag = '[object Arguments]', $2996db9081328224$var$arrayTag = '[object Array]', $2996db9081328224$var$boolTag = '[object Boolean]', $2996db9081328224$var$dateTag = '[object Date]', $2996db9081328224$var$errorTag = '[object Error]', $2996db9081328224$var$funcTag = '[object Function]', $2996db9081328224$var$mapTag = '[object Map]', $2996db9081328224$var$numberTag = '[object Number]', $2996db9081328224$var$objectTag = '[object Object]', $2996db9081328224$var$regexpTag = '[object RegExp]', $2996db9081328224$var$setTag = '[object Set]', $2996db9081328224$var$stringTag = '[object String]', $2996db9081328224$var$weakMapTag = '[object WeakMap]';
    var $2996db9081328224$var$arrayBufferTag = '[object ArrayBuffer]', $2996db9081328224$var$dataViewTag = '[object DataView]', $2996db9081328224$var$float32Tag = '[object Float32Array]', $2996db9081328224$var$float64Tag = '[object Float64Array]', $2996db9081328224$var$int8Tag = '[object Int8Array]', $2996db9081328224$var$int16Tag = '[object Int16Array]', $2996db9081328224$var$int32Tag = '[object Int32Array]', $2996db9081328224$var$uint8Tag = '[object Uint8Array]', $2996db9081328224$var$uint8ClampedTag = '[object Uint8ClampedArray]', $2996db9081328224$var$uint16Tag = '[object Uint16Array]', $2996db9081328224$var$uint32Tag = '[object Uint32Array]';
    /** Used to identify `toStringTag` values of typed arrays. */ var $2996db9081328224$var$typedArrayTags = {
    };
    $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$float32Tag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$float64Tag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$int8Tag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$int16Tag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$int32Tag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$uint8Tag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$uint8ClampedTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$uint16Tag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$uint32Tag] = true;
    $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$argsTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$arrayTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$arrayBufferTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$boolTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$dataViewTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$dateTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$errorTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$funcTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$mapTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$numberTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$objectTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$regexpTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$setTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$stringTag] = $2996db9081328224$var$typedArrayTags[$2996db9081328224$var$weakMapTag] = false;
    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */ function $2996db9081328224$var$baseIsTypedArray(value) {
        return $d10d26a566bfcbd1$exports(value) && $125b73c8e7b0ca42$exports(value.length) && !!$2996db9081328224$var$typedArrayTags[$cd5dc4ecc633f739$exports(value)];
    }
    $2996db9081328224$exports = $2996db9081328224$var$baseIsTypedArray;


    var $56ea0e63422fdfcf$exports = {};
    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */ function $56ea0e63422fdfcf$var$baseUnary(func) {
        return function(value) {
            return func(value);
        };
    }
    $56ea0e63422fdfcf$exports = $56ea0e63422fdfcf$var$baseUnary;



    var $d6Yw6 = parcelRequire("d6Yw6");
    /* Node.js helper references. */ var $d4bd419c67664b9f$var$nodeIsTypedArray = $d6Yw6 && $d6Yw6.isTypedArray;
    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */ var $d4bd419c67664b9f$var$isTypedArray = $d4bd419c67664b9f$var$nodeIsTypedArray ? $56ea0e63422fdfcf$exports($d4bd419c67664b9f$var$nodeIsTypedArray) : $2996db9081328224$exports;
    $d4bd419c67664b9f$exports = $d4bd419c67664b9f$var$isTypedArray;


    var $63c0ad2745c468e4$exports = {};
    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */ function $63c0ad2745c468e4$var$safeGet(object, key) {
        if (key === 'constructor' && typeof object[key] === 'function') return;
        if (key == '__proto__') return;
        return object[key];
    }
    $63c0ad2745c468e4$exports = $63c0ad2745c468e4$var$safeGet;


    var $397aead4004a3b03$exports = {};
    var $620d8fb1b1f7c4ef$exports = {};
    var $18727be41c1ae1fc$exports = {};


    /** Used for built-in method references. */ var $18727be41c1ae1fc$var$objectProto = Object.prototype;
    /** Used to check objects for own properties. */ var $18727be41c1ae1fc$var$hasOwnProperty = $18727be41c1ae1fc$var$objectProto.hasOwnProperty;
    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */ function $18727be41c1ae1fc$var$assignValue(object, key, value) {
        var objValue = object[key];
        if (!($18727be41c1ae1fc$var$hasOwnProperty.call(object, key) && $1009644c8490c53b$exports(objValue, value)) || value === undefined && !(key in object)) $c246e81a012837da$exports(object, key, value);
    }
    $18727be41c1ae1fc$exports = $18727be41c1ae1fc$var$assignValue;



    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */ function $620d8fb1b1f7c4ef$var$copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {
        });
        var index = -1, length = props.length;
        while(++index < length){
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
            if (newValue === undefined) newValue = source[key];
            if (isNew) $c246e81a012837da$exports(object, key, newValue);
            else $18727be41c1ae1fc$exports(object, key, newValue);
        }
        return object;
    }
    $620d8fb1b1f7c4ef$exports = $620d8fb1b1f7c4ef$var$copyObject;


    var $76a18d988d95b9aa$exports = {};
    var $f8d23e2f3dea06de$exports = {};
    var $5eefe56afaead957$exports = {};
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */ function $5eefe56afaead957$var$baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while(++index < n)result[index] = iteratee(index);
        return result;
    }
    $5eefe56afaead957$exports = $5eefe56afaead957$var$baseTimes;





    var $g6bB1 = parcelRequire("g6bB1");
    var $85402b642747459b$exports = {};

    /** Used as references for various `Number` constants. */ var $85402b642747459b$var$MAX_SAFE_INTEGER = 9007199254740991;
    /** Used to detect unsigned integer values. */ var $85402b642747459b$var$reIsUint = /^(?:0|[1-9]\d*)$/;
    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */ function $85402b642747459b$var$isIndex(value, length) {
        var type = typeof value === "undefined" ? "undefined" : $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(value);
        length = length == null ? $85402b642747459b$var$MAX_SAFE_INTEGER : length;
        return !!length && (type == 'number' || type != 'symbol' && $85402b642747459b$var$reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    $85402b642747459b$exports = $85402b642747459b$var$isIndex;



    /** Used for built-in method references. */ var $f8d23e2f3dea06de$var$objectProto = Object.prototype;
    /** Used to check objects for own properties. */ var $f8d23e2f3dea06de$var$hasOwnProperty = $f8d23e2f3dea06de$var$objectProto.hasOwnProperty;
    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */ function $f8d23e2f3dea06de$var$arrayLikeKeys(value, inherited) {
        var isArr = $79df2172b9219a01$exports(value), isArg = !isArr && $52d779b965a7e006$exports(value), isBuff = !isArr && !isArg && $g6bB1(value), isType = !isArr && !isArg && !isBuff && $d4bd419c67664b9f$exports(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? $5eefe56afaead957$exports(value.length, String) : [], length = result.length;
        for(var key in value)if ((inherited || $f8d23e2f3dea06de$var$hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
                $85402b642747459b$exports(key, length)))) result.push(key);
        return result;
    }
    $f8d23e2f3dea06de$exports = $f8d23e2f3dea06de$var$arrayLikeKeys;


    var $b63b1baa27650191$exports = {};


    var $82dcb573d79e134f$exports = {};
    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */ function $82dcb573d79e134f$var$nativeKeysIn(object) {
        var result = [];
        if (object != null) for(var key in Object(object))result.push(key);
        return result;
    }
    $82dcb573d79e134f$exports = $82dcb573d79e134f$var$nativeKeysIn;


    /** Used for built-in method references. */ var $b63b1baa27650191$var$objectProto = Object.prototype;
    /** Used to check objects for own properties. */ var $b63b1baa27650191$var$hasOwnProperty = $b63b1baa27650191$var$objectProto.hasOwnProperty;
    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */ function $b63b1baa27650191$var$baseKeysIn(object) {
        if (!$19e322e4e0ae70ea$exports(object)) return $82dcb573d79e134f$exports(object);
        var isProto = $d5356ba128376ecc$exports(object), result = [];
        for(var key in object)if (!(key == 'constructor' && (isProto || !$b63b1baa27650191$var$hasOwnProperty.call(object, key)))) result.push(key);
        return result;
    }
    $b63b1baa27650191$exports = $b63b1baa27650191$var$baseKeysIn;



    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */ function $76a18d988d95b9aa$var$keysIn(object) {
        return $6bccb9d436b1ba1b$exports(object) ? $f8d23e2f3dea06de$exports(object, true) : $b63b1baa27650191$exports(object);
    }
    $76a18d988d95b9aa$exports = $76a18d988d95b9aa$var$keysIn;


    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */ function $397aead4004a3b03$var$toPlainObject(value) {
        return $620d8fb1b1f7c4ef$exports(value, $76a18d988d95b9aa$exports(value));
    }
    $397aead4004a3b03$exports = $397aead4004a3b03$var$toPlainObject;


    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */ function $24a65f54b62cf726$var$baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = $63c0ad2745c468e4$exports(object, key), srcValue = $63c0ad2745c468e4$exports(source, key), stacked = stack.get(srcValue);
        if (stacked) {
            $3286a8e9b5347ed5$exports(object, key, stacked);
            return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
        var isCommon = newValue === undefined;
        if (isCommon) {
            var isArr = $79df2172b9219a01$exports(srcValue), isBuff = !isArr && $g6bB1(srcValue), isTyped = !isArr && !isBuff && $d4bd419c67664b9f$exports(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
                if ($79df2172b9219a01$exports(objValue)) newValue = objValue;
                else if ($e8e42d208e9019c3$exports(objValue)) newValue = $3b6a4e001a40e51f$exports(objValue);
                else if (isBuff) {
                    isCommon = false;
                    newValue = $i1q5T(srcValue, true);
                } else if (isTyped) {
                    isCommon = false;
                    newValue = $5a90e63062e86eb2$exports(srcValue, true);
                } else newValue = [];
            } else if ($e1a0d2f941a829b2$exports(srcValue) || $52d779b965a7e006$exports(srcValue)) {
                newValue = objValue;
                if ($52d779b965a7e006$exports(objValue)) newValue = $397aead4004a3b03$exports(objValue);
                else if (!$19e322e4e0ae70ea$exports(objValue) || $eabedc6731236064$exports(objValue)) newValue = $498239f0cc7a25e4$exports(srcValue);
            } else isCommon = false;
        }
        if (isCommon) {
            // Recursively merge objects and arrays (susceptible to call stack limits).
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack['delete'](srcValue);
        }
        $3286a8e9b5347ed5$exports(object, key, newValue);
    }
    $24a65f54b62cf726$exports = $24a65f54b62cf726$var$baseMergeDeep;





    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */ function $9db4b37be27b88d1$var$baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) return;
        $c4258073a2cfc1de$exports(source, function(srcValue, key) {
            stack || (stack = new $476d87fb57a4b25f$exports);
            if ($19e322e4e0ae70ea$exports(srcValue)) $24a65f54b62cf726$exports(object, source, key, srcIndex, $9db4b37be27b88d1$var$baseMerge, customizer, stack);
            else {
                var newValue = customizer ? customizer($63c0ad2745c468e4$exports(object, key), srcValue, key + '', object, source, stack) : undefined;
                if (newValue === undefined) newValue = srcValue;
                $3286a8e9b5347ed5$exports(object, key, newValue);
            }
        }, $76a18d988d95b9aa$exports);
    }
    $9db4b37be27b88d1$exports = $9db4b37be27b88d1$var$baseMerge;


    var $9d6e195226d4b4a1$exports = {};
    var $6ae0a531c94a3ec5$exports = {};
    var $bd905f3dcad8bd7d$exports = {};
    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */ function $bd905f3dcad8bd7d$var$identity(value) {
        return value;
    }
    $bd905f3dcad8bd7d$exports = $bd905f3dcad8bd7d$var$identity;


    var $a015097d594cd013$exports = {};
    var $a303389f83d32fbf$exports = {};
    /**
     * A faster alternative to `Function#apply`, this function invokes `func`
     * with the `this` binding of `thisArg` and the arguments of `args`.
     *
     * @private
     * @param {Function} func The function to invoke.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} args The arguments to invoke `func` with.
     * @returns {*} Returns the result of `func`.
     */ function $a303389f83d32fbf$var$apply(func, thisArg, args) {
        switch(args.length){
            case 0:
                return func.call(thisArg);
            case 1:
                return func.call(thisArg, args[0]);
            case 2:
                return func.call(thisArg, args[0], args[1]);
            case 3:
                return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
    }
    $a303389f83d32fbf$exports = $a303389f83d32fbf$var$apply;


    /* Built-in method references for those with the same name as other `lodash` methods. */ var $a015097d594cd013$var$nativeMax = Math.max;
    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */ function $a015097d594cd013$var$overRest(func, start, transform) {
        start = $a015097d594cd013$var$nativeMax(start === undefined ? func.length - 1 : start, 0);
        return function() {
            var args = arguments, index = -1, length = $a015097d594cd013$var$nativeMax(args.length - start, 0), array = Array(length);
            while(++index < length)array[index] = args[start + index];
            index = -1;
            var otherArgs = Array(start + 1);
            while(++index < start)otherArgs[index] = args[index];
            otherArgs[start] = transform(array);
            return $a303389f83d32fbf$exports(func, this, otherArgs);
        };
    }
    $a015097d594cd013$exports = $a015097d594cd013$var$overRest;


    var $c9783477def1adf8$exports = {};
    var $5a08d16ecc0ac36d$exports = {};
    var $4dcdf94529d2ae7d$exports = {};
    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */ function $4dcdf94529d2ae7d$var$constant(value) {
        return function() {
            return value;
        };
    }
    $4dcdf94529d2ae7d$exports = $4dcdf94529d2ae7d$var$constant;




    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */ var $5a08d16ecc0ac36d$var$baseSetToString = !$3a2df56561a4419d$exports ? $bd905f3dcad8bd7d$exports : function $5a08d16ecc0ac36d$var$baseSetToString(func, string) {
        return $3a2df56561a4419d$exports(func, 'toString', {
            configurable: true,
            enumerable: false,
            value: $4dcdf94529d2ae7d$exports(string),
            writable: true
        });
    };
    $5a08d16ecc0ac36d$exports = $5a08d16ecc0ac36d$var$baseSetToString;


    var $2afc107e2134842f$exports = {};
    /** Used to detect hot functions by number of calls within a span of milliseconds. */ var $2afc107e2134842f$var$HOT_COUNT = 800, $2afc107e2134842f$var$HOT_SPAN = 16;
    /* Built-in method references for those with the same name as other `lodash` methods. */ var $2afc107e2134842f$var$nativeNow = Date.now;
    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */ function $2afc107e2134842f$var$shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
            var stamp = $2afc107e2134842f$var$nativeNow(), remaining = $2afc107e2134842f$var$HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
                if (++count >= $2afc107e2134842f$var$HOT_COUNT) return arguments[0];
            } else count = 0;
            return func.apply(undefined, arguments);
        };
    }
    $2afc107e2134842f$exports = $2afc107e2134842f$var$shortOut;


    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */ var $c9783477def1adf8$var$setToString = $2afc107e2134842f$exports($5a08d16ecc0ac36d$exports);
    $c9783477def1adf8$exports = $c9783477def1adf8$var$setToString;


    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */ function $6ae0a531c94a3ec5$var$baseRest(func, start) {
        return $c9783477def1adf8$exports($a015097d594cd013$exports(func, start, $bd905f3dcad8bd7d$exports), func + '');
    }
    $6ae0a531c94a3ec5$exports = $6ae0a531c94a3ec5$var$baseRest;


    var $1dc68121aac0143a$exports = {};





    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */ function $1dc68121aac0143a$var$isIterateeCall(value, index, object) {
        if (!$19e322e4e0ae70ea$exports(object)) return false;
        var type = typeof index === "undefined" ? "undefined" : $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(index);
        if (type == 'number' ? $6bccb9d436b1ba1b$exports(object) && $85402b642747459b$exports(index, object.length) : type == 'string' && index in object) return $1009644c8490c53b$exports(object[index], value);
        return false;
    }
    $1dc68121aac0143a$exports = $1dc68121aac0143a$var$isIterateeCall;


    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */ function $9d6e195226d4b4a1$var$createAssigner(assigner) {
        return $6ae0a531c94a3ec5$exports(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
            customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
            if (guard && $1dc68121aac0143a$exports(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined : customizer;
                length = 1;
            }
            object = Object(object);
            while(++index < length){
                var source = sources[index];
                if (source) assigner(object, source, index, customizer);
            }
            return object;
        });
    }
    $9d6e195226d4b4a1$exports = $9d6e195226d4b4a1$var$createAssigner;


    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */ var $2a55ab157ec035d4$var$merge = $9d6e195226d4b4a1$exports(function(object, source, srcIndex) {
        $9db4b37be27b88d1$exports(object, source, srcIndex);
    });
    $2a55ab157ec035d4$exports = $2a55ab157ec035d4$var$merge;


    var $8ec44c3915977751$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
        "use strict";
        function $8ec44c3915977751$export$2e2bcd8739ae039() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $8ec44c3915977751$export$2e2bcd8739ae039);
            this.attributes = {
                selector: 'data-slider-swiper'
            };
            this.defaultConfig = {
                autoplay: {
                    delay: 5000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.slider__pagination',
                    type: 'bullets',
                    clickable: true
                },
                lazy: true
            };
            this.nodeCarousel = document.querySelectorAll("[".concat(this.attributes.selector, "]"));
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($8ec44c3915977751$export$2e2bcd8739ae039, [
            {
                key: "init",
                value: function init() {
                    var _this = this;
                    if (!this.nodeCarousel) return;
                    this.nodeCarousel.forEach(function(node) {
                        // console.log(JSON.parse(node.dataset.sliderSwiper))
                        var customConfig = node.hasAttribute(_this.attributes.selector) && node.dataset.sliderSwiper ? JSON.parse(node.dataset.sliderSwiper) : _this.defaultConfig;
                        // eslint-disable-next-line no-new,no-unused-vars
                        new (/*@__PURE__*/$parcel$interopDefault($7ebf9bc23af50e2e$exports))(node, (/*@__PURE__*/$parcel$interopDefault($2a55ab157ec035d4$exports))(_this.defaultConfig, customConfig));
                    });
                }
            }
        ]);
        return $8ec44c3915977751$export$2e2bcd8739ae039;
    }();






    var $89e21ac637a2a892$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
        "use strict";
        function $89e21ac637a2a892$export$2e2bcd8739ae039() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $89e21ac637a2a892$export$2e2bcd8739ae039);
            this.attributes = {
                selector: 'data-slider-swiper-filter',
                filterLink: 'data-slider-filter-link',
                filterLinkActive: 'filter__link-main_active',
                filterLinkDataset: 'sliderFilterLink',
                sliders: 'data-project-is',
                slidersDataset: 'projectIs'
            };
            this.defaultConfig = {
                freeMode: true,
                watchOverflow: false,
                navigation: {
                    nextEl: ".slider__button_next",
                    prevEl: ".slider__button_prev"
                },
                slidesPerView: 3,
                spaceBetween: 20,
                breakpoints: {
                    1400: {
                        slidesPerView: 3
                    },
                    1280: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 2
                    },
                    576: {
                        slidesPerView: 2
                    },
                    220: {
                        slidesPerView: 1
                    }
                },
                pagination: {
                    el: '.slider__pagination',
                    type: 'bullets',
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }
            };
            this.filterLinks = document.querySelectorAll("[".concat(this.attributes.filterLink, "]"));
            if (!this.filterLinks) return;
            this.sliders = document.querySelectorAll("[".concat(this.attributes.sliders, "]"));
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($89e21ac637a2a892$export$2e2bcd8739ae039, [
            {
                key: "init",
                value: function init() {
                    this.createSlider();
                    this.initEventForFilterLinks();
                }
            },
            {
                // добавялем событие клика на фильтры
                key: "initEventForFilterLinks",
                value: function initEventForFilterLinks() {
                    var _this = this;
                    this.filterLinks.forEach(function(filterLink) {
                        var _this1 = _this;
                        filterLink.addEventListener("click", function(e) {
                            e.preventDefault();
                            _this1.removeActiveClassForLinks(_this1.filterLinks);
                            _this1.addActiveClassForLink(e.target);
                            _this1.hiddenSlideOnClick(e.target.dataset[_this1.attributes.filterLinkDataset]);
                            _this1.updateSlider();
                        });
                    });
                }
            },
            {
                key: "createSlider",
                value: function createSlider() {
                    var swiperFilter = document.querySelector("[".concat(this.attributes.selector, "]"));
                    this.swiper = new (/*@__PURE__*/$parcel$interopDefault($7ebf9bc23af50e2e$exports))(swiperFilter, this.defaultConfig);
                }
            },
            {
                key: "updateSlider",
                value: function updateSlider() {
                    this.swiper.update();
                }
            },
            {
                // добавляем класс элементу
                key: "addActiveClassForLink",
                value: function addActiveClassForLink(element) {
                    element.classList.add(this.attributes.filterLinkActive);
                }
            },
            {
                // убираем активный класс для элементов (ссылок)
                key: "removeActiveClassForLinks",
                value: function removeActiveClassForLinks(elements) {
                    var _this = this;
                    $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(elements).forEach(function(element) {
                        return element.classList.remove(_this.attributes.filterLinkActive);
                    });
                }
            },
            {
                // прячем слайды по клику на фильтры
                key: "hiddenSlideOnClick",
                value: function hiddenSlideOnClick(dataSelector) {
                    var _this = this;
                    var sliders = $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(this.sliders);
                    sliders.forEach(function(slide) {
                        return slide.style.display = "none";
                    });
                    if (dataSelector !== "all") return sliders.filter(function(slide) {
                        return slide.dataset[_this.attributes.slidersDataset] === dataSelector;
                    }).forEach(function(slide) {
                        return slide.style.display = "block";
                    });
                    return sliders.forEach(function(slide) {
                        return slide.style.display = "block";
                    });
                }
            }
        ]);
        return $89e21ac637a2a892$export$2e2bcd8739ae039;
    }();



    var $becc526b844fb2b9$exports = {};

    !function(e, t) {
        "object" == typeof $becc526b844fb2b9$exports && "undefined" != "object" ? $becc526b844fb2b9$exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t();
    }(undefined, function() {
        "use strict";
        var t1 = function t1(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
        var i = function i(e, t) {
            for(var i1 = 0; i1 < t.length; i1++){
                var n = t[i1];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        };
        var n1 = function n1(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e;
        };
        var o = function o(e, t) {
            if ((k(e) || e === window || e === document) && (e = [
                e
            ]), A(e) || L(e) || (e = [
                e
            ]), 0 != P(e)) {
                if (A(e) && !L(e)) for(var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
                else if (L(e)) {
                    for(var s in e)if (O(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
                }
            }
        };
        var r = function r(e2) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n2 = e2[s1] = e2[s1] || [], l = {
                all: n2,
                evt: null,
                found: null
            };
            return t && i && P(n2) > 0 && o(n2, function(e, n) {
                if (e.eventName == t && e.fn.toString() == i.toString()) return l.found = !0, l.evt = n, !1;
            }), l;
        };
        var a = function a(e3) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            }, i2 = t2.onElement, n = t2.withCallback, s = t2.avoidDuplicate, l = void 0 === s || s, a1 = t2.once, h = void 0 !== a1 && a1, d = t2.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i2 || [];
            function v(e) {
                T(n) && n.call(u, e, this), h && v.destroy();
            }
            return C(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
                o(g, function(t) {
                    var i = r(t, e3, v);
                    i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e3, v, c);
                });
            }, o(g, function(t) {
                var i = r(t, e3, v);
                (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e3, v, c), i.all.push({
                    eventName: e3,
                    fn: v
                }));
            }), v;
        };
        var h1 = function h1(e, t3) {
            o(t3.split(" "), function(t) {
                return e.classList.add(t);
            });
        };
        var d1 = function d1(e, t4) {
            o(t4.split(" "), function(t) {
                return e.classList.remove(t);
            });
        };
        var c1 = function c1(e, t) {
            return e.classList.contains(t);
        };
        var u1 = function u1(e, t) {
            for(; e !== document.body;){
                if (!(e = e.parentElement)) return !1;
                if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
            }
        };
        var g1 = function g1(e4) {
            var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!e4 || "" === t5) return !1;
            if ("none" === t5) return T(i) && i(), !1;
            var n = x(), s = t5.split(" ");
            o(s, function(t) {
                h1(e4, "g" + t);
            }), a(n, {
                onElement: e4,
                avoidDuplicate: !1,
                once: !0,
                withCallback: function withCallback(e5, t) {
                    o(s, function(e) {
                        d1(t, "g" + e);
                    }), T(i) && i();
                }
            });
        };
        var v1 = function v1(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
            e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
        };
        var f = function f(e) {
            e.style.display = "block";
        };
        var p = function p(e) {
            e.style.display = "none";
        };
        var m = function m(e) {
            var t = document.createDocumentFragment(), i = document.createElement("div");
            for(i.innerHTML = e; i.firstChild;)t.appendChild(i.firstChild);
            return t;
        };
        var y = function y() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            };
        };
        var x = function x() {
            var e, t = document.createElement("fakeelement"), i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for(e in i)if (void 0 !== t.style[e]) return i[e];
        };
        var b = function b(e, t, i, n) {
            if (e()) t();
            else {
                var s;
                i || (i = 100);
                var l = setInterval(function() {
                    e() && (clearInterval(l), s && clearTimeout(s), t());
                }, i);
                n && (s = setTimeout(function() {
                    clearInterval(l);
                }, n));
            }
        };
        var S = function S(e, t, i) {
            if (I(e)) console.error("Inject assets error");
            else if (T(t) && (i = t, t = !1), C(t) && t in window) T(i) && i();
            else {
                var n;
                if (-1 !== e.indexOf(".css")) {
                    if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (T(i) && i());
                    var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'), o = document.createElement("link");
                    return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (T(i) && i());
                }
                if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                    if (T(i)) {
                        if (C(t)) return b(function() {
                            return void 0 !== window[t];
                        }, function() {
                            i();
                        }), !1;
                        i();
                    }
                } else {
                    var r = document.createElement("script");
                    r.type = "text/javascript", r.src = e, r.onload = function() {
                        if (T(i)) {
                            if (C(t)) return b(function() {
                                return void 0 !== window[t];
                            }, function() {
                                i();
                            }), !1;
                            i();
                        }
                    }, document.body.appendChild(r);
                }
            }
        };
        var w = function w() {
            return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
        };
        var T = function T(e) {
            return "function" == typeof e;
        };
        var C = function C(e) {
            return "string" == typeof e;
        };
        var k = function k(e) {
            return !(!e || !e.nodeType || 1 != e.nodeType);
        };
        var E = function E(e) {
            return Array.isArray(e);
        };
        var A = function A(e) {
            return e && e.length && isFinite(e.length);
        };
        var L = function L(t) {
            return "object" === e1(t) && null != t && !T(t) && !E(t);
        };
        var I = function I(e) {
            return null == e;
        };
        var O = function O(e, t) {
            return null !== e && hasOwnProperty.call(e, t);
        };
        var P = function P(e) {
            if (L(e)) {
                if (e.keys) return e.keys().length;
                var t = 0;
                for(var i in e)O(e, i) && t++;
                return t;
            }
            return e.length;
        };
        var M = function M(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        };
        var z = function z() {
            var e6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
            if (!t.length) return !1;
            if (1 == t.length) return t[0];
            "string" == typeof e6 && (e6 = parseInt(e6));
            var i = [];
            o(t, function(e) {
                i.push(e.getAttribute("data-taborder"));
            });
            var n = Math.max.apply(Math, i.map(function(e) {
                return parseInt(e);
            })), s = e6 < 0 ? 1 : e6 + 1;
            s > n && (s = "1");
            var l = i.filter(function(e) {
                return e >= parseInt(s);
            }), r = l.sort()[0];
            return document.querySelector('.gbtn[data-taborder="'.concat(r, '"]'));
        };
        var X = function X(e) {
            if (e.events.hasOwnProperty("keyboard")) return !1;
            e.events.keyboard = a("keydown", {
                onElement: window,
                withCallback: function withCallback(t, i) {
                    var n = (t = t || window.event).keyCode;
                    if (9 == n) {
                        var s = document.querySelector(".gbtn.focused");
                        if (!s) {
                            var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                            if ("input" == l || "textarea" == l || "button" == l) return;
                        }
                        t.preventDefault();
                        var o = document.querySelectorAll(".gbtn[data-taborder]");
                        if (!o || o.length <= 0) return;
                        if (!s) {
                            var r = z();
                            return void (r && (r.focus(), h1(r, "focused")));
                        }
                        var a = z(s.getAttribute("data-taborder"));
                        d1(s, "focused"), a && (a.focus(), h1(a, "focused"));
                    }
                    39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
                }
            });
        };
        var Y = function Y(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y);
        };
        var q = function q(e7, t6) {
            var i3 = function(e8, t7) {
                var i = Y(e8) * Y(t7);
                if (0 === i) return 0;
                var n = function(e, t) {
                    return e.x * t.x + e.y * t.y;
                }(e8, t7) / i;
                return n > 1 && (n = 1), Math.acos(n);
            }(e7, t6);
            return (function(e, t) {
                return e.x * t.y - t.x * e.y;
            })(e7, t6) > 0 && (i3 *= -1), 180 * i3 / Math.PI;
        };
        var D = function D(e, t) {
            var i = new N(e);
            return i.add(t), i;
        };
        var W = function W(e9) {
            var t8 = function() {
                var e, t = document.createElement("fakeelement"), i = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for(e in i)if (void 0 !== t.style[e]) return i[e];
            }(), i4 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = c1(e9, "gslide-media") ? e9 : e9.querySelector(".gslide-media"), s = u1(n, ".ginner-container"), l = e9.querySelector(".gslide-description");
            i4 > 769 && (n = s), h1(n, "greset"), v1(n, "translate3d(0, 0, 0)"), a(t8, {
                onElement: n,
                once: !0,
                withCallback: function withCallback(e, t) {
                    d1(n, "greset");
                }
            }), n.style.opacity = "", l && (l.style.opacity = "");
        };
        var B = function B(e10) {
            if (e10.events.hasOwnProperty("touch")) return !1;
            var t9, i5, n3, s2 = y(), l = s2.width, o = s2.height, r = !1, a2 = null, g = null, f = null, p = !1, m1 = 1, x = 1, b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {
            }, P = {
            }, M = 0, z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new _(X, {
                touchStart: function touchStart(t) {
                    if (r = !0, (c1(t.targetTouches[0].target, "ginner-container") || u1(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), u1(t.targetTouches[0].target, ".gslide-inline") && !c1(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                        if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a2 = e10.activeSlide, g = a2.querySelector(".gslide-media"), n3 = a2.querySelector(".gslide-inline"), f = null, c1(g, "gslide-image") && (f = g.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a2.querySelector(".ginner-container")), d1(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                        t.preventDefault();
                    }
                },
                touchMove: function touchMove(s) {
                    if (r && (P = s.targetTouches[0], !b && !S)) {
                        if (n3 && n3.offsetHeight > o) {
                            var a = O.pageX - P.pageX;
                            if (Math.abs(a) <= 13) return !1;
                        }
                        p = !0;
                        var h, d = s.targetTouches[0].clientX, c = s.targetTouches[0].clientY, u = M - d, m = z - c;
                        if (Math.abs(u) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t9 = P.pageX - O.pageX, E = 100 * t9 / l, i5 = P.pageY - O.pageY, A = 100 * i5 / o, L && f && (h = 1 - Math.abs(i5) / o, Y.style.opacity = h, e10.settings.touchFollowAxis && (E = 0)), I && (h = 1 - Math.abs(t9) / l, g.style.opacity = h, e10.settings.touchFollowAxis && (A = 0)), !f) return v1(g, "translate3d(".concat(E, "%, 0, 0)"));
                        v1(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"));
                    }
                },
                touchEnd: function touchEnd() {
                    if (r) {
                        if (p = !1, S || b) return C = w, void (k = T);
                        var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                        if (!(t > 29 && f)) return t < 29 && i < 25 ? (h1(Y, "greset"), Y.style.opacity = 1, W(g)) : void 0;
                        e10.close();
                    }
                },
                multipointEnd: function multipointEnd() {
                    setTimeout(function() {
                        b = !1;
                    }, 50);
                },
                multipointStart: function multipointStart() {
                    b = !0, m1 = x || 1;
                },
                pinch: function pinch(e) {
                    if (!f || p) return !1;
                    b = !0, f.scaleX = f.scaleY = m1 * e.zoom;
                    var t = m1 * e.zoom;
                    if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void f.setAttribute("style", "");
                    t > 4.5 && (t = 4.5), f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), x = t;
                },
                pressMove: function pressMove(e) {
                    if (S && !b) {
                        var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                        C && (t += C), k && (i += k), w = t, T = i;
                        var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                        x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")), v1(f, n);
                    }
                },
                swipe: function swipe(t) {
                    if (!S) {
                        if (b) b = !1;
                        else {
                            if ("Left" == t.direction) {
                                if (e10.index == e10.elements.length - 1) return W(g);
                                e10.nextSlide();
                            }
                            if ("Right" == t.direction) {
                                if (0 == e10.index) return W(g);
                                e10.prevSlide();
                            }
                        }
                    }
                }
            });
            e10.events.touch = q;
        };
        var j = function j(e, t, i, n) {
            var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
            l.addEventListener("load", function() {
                T(n) && n();
            }, !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", I(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild);
        };
        var F = function F(e11, t, i, n) {
            var s = this, l2 = e11.querySelector(".ginner-container"), o = "gvideo" + i, r1 = e11.querySelector(".gslide-media"), a = this.getAllPlayers();
            h1(l2, "gvideo-container"), r1.insertBefore(m('<div class="gvideo-wrapper"></div>'), r1.firstChild);
            var d = e11.querySelector(".gvideo-wrapper");
            S(this.settings.plyr.css, "Plyr");
            var c = t.href, u = null == t ? void 0 : t.videoProvider, g = !1;
            r1.style.maxWidth = t.width, S(this.settings.plyr.js, "Plyr", function() {
                if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                    u = "local";
                    var l = '<video id="' + o + '" ';
                    l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = m(l += "</video>");
                }
                var r = g || m('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
                h1(d, "".concat(u, "-video gvideo")), d.appendChild(r), d.setAttribute("data-id", o), d.setAttribute("data-index", i);
                var v = O(s.settings.plyr, "config") ? s.settings.plyr.config : {
                }, f = new Plyr("#" + o, v);
                f.on("ready", function(e) {
                    a[o] = e.detail.plyr, T(n) && n();
                }), b(function() {
                    return e11.querySelector("iframe") && "true" == e11.querySelector("iframe").dataset.ready;
                }, function() {
                    s.resize(e11);
                }), f.on("enterfullscreen", R), f.on("exitfullscreen", R);
            });
        };
        var R = function R(e) {
            var t = u1(e.target, ".gslide-media");
            "enterfullscreen" === e.type && h1(t, "fullscreen"), "exitfullscreen" === e.type && d1(t, "fullscreen");
        };
        var G = function G(e12, t, i, n) {
            var s, l = this, o = e12.querySelector(".gslide-media"), r = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(), d = !(!O(t, "content") || !t.content) && t.content;
            if (d && (C(d) && (s = m('<div class="ginlined-content">'.concat(d, "</div>"))), k(d))) {
                "none" == d.style.display && (d.style.display = "block");
                var c = document.createElement("div");
                c.className = "ginlined-content", c.appendChild(d), s = c;
            }
            if (r) {
                var u = document.getElementById(r);
                if (!u) return !1;
                var g = u.cloneNode(!0);
                g.style.height = t.height, g.style.maxWidth = t.width, h1(g, "ginlined-content"), s = g;
            }
            if (!s) return console.error("Unable to append inline slide content", t), !1;
            o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = a("click", {
                onElement: o.querySelectorAll(".gtrigger-close"),
                withCallback: function withCallback(e) {
                    e.preventDefault(), l.close();
                }
            }), T(n) && n();
        };
        var Z = function Z(e13, t10, i6, n4) {
            var s3 = e13.querySelector(".gslide-media"), l3 = function(e) {
                var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
                return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
                    l.onload = null, h1(l, "node-ready"), T(n) && n();
                }, s && s.appendChild(l), l;
            }({
                url: t10.href,
                callback: n4
            });
            s3.parentNode.style.maxWidth = t10.width, s3.parentNode.style.height = t10.height, s3.appendChild(l3);
        };
        function e1(t) {
            return (e1 = "function" == typeof Symbol && "symbol" == $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(Symbol.iterator) ? function e1(e) {
                return typeof e === "undefined" ? "undefined" : $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : $d1e0f5fb29e2f2d0$export$2e2bcd8739ae039(e);
            })(t);
        }
        var s1 = Date.now();
        function l1() {
            var e = {
            }, t = !0, i7 = 0, n5 = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i7++);
            for(var s = function s(i) {
                for(var n in i)Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l1(!0, e[n], i[n]) : e[n] = i[n]);
            }; i7 < n5; i7++){
                var o = arguments[i7];
                s(o);
            }
            return e;
        }
        var N = function() {
            function e14(i) {
                t1(this, e14), this.handlers = [], this.el = i;
            }
            return n1(e14, [
                {
                    key: "add",
                    value: function value(e) {
                        this.handlers.push(e);
                    }
                },
                {
                    key: "del",
                    value: function value(e) {
                        e || (this.handlers = []);
                        for(var t = this.handlers.length; t >= 0; t--)this.handlers[t] === e && this.handlers.splice(t, 1);
                    }
                },
                {
                    key: "dispatch",
                    value: function value() {
                        for(var e = 0, t = this.handlers.length; e < t; e++){
                            var i = this.handlers[e];
                            "function" == typeof i && i.apply(this.el, arguments);
                        }
                    }
                }
            ]), e14;
        }();
        var _ = function() {
            function e15(i, n) {
                t1(this, e15), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                    x: null,
                    y: null
                }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
                var s = function s() {
                };
                this.rotate = D(this.element, n.rotate || s), this.touchStart = D(this.element, n.touchStart || s), this.multipointStart = D(this.element, n.multipointStart || s), this.multipointEnd = D(this.element, n.multipointEnd || s), this.pinch = D(this.element, n.pinch || s), this.swipe = D(this.element, n.swipe || s), this.tap = D(this.element, n.tap || s), this.doubleTap = D(this.element, n.doubleTap || s), this.longTap = D(this.element, n.longTap || s), this.singleTap = D(this.element, n.singleTap || s), this.pressMove = D(this.element, n.pressMove || s), this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s), this.touchMove = D(this.element, n.touchMove || s), this.touchEnd = D(this.element, n.touchEnd || s), this.touchCancel = D(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                    x: null,
                    y: null
                };
            }
            return n1(e15, [
                {
                    key: "start",
                    value: function value(e) {
                        if (e.touches) {
                            if (e.target && e.target.nodeName && [
                                "a",
                                "button",
                                "input"
                            ].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                            else {
                                this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                                var t = this.preV;
                                if (e.touches.length > 1) {
                                    this._cancelLongTap(), this._cancelSingleTap();
                                    var i = {
                                        x: e.touches[1].pageX - this.x1,
                                        y: e.touches[1].pageY - this.y1
                                    };
                                    t.x = i.x, t.y = i.y, this.pinchStartLen = Y(t), this.multipointStart.dispatch(e, this.element);
                                }
                                this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                                    this.longTap.dispatch(e, this.element), this._preventTap = !0;
                                }).bind(this), 750);
                            }
                        }
                    }
                },
                {
                    key: "move",
                    value: function value(e) {
                        if (e.touches) {
                            var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                            if (this.isDoubleTap = !1, i > 1) {
                                var l = e.touches[1].pageX, o = e.touches[1].pageY, r = {
                                    x: e.touches[1].pageX - n,
                                    y: e.touches[1].pageY - s
                                };
                                null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = q(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o;
                            } else {
                                if (null !== this.x2) {
                                    e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                                    var a = Math.abs(this.x1 - this.x2), h = Math.abs(this.y1 - this.y2);
                                    (a > 10 || h > 10) && (this._preventTap = !0);
                                } else e.deltaX = 0, e.deltaY = 0;
                                this.pressMove.dispatch(e, this.element);
                            }
                            this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault();
                        }
                    }
                },
                {
                    key: "end",
                    value: function value(e) {
                        if (e.changedTouches) {
                            this._cancelLongTap();
                            var t = this;
                            e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                                t.swipe.dispatch(e, t.element);
                            }, 0)) : (this.tapTimeout = setTimeout(function() {
                                t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1);
                            }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                                t.singleTap.dispatch(e, t.element);
                            }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
                        }
                    }
                },
                {
                    key: "cancelAll",
                    value: function value() {
                        this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
                    }
                },
                {
                    key: "cancel",
                    value: function value(e) {
                        this.cancelAll(), this.touchCancel.dispatch(e, this.element);
                    }
                },
                {
                    key: "_cancelLongTap",
                    value: function value() {
                        clearTimeout(this.longTapTimeout);
                    }
                },
                {
                    key: "_cancelSingleTap",
                    value: function value() {
                        clearTimeout(this.singleTapTimeout);
                    }
                },
                {
                    key: "_swipeDirection",
                    value: function value(e, t, i, n) {
                        return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down";
                    }
                },
                {
                    key: "on",
                    value: function value(e, t) {
                        this[e] && this[e].add(t);
                    }
                },
                {
                    key: "off",
                    value: function value(e, t) {
                        this[e] && this[e].del(t);
                    }
                },
                {
                    key: "destroy",
                    value: function value() {
                        return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
                    }
                }
            ]), e15;
        }();
        var H = function() {
            function e16(i, n) {
                var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (t1(this, e16), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
                this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
                    return s.dragStart(e);
                }, !1), this.img.addEventListener("mouseup", function(e) {
                    return s.dragEnd(e);
                }, !1), this.img.addEventListener("mousemove", function(e) {
                    return s.drag(e);
                }, !1), this.img.addEventListener("click", function(e) {
                    return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn();
                }, !1), this.img.setZoomEvents = !0;
            }
            return n1(e16, [
                {
                    key: "zoomIn",
                    value: function value() {
                        var e = this.widowWidth();
                        if (!(this.zoomedIn || e <= 768)) {
                            var t = this.img;
                            if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                                var i = e / 2 - t.naturalWidth / 2;
                                this.setTranslate(this.img.parentNode, i, 0);
                            }
                            this.slide.classList.add("zoomed"), this.zoomedIn = !0;
                        }
                    }
                },
                {
                    key: "zoomOut",
                    value: function value() {
                        this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
                    }
                },
                {
                    key: "dragStart",
                    value: function value(e) {
                        e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1;
                    }
                },
                {
                    key: "dragEnd",
                    value: function value(e) {
                        var t = this;
                        e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                            t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging");
                        }, 100);
                    }
                },
                {
                    key: "drag",
                    value: function value(e) {
                        this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY));
                    }
                },
                {
                    key: "onMove",
                    value: function value(e) {
                        if (this.zoomedIn) {
                            var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                            this.setTranslate(this.img, t, i);
                        }
                    }
                },
                {
                    key: "setTranslate",
                    value: function value(e, t, i) {
                        e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
                    }
                },
                {
                    key: "widowWidth",
                    value: function value() {
                        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    }
                }
            ]), e16;
        }(), V = function() {
            function e17() {
                var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                };
                t1(this, e17);
                var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r, h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
                this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", function(e) {
                    return i.dragStart(e);
                }, !1), this.el.addEventListener("mouseup", function(e) {
                    return i.dragEnd(e);
                }, !1), this.el.addEventListener("mousemove", function(e) {
                    return i.drag(e);
                }, !1);
            }
            return n1(e17, [
                {
                    key: "dragStart",
                    value: function value(e) {
                        if (this.slide.classList.contains("zoomed")) this.active = !1;
                        else {
                            "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                            var t = e.target.nodeName.toLowerCase();
                            e.target.classList.contains("nodrag") || u1(e.target, ".nodrag") || -1 !== [
                                "input",
                                "select",
                                "textarea",
                                "button",
                                "a"
                            ].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u1(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u1(e.target, ".ginner-container")));
                        }
                    }
                },
                {
                    key: "dragEnd",
                    value: function value(e) {
                        var t = this;
                        e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                            t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = "";
                        }, 100);
                    }
                },
                {
                    key: "drag",
                    value: function value(e) {
                        if (this.active) {
                            e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                            var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                            if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                                this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                                var n = this.shouldChange();
                                if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide());
                            }
                            if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                                this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                                var s = this.shouldClose();
                                return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close());
                            }
                        }
                    }
                },
                {
                    key: "shouldChange",
                    value: function value() {
                        var e = !1;
                        if (Math.abs(this.currentX) >= this.toleranceX) {
                            var t = this.currentX > 0 ? "right" : "left";
                            ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t);
                        }
                        return e;
                    }
                },
                {
                    key: "shouldClose",
                    value: function value() {
                        var e = !1;
                        return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
                    }
                },
                {
                    key: "setTranslate",
                    value: function value(e, t, i) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                    }
                }
            ]), e17;
        }();
        var U = function() {
            function e18() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                };
                t1(this, e18), this.defaults = {
                    href: "",
                    sizes: "",
                    srcset: "",
                    title: "",
                    type: "",
                    videoProvider: "",
                    description: "",
                    alt: "",
                    descPosition: "bottom",
                    effect: "",
                    width: "",
                    height: "",
                    content: !1,
                    zoomable: !0,
                    draggable: !0
                }, L(i) && (this.defaults = l1(this.defaults, i));
            }
            return n1(e18, [
                {
                    key: "sourceType",
                    value: function value(e) {
                        var t = e;
                        if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
                        if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
                        if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
                        if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
                        if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
                        if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
                        return e.indexOf("goajax=true") > -1 ? "ajax" : "external";
                    }
                },
                {
                    key: "parseConfig",
                    value: function value(e, t11) {
                        var i = this, n = l1({
                            descPosition: t11.descPosition
                        }, this.defaults);
                        if (L(e) && !k(e)) {
                            O(e, "type") || (O(e, "content") && e.content ? e.type = "inline" : O(e, "href") && (e.type = this.sourceType(e.href)));
                            var s = l1(n, e);
                            return this.setSize(s, t11), s;
                        }
                        var r2 = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                        if ("a" === h && (r2 = e.href), "img" === h && (r2 = e.src, n.alt = e.alt), n.href = r2, o(n, function(s, l) {
                            O(t11, l) && "width" !== l && (n[l] = t11[l]);
                            var o = e.dataset[l];
                            I(o) || (n[l] = i.sanitizeValue(o));
                        }), n.content && (n.type = "inline"), !n.type && r2 && (n.type = this.sourceType(r2)), I(a)) {
                            if (!n.title && "a" == h) {
                                var d = e.title;
                                I(d) || "" === d || (n.title = d);
                            }
                            if (!n.title && "img" == h) {
                                var c = e.alt;
                                I(c) || "" === c || (n.title = c);
                            }
                        } else {
                            var u = [];
                            o(n, function(e, t) {
                                u.push(";\\s?" + t);
                            }), u = u.join("\\s?:|"), "" !== a.trim() && o(n, function(e, t) {
                                var s = a, l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"), o = s.match(l);
                                if (o && o.length && o[1]) {
                                    var r = o[1].trim().replace(/;\s*$/, "");
                                    n[t] = i.sanitizeValue(r);
                                }
                            });
                        }
                        if (n.description && "." === n.description.substring(0, 1)) {
                            var g;
                            try {
                                g = document.querySelector(n.description).innerHTML;
                            } catch (e) {
                                if (!(e instanceof DOMException)) throw e;
                            }
                            g && (n.description = g);
                        }
                        if (!n.description) {
                            var v = e.querySelector(".glightbox-desc");
                            v && (n.description = v.innerHTML);
                        }
                        return this.setSize(n, t11, e), this.slideConfig = n, n;
                    }
                },
                {
                    key: "setSize",
                    value: function value(e, t) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width), s = this.checkSize(t.height);
                        return e.width = O(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = O(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e;
                    }
                },
                {
                    key: "checkSize",
                    value: function value(e) {
                        return M(e) ? "".concat(e, "px") : e;
                    }
                },
                {
                    key: "sanitizeValue",
                    value: function value(e) {
                        return "true" !== e && "false" !== e ? e : "true" === e;
                    }
                }
            ]), e18;
        }(), $ = function() {
            function e19(i, n, s) {
                t1(this, e19), this.element = i, this.instance = n, this.index = s;
            }
            return n1(e19, [
                {
                    key: "setContent",
                    value: function value() {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i8 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (c1(t, "loaded")) return !1;
                        var n = this.instance.settings, s = this.slideConfig, l = w();
                        T(n.beforeSlideLoad) && n.beforeSlideLoad({
                            index: this.index,
                            slide: t,
                            player: !1
                        });
                        var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"), d = t.querySelector(".gslide-title"), u = t.querySelector(".gslide-desc"), g = t.querySelector(".gdesc-inner"), v = i8, f = "gSlideTitle_" + this.index, p = "gSlideDesc_" + this.index;
                        if (T(n.afterSlideLoad) && (v = function v() {
                            T(i8) && i8(), n.afterSlideLoad({
                                index: e.index,
                                slide: t,
                                player: e.instance.getSlidePlayerInstance(e.index)
                            });
                        }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f, d.innerHTML = s.title) : d.parentNode.removeChild(d), u && "" !== s.description ? (u.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), u.innerHTML = s.smallDescription, this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u), h1(a.parentNode, "desc-".concat(r)), h1(g.parentNode, "description-".concat(r))), h1(a, "gslide-".concat(o)), h1(t, "loaded"), "video" !== o) {
                            if ("external" !== o) return "inline" === o ? (G.apply(this.instance, [
                                t,
                                s,
                                this.index,
                                v
                            ]), void (s.draggable && new V({
                                dragEl: t.querySelector(".gslide-inline"),
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: this.instance
                            }))) : void ("image" !== o ? T(v) && v() : j(t, s, this.index, function() {
                                var i = t.querySelector("img");
                                s.draggable && new V({
                                    dragEl: i,
                                    toleranceX: n.dragToleranceX,
                                    toleranceY: n.dragToleranceY,
                                    slide: t,
                                    instance: e.instance
                                }), s.zoomable && i.naturalWidth > i.offsetWidth && (h1(i, "zoomable"), new H(i, t, function() {
                                    e.instance.resize();
                                })), T(v) && v();
                            }));
                            Z.apply(this, [
                                t,
                                s,
                                this.index,
                                v
                            ]);
                        } else F.apply(this.instance, [
                            t,
                            s,
                            this.index,
                            v
                        ]);
                    }
                },
                {
                    key: "slideShortDesc",
                    value: function value(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = document.createElement("div");
                        n.innerHTML = e;
                        var s = n.innerText, l = i;
                        if ((e = s.trim()).length <= t) return e;
                        var o = e.substr(0, t - 1);
                        return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o;
                    }
                },
                {
                    key: "descriptionEvents",
                    value: function value(e20, t) {
                        var i = this, n6 = e20.querySelector(".desc-more");
                        if (!n6) return !1;
                        a("click", {
                            onElement: n6,
                            withCallback: function withCallback(e21, n) {
                                e21.preventDefault();
                                var s = document.body, l = u1(n, ".gslide-desc");
                                if (!l) return !1;
                                l.innerHTML = t.description, h1(s, "gdesc-open");
                                var o = a("click", {
                                    onElement: [
                                        s,
                                        u1(l, ".gslide-description")
                                    ],
                                    withCallback: function withCallback(e, n) {
                                        "a" !== e.target.nodeName.toLowerCase() && (d1(s, "gdesc-open"), h1(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout(function() {
                                            d1(s, "gdesc-closed");
                                        }, 400), o.destroy());
                                    }
                                });
                            }
                        });
                    }
                },
                {
                    key: "create",
                    value: function value() {
                        return m(this.instance.settings.slideHTML);
                    }
                },
                {
                    key: "getConfig",
                    value: function value() {
                        k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                        var e = new U(this.instance.settings.slideExtraAttributes);
                        return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
                    }
                }
            ]), e19;
        }(), J = w(), K = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, Q = document.getElementsByTagName("html")[0], ee = {
            selector: ".glightbox",
            elements: null,
            skin: "clean",
            theme: "clean",
            closeButton: !0,
            startAt: null,
            autoplayVideos: !0,
            autofocusVideos: !0,
            descPosition: "bottom",
            width: "900px",
            height: "506px",
            videosWidth: "960px",
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeSlideLoad: null,
            afterSlideLoad: null,
            slideInserted: null,
            slideRemoved: null,
            slideExtraAttributes: null,
            onOpen: null,
            onClose: null,
            loop: !1,
            zoomable: !0,
            draggable: !0,
            dragAutoSnap: !1,
            dragToleranceX: 40,
            dragToleranceY: 65,
            preload: !0,
            oneSlidePerOpen: !1,
            touchNavigation: !0,
            touchFollowAxis: !0,
            keyboardNavigation: !0,
            closeOnOutsideClick: !0,
            plugins: !1,
            plyr: {
                css: "https://cdn.plyr.io/3.6.12/plyr.css",
                js: "https://cdn.plyr.io/3.6.12/plyr.js",
                config: {
                    ratio: "16:9",
                    fullscreen: {
                        enabled: !0,
                        iosNative: !0
                    },
                    youtube: {
                        noCookie: !0,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        transparent: !1
                    }
                }
            },
            openEffect: "zoom",
            closeEffect: "zoom",
            slideEffect: "slide",
            moreText: "See more",
            moreLength: 60,
            cssEfects: {
                fade: {
                    "in": "fadeIn",
                    out: "fadeOut"
                },
                zoom: {
                    "in": "zoomIn",
                    out: "zoomOut"
                },
                slide: {
                    "in": "slideInRight",
                    out: "slideOutLeft"
                },
                slideBack: {
                    "in": "slideInLeft",
                    out: "slideOutRight"
                },
                none: {
                    "in": "none",
                    out: "none"
                }
            },
            svg: {
                close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
            },
            slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
            lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
        }, te = function() {
            function e22() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                };
                t1(this, e22), this.customOptions = i, this.settings = l1(ee, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {
                }, this.apiEvents = [], this.fullElementsList = !1;
            }
            return n1(e22, [
                {
                    key: "init",
                    value: function value() {
                        var e = this, t12 = this.getSelector();
                        t12 && (this.baseEvents = a("click", {
                            onElement: t12,
                            withCallback: function withCallback(t, i) {
                                t.preventDefault(), e.open(i);
                            }
                        })), this.elements = this.getElements();
                    }
                },
                {
                    key: "open",
                    value: function value() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (0 === this.elements.length) return !1;
                        this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                        var i = M(t) ? t : this.settings.startAt;
                        if (k(e)) {
                            var n = e.getAttribute("data-gallery");
                            n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), I(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
                        }
                        M(i) || (i = 0), this.build(), g1(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade["in"]);
                        var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                        if (l > 0) {
                            var o = document.createElement("style");
                            o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), h1(s, "gscrollbar-fixer");
                        }
                        h1(s, "glightbox-open"), h1(Q, "glightbox-open"), J && (h1(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (h1(this.prevButton, "glightbox-button-hidden"), h1(this.nextButton, "glightbox-button-hidden")) : (d1(this.prevButton, "glightbox-button-hidden"), d1(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X(this);
                    }
                },
                {
                    key: "openAt",
                    value: function value() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.open(null, e);
                    }
                },
                {
                    key: "showSlide",
                    value: function value() {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        f(this.loader), this.index = parseInt(t);
                        var n = this.slidesContainer.querySelector(".current");
                        n && d1(n, "current"), this.slideAnimateOut();
                        var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                        if (c1(s, "loaded")) this.slideAnimateIn(s, i), p(this.loader);
                        else {
                            f(this.loader);
                            var l = this.elements[t], o = {
                                index: this.index,
                                slide: s,
                                slideNode: s,
                                slideConfig: l.slideConfig,
                                slideIndex: this.index,
                                trigger: l.node,
                                player: null
                            };
                            this.trigger("slide_before_load", o), l.instance.setContent(s, function() {
                                p(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o);
                            });
                        }
                        this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c1(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s;
                    }
                },
                {
                    key: "preloadSlide",
                    value: function value(e) {
                        var t = this;
                        if (e < 0 || e > this.elements.length - 1) return !1;
                        if (I(this.elements[e])) return !1;
                        var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                        if (c1(i, "loaded")) return !1;
                        var n = this.elements[e], s = n.type, l = {
                            index: e,
                            slide: i,
                            slideNode: i,
                            slideConfig: n.slideConfig,
                            slideIndex: e,
                            trigger: n.node,
                            player: null
                        };
                        this.trigger("slide_before_load", l), "video" === s || "external" === s ? setTimeout(function() {
                            n.instance.setContent(i, function() {
                                t.trigger("slide_after_load", l);
                            });
                        }, 200) : n.instance.setContent(i, function() {
                            t.trigger("slide_after_load", l);
                        });
                    }
                },
                {
                    key: "prevSlide",
                    value: function value() {
                        this.goToSlide(this.index - 1);
                    }
                },
                {
                    key: "nextSlide",
                    value: function value() {
                        this.goToSlide(this.index + 1);
                    }
                },
                {
                    key: "goToSlide",
                    value: function value() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                        e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e);
                    }
                },
                {
                    key: "insertSlide",
                    value: function value() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        }, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                        t < 0 && (t = this.elements.length);
                        var i = new $(e, this, t), n = i.getConfig(), s = l1({
                        }, n), o = i.create(), r = this.elements.length - 1;
                        s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                        var a = null, h = null;
                        if (this.slidesContainer) {
                            if (t > r) this.slidesContainer.appendChild(o);
                            else {
                                var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                                this.slidesContainer.insertBefore(o, d);
                            }
                            (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a;
                        }
                        this.trigger("slide_inserted", {
                            index: t,
                            slide: a,
                            slideNode: a,
                            slideConfig: n,
                            slideIndex: t,
                            trigger: null,
                            player: h
                        }), T(this.settings.slideInserted) && this.settings.slideInserted({
                            index: t,
                            slide: a,
                            player: h
                        });
                    }
                },
                {
                    key: "removeSlide",
                    value: function value() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                        if (e < 0 || e > this.elements.length - 1) return !1;
                        var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                        t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T(this.settings.slideRemoved) && this.settings.slideRemoved(e);
                    }
                },
                {
                    key: "slideAnimateIn",
                    value: function value(e, t) {
                        var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), l = {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlide,
                            slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        }, o = {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideConfig: this.elements[this.index].slideConfig,
                            slideIndex: this.index,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        };
                        if (n.offsetWidth > 0 && s && (p(s), s.style.display = ""), d1(e, this.effectsClasses), t) g1(e, this.settings.cssEfects[this.settings.openEffect]["in"], function() {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: l,
                                current: o
                            }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                                l,
                                o
                            ]);
                        });
                        else {
                            var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r]["in"] : r;
                            this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack["in"]), g1(e, a, function() {
                                i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                    prev: l,
                                    current: o
                                }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                                    l,
                                    o
                                ]);
                            });
                        }
                        setTimeout(function() {
                            i.resize(e);
                        }, 100), h1(e, "current");
                    }
                },
                {
                    key: "slideAnimateOut",
                    value: function value() {
                        if (!this.prevActiveSlide) return !1;
                        var e = this.prevActiveSlide;
                        d1(e, this.effectsClasses), h1(e, "prev");
                        var t13 = this.settings.slideEffect, i9 = "none" !== t13 ? this.settings.cssEfects[t13].out : t13;
                        this.slidePlayerPause(e), this.trigger("slide_before_change", {
                            prev: {
                                index: this.prevActiveSlideIndex,
                                slide: this.prevActiveSlide,
                                slideNode: this.prevActiveSlide,
                                slideIndex: this.prevActiveSlideIndex,
                                slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                                trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                                player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                            },
                            current: {
                                index: this.index,
                                slide: this.activeSlide,
                                slideNode: this.activeSlide,
                                slideIndex: this.index,
                                slideConfig: this.elements[this.index].slideConfig,
                                trigger: this.elements[this.index].node,
                                player: this.getSlidePlayerInstance(this.index)
                            }
                        }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [
                            {
                                index: this.prevActiveSlideIndex,
                                slide: this.prevActiveSlide,
                                player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                            },
                            {
                                index: this.index,
                                slide: this.activeSlide,
                                player: this.getSlidePlayerInstance(this.index)
                            }
                        ]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i9 = this.settings.cssEfects.slideBack.out), g1(e, i9, function() {
                            var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"), n = e.querySelector(".gslide-description");
                            t.style.transform = "", i.style.transform = "", d1(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), d1(e, "prev");
                        });
                    }
                },
                {
                    key: "getAllPlayers",
                    value: function value() {
                        return this.videoPlayers;
                    }
                },
                {
                    key: "getSlidePlayerInstance",
                    value: function value(e) {
                        var t = "gvideo" + e, i = this.getAllPlayers();
                        return !(!O(i, t) || !i[t]) && i[t];
                    }
                },
                {
                    key: "stopSlideVideo",
                    value: function value(e) {
                        if (k(e)) {
                            var t = e.querySelector(".gvideo-wrapper");
                            t && (e = t.getAttribute("data-index"));
                        }
                        console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                        var i = this.getSlidePlayerInstance(e);
                        i && i.playing && i.pause();
                    }
                },
                {
                    key: "slidePlayerPause",
                    value: function value(e) {
                        if (k(e)) {
                            var t = e.querySelector(".gvideo-wrapper");
                            t && (e = t.getAttribute("data-index"));
                        }
                        var i = this.getSlidePlayerInstance(e);
                        i && i.playing && i.pause();
                    }
                },
                {
                    key: "playSlideVideo",
                    value: function value(e) {
                        if (k(e)) {
                            var t = e.querySelector(".gvideo-wrapper");
                            t && (e = t.getAttribute("data-index"));
                        }
                        console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                        var i = this.getSlidePlayerInstance(e);
                        i && !i.playing && i.play();
                    }
                },
                {
                    key: "slidePlayerPlay",
                    value: function value(e) {
                        var t;
                        if (!J || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                            if (k(e)) {
                                var i = e.querySelector(".gvideo-wrapper");
                                i && (e = i.getAttribute("data-index"));
                            }
                            var n = this.getSlidePlayerInstance(e);
                            n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus());
                        }
                    }
                },
                {
                    key: "setElements",
                    value: function value(e23) {
                        var t = this;
                        this.settings.elements = !1;
                        var i = [];
                        e23 && e23.length && o(e23, function(e, n) {
                            var s = new $(e, t, n), o = s.getConfig(), r = l1({
                            }, o);
                            r.slideConfig = o, r.instance = s, r.index = n, i.push(r);
                        }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, function() {
                            var e = m(t.settings.slideHTML);
                            t.slidesContainer.appendChild(e);
                        }), this.showSlide(0, !0)));
                    }
                },
                {
                    key: "getElementIndex",
                    value: function value(e) {
                        var t = !1;
                        return o(this.elements, function(i, n) {
                            if (O(i, "node") && i.node == e) return t = n, !0;
                        }), t;
                    }
                },
                {
                    key: "getElements",
                    value: function value() {
                        var e = this, t = [];
                        this.elements = this.elements ? this.elements : [], !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, function(i, n) {
                            var s = new $(i, e, n), o = s.getConfig(), r = l1({
                            }, o);
                            r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r);
                        });
                        var i10 = !1;
                        return this.getSelector() && (i10 = document.querySelectorAll(this.getSelector())), i10 ? (o(i10, function(i, n) {
                            var s = new $(i, e, n), o = s.getConfig(), r = l1({
                            }, o);
                            r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r);
                        }), t) : t;
                    }
                },
                {
                    key: "getGalleryElements",
                    value: function value(e24, t) {
                        return e24.filter(function(e) {
                            return e.gallery == t;
                        });
                    }
                },
                {
                    key: "getSelector",
                    value: function value() {
                        return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
                    }
                },
                {
                    key: "getActiveSlide",
                    value: function value() {
                        return this.slidesContainer.querySelectorAll(".gslide")[this.index];
                    }
                },
                {
                    key: "getActiveSlideIndex",
                    value: function value() {
                        return this.index;
                    }
                },
                {
                    key: "getAnimationClasses",
                    value: function value() {
                        var e = [];
                        for(var t in this.settings.cssEfects)if (this.settings.cssEfects.hasOwnProperty(t)) {
                            var i = this.settings.cssEfects[t];
                            e.push("g".concat(i["in"])), e.push("g".concat(i.out));
                        }
                        return e.join(" ");
                    }
                },
                {
                    key: "build",
                    value: function value() {
                        var e25 = this;
                        if (this.built) return !1;
                        var t14 = document.body.childNodes, i = [];
                        o(t14, function(e) {
                            e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
                        });
                        var n = O(this.settings.svg, "next") ? this.settings.svg.next : "", s = O(this.settings.svg, "prev") ? this.settings.svg.prev : "", l = O(this.settings.svg, "close") ? this.settings.svg.close : "", r = this.settings.lightboxHTML;
                        r = m(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(r);
                        var d = document.getElementById("glightbox-body");
                        this.modal = d;
                        var g = d.querySelector(".gclose");
                        this.prevButton = d.querySelector(".gprev"), this.nextButton = d.querySelector(".gnext"), this.overlay = d.querySelector(".goverlay"), this.loader = d.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {
                        }, h1(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g && (this.events.close = a("click", {
                            onElement: g,
                            withCallback: function withCallback(t, i) {
                                t.preventDefault(), e25.close();
                            }
                        })), g && !this.settings.closeButton && g.parentNode.removeChild(g), this.nextButton && (this.events.next = a("click", {
                            onElement: this.nextButton,
                            withCallback: function withCallback(t, i) {
                                t.preventDefault(), e25.nextSlide();
                            }
                        })), this.prevButton && (this.events.prev = a("click", {
                            onElement: this.prevButton,
                            withCallback: function withCallback(t, i) {
                                t.preventDefault(), e25.prevSlide();
                            }
                        })), this.settings.closeOnOutsideClick && (this.events.outClose = a("click", {
                            onElement: d,
                            withCallback: function withCallback(t, i) {
                                e25.preventOutsideClick || c1(document.body, "glightbox-mobile") || u1(t.target, ".ginner-container") || u1(t.target, ".gbtn") || c1(t.target, "gnext") || c1(t.target, "gprev") || e25.close();
                            }
                        })), o(this.elements, function(t, i) {
                            e25.slidesContainer.appendChild(t.instance.create()), t.slideNode = e25.slidesContainer.querySelectorAll(".gslide")[i];
                        }), K && h1(document.body, "glightbox-touch"), this.events.resize = a("resize", {
                            onElement: window,
                            withCallback: function withCallback() {
                                e25.resize();
                            }
                        }), this.built = !0;
                    }
                },
                {
                    key: "resize",
                    value: function value() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if ((e = e || this.activeSlide) && !c1(e, "zoomed")) {
                            var t = y(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"), s = this.slideDescription, l = t.width, o = t.height;
                            if (l <= 768 ? h1(document.body, "glightbox-mobile") : d1(document.body, "glightbox-mobile"), i || n) {
                                var r = !1;
                                if (s && (c1(s, "description-bottom") || c1(s, "description-top")) && !c1(s, "gabsolute") && (r = !0), n) {
                                    if (l <= 768) n.querySelector("img");
                                    else if (r) {
                                        var a = s.offsetHeight, u = n.querySelector("img");
                                        u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"));
                                    }
                                }
                                if (i) {
                                    var g = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                    if (!g) {
                                        var v = i.clientWidth, f = i.clientHeight, p = v / f;
                                        g = "".concat(v / p, ":").concat(f / p);
                                    }
                                    var m = g.split(":"), x = this.settings.videosWidth, b = this.settings.videosWidth, S = (b = M(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                                    if (S = Math.floor(S), r && (o -= s.offsetHeight), b > l || S > o || o < S && l > b) {
                                        var w = i.offsetWidth, T = i.offsetHeight, C = o / T, k = {
                                            width: w * C,
                                            height: T * C
                                        };
                                        i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"));
                                    } else i.parentNode.style.maxWidth = "".concat(x), r && s.setAttribute("style", "max-width: ".concat(x, ";"));
                                }
                            }
                        }
                    }
                },
                {
                    key: "reload",
                    value: function value() {
                        this.init();
                    }
                },
                {
                    key: "updateNavigationClasses",
                    value: function value() {
                        var e = this.loop();
                        d1(this.nextButton, "disabled"), d1(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h1(this.prevButton, "disabled"), h1(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h1(this.nextButton, "disabled") : h1(this.prevButton, "disabled");
                    }
                },
                {
                    key: "loop",
                    value: function value() {
                        var e = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                        return e = O(this.settings, "loop") ? this.settings.loop : e, e;
                    }
                },
                {
                    key: "close",
                    value: function value() {
                        var e26 = this;
                        if (!this.lightboxOpen) {
                            if (this.events) {
                                for(var t in this.events)this.events.hasOwnProperty(t) && this.events[t].destroy();
                                this.events = null;
                            }
                            return !1;
                        }
                        if (this.closing) return !1;
                        this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, function(e) {
                            e.removeAttribute("aria-hidden");
                        }), h1(this.modal, "glightbox-closing"), g1(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g1(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                            if (e26.activeSlide = null, e26.prevActiveSlideIndex = null, e26.prevActiveSlide = null, e26.built = !1, e26.events) {
                                for(var t in e26.events)e26.events.hasOwnProperty(t) && e26.events[t].destroy();
                                e26.events = null;
                            }
                            var i = document.body;
                            d1(Q, "glightbox-open"), d1(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e26.modal.parentNode.removeChild(e26.modal), e26.trigger("close"), T(e26.settings.onClose) && e26.settings.onClose();
                            var n = document.querySelector(".gcss-styles");
                            n && n.parentNode.removeChild(n), e26.lightboxOpen = !1, e26.closing = null;
                        });
                    }
                },
                {
                    key: "destroy",
                    value: function value() {
                        this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
                    }
                },
                {
                    key: "on",
                    value: function value(e, t) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!e || !T(t)) throw new TypeError("Event name and callback must be defined");
                        this.apiEvents.push({
                            evt: e,
                            once: i,
                            callback: t
                        });
                    }
                },
                {
                    key: "once",
                    value: function value(e, t) {
                        this.on(e, t, !0);
                    }
                },
                {
                    key: "trigger",
                    value: function value(e27) {
                        var t15 = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                        o(this.apiEvents, function(t, s) {
                            var l = t.evt, o = t.once, r = t.callback;
                            l == e27 && (r(i), o && n.push(s));
                        }), n.length && o(n, function(e) {
                            return t15.apiEvents.splice(e, 1);
                        });
                    }
                },
                {
                    key: "clearAllEvents",
                    value: function value() {
                        this.apiEvents.splice(0, this.apiEvents.length);
                    }
                },
                {
                    key: "version",
                    value: function value() {
                        return "3.1.0";
                    }
                }
            ]), e22;
        }();
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            }, t = new te(e);
            return t.init(), t;
        };
    });



    var $7933ef5638c5beeb$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
        "use strict";
        function $7933ef5638c5beeb$export$2e2bcd8739ae039() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $7933ef5638c5beeb$export$2e2bcd8739ae039);
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($7933ef5638c5beeb$export$2e2bcd8739ae039, [
            {
                key: "init",
                value: function init() {
                    (/*@__PURE__*/$parcel$interopDefault($becc526b844fb2b9$exports))({
                        touchNavigation: true,
                        loop: true,
                        autoplayVideos: true
                    });
                }
            }
        ]);
        return $7933ef5638c5beeb$export$2e2bcd8739ae039;
    }();



    var $618e5adeab757f85$exports = {};

    !function(e, t) {
        "object" == typeof $618e5adeab757f85$exports && "object" == "object" ? $618e5adeab757f85$exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof $618e5adeab757f85$exports ? $618e5adeab757f85$exports.counterUp = t() : e.counterUp = t();
    }(self, function() {
        return (function() {
            var e1 = {
                d: function(t, n) {
                    for(var o in n)e1.o(n, o) && !e1.o(t, o) && Object.defineProperty(t, o, {
                        enumerable: !0,
                        get: n[o]
                    });
                },
                o: function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                },
                r: function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                }
            }, t1 = {
            };
            e1.r(t1), e1.d(t1, {
                "default": function() {
                    return n1;
                },
                divideNumbers: function() {
                    return r1;
                }
            });
            var n1 = function(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                };
                var tmp = t.action, n = tmp === void 0 ? "start" : tmp, tmp1 = t.duration, i = tmp1 === void 0 ? 1000 : tmp1, tmp2 = t.delay, u = tmp2 === void 0 ? 16 : tmp2;
                if ("stop" === n) return void o1(e);
                if (o1(e), !/[0-9]/.test(e.innerHTML)) return;
                var l = r1(e.innerHTML, {
                    duration: i || e.getAttribute("data-duration"),
                    delay: u || e.getAttribute("data-delay")
                });
                e._countUpOrigInnerHTML = e.innerHTML, e.innerHTML = l[0] || "&nbsp;", e.style.visibility = "visible";
                var c = function n1() {
                    e.innerHTML = l.shift() || "&nbsp;", l.length ? (clearTimeout(e.countUpTimeout), e.countUpTimeout = setTimeout(c, u)) : e._countUpOrigInnerHTML = void 0;
                };
                e.countUpTimeout = setTimeout(c, u);
            }, o1 = function(e) {
                clearTimeout(e.countUpTimeout), e._countUpOrigInnerHTML && (e.innerHTML = e._countUpOrigInnerHTML, e._countUpOrigInnerHTML = void 0), e.style.visibility = "";
            }, r1 = function(e5) {
                var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                };
                var tmp = t4.duration, n3 = tmp === void 0 ? 1000 : tmp, tmp3 = t4.delay, o = tmp3 === void 0 ? 16 : tmp3, r = n3 / o, i = e5.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/), u = [];
                for(var e2 = 0; e2 < r; e2++)u.push("");
                for(var e3 = 0; e3 < i.length; e3++)if (/([0-9.][,.0-9]*[0-9]*)/.test(i[e3]) && !/<[^>]+>/.test(i[e3])) {
                    var t2 = i[e3];
                    var n2 = $5fc5c89fea7cc5a5$export$2e2bcd8739ae039(t2.matchAll(/[.,]/g)).map(function(e) {
                        return {
                            char: e[0],
                            i: t2.length - e.index - 1
                        };
                    }).sort(function(e, t) {
                        return e.i - t.i;
                    });
                    t2 = t2.replace(/[.,]/g, "");
                    var o2 = u.length - 1;
                    for(var e4 = r; e4 >= 1; e4--){
                        var i1 = parseInt(t2 / r * e4, 10);
                        i1 = n2.reduce(function(e, param) {
                            var t = param["char"], n = param.i;
                            return e.length <= n ? e : e.slice(0, -n) + t + e.slice(-n);
                        }, i1.toString()), u[o2--] += i1;
                    }
                } else for(var t3 = 0; t3 < r; t3++)u[t3] += i[e3];
                return u[u.length] = e5.toString(), u;
            };
            return t1;
        })();
    });


    var $d80846c028ac8685$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
        "use strict";
        function $d80846c028ac8685$export$2e2bcd8739ae039() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $d80846c028ac8685$export$2e2bcd8739ae039);
            this.attributes = {
                "class": '.card-title_type_bullet span'
            };
            this.bullets = document.querySelectorAll("".concat(this.attributes["class"]));
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($d80846c028ac8685$export$2e2bcd8739ae039, [
            {
                key: "init",
                value: function init() {
                    if (!this.bullets) return;
                    var callback = function(entries) {
                        entries.forEach(function(entry) {
                            var el = entry.target;
                            if (entry.isIntersecting) (/*@__PURE__*/$parcel$interopDefault($618e5adeab757f85$exports))(el, {
                                duration: 2500,
                                delay: 100
                            });
                        });
                    };
                    var IO = new IntersectionObserver(callback, {
                        threshold: 1
                    });
                    this.bullets.forEach(function(bullet) {
                        IO.observe(bullet);
                    });
                }
            }
        ]);
        return $d80846c028ac8685$export$2e2bcd8739ae039;
    }();



    var $86bc1c2dc4aec951$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
        "use strict";
        function $86bc1c2dc4aec951$export$2e2bcd8739ae039() {
            $f389dca33e92ce8b$export$2e2bcd8739ae039(this, $86bc1c2dc4aec951$export$2e2bcd8739ae039);
        }
        $d27ee44a68134450$export$2e2bcd8739ae039($86bc1c2dc4aec951$export$2e2bcd8739ae039, [
            {
                key: "init",
                value: function init() {
                    var menuLiParentSelectors = document.querySelectorAll('.d-menu__li_parent');
                    if (!menuLiParentSelectors) return;
                    //добавляем иконку-ссылку для переход во внутреннее меню
                    menuLiParentSelectors.forEach(function(element) {
                        element.insertAdjacentHTML('afterbegin', "<span class=\"d-menu__mobile-next-icon\"></span>");
                    });
                    //по клику на бек-ссылке - закрываем текущее меню (вовзращаемся обратно)
                    var mobileNextIconsSelectors = document.querySelectorAll('.d-menu__mobile-next-icon');
                    mobileNextIconsSelectors.forEach(function(element) {
                        element.addEventListener('click', function(event) {
                            var elementParent = event.target.parentNode;
                            var innerUl = elementParent.querySelector('.d-menu__inner');
                            innerUl.classList.add('d-menu__inner_active');
                        });
                    });
                    //добавляем иконку-ссылку для возвращения в меню выше
                    var menuUlParentSelectors = document.querySelectorAll('.d-menu__li_parent > .d-menu__inner > .d-menu__ul');
                    menuUlParentSelectors.forEach(function(element) {
                        element.insertAdjacentHTML('afterbegin', "<span class=\"d-menu__mobile-back-icon\"></span>");
                    });
                    //по клику на бек-ссылке - закрываем текущее меню (вовзращаемся обратно)
                    var mobileBackIconsSelectors = document.querySelectorAll('.d-menu__mobile-back-icon');
                    mobileBackIconsSelectors.forEach(function(element) {
                        element.addEventListener('click', function(event) {
                            event.target.closest('.d-menu__inner').classList.remove('d-menu__inner_active');
                        });
                    });
                }
            }
        ]);
        return $86bc1c2dc4aec951$export$2e2bcd8739ae039;
    }();


    new $0f648cb70eeeadb0$export$2e2bcd8739ae039().init();
    new $8ea1419716a41fc2$export$2e2bcd8739ae039().init();
    new $8ec44c3915977751$export$2e2bcd8739ae039().init();
    new $89e21ac637a2a892$export$2e2bcd8739ae039().init();
    new $7933ef5638c5beeb$export$2e2bcd8739ae039().init();
    new $d80846c028ac8685$export$2e2bcd8739ae039().init();
    new $86bc1c2dc4aec951$export$2e2bcd8739ae039().init();
    if (null) null.accept();

})();
/* End */
;; /* /local/templates/main/assets/bundle.min.js?1654336468922678*/

//# sourceMappingURL=template_93ab829b2b9e47b08d44edda6a6c50d7.map.js