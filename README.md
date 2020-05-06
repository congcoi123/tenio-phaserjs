# TenIO JavaScript

This is a client of [TenIO](https://github.com/congcoi123/tenio) project base on Phaserjs.

## Features
- It's used to simulator the communication between the client and its server via WebSocket.

## First glimpse
![Simple Communication](https://github.com/TenMei/tenio/blob/master/assets/login-example-ws-1.gif)

## Wiki
The [wiki](https://github.com/TenMei/tenio-js/wiki) provides implementation level details and answers to general questions.

## Dependencies
- jquery.min.js
- msgpack.min.js
- bootstrap.min.css
- bootstrap-theme.min.css

## License
This project is currently available under the [MIT](LICENSE) License.

## Installation
You can get the sources:
```
git clone https://github.com/congcoi123/tenio-phaserjs.git
```

## Running the game
For the client, Phaser is included in the code (`js/vendor/phaser.min.js`). You will need [npm](https://www.npmjs.com/) to install the Node.js packages required for the server. To run the server, you'll need to have Node.js installed.

Clone the repository. Inside the newly created directory, run `npm install` to install the Node.js packages listed in `package.json`. Then run `node server.js` to start the server. The server will listen to connections on port `8081`.
You can change that behaviour by editing the code.
You can access the app by navigating to `http://localhost:8081`.

## Other clients
- [TenIOLibgdx](https://github.com/TenMei/tenio-libgdx.git)
- [TenIOCocos2dx](https://github.com/TenMei/tenio-cocos2dx.git)

## Running
Please start the server in example 1 before running this client.
![Running](https://github.com/TenMei/tenio/blob/master/assets/tenio-examples.png)

> Happy coding !
