AFRAME.registerComponent('onoff', {
  schema: {
    url: {default: 'http://google.com'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener('click', function () {
      window.location.href = data.url;
    });
  }
});