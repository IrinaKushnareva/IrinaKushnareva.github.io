// module.exports = function(grunt) {
//
//   grunt.initConfig({
//     concat: {
//        js_files: {
//         src: ['js/src/*.js'],
//         dest: 'js/dest/script.min.js',
//         options: {
//           separator: ';'
//         }
//       },
//       // css_files: {
//       //   src: ['css/src/*.css'],
//       //   dest: 'css/dest/style.min.css',
//       //   options: {
//       //     separator: ''
//       //   }
//       // }
//     },
//     uglify: {
//       js_files: {
//         src: ['js/dest/script.min.js'],
//         dest: 'js/dest/script.min.js'
//       }
//     },
//     sass: {
//       dist: {
//         files: [{
//           expand: true,
//           cwd: 'styles',
//           src: ['*.scss'],
//           dest: 'styles',
//           ext: '.css'
//         }]
//       }
//     },
//     watch: {
//       sass: {
//         // We watch and compile sass files as normal but don't live reload here
//         files: ['styles/*.scss'],
//         tasks: ['sass'],
//       }
//     }
//   });
//
//   grunt.loadNpmTasks('grunt-contrib-concat');
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//   grunt.loadNpmTasks('grunt-contrib-sass');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//
//     grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);
//
// };
