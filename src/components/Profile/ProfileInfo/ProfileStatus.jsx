import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        isOwner: this.props.isOwner,
        isAuth: this.props.isAuth
    }

    activateEditMode = () => {
        if (this.props.isAuth && this.props.isOwner) {
            this.setState({editMode: true})
        }
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {

        return (
            <div>
                {
                    !this.state.editMode &&
                    <div style={{marginLeft: 10, fontSize: 30, color: "green", fontStyle: "italic"}}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                    </div>
                }
                {
                    this.state.editMode && <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        );
    };
}

export default ProfileStatus;