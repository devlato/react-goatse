var React = require('react');
var enzyme = require('enzyme');
var Promise = require('bluebird');

var Component = require('../src/Component');


var shallow = enzyme.shallow;


function Page(wrapper) {
  this.wrapper = function() {
    return wrapper;
  };

  this.overlay = function() {
    return wrapper.find('.goatse');
  };

  this.image = function() {
    return wrapper.find('.goatse__content');
  };
};


function createComponent(props) {
  var componentProps = props || {};

  var component = React.createElement(Component, componentProps);
  var wrapper = shallow(component);
  var page = new Page(wrapper);

  return {
    page: page,
    wrapper: wrapper
  };
}


describe('<Goatse />', function() {
  it('Should render', function() {
    var created = createComponent();

    var wrapper = created.wrapper;
    var page = created.page;

    expect(page.wrapper().length).toEqual(1);
  });


  it('Should render goatse with timeout', function() {
    var created = createComponent({
      keys: ['t', 'e', 's', 't'],
      timeout: 300
    });

    var wrapper = created.wrapper;
    var page = created.page;

    return new Promise(function(resolve) {
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'e'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 's'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));

      setTimeout(function() {
        expect(page.overlay().length).toEqual(1);
        expect(page.image().length).toEqual(1);
        resolve();
      }, 200);
    }).then(function() {
      setTimeout(function() {
        expect(page.overlay().length).toEqual(0);
        expect(page.image().length).toEqual(0);
      }, 400);
    });
  });


  it('Should render goatse without timeout', function() {
    var created = createComponent({
      keys: ['t', 'e', 's', 't']
    });

    var wrapper = created.wrapper;
    var page = created.page;

    return new Promise(function(resolve) {
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'e'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 's'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));

      setTimeout(function() {
        expect(page.overlay().length).toEqual(1);
        expect(page.image().length).toEqual(1);
        resolve();
      }, 200);
    }).then(function() {
      setTimeout(function() {
        expect(page.overlay().length).toEqual(1);
        expect(page.image().length).toEqual(1);
      }, 400);
    });
  });


  it('Should render goatse with timeout simultaneously', function() {
    var created = createComponent({
      keys: ['t', 'e', 's', 't'],
      simultaneous: true,
      timeout: 300
    });

    var wrapper = created.wrapper;
    var page = created.page;

    return new Promise(function(resolve) {
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'e'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 's'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));

      setTimeout(function() {
        expect(page.overlay().length).toEqual(1);
        expect(page.image().length).toEqual(1);
        resolve();
      }, 200);
    }).then(function() {
      setTimeout(function() {
        expect(page.overlay().length).toEqual(0);
        expect(page.image().length).toEqual(0);
      }, 400);
    });
  });


  it('Should render goatse without timeout simultaneously', function() {
    var created = createComponent({
      keys: ['t', 'e', 's', 't'],
      simultaneous: true,
      timeout: 300
    });

    var wrapper = created.wrapper;
    var page = created.page;

    return new Promise(function(resolve) {
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 's'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'e'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));
      document.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));

      setTimeout(function() {
        expect(page.overlay().length).toEqual(1);
        expect(page.image().length).toEqual(1);
        resolve();
      }, 200);
    }).then(function() {
      setTimeout(function() {
        expect(page.overlay().length).toEqual(1);
        expect(page.image().length).toEqual(1);
      }, 400);
    });
  });
});
