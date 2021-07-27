import React, { useContext } from 'react'
import { MdDelete } from 'react-icons/md'
import { Link as LinkR } from 'react-router-dom'
import { Callout } from '../atoms/StyledComponents'
import UserContext from '../context/UserContext'

const Record = (props) => {
  const { album: { bandName, imgUrl, id }, setCurrentRecord, setShowDeleteModal } = props

  const onDelete = () => {
    setCurrentRecord(props.album)
    setShowDeleteModal((prev) => !prev)
  }

  return (
    <div style={{ width: '300px', height: '500px' }}>
      <LinkR to={`/album/${id}`}>
        <img src={imgUrl} alt={bandName} style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
      </LinkR>
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
