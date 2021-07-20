import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { Callout } from '../atoms/StyledComponents'
import DeleteBand from '../organisms/DeleteBand'

const Record = (props) => {
  const { bandName, imgUrl } = props.album

  const onDelete = () => {
    props.setCurrentRecord(props.album)
    props.setShowDeleteModal((prev) => !prev)
  }

  return (
    <div style={{ width: '300px', height: '500px' }}>
      <img src={imgUrl} alt={bandName} style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
      <Callout style={{ textAlign: 'center', paddingTop: '10px' }}>
        {bandName}
        <MdDelete
          onClick={onDelete}
          style={{
            cursor: 'pointer', float: 'right', width: '10%', color: '#ADD8E6',
          }}
        />
      </Callout>
    </div>
  )
}

export default Record
