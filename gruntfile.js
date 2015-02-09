module.exports = function(grunt) {

  grunt.initConfig({

    grunticon: {
      icons: {
        files: [{
          expand: true,
          cwd: "svg/",
          src: ["*.svg"],
          dest: "fallbacks/"
        }]
      }
    },

    svgstore: {
      options: {
        prefix : 'icon-', // This will prefix each ID
        svg: {
          viewBox : '0 0 50 50',
          style: "display: none;"
        },
        cleanup: true,
        formatting : {
          indent_size : 2
        }
      },
      default : {
        files: {
          'svgdefs.svg': ['svg/*.svg'],
        }
      }
    }

  });

  grunt.loadNpmTasks("grunt-grunticon");
  grunt.loadNpmTasks("grunt-svgstore");

  grunt.registerTask("default", ["svgstore","grunticon"]);

};
