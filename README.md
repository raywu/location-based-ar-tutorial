# Location Based AR Tutorial - AR.js v2.0.x

<img src="https://miro.medium.com/max/2476/1*IymrgzbXR9j7TCqT3GSLNg.png">

This project is forked from [https://github.com/nicolocarpignoli/location-based-ar-tutorial](https://github.com/nicolocarpignoli/location-based-ar-tutorial). These four, basic projects are used on [this tutorial](https://medium.com/chialab-open-source/build-your-location-based-augmented-reality-web-app-c2442e716564) about Location Based Augmented Reality on the Web, using AR.js v2.0.x.

+ dynamic-places: places are added with remote APIs fetch, using Foursquare APIs. Need configuration (client id and client secret)
+ static-on-html: places are added using a static array via script: you have to manually insert valid gps coordinates in order to see places near you
+ static-places: places are added using JS
+ only-html: add one (ore more) place using only a single HTML file. Needs manual addition of valid coordinates.

This project is primarily extending `static-places`.

## AFrame GIF Shader

<img src="https://github.com/mayognaise/aframe-gif-shader/blob/95f9f7ddd01a247cf07afac583934bb79aafaeff/example.gif">

+ Import this library [https://github.com/mayognaise/aframe-gif-shader](https://github.com/mayognaise/aframe-gif-shader)

## Run server

+ Verify that Node.js is installed. If you see anything when you run which npm in a terminal, it is. If not, follow the instructions at nodejs.org to install.
+ Install live-server: `npm install -g live-server`
+ Install live-server-https: `npm install -g live-server-https`
+ Move your terminal to where your pages live: `cd <path-to-content>`
+ Start the server: `live-server --https=<path_to_npm_node_module/live-server-https>` at root
+ Open localhost:8080 in a browser.
+ Download ngrok, authenticate, then run `./ngrok http https://localhost:8080` (assuming port 8080 in `.live-server.json` config)

### live-server config
+ add `.live-server.json` to root

```
    var liveServer = require("live-server");

    var params = {
        port: 8080, // Set the server port. Defaults to 8080.
        host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
        root: "/public", // Set root directory that's being served. Defaults to cwd.
        open: true, // When false, it won't load your browser by default.
        ignore: 'scss,my/templates', // comma-separated string for paths to ignore
        file: "ar.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
        wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
        mount: [['/components', './node_modules']], // Mount a directory to a route.
        logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
        middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
    };
    liveServer.start(params);
```

# Demo

+ [static-places](https://raywu.github.io/location-based-ar-tutorial/static-places)
+ [static-on-html](https://raywu.github.io/location-based-ar-tutorial/static-on-html)
+ [v3](https://raywu.github.io/location-based-ar-tutorial/v3)
+ [dynamic-places (FourSquare)](https://raywu.github.io/location-based-ar-tutorial/dynamic-places)