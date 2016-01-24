module.exports = function (grunt, options) {
  return {
	  dist: {
	    options: {
	    	baseUrl: '/'
	    },
	    cwd: '<%= devPath %>/',
	    src: ['**/*.ejs', '!partials/**/*'],
	    dest: '<%= tmpPath %>/',
	    expand: true,
	    ext: '.html',
	  }
	};
};