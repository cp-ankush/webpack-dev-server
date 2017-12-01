# webpack-dev-server
webpack-dev-server basic implementation and points to notice.

install the webpack and other dependencies on your system.
command to run: webpack-dev-server
server-url is localhost:8080/webpack-dev-server or localhost:8080

------------------------------------------BASIC configuration-----------------------------------------------

- "webpack" is command to run "webpack.config.js" file.
- if "webpack.config.js" is not present in the directory, then we need to mention actions in command itself.
    eg: webpack ./app.js bundle.js (it will create bundle.js( write in disk, we can see in the directory) from app.js)
- But with "webpack" we can only do the actions, need to open the root file(index.html) manually
- use webpack --watch to continuously check the changes in the files.
- or use "watch: true" in config file.
- "webpack-dev-server" command create server for you and read index.html file automatically.
- "webpack-dev-server" command run the configuration in "webpack.config.js".  
- it is checking for the changes in the file by default, no need to give "watch: true" or "--watch" in "webpack.config.js" file.
- it is not writting output file(bundle.js) to the disk, rather reading from the memory.
- so, it won't create "bundle.js" file to the disk, we still need to run webpack to write it on the disk.
- server-url is localhost:8080/webpack-dev-server,
	here "app is ready" status is displayed at the top of the page and
	hot-load is enabled(on changing anything, it will be reflected automatically)
- to disable hot-reload and "app is ready" status, remove "/webpack-dev-server" from url.
- to keep hot-reload enable and remove only "app is ready" status, run command "webpack-dev-server --inline"  
- load multiple files with webpack by giving array of files in entry property in "webpack.config.js" file.

------------------------------------------configuration one level up-----------------------------------------------

Webpack loaders and preloaders:
- Loaders allows you to preprocess the files as you require() or load them.
- Loaders are kind of like "tasks" in other build tools.
- Loaders can transform files from one language to another ("coffeeScript to js" or "inline images as data urls").
- "npm init" to create package.json file.

-----------------------------------------Production configuration----------------------------------------------------

- in production, run the "webpack-dev-server" with flag -p(webpack-dev-server -p) to minify the code.(it will run the uglify.js)
- strip-loader is a loader to strip the arbitary function from the production code.( like console.log() )
