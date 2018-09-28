import React from "react";

class NewRoomForm extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            room: ""
        };
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({
            room: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        this.props.createRoom(this.state.room)
        this.setState({
            room: ""
        })
    }
    render() {
        return (
            <div className="new-room-form">
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Create new room" onChange={this.handleChange} value={this.room}></input>
                    <button type="submit">+</button>
                </form>
            </div>
        );
    }
}
export default NewRoomForm;