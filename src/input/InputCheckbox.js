import React from "react";

class InputCheckbox extends React.Component {
    constructor(props) {
        super(props)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleCheckboxChange(e) {
        console.log(e.target.checked)
        this.props.handleCheckboxChange(e.target.checked) 
    }
    render() {
        return (
            <span>
                <span><input type="checkbox" onChange={this.handleCheckboxChange}></input></span>
                <span><label>{this.props.label}</label></span>
            </span>

        )
    }
}

export default InputCheckbox