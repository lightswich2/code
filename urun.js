// auto.js
(function() {
  alert("loaded");
  var script = document.createElement('script');
  script.src = '//cdn.jsdelivr.net/npm/eruda';
  document.body.appendChild(script);
  alert("2nd load");
  script.onload = function() {
    eruda.init();
  };
})();
