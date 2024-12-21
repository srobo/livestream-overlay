# SRComp Livestream Overlay

A HTML and JavaScript overlay for the livestream of the competition.

## Usage

Install dependencies: `npm install`

Build: `npm run build`

Copy `settings.example.js` to `settings.js`

Edit the `settings.js` with the appropriate `srcomp` settings.

Serve the files with any webserver, for example: `python3 -m http.server`, and
then view the resulting pages in your web browser.

Use chroma-key with your streaming software. The chroma-key colour is `#ff6600`.
