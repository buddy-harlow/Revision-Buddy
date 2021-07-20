import React, { useState } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { StyledInput, StandardButton, Callout } from '../../atoms/StyledComponents'
import { firestore, storage } from '../../firebase/firebase.utils'
import spinner from '../../atoms/spinner.gif'

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
height: 500px;
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

const AddBand = ({ showBandModal, setShowBandModal }) => {
  const [bandName, setName] = useState('')

  const [fileUrl, setFileUrl] = useState('')
  const [loading, setLoading] = useState(true)

  const onSubmit = async () => {
    const db = firestore
    if (!fileUrl) {
      return
    }
    db.collection('albums').add({ bandName, imgUrl: fileUrl })
    setShowBandModal((prev) => !prev)
    setFileUrl('')
    setName('')
    setLoading(true)
  }

  const onFileChange = async (e) => {
    const file = e.target.files[0]

    const storageRef = storage.ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())

    await setLoading(false)
    console.log(loading)
  }

  const onClose = () => {
    setShowBandModal((prev) => !prev)
    setName('')
  }

  return (
    <>
      {showBandModal
        ? (
          <Background>
            <ModalWrapper>
              <Callout>
                Add a Project
                <MdClose onClick={onClose} style={{ float: 'right', cursor: 'pointer' }} />
              </Callout>

              <StyledInput
                value={bandName}
                placeholder="Band Name"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />

              <StyledInput type="file" placeholder="Band Name" onChange={onFileChange} />

              {loading
                ? <StandardButton onClick={onSubmit} style={{ width: '40%', color: '#86A7B3' }} disabled>Add Band</StandardButton>
                : <StandardButton onClick={onSubmit} style={{ width: '40%' }}>Add Band</StandardButton>}
            </ModalWrapper>
          </Background>
        )
        : null}

    </>
  )
}

export default AddBand
