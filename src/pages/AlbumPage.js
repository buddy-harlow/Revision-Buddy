import React, { useEffect, useState } from 'react'
import { Header, Callout } from '../atoms/StyledComponents'
import { GeneralContainer, SingleColumn } from '../atoms/StyledContainers'
import { firestore } from '../firebase/firebase.utils'
import AudioPlayer from '../molecules/AudioPlayer/AudioPlayer'

const AlbumPage = ({ match: { params: { id } } }) => {
  const [songs, setSongs] = useState([])
  const [album, setAlbum] = useState({})
  const [selectedSong, setSelectedSong] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const db = firestore

      const data = await db.collection('albums').doc(id)
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
  }, [])

  return (
    <GeneralContainer>
      <SingleColumn>
        <Header>{album.bandName}</Header>
        {songs.map((song) => (<Callout style={{ cursor: 'pointer' }} onClick={() => setSelectedSong(song.fileUrl)}>{song.name}</Callout>))}
        <AudioPlayer selectedSong={selectedSong} />
      </SingleColumn>
    </GeneralContainer>

  )
}

export default AlbumPage
