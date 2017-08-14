module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        pug: {
            compile: {
                options: {
                    pretty: true,
                    nospawn: false
                },

                files: {
                    'dist/index.html' : 'src/index.pug'
                }
            }
        },

        sass: {
            src: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/css/index.css' : 'src/sass/style.sass'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/index.css' : 'src/sass/style.sass'
                }
            }
        },


        watch: {
            html: {
                files: 'src/**/*.pug',
                tasks: ['pug']
            },

            css: {
                files: 'src/sass/**/*.sass',
                tasks: ['sass']
            },

            options: {
                livereload: true,
                nospawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ["pug", "sass", "watch"]);
};
