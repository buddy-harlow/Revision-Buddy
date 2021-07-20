import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { StyledInput, StandardButton, Callout } from '../../atoms/StyledComponents'
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
  const onDelete = () => {
    const db = firestore
    const imageRef = storage.refFromURL(props.currentRecord.imgUrl)
    imageRef.delete()
    db.collection('albums').doc(props.currentRecord.id).delete()
    console.log(props.currentRecord.id)

    onClose()
  }

  const onClose = () => {
    props.setShowDeleteModal((prev) => !prev)
    props.setCurrentRecord(null)
  }

  return (
    <>
      {props.showDeleteModal
        ? (
          <Background>
            <ModalWrapper>
              <Callout>
                Are you sure you want to delete
                {props.currentRecord.bandName}
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

export default DeleteBand
