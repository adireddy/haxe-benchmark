module.exports = function (grunt) {

	grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

		haxe: {
			project: {
				hxml: "build.hxml"
			}
		},

		browserify: {
			pixi: {
				src: [],
				dest: "libs/benchmark.dev.js",
				options: {
					require: ["benchmark"],
					browserifyOptions: {
						standalone: "Benchmark"
					}
				}
			}
		},

		uglify: {
			options: {
				compress: {
					drop_console: true
				}
			},
			target: {
				files: {
					"libs/benchmark.min.js": ["libs/benchmark.dev.js"]
				}
			}
		},

		exec: {
			cleanup: "rm ./libs/benchmark.dev.js"
		},

		zip: {
			"benchmark.zip": ["src/**", "haxelib.json", "README.md"]
		}
	});

	grunt.loadNpmTasks("grunt-haxe");
	grunt.loadNpmTasks("grunt-npm-install");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-zip");
	grunt.loadNpmTasks("grunt-exec");
	grunt.registerTask("default", ["haxe", "npm-install:benchmark", "browserify", "uglify", "exec"]);
};