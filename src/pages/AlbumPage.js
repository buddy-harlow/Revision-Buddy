import React, { useEffect, useState, useContext } from 'react'
import ProjectsContext from '../context/ProjectsContext'
import { Header, Callout, ImgWrapper } from '../atoms/StyledComponents'
import { RowContainer, TwoColumn } from '../atoms/StyledContainers'
import Player from '../molecules/Player'
import Notes from '../molecules/Notes'

const AlbumPage = ({ match: { params: { id } } }) => {
  const { projects } = useContext(ProjectsContext)
  const [album, setAlbum] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSong, setSelectedSong] = useState(null)


  useEffect(() => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) {               
          setAlbum(projects[i])        
          setIsLoading(false)    
      }
    }

  }, [])

  if(isLoading){
    return(
      <div style={{color: 'white'}}>Should be a delay</div>
    )
  } else {
  return (

    <>
    
      <RowContainer>
        <TwoColumn>
          <Header>{album.bandName}</Header>
          <ImgWrapper>
            <img
              src={album.imgUrl}
              style={{
                height: '200px', width: '200px', display: 'flex', justifyContent: 'center',
              }}
            />
          </ImgWrapper>
          {album.songs.map((song) => (<Callout style={{ cursor: 'pointer' }} onClick={() => { setSelectedSong(song) }}>{song.title}</Callout>))}
        </TwoColumn>
        <TwoColumn>
          { selectedSong !== null && selectedSong !== undefined ? <Notes selectedSong={selectedSong} album={album} /> : <Callout>Choose a Song</Callout>}
        </TwoColumn>
      </RowContainer>
      <Player selectedSong={selectedSong} />
    </>

  )
}
}

export default AlbumPage
