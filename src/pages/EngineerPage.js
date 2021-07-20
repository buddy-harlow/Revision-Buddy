import React, { useEffect, useState } from 'react'

import { GridContainer, GeneralContainer, BlackBackground } from '../atoms/StyledContainers'
import { firestore } from '../firebase/firebase.utils'
import { Header, StandardButton, ButtonContainer } from '../atoms/StyledComponents'
import Record from '../molecules/Record'
import AddBand from '../organisms/AddBand'

import DeleteBand from '../organisms/DeleteBand'

const EngineerPage = () => {
  const [albums, setAlbums] = useState([])
  const [showBandModal, setShowBandModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [currentRecord, setCurrentRecord] = useState(null)

  const openBandModal = () => {
    setShowBandModal((prev) => !prev)
  }

  const onDelete = (album) => {
    setCurrentRecord(album)
    console.log(currentRecord)
    setShowDeleteModal((prev) => !prev)
  }

  useEffect(() => {
    const fetchData = async () => {
      const db = firestore
      const data = await db.collection('albums').get()
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
        <DeleteBand showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} currentRecord={currentRecord} setCurrentRecord={setCurrentRecord} />
      </GeneralContainer>
      <BlackBackground>
        <GridContainer>
          {albums.map((album) => (

            <Record
              bandName={album.bandName}
              imgUrl={album.imgUrl}
              album={album}
              showDeleteModal={showDeleteModal}
              setShowDeleteModal={setShowDeleteModal}
              onDelete={onDelete}
              currentRecord={currentRecord}
              setCurrentRecord={setCurrentRecord}
            />

          ))}
        </GridContainer>
      </BlackBackground>

    </>
  )
}

export default EngineerPage
