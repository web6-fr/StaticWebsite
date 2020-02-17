module.exports = function (grunt, options) {
  return {
	  dev: {
	    options: {
	      map: true,
	      processors: [
	        require('autoprefixer')({
	          browserlist: ["last 2 version", "> 2%"],
	          cascade: false,
	          add: true,
	          remove: false
	        })
	      ]
	    },
	    src: '<%= tmpPath %>/assets/css/layout.css',
	    dest: '<%= tmpPath %>/assets/css/layout.css'
	  },
	  dist: {
	    options: {
	      processors: [
	        require('autoprefixer')({
	          browserlist: ["> 5% in FR", "ie >= 8", "last 2 versions"],
	          cascade: false,
	          add: true,
	          remove: false
	        }),
	        require('cssnano')()
	      ]
	    },
	    src: '<%= tmpPath %>/assets/css/layout.purified.css',
	    dest: '<%= distPath %>/assets/css/layout.css'
	  }
	};
};
