'use strict';

module.exports = function(config) {
    config.set({

        basePath: '.',
        frameworks: ['jasmine'],

        files: [
            // Paths loaded by Karma
            { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true },
            { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true },
            { pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: true },
            { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true },
            { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true },
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },

            // Paths loaded via module imports
            { pattern: 'src/app/**/*.js', included: false, watched: true },

            // Paths to support debugging with source maps in dev tools
            { pattern: 'src/app/**/*.ts', included: false, watched: true },
            { pattern: 'src/app/**/*.js.map', included: false, watched: false }
        ],

        // Proxied base paths
        proxies: {
            // Required for component assests fetched by Angular's compiler
            '/app/': '/src/app/'
        },

        port: 9876,

        logLevel: config.LOG_INFO,

        colors: true,

        autoWatch: true,

        browsers: ['PhantomJS', 'Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        // Coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'src/**/!(*spec).js': ['coverage']
        },

        coverageReporter: {
            reporters: [
                { type: 'json', subdir: '.', file: 'coverage-final.json' }
            ]
        },

        singleRun: true
    });
};