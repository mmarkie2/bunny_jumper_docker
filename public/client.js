var socket = io.connect("http://localhost:4000/");


let game
let lobby;
let isPlayerCreated = false;
let isClientLobbyOwner=false;
function createPlayer() {
    if (isPlayerCreated === false) {
        let lobbyId = document.getElementById("lobbyId").value;
        socket.on("playerCreated", () => {
            isPlayerCreated = true;
            displayGameTypeMenu();
        })
        socket.emit("createPlayerRequest", document.getElementById("nick").value);

        socket.emit("joinLobbyRequest", lobbyId);
    }

}

document.getElementById("createPlayer").onclick = () => {


    createPlayer();
};

socket.on("lobbyInit", (inviteUrl) => {
    lobby = Lobby.clientConstructor(inviteUrl, socket,isClientLobbyOwner);

});

function displayGameTypeMenu() {
    $("#menu").empty()
    $("#menu").append("<button id=\"createLobby\"> create lobby</button>");
    document.getElementById("createLobby").onclick = () => {


        socket.emit("createLobbyRequest");
         isClientLobbyOwner=true;
    };
}


