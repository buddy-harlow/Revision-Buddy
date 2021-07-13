import React, {useState} from 'react'
import styled from 'styled-components'
import {StyledInput, StandardButton, Callout} from './../../atoms/StyledComponents'
import { MdClose } from 'react-icons/md';
import {firestore, storage}  from '../../firebase/firebase.utils'


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



const AddBand = ({showModal, setShowModal}) => {
    const [bandName, setName] = useState('');

    const [fileUrl, setFileUrl] = useState('');

    const onSubmit = () => {
        const db = firestore;
        db.collection('albums').add({bandName: bandName, imgUrl: fileUrl})
        setShowModal(prev => !prev);
    }

    
    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file);
        setFileUrl( await fileRef.getDownloadURL())
        
    }
    
    return (
        <>
        {showModal ? 
        <Background>
            <ModalWrapper>
                <Callout>Add a Project<MdClose onClick={() => setShowModal(prev => !prev)}style={{ float: 'right', cursor: 'pointer'}}/></Callout>

            <StyledInput value={bandName} placeholder="Band Name" onChange={(e) => {setName(e.target.value);
            }}></StyledInput>

            <StyledInput type="file" placeholder="Band Name" onChange={onFileChange}></StyledInput>
            
            <StandardButton onClick={onSubmit} style={{width: '40%'}}>Add Band</StandardButton>
            </ModalWrapper>
        </Background>
        : null}

        </>
    )
}

export default AddBand
