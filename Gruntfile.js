'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    marked: {
      dist: {
        options: {
          highlight: false
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'tutorials/markdown',      // Src matches are relative to this path.
            src: ['**/*.md'], // Actual pattern(s) to match.
            dest: 'dist/html',   // Destination path prefix.
            ext: '.html',   // Dest filepaths will have this extension.
          },
        ],
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'tutorials/image',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: 'dist/image'
        }]
      }
    },
  });

  grunt.registerTask('default', [
    'imagemin:dist',
    'marked:dist'
  ]);
};
