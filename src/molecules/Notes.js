import React, { useState, useContext, useEffect } from 'react'
import { BsPlus } from 'react-icons/bs'
import { firestore } from '../firebase/firebase.utils'
import ProjectsContext from '../context/ProjectsContext'
import UserContext from '../context/UserContext'
import {
  Note, Callout, IconWrap, StyledInput, StandardButton, ButtonContainer,
} from '../atoms/StyledComponents'
import { RowWrap } from '../atoms/StyledContainers'

const Notes = (props) => {
  const { currentUser: { uid }, setCurrentUser } = useContext(UserContext)
  
  const { selectedSong: { notes }, album } = props
  const [newNote, setNewNote] = useState('')

  const setNote = (e) => {
    setNewNote(e.target.value)
  }
  console.log(album)
  const onAdd = () => {
    const db = firestore
    //db.collection(uid).doc(album.id).set({ ...album, bandName })
    const newNotes = [newNote, ...notes]

    setNotes(newNotes)
  }
  return (
  
    <>
      <Callout>Notes</Callout>
      <ul style={{ textAlign: 'center' }}>
        {notes !== undefined ? notes.map((note) => (
          <Note>
            {note.timestamp}
            {' '}
            -
            {' '}
            {note.note}
            {' '}
            -
            {' '}
            {note.username}
          </Note>
        )) : ''}
      </ul>
      <RowWrap>
        <IconWrap><BsPlus /></IconWrap>
        <StyledInput
          placeholder="Add a new Note"
          value={newNote}
          onChange={setNote}
          style={{ width: '100%' }}
        />
        <ButtonContainer>
          <StandardButton onClick={onAdd}>Add</StandardButton>
        </ButtonContainer>
      </RowWrap>

    </>
  )
}


export default Notes
