import React, { useState } from 'react';
import { Callout } from '../atoms/StyledComponents';
import { MdDelete } from 'react-icons/md';
import DeleteBand from './../organisms/DeleteBand';

const Record = (props) => {
  const { bandName, imgUrl } = props.album;

  const onDelete = () => {
    props.setCurrentRecord(props.album);
    props.setShowDeleteModal(prev => !prev);
  };

  return (
    <div style={{ width: '300px', height: '500px' }}>
      <img src={imgUrl} alt={bandName} style={{ height: '300px', width: '300px', objectFit: 'cover' }}></img>
      <Callout style={{ textAlign: 'center', paddingTop: '10px' }}>{bandName}
        <MdDelete onClick={onDelete} style={{ cursor: 'pointer', float: 'right', width: '10%', color: '#ADD8E6' }}></MdDelete>
      </Callout>
    </div>
  );
};

export default Record;
