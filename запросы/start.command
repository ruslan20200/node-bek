#!/bin/zsh
cd "$(dirname "$0")" || exit 1
if [[ -x /opt/homebrew/opt/node@22/bin/node ]]; then
    /opt/homebrew/opt/node@22/bin/node server.js
else
    node server.js
fi
