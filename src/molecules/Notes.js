import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Note, Callout, IconWrap, StyledInput } from '../atoms/StyledComponents'
import { RowWrap } from '../atoms/StyledContainers'

const Notes = (selectedSong) => {
  const { selectedSong: { notes } } = selectedSong
  const [ newNote, setNewNote ] = useState('')

  const setNote = e => {
    setNewNote(e.target.value)
  }

  return (
    <>
      <Callout>Notes</Callout>
      <ul style={{ textAlign: 'center' }}>
        {notes ? notes.map((note) => (
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
        style={{width: '100%'}}
      />
      </RowWrap>
        
    </>
  )
}

export default Notes
