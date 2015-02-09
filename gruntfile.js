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
    }

  });

  grunt.loadNpmTasks("grunt-grunticon");

  grunt.registerTask("default", ["grunticon"]);

};
