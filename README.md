# MOTW Workshop: Boilerplate Project

This repository is the boilerplate project for Musicking on the Web workshop. The MOTW workshop 2015 will be hosted by [Google Campus Seoul](https://www.campus.co/seoul/ko) and be a part of [Music 220A](https://ccrma.stanford.edu/courses/220a/) class at [CCRMA](https://ccrma.stanford.edu) at Stanford University.

## Prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Bower](http://bower.io/#install-bower)
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

Note that the installation of these prerequisites may require the system admin privileges.

## Get the code
Run the command in the terminal. Be creative on your directory name:
~~~
git clone https://github.com/hoch/motw-2015.git MY_DIR
~~~

## Installation
Move into the project directory and run the command:
~~~
cd MY_DIR
./motw_install.sh
~~~

## How to Get Started

Make sure you are in __the project root directory__ before running the following commands.

- Start up the dev server and do your work. Any change in the `src` directory will trigger _the refresh in the browser automatically._
~~~bash
# start development server
gulp dev          
~~~

- When you want to check the actual preview of the web site, build and start the preview server. This will minify all the codes and consolidate the content into `app` directory.
~~~bash
# build site and start preview server
gulp build
gulp preview

# Or simply do both by using the default task
gulp
~~~

## Deployment

Before deploying your project, be sure to create a [GitHub repository](https://help.github.com/articles/create-a-repo/).

- Note that the git configuration __MUST__ be changed to route the deployment to your remote target repository. You only have to do this once with your own `USERNAME` and `MY_REPO`.
~~~bash
# Change remote origin.
git remote set-url origin https://github.com/USERNAME/MY_REPO.git
~~~

- Note that you have to build the application at least once to have the `app` directory ready.
~~~bash
# Build the application and commit/push to master.
gulp build
git commit -am 'initial commit'
git push origin master
~~~

- If you are ready to upload the content, deploy the `app` directory to `gh-pages` branch with the following command. You might have to type your credential. If you're getting errors, consider [change the name of your directory](https://github.com/shinnn/gulp-gh-pages/issues/54).
~~~bash
# Deploy site to gh-pages branch.
$ gulp deploy
~~~

To access the deployed site, open this URL in your browser. Change `USERNAME` and `MY_REPO` accordingly. For example, the deployed site of the current repository is [https://hoch.github.io/motw-2015](https://hoch.github.io/motw-2015).
~~~
open https://USERNAME.github.io/MY_REPO
~~~

## LICENSE

Copyright (c) 2015 Hongchan Choi. The MIT License.