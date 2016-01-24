module.exports = function (grunt, options) {
  return {
    options: {
      changefreq: 'weekly',
      dest: '<%= distPath %>',
      filename: 'sitemap',
      siteRoot: '<%= pkg.homepage %>',
      stripIndex: true,
      lastMod: grunt.template.today('yyyy-mm-dd\'T\'HH:MM:ss.000\'Z\''),
      priority: 0.5
    },
    dist: {
      files: [
        {
          expand: true,
          cwd: '<%= distPath %>',
          src: '**/*.html'
        }
      ]
    }
  };
};