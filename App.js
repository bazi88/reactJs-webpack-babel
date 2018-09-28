import React from "react";

import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';

import { locator, tokenUrl } from './configs'

const tokenProvider = new Chatkit.TokenProvider({
    url: tokenUrl
});

class App extends React.Component {
    componentWillMount() {

    }
    constructor() {
        super();
        this.res = [];
        this.state = {
            messages: [],
            joinableRooms: [],
            joinedRooms: [],
            roomId: null
        }

        this.sendMessage = this.sendMessage.bind(this);
        this.johnRoom = this.johnRoom.bind(this);
        this.subscribeToRoom = this.subscribeToRoom.bind(this);
        this.createRoom = this.createRoom.bind(this);
    }
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: locator,
            userId: "quan",
            tokenProvider: tokenProvider
        });
        chatManager
            .connect()
            .then(currentUser => {
                this.currentUser = currentUser;
                this.getRooms();
            })
            .catch(error => {
                console.error("error:", error);
            });
    }
    getRooms() {
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                console.log(joinableRooms);
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })
    }
    subscribeToRoom(roomId) {
        console.log('subscribeToRoom', roomId);
        this.setState({ messages: [] })
        //show all message
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    console.log(message);
                    this.setState({ messages: [...this.state.messages, message] });
                }
            }
        })
            .then(room => {
                this.setState({
                    roomId: room.id
                })
                this.getRooms()
            });
        console.log('this state subscribeToRoom', this.state.roomId);
    }

    sendMessage(message) {
        console.log('this is sendMess', this.state.roomId);
        console.log(this.state.roomId);
        console.log(message);
        this.currentUser.sendMessage({
            text: message,
            roomId: this.state.roomId
        });
    }

    johnRoom(roomId) {
        this.currentUser.joinRoom({ roomId: roomId })
            .then(room => {
                console.log(`Joined room with ID: ${room.id}`)
            })
            .catch(err => {
                console.log(`Error joining room ${someRoomID}: ${err}`)
            })
    }

    createRoom(name) {
        this.currentUser.createRoom({
            name,
            private: false,
        })
            .then(room => {
                console.log(room)
                this.setState({
                    joinableRooms: [...this.state.joinableRooms, room]
                });
                console.log('create Room', room.id);
                this.subscribeToRoom(room.id)
            })
            .catch(err => console.log('error with createRoom: ', err))
    }

    render() {
        return (
            <div className="app">
                <RoomList roomId={this.state.roomId} subscribeToRoom={this.subscribeToRoom} rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} johnRoom={this.johnRoom} />
                <MessageList messages={this.state.messages} />
                <NewRoomForm createRoom={this.createRoom} />
                <SendMessageForm sendMessage={this.sendMessage} />
            </div>
        )
    }
}
export default App;