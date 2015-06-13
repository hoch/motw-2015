# MOTW: Starter Kit

This repository is a stater kit for Musicking on the Web workshop. The MOTW workshop 2015 is hosted by [Google Campus Seoul](https://www.campus.co/seoul/ko) between 7/8 ~ 7/10.

## Prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Bower](http://bower.io/#install-bower)
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Get the code
~~~
$ git clone https://github.com/hoch/motw-2015.git
~~~

## Installation
Move into the project directory and run the command:
~~~
$ motw_install.sh
~~~

## How to Get Started

Make sure you are in __the project root directory__ before running the following commands.

- Start up the dev server and do your work. Any change in the `src` directory will trigger _the refresh in the browser automatically._
~~~
$ gulp dev
~~~

- When you want to check the actual preview of the web site, build and start the preview server. This will minify all the codes and consolidate the content into `app` directory.
~~~
$ gulp build
$ gulp preview
~~~

- If you like how it looks on the preview server, deploy the `app` directory to `gh-pages` branch. You might have to type in your credential for the GitHub access.
~~~
$ gulp deploy
~~~

Note that the git configuration __MUST__ be changed to route the deployment to your remote target repository. You only have to do this once.
~~~
$ git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git
~~~

## LICENSE

The MIT License (MIT). Copyright (c) 2015 Hongchan Choi.
