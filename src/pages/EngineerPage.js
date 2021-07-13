import React, { useEffect, useState } from 'react'

import {GridContainer, GeneralContainer, BlackBackground} from './../atoms/StyledContainers'
import {firestore}  from '../firebase/firebase.utils'
import { Header, StandardButton, ButtonContainer } from '../atoms/StyledComponents'
import Record from './../molecules/Record'
import AddBand from './../organisms/AddBand'



const EngineerPage = () => {
    const [albums, setAlbums] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    useEffect(() => {
        const fetchData = async () => {
            const db = firestore;
            const data = await db.collection('albums').get()
            setAlbums(data.docs.map(
                doc => ({...doc.data(), id: doc.id}))
                .sort((a, b) => (a.bandName > b.bandName) ? 1 : -1))
 
        }
        fetchData();
        
    }, [showModal])

    return (
        <>
        <GeneralContainer>
            <Header>Projects</Header>
            <ButtonContainer>
            <StandardButton onClick={openModal}>Add a Project</StandardButton>
            </ButtonContainer>
            <AddBand showModal={showModal} setShowModal={setShowModal} />
        </GeneralContainer>
        <BlackBackground>
        <GridContainer>
        {albums.map(album => (
            
            <Record bandName={album.bandName} imgUrl={album.imgUrl} album={album}></Record>
                
        ))}
        </GridContainer>
        </BlackBackground>
        
       
       
        </>
    )
}

export default EngineerPage
