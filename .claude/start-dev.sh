#!/bin/bash
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
cd /Users/moritz/Desktop/karten-tricks.de/website
exec /opt/homebrew/bin/node node_modules/.bin/next dev --port "$PORT"
