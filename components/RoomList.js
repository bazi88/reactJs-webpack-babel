import React from "react";
import ReactDOM from 'react-dom'

class Room extends React.Component {
    render() {
        const orderRoom = [...this.props.rooms].sort((a, b) => a.id - b.id);
        return (
            <div className="list-room-chat">
                <ul className="list-room">
                    {orderRoom.map((room, index) => {
                        const active = this.props.roomId === room.id ? "active" : "";
                        return (
                            <li key={index} onClick={() => { this.props.subscribeToRoom(room.id) }} className={"room" + active}>
                                <a href="#">{room.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Room;