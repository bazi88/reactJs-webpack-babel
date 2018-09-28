import React from "react";

class SendMessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "Insert message"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.sendMessage(this.state.value);
        this.setState({
            value: ""
        })
    }
    render() {
        return (
            <div className="send-message">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                </form>
            </div>
        );
    }
}
export default SendMessageForm;