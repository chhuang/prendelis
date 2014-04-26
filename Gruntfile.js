module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          cleancss: true,
          dumpLineNumbers: true
        },
        files: {
          'assets/dist/css/core.css': 'assets/src/css/core.less',
        }
      }
    },
    
    uglify: {
      dev: {
        files: {
          'assets/dist/js/core.js': 'assets/src/js/core.js',
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['assets/**/*.less'],
        tasks: ['less:dev']
      },
      js: {
        files: ['assets/**/*.js'],
        tasks: ['uglify:dev']
      },
      html: {
        files: ['*.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:dev']);
};