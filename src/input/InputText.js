import React from "react";

class InputText extends React.Component {
    constructor(props) {
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange(e) {
        this.props.handleTextChange(e.target.value)
    }

    render() {
        return (
            <div>
                <span><label>{ this.props.label }</label></span>
                <span><input type="text" onChange={this.handleTextChange} value={this.props.query}></input></span>
            </div>
        )
    }
}
export default InputText;