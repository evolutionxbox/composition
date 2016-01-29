function Openable(spec) {
  let { isOpen } = spec;
  let that = {
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

  return that;
}

function Hideable(spec) {
  let { isHidden } = spec;
  let that = {
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

  return that;
}


function Button(spec) {
  let { isOpen, open, close } = Openable(spec),
      { isHidden, hide, show } = Hideable(spec);

  return {
    isOpen,
    open,
    close,
    isHidden,
    hide,
    show
  };
  // return completeAssign({},
  //   Openable(spec),
  //   Hideable(spec));
}


var myButton = Button({
  isOpen: false,
  isHidden: false
});