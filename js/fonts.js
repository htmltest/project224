window.onload = function() {
    var html = document.documentElement;

    var fontsfile = document.createElement('link');
    fontsfile.href = pathTemplate + 'css/fonts.css';
    fontsfile.rel = 'stylesheet';
    document.head.appendChild(fontsfile);

    if (sessionStorage.fontsLoaded) {
        html.classList.add('fonts-loaded');
        window.setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 500);
    } else {
        var script = document.createElement('script');
        script.src = pathTemplate + 'js/fontfaceobserver.js';
        script.async = true;

        script.onload = function () {
            var Inter400 = new FontFaceObserver('Inter', {
                weight: 'normal'
            });
            var Inter500 = new FontFaceObserver('Inter', {
                weight: '500'
            });
            var Inter600 = new FontFaceObserver('Inter', {
                weight: '600'
            });
            var Inter700 = new FontFaceObserver('Inter', {
                weight: 'bold'
            });
            var Manrope500 = new FontFaceObserver('Manrope', {
                weight: 'normal'
            });
            var Manrope600 = new FontFaceObserver('Manrope', {
                weight: '600'
            });

            Promise.all([
                Inter400.load(),
                Inter500.load(),
                Inter600.load(),
                Inter700.load(),
                Manrope500.load(),
                Manrope600.load()
            ]).then(function () {
                html.classList.add('fonts-loaded');
                sessionStorage.fontsLoaded = true;
                window.setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 500);
            });
        };
        document.head.appendChild(script);
    }
}