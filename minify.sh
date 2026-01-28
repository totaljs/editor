ECHO "[COMPILING]"
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd $DIR
uglifyjs 1.js --config-file minify.json -o 1.min.js
uglifycss 1.css > 1.min.css
total5 --minify 1.html
node merge.js