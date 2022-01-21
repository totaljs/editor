ECHO "[COMPILING]"
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $DIR
uglifyjs editor.js --config-file minify.json -o editor.min@1.js
uglifycss editor.css > editor.min@1.css