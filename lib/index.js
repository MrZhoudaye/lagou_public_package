(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "axios"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("axios"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.axios);
    global.animalApi = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _axios) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _axios = _interopRequireDefault(_axios);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const getCat = () => {
    return _axios.default.get('https://aes.random.cat/meow').then(res => {
      const imageSrc = res.data.file;
      const text = 'CAT';
      return {
        imageSrc,
        text
      };
    });
  };

  const getDog = () => {
    console.log(_axios.default);
    return _axios.default.get('https://random.dog/woof.json').then(res => {
      const imageSrc = res.data.file;
      const text = 'DOG';
      return {
        imageSrc,
        text
      };
    });
  };

  const getGoat = () => {
    return _axios.default.get('http://placegoat.com/200').then(res => {
      const imageSrc = res.data.file;
      const text = 'GOAT';
      return {
        imageSrc,
        text
      };
    });
  };

  var _default = {
    getCat,
    getDog,
    getGoat
  };
  _exports.default = _default;
});