<p align="center">
    <a href="#">
        <img src="https://github.com/congcoi123/tenio/blob/master/assets/tenio-github-logo.png">
    </a>
</p>
<p align="center">
    <a href="LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg">
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/last-commit/congcoi123/tenio-phaserjs">
    </a>
    <a href="https://github.com/congcoi123/tenio-phaserjs/issues">
        <img src="https://img.shields.io/github/issues/congcoi123/tenio-phaserjs">
    </a>
    <a href="CONTRIBUTING.md">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
    </a>
    <a href="https://gitter.im/ten-io/community?source=orgpage">
        <img src="https://badges.gitter.im/Join%20Chat.svg">
    </a>
</p>

# TenIO Phaserjs [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=TenIO%20is%20a%20java%20NIO%20based%20server%20specifically%20designed%20for%20multiplayer%20games.%0D%0A&url=https://github.com/congcoi123/tenio%0D%0A&hashtags=tenio,java,gameserver,multiplayer,nio,netty,jetty,msgpack,cocos2dx,unity,libgdx,phaserjs%0D%0A&via=congcoi123)
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
```sh
$ git clone https://github.com/congcoi123/tenio-phaserjs.git
```

## Contributing
Please check out the [contributing guideline](CONTRIBUTING.md) for more details.

## Running the game
For the client, Phaser is included in the code (`js/vendor/phaser.min.js`). You will need [npm](https://www.npmjs.com/) to install the Node.js packages required for the server. To run the server, you'll need to have Node.js installed.

Clone the repository. Inside the newly created directory, run `npm install` to install the Node.js packages listed in `package.json`. Then run `node server.js` to start the server. The server will listen to connections on port `9999`. You can change that behaviour by editing the code. After that, you can access the app by navigating to `http://localhost:9999`.

In the nutshell:
```sh
$ cd tenio-phaserjs
$ npm install
$ node server.js
```

## Other clients
| [<img src="https://github.com/congcoi123/tenio/blob/master/assets/cocos2dx-logo.png" width="150px;"/><br /><sub><b>TenIO Cocos2dx</b></sub>](https://github.com/congcoi123/tenio-cocos2dx)<br /> | [<img src="https://github.com/congcoi123/tenio/blob/master/assets/unity-logo.png" width="150px;"/><br /><sub><b>TenIO Unity</b></sub>](https://github.com/congcoi123/tenio-unity)<br />          | [<img src="https://github.com/congcoi123/tenio/blob/master/assets/libgdx-logo.png" width="150px;"/><br /><sub><b>TenIO Libgdx</b></sub>](https://github.com/congcoi123/tenio-libgdx)<br /> |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## Running
Please start the server in example 7 before running this client.

```txt
|-- example
    |-- example7
    |   |-- TestServerPhaserjs.java
```

> Happy coding !
