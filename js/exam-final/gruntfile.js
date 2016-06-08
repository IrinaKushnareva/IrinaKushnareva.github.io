module.exports = function(grunt) {

  grunt.initConfig({
      concat: {
         js_files: {
          src: ['js/*.js'],
          dest: 'js/dist/allscript.min.js',
          options: {
            separator: ';'
          }
        }
        },
    uglify: {
      my_target: {
        files: {
        'js/dist/allscript.min.js': 'js/dist/allscript.min.js',
      }
    }
  },
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',  //folder
        src: ['*.scss'],
        dest: 'styles',  //folder with css
        ext: '.css'
      }]
    }
  },
  cssmin: {
    target: {
      files: {
        'styles/style.min.css': 'styles/style.css',
        'styles/styleIE8.min.css': 'styles/styleIE8.css'
    }
  }
},
    watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/*.scss'],
      tasks: ['sass'],
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);
};
