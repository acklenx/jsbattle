module.exports = {
  engine: {
    entry: "./app/engine/entry.js",
    sources: ['app/engine/**/*.js'],
    test: ['test/engine/**/*.test.js'],
    spritesheets: ['resources/spritesheets/**/*.*'],
    lib: [
      'node_modules/sat/SAT.js',
      'node_modules/seedrandom/seedrandom.js'
    ],
  },
  server: {
    sources: ['app/server/**/*'],
  },
  webpage: {
    sources: ['app/webpage/sources/**/*'],
    static: ['app/webpage/static/**/*'],
    entry: './app/webpage/sources/entry.js',
    test: ['test/webpage/**/*.test.js'],
    lib: [
      'node_modules/sillyname/index.js'
    ],
    externalLib: [
     'node_modules/pixi.js/dist/pixi.min.js',
     'node_modules/jquery/dist/jquery.min.js',
     'node_modules/bootstrap/dist/**/*',
     'node_modules/react/umd/**/*',
     'node_modules/react-dom/umd/**/*',
     'node_modules/codemirror/lib/**/*',
     'node_modules/codemirror/mode/javascript/**/*',
     'node_modules/codemirror/addon/hint/**/*',
     'node_modules/codemirror/theme/ambiance.css',
     'node_modules/core-js/client/core.js',
     'node_modules/popper.js/dist/umd/**/*'
    ]
  },
  docs: {
    sources: ['docs/**/*'],
    apiDist: 'docs/dev_guide',
    plantuml: {
      sources: 'docs/puml/**/*.puml',
      target: 'docs/img/puml/'
    }
  },
  tanks: {
    resourcesBase: 'app/tanks/',
    resources: [
      'app/tanks/*.tank.js',
      'app/tanks/index.json',
      'app/tanks/lib/codeWorker.js'
    ],
    test: ['test/tanks/**/*.test.js'],
    entry: "./app/tanks/lib/tank.js",
    sources: ['app/tanks/lib/**/*.js'],
    lib: ['node_modules/seedrandom/seedrandom.js'],
  },
  dist: 'dist/',
  tmp: 'tmp/'
};
