/// auto.js
document.addEventListener("keydown", function (e) {
    if (e.key === "~" && e.ctrlKey) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/eruda';
        document.body.appendChild(script);
        script.onload = function() {
            eruda.init({defaults: {displaySize: 55, theme: 'Night Owl'}});
        };
    }
});
