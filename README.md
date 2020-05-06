# TenIO Phaserjs
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/congcoi123/tenio-phaserjs)](#)
[![GitHub issues](https://img.shields.io/github/issues/congcoi123/tenio-phaserjs)](https://github.com/congcoi123/tenio-phaserjs/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

This is a client of [TenIO](https://github.com/congcoi123/tenio) project base on Phaserjs.

## Features
- It's used to simulator the communication between the client and its server via WebSocket.

## First glimpse
![Simple Movement Simulation](https://github.com/TenMei/tenio/blob/master/assets/simple-movement-ws-7.gif)

## Wiki
The [wiki](https://github.com/TenMei/tenio-js/wiki) provides implementation level details and answers to general questions.

## Dependencies
- jquery.min.js
- msgpack.min.js
- bootstrap.min.css
- bootstrap-theme.min.css
- phaser.min.js

## License
This project is currently available under the [MIT](LICENSE) License.

## Installation
You can get the sources:
```
git clone https://github.com/congcoi123/tenio-phaserjs.git
```

## Running the game
For the client, Phaser is included in the code (`js/vendor/phaser.min.js`). You will need [npm](https://www.npmjs.com/) to install the Node.js packages required for the server. To run the server, you'll need to have Node.js installed.

Clone the repository. Inside the newly created directory, run `npm install` to install the Node.js packages listed in `package.json`. Then run `node server.js` to start the server. The server will listen to connections on port `9999`.
You can change that behaviour by editing the code.
You can access the app by navigating to `http://localhost:9999`.

## Other clients
- [TenIO Cocos2dx](https://github.com/congcoi123/tenio-cocos2dx.git)
- [TenIO Libgdx](https://github.com/congcoi123/tenio-libgdx.git)
- [TenIO Unity](https://github.com/congcoi123/tenio-unity.git)

## Running
Please start the server in example 7 before running this client.

```txt
|-- example
    |-- example7
    |   |-- TestServerPhaserjs.java
```

> Happy coding !
