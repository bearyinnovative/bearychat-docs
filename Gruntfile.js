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
      tutorial: {
        options: {
          highlight: false
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'tutorials/markdown',      // Src matches are relative to this path.
            src: ['**/*.md'], // Actual pattern(s) to match.
            dest: 'dist/tutorials/html',   // Destination path prefix.
            ext: '.html',   // Dest filepaths will have this extension.
          },
        ],
      }
    },

    imagemin: {
      tutorial: {
        files: [{
          expand: true,
          cwd: 'tutorials/image',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: 'dist/tutorials/image'
        }]
      }
    },

  rsync: {
    options: {
      args: ["--verbose"],
        recursive: true
      },
      stage: {
        options: {
          src: "dist/*",
          dest: "/var/www/bearychat-docs",
          host: "deploy@stage.bearychat.com",
        }
      },
      prod: {
        options: {
          src: "dist/*",
          dest: "/var/www/bearychat-docs",
          host: "deploy@bearychat.com",
        }
      }
    }
  });

  grunt.registerTask('tutorial', [
    'imagemin:tutorial',
    'marked:tutorial'
  ]);
};
