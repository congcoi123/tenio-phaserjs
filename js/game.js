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

var Game = {};

Game.init = () => {
    game.stage.disableVisibilityChange = true;
}

Game.preload = () => {
    game.load.tilemap('map', 'assets/map/example_map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet('tileset', 'assets/map/tilesheet.png', 32, 32);
    game.load.image('sprite','assets/sprites/sprite.png');
}

Game.create = () => {
    Game.__players = {};
    
    var map = game.add.tilemap('map');
    // tilesheet is the key of the tileset in map's JSON file
    map.addTilesetImage('tilesheet', 'tileset');

    var layer;
    for(var i = 0; i < map.layers.length; i++) {
        layer = map.createLayer(i);
    }
    // Allows clicking on the map ; it's enough to do it on the last layer
    layer.inputEnabled = true;
    layer.events.onInputUp.add(Game.getCoordinates, this);

    Client.login();
}

Game.getCoordinates = (layer, pointer) => {
    Client.sendCoordinates(pointer.worldX, pointer.worldY);
}

Game.addNewPlayer = (username, x, y) => {
    if (!Game.__checkPlayerExists(username, Game.__players)) {
        Game.__players[username] = game.add.sprite(x,y,'sprite');
    }    
}

Game.movePlayer = (username, x, y) => {
    var player = Game.__players[username];
    var distance = Phaser.Math.distance(player.x, player.y, x, y);
    var tween = game.add.tween(player);
    var duration = distance * 10;

    tween.to({
        x: x,
        y: y
    }, duration);

    tween.start();
}

Game.removePlayer = (username) => {
    Game.__players[username].destroy();
    delete Game.__players[username];
}

Game.__checkPlayerExists = (key, search) => {
    if (!search || (search.constructor !== Array && search.constructor !== Object)) {
        return false;
    }
    for (var i = 0; i < search.length; i++) {
        if (search[i] === key) {
            return true;
        }
    }
    return key in search;
}
