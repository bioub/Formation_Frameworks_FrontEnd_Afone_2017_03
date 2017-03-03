module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.initConfig({
    less: {
      dev: {
        files: {
          'css/bootstrap-custom.css': 'css/bootstrap-custom.less'
        }
      }
    },
    cssmin: {
      prod: {
        files: {
          'css/bootstrap-custom.min.css': ['css/bootstrap-custom.css']
        }
      }
    }
  });

  grunt.registerTask('build', [
    'less:dev',
    'cssmin:prod'
  ]);

  /*
  grunt.registerMultiTask('hello', function() {
    console.log('Hello');
  });
  */
};
