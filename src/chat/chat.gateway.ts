import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {


    @WebSocketServer() server; //used to send and recieve events from client

    users: number = 0;
    async handleConnection() {
        // A client has connected
        this.users++;
        // Notify connected clients of current users
        this.server.emit('users', this.users);
        console.log('new client connected=>', this.users);

    }

    async handleDisconnect() {
        // A client has disconnected
        this.users--;
        // Notify connected clients of current users
        this.server.emit('user ', this.users);

        console.log('client disconnected=>', this.users);
    }

    @SubscribeMessage('chat')
    async onChat(client, message) {
        client.broadcast.emit('chat', message);
    }

    @SubscribeMessage('newInvite')
    async OnInvite(client,messageObj) {
        client.broadcast.emit('newInvite', messageObj);
    }
}