/*global module:false*/

module.exports = function(grunt) {

  // Grunt task time tracking
  require('time-grunt')(grunt);

  // Automatic config loading
  require('load-grunt-config')(grunt, {
      data: {
        pkg: grunt.file.readJSON('package.json'),
        devPath: 'src',
        distPath: 'dist',
        tmpPath: '.tmp'
      }
  });

  // Default task.
  grunt.registerTask('default', [
    'clean', 
    'ejs:dist',
    'concat:dist',
    'sass:dist',
    'postcss:dev',
    'copy:dev',
    'connect:dev',
    'watch'
  ]);

  // Dist task
  grunt.registerTask('dist', [
    'clean', 
    'ejs:dist',
    'htmlmin:dist',
    'concat:dist',
    'uglify:dist',
    'sass:dist',
    'purifycss',
    'postcss:dist',
    'copy:dist',
    'imagemin:dist',
    'xml_sitemap:dist',
    'connect:dist'
  ]);

};
