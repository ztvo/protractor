exports.config = {
    framework: 'jasmine',
    capabilities: {
      browserName: 'chrome'
    },
    specs: [
      //'spec.js',
      'specMcDonald.js'
    ],
    directConnect: true,
  
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
  };                                                                  