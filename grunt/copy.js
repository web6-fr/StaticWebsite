module.exports = function (grunt, options) {
  return {
    img: {
      src: 'img/**',
      dest: '<%= tmpPath %>/',
      expand: true,
      cwd: '<%= devPath %>/'
    },
    fonts: {
      src: 'fonts/**',
      dest: '<%= distPath %>/assets/',
      expand: true,
      cwd: '<%= devPath %>/assets/'
    }
  };
};