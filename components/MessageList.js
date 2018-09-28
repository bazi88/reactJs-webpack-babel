import React from "react";

class MessageList extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                        <div className="message" key={index}>
                            <div className="message-senderId">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default MessageList;