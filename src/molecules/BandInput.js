import React, { useState } from 'react'
import { firestore } from '../firebase/firebase.utils'
import {
  ButtonContainer, StandardButton, ButtonsSideBySide, StyledInput,
} from '../atoms/StyledComponents'

const BandInput = ({ album }) => {
  const [bandName, setName] = useState(album.bandName)

  const onUpdate = () => {
    const db = firestore
    db.collection('albums').doc(album.id).set({ ...album, bandName })
  }

  const onDelete = () => {
    const db = firestore
    db.collection('albums').doc(album.id).delete()
  }

  return (
    <>
      <StyledInput
        value={bandName}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <ButtonsSideBySide>
        <ButtonContainer>
          <StandardButton onClick={onUpdate}>Update</StandardButton>
        </ButtonContainer>
        <ButtonContainer>
          <StandardButton onClick={onDelete}>Delete</StandardButton>
        </ButtonContainer>
      </ButtonsSideBySide>
    </>
  )
}

export default BandInput
