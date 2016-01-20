(function() {
  function completeAssign(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }
  
    sources.forEach(function (source) {
      var descriptors = Object.keys(source).reduce(function (descriptors, key) {
        descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
        return descriptors;
      }, {});
  
      // by default, Object.assign copies enumerable Symbols too
      Object.getOwnPropertySymbols(source).forEach(function (sym) {
        var descriptor = Object.getOwnPropertyDescriptor(source, sym);
        if (descriptor.enumerable) {
          descriptors[sym] = descriptor;
        }
      });
      Object.defineProperties(target, descriptors);
    });
    return target;
  }
  
  function Openable(spec) {
    var isOpen = spec.isOpen;
    var that = {
      get isOpen() {
        return isOpen + ' is the answer';
      }
    };
  
    that.open = function(callback) {
      callback.call(that);
      isOpen = true;
    };
  
    that.close = function(callback) {
      callback.call(that);
      isOpen = false;
    };
  
    // Object.defineProperties(that, {
    //   isOpen: {
    //     enumerable: true,
    //     get: function() {
    //       return isOpen + ' is the answer';
    //     }
    //   }
    // });
  
    return that;
  }
  
  function Hideable(spec) {
    var isHidden = spec.isHidden;
    var that = {
      get isHidden() {
        return isHidden + ' is the answer';
      }
    };
  
    that.hide = function(callback) {
      callback.call(that);
      isHidden = true;
    };
  
    that.show = function(callback) {
      callback.call(that);
      isHidden = false;
    };
  
    // Object.defineProperties(that, {
    //   isHidden: {
    //     enumerable: true,
    //     get: function() {
    //       return isHidden + ' is the answer';
    //     }
    //   }
    // });
  
    return that;
  }
  
  
  function Button(spec) {
    return completeAssign({},
      Openable(spec),
      Hideable(spec));
  }
  
  
  var myButton = Button({
    isOpen: false,
    isHidden: false
  });
}());
