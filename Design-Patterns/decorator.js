Function.prototype.before = function (beforeFn) {
  const _this = this;
  return function () {
    beforeFn.apply(this, arguments);
    return _this.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFn) {
  const _this = this;
  return function () {
    const ret = _this.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  };
};

function test() {
  console.log('11111');
}

const test1 = test
  .before(() => {
    console.log('00000');
  })
  .after(() => {
    console.log('22222');
  });
test1();
