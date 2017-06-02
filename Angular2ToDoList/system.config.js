
(function (global) {
    var plugin = 'bootstrap'; // js-native / vex
    var map = {
        'app': '/app',
        '@angular': '/node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': '/node_modules/rxjs',

        'angular2-modal': 'node_modules/angular2-modal'
    },
    packages = {
        'app': {
            main: './main.js',
            defaultExtension: 'js'
        },
        'angular2-in-memory-web-api': {
            main: './index.js',
            defaultExtension: 'js'
        },
        'rxjs': { defaultExtension: 'js' },

        'angular2-modal': { defaultExtension: 'js', main: 'bundles/angular2-modal.umd' }
    },


    ngPackageNames = ['common', 'compiler', 'core', 'http', 'platform-browser', 'platform-browser-dynamic', 'router', 'forms'];
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName + '.umd.min.js',
            defaultExtension: 'js'
        }
    }
    
    ngPackageNames.forEach(packUmd);
    var config = { map: map, packages: packages };

    

    System.config(config);

})(this);