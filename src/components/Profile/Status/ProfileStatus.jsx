import React, { Component } from 'react';

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    console.log(this.state.editMode); //!  editMode === FALSE
    this.setState({
      editMode: true,
    });
    console.log(this.state.editMode); //! editMode  === FALSE
  };
  deactivateEditMode = () => {
    console.log(this.state.editMode); //!  editMode === FALSE
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
    console.log(this.state.editMode); //! editMode  === FALSE
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  //TODO: синхронизираме status
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        state: this.props.status,
      });
    }

    //debugger;
    //let a = this.state;
    // let b= this.props;
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status || 'Add Status'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
