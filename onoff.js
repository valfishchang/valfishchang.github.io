AFRAME.registerComponent('onoff', {
    init: function () {
        var url = 'https://poly.pizza/m/66d-mKAgF17';
        
        this.el.addEventListener('click', function () {
          window.location.href = url;
        });
        console.log("init complete");
    }
  });