import React, { useEffect, useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import { GridContainer, GeneralContainer, BlackBackground } from '../atoms/StyledContainers'
import { firestore } from '../firebase/firebase.utils'
import { Header, StandardButton, ButtonContainer } from '../atoms/StyledComponents'
import Record from '../molecules/Record'
import AddBand from '../organisms/AddBand'

import DeleteBand from '../organisms/DeleteBand'

const EngineerPage = () => {
  const { currentUser: {uid}, setCurrentUser } = useContext(UserContext)
  const [albums, setAlbums] = useState([])
  const [showBandModal, setShowBandModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)
  console.log(uid)
  const openBandModal = () => {
    setShowBandModal((prev) => !prev)
  }

  const onDelete = (album) => {
    setCurrentProject(album)
    setShowDeleteModal((prev) => !prev)
  }

  useEffect(() => {
    const fetchData = async () => {
      const db = firestore
      const data = await db.collection(uid).get()
      setAlbums(data.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id }),
      )
        .sort((a, b) => ((a.bandName > b.bandName) ? 1 : -1)))
    }
    fetchData()
  }, [showBandModal, showDeleteModal])

  return (
    <>
      <GeneralContainer>
        <Header>Projects</Header>
        <ButtonContainer>
          <StandardButton onClick={openBandModal}>Add a Project</StandardButton>
        </ButtonContainer>
        <AddBand showBandModal={showBandModal} setShowBandModal={setShowBandModal} />
        <DeleteBand
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      </GeneralContainer>
      <BlackBackground>
        <GridContainer>
          {albums.map((album) => (

            <Record
              bandName={album.bandName}
              imgUrl={album.imgUrl}
              id={album.id}
              album={album}
              showDeleteModal={showDeleteModal}
              setShowDeleteModal={setShowDeleteModal}
              onDelete={onDelete}
              currentRecord={currentProject}
              setCurrentRecord={setCurrentProject}
            />

          ))}
        </GridContainer>
      </BlackBackground>

    </>
  )
}

export default EngineerPage
