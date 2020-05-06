
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

// Client.socket.on('allplayers',function(data){
//     for(var i = 0; i < data.length; i++){
//         Game.addNewPlayer(data[i].id,data[i].x,data[i].y);
//     }

//     Client.socket.on('move',function(data){
//         Game.movePlayer(data.id,data.x,data.y);
//     });

//     Client.socket.on('remove',function(id){
//         Game.removePlayer(id);
//     });
// });
