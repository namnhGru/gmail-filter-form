import React from "react";

class InputSelect extends React.Component {
    constructor(props) {
        super(props)
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }
    handleSelectChange(e) {
        this.props.handleSelectChange(e.target.value)
    }

    render() {
        return ( 
            <span>
                {this.props.label ? <span><label>{this.props.label}</label></span> : <span></span>}
                <span>
                    <select type="text" onChange={this.handleSelectChange}>
                    {this.props.options.map(option => <option value={option.value}>{option.label}</option> )}
                    </select>
                </span>
            </span>
        )
    }
}

export default InputSelect