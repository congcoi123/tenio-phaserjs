/*
The MIT License

Copyright (c) 2016-2020 kong <congcoi123@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var Client = {};
Client.socket = new WebSocket("ws://localhost:8033");

Client.askNewPlayer = function(){
    // Randomize user's name to log in
    var u = Math.random().toString(36).substr(2, 5);
    var s = "signature";

    Client.login(u, s);
};

Client.sendClick = function(x,y) {
  var msg = {
    "d": [
        x,
        y    
    ]
  }
  Client.send(msg);
};

Client.send = json => {
  // Guarantee the connection
  if(Client.socket.readyState === WebSocket.OPEN) {
      var buffer = msgpack.encode(json);
      console.log("[SENT] " + JSON.stringify(json));
      Client.socket.send(buffer);
  }
}

Client.login = (u, s) => {
  var msg = {
    "u": u,
    "s": s
  }
  Client.send(msg);
}

Client.addNewplayer = datas => {
    for (var i = 0; i < datas.length; i++) {
        Game.addNewPlayer(datas[i][0],datas[i][1],datas[i][2]);
    }
}

Client.move = data => {
    Game.movePlayer(data[0],data[1],data[2]);
}

Client.disconnect = () => {
  Client.socket.close();
}

Client.socket.onopen = e => {
  // Start to send a log in request
  console.log('Connection to server opened');
  // Send request ...
  // login();
}

Client.socket.onclose = e => {
  console.log("Connection closed");
}

// The messages handler
Client.socket.onmessage = e => {
  // Convert blob data to buffer and decode by msgpack
  var reader = new FileReader();
  reader.readAsArrayBuffer(e.data);
  reader.addEventListener("loadend", evt => {
    // Create an arraybuffer object
    buffer = new Uint8Array(evt.target.result);
    var msg = msgpack.decode(buffer);

    // Show the debugging
    console.log("[RECV] " + JSON.stringify(msg));

    switch (msg["c"]) {
        case "i":
            Client.addNewplayer(msg["d"]);
            break;

        case "m":
            Client.move(msg["d"]);
            break;
    }

  });
}
