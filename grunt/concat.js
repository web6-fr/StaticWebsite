module.exports = function (grunt, options) {
  return {
    options: {
      separator: ';',
      sourceMap: true
    },
    dist: {
      files: {
        '<%= tmpPath %>/assets/js/head.js': ['<%= devPath %>/assets/js/head.js'],
        '<%= tmpPath %>/assets/js/layout.js': ['<%= devPath %>/assets/js/layout.js']
      }
    }
  };
};