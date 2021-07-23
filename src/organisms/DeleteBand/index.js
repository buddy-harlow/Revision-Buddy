import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import PropTypes from 'prop-types'
import { StandardButton, Callout } from '../../atoms/StyledComponents'
import { firestore, storage } from '../../firebase/firebase.utils'

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(256,256,256, 0.3);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
width: 800px;
height: 200px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
padding: 40px;
background: #000;
color: #000;
display: flex;
flex-direction: column;
position: relative;
z-index: 100;
border-radius: 10px;
`

const DeleteBand = (props) => {
  const {
    currentRecord, setShowDeleteModal, setCurrentRecord, showDeleteModal,
  } = props

  const onClose = () => {
    setShowDeleteModal((prev) => !prev)
    setCurrentRecord(null)
  }

  const onDelete = () => {
    const db = firestore
    const imageRef = storage.refFromURL(currentRecord.imgUrl)
    imageRef.delete()
    db.collection('albums').doc(currentRecord.id).delete()

    onClose()
  }

  return (
    <>
      {showDeleteModal
        ? (
          <Background>
            <ModalWrapper>
              <Callout>
                Are you sure you want to delete
                {currentRecord.bandName}
                ?
                <MdClose onClick={onClose} style={{ float: 'right', cursor: 'pointer' }} />
              </Callout>

              <StandardButton onClick={onDelete} style={{ width: '40%' }}>Delete Band</StandardButton>
            </ModalWrapper>
          </Background>
        )
        : null}

    </>
  )
}

DeleteBand.propTypes = {
  currentRecord: PropTypes.shape({
    imgUrl: PropTypes.string,
    id: PropTypes.string,
    bandName: PropTypes.string,
  }).isRequired,
  setShowDeleteModal: PropTypes.func.isRequired,
  setCurrentRecord: PropTypes.func.isRequired,
  showDeleteModal: PropTypes.bool.isRequired,
}
export default DeleteBand
