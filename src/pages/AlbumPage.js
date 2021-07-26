import React, { useEffect, useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import { Header, Callout } from '../atoms/StyledComponents'
import { GeneralContainer, RowContainer, TwoColumn } from '../atoms/StyledContainers'
import { firestore } from '../firebase/firebase.utils'
import AudioPlayer from '../molecules/AudioPlayer/AudioPlayer'
import Notes from '../molecules/Notes'

const AlbumPage = ({ match: { params: { id, uid } } }) => {
  const [songs, setSongs] = useState([])
  const [album, setAlbum] = useState({})
  const [selectedSong, setSelectedSong] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const db = firestore

      const data = await db.collection(uid).doc(id)
      data.get().then((doc) => {
        if (doc.exists) {
          setAlbum(doc.data())
          setSongs(doc.data().songs)
          
        } else {
          console.log('Try again bud')
        }
      })
    }
    fetchData()
    
  }, )

  return (
    <>
    <GeneralContainer>
        <Header>{album.bandName}</Header>
      <RowContainer>
      <TwoColumn>
      {songs.map((song) => (<Callout style={{ cursor: 'pointer' }} onClick={() => setSelectedSong(song)}>{song.title}</Callout>))}
      </TwoColumn>
      <TwoColumn>
        <Notes notes={}></Notes>
      </TwoColumn>
      </RowContainer>
    <AudioPlayer selectedSong={selectedSong} />
    </GeneralContainer>
  
    </>
  )
}

export default AlbumPage
