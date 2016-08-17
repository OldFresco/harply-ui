// Karma configuration
// Generated on Thu Jun 16 2016 11:08:35 GMT+0100 (GMT Summer Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // plugins needed for karma to work
        plugins: ['karma-systemjs', 'karma-jasmine', 'karma-chrome-launcher'],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['systemjs', 'jasmine'],

        // need to set up SystemJS config for Karma
        systemjs: {
            configFile: 'systemjs.config.js',

            includeFiles: [
                'node_modules/reflect-metadata/Reflect.js',
                'node_modules/zone.js/dist/zone.js',
                'karma-test-shim.js',

            ],

            serveFiles: [
                'node_modules/@angular/**/*.js',
            ],

            config: {
                paths: {
                    'systemjs': 'node_modules/systemjs/dist/system.src.js',
                    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.src.js',
                    'typescript': 'node_modules/typescript/lib/typescript.js',
                    'traceur': '/node_modules/traceur/dist/commonjs/traceur.js',
                    'reflect-metadata': 'node_modules/reflect-metadata/Reflect.js',
                    '@angular': '/node_modules/@angular/**/*.js',
                }
            },

        },


        // list of files / patterns to load in the browser
        files: [
            // paths loaded by Karma
            //'node_modules/es6-shim/es6-shim.js',

            'node_modules/reflect-metadata/Reflect.js',

            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Zone.js dependencies
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',
            'karma-test-shim.js',

            // RxJs.
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            { pattern: 'karma-test-shim.js', included: true, watched: true },
            { pattern: 'systemjs.config.js', included: true, watched: true },

            // paths loaded via module imports
            // Angular itself
            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },
            { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true },

            // paths loaded via module imports
            { pattern: 'src/app/**/*.js', included: false, watched: true },

            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            { pattern: 'src/app/**/*.html', included: false, watched: true },
            { pattern: 'index.html', included: false, watched: true },
            { pattern: 'css/**/*.css', included: false, watched: true },

            // paths to support debugging with source maps in dev tools
            { pattern: 'src/app/**/*.ts', included: false, watched: false },
            { pattern: 'src/app/**/*.js.map', included: false, watched: false },

            { pattern: 'src/app/**/*.spec.js', included: false, watched: false }
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            "/app/": "/base/src/app/"
        },


        // list of files to exclude
        exclude: [
            'lib/rxjs/tools/*.js',
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}