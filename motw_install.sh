#!/bin/bash

# Colors
LGR='\033[1;32m'
WHT='\033[1;37m'

# Check prerequisites
command -v git >/dev/null 2>&1 || { echo >&2 "git is not installed!!"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo >&2 "Node is not installed!!"; exit 1; }
command -v bower >/dev/null 2>&1 || { echo >&2 "Bower is not installed!!"; exit 1; }
command -v gulp >/dev/null 2>&1 || { echo >&2 "Gulp is not installed!!"; exit 1; }
printf "${LGR}[MOTW-STARTER-KIT] ${WHT}Pre-install check passed!\n"

# Installation
# TODO: error handling.
printf "${LGR}[MOTW-STARTER-KIT] ${WHT}Installing:\n"
printf "  + installing Node modules...\n"
npm install > motw_install.log
printf "  + installing Bower components...\n"
pushd src >> ../motw_install.log
bower install >> ../motw_install.log
popd >> ../motw_install.log

# Finish
printf "${LGR}[MOTW-STARTER-KIT] ${WHT}Done!\n"