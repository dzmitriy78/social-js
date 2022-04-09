import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode=() =>{
        this.setState({editMode: true, status: ""})
    }

    deactivateEditMode=() =>{
        this.setState({editMode: false})
        this.props.updateStatus (this.state.status)
    }
    onStatusChange = (e)=> {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {

        return (
            <div>
                {!this.state.editMode
                    ? <div style={{marginLeft: 10, fontSize: 30, color:"green", fontStyle: "italic"}}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;