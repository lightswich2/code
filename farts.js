/// farts.js
document.addEventListener("keydown", function (e) {
    if (e.key === "~" && e.ctrlKey) {
        alert("Ctrl + ~ detected. Loading Eruda...");
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/eruda';
        document.body.appendChild(script);
        script.onload = function() {
            alert("Eruda script loaded.");
            eruda.init();
            alert("Eruda initialized.");
        };
        script.onerror = function() {
            alert("Failed to load Eruda script.");
        };
    }
});
