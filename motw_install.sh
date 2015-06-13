#!/bin/bash

# Colors
LGR='\033[1;32m'
WHT='\033[1;37m'

# Check prerequisites
command -v git >/dev/null 2>&1 || { echo >&2 "git is not installed!!"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo >&2 "Node is not installed!!"; exit 1; }
command -v bower >/dev/null 2>&1 || { echo >&2 "Bower is not installed!!"; exit 1; }
printf "${LGR}[MOTW-BP] ${WHT}Pre-install check passed!\n"

# Installation
printf "${LGR}[MOTW-BP] ${WHT}Installing:\n"
printf "  + installing Node modules...\n"
npm install > log_motw_install
printf "  + installing Bower components...\n"
pushd src >> ../log_motw_install
bower install >> ../log_motw_install
popd >> ../log_motw_install
printf "${LGR}[MOTW-BP] ${WHT}Done!\n"