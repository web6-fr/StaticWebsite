module.exports = function (grunt, options) {
  return {
    dev: {
      files: [
        { src: 'fonts/**', dest: '<%= tmpPath %>/assets/', expand: true, cwd: '<%= devPath %>/assets/' },
        { src: 'img/**', dest: '<%= tmpPath %>/', expand: true, cwd: '<%= devPath %>/' }
      ]
    },
    dist: {
      files: [
        { src: 'fonts/**', dest: '<%= distPath %>/assets/', expand: true, cwd: '<%= devPath %>/assets/' }
      ]
    }
  };
};