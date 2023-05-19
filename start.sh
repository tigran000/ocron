#!/bin/bash
# load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# use the version from .nvmrc
nvm use
# start the app
yarn start