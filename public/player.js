class Player {

    nick
    socket
    id
   keyPressedListenerId
    constructor(nick, socket, id) {
        this.nick = nick;
        this.socket = socket;
        this.id = id;
    }
}

module.exports.Player = Player;