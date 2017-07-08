module.exports = function(grunt) {

    // Initialize the Grunt configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configure the concat task
        concat: {
            js: {
                src: [
                    'src/chart/bar.js'
                ],
                dest: 'dist/bar.js'
            }
        },

        // Uglify Configuration
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'dist/bar.min.js': ['dist/bar.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('default', 'build');
};
