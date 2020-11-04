import React, { useState, useEffect } from 'react';

function ProfileStatusF(props) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const handlerOnClick = () => {
    setEditMode(true);
  };
  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={handlerOnClick}>{props.status || 'Add Status yo'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
}

export default ProfileStatusF;
