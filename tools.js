/// tools.js
document.addEventListener("keydown", function (e) {
    if (e.key == "~" && e.ctrlKey) {
        (function() {
            var script = document.createElement('script');
            script.src = '//cdn.jsdelivr.net/npm/eruda';
            document.body.appendChild(script);
            script.onload = function() { eruda.init(); };
        })();
    }
});
